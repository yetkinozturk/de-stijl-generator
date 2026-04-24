(ns de-stijl.draw)

;; ─── Deterministic RNG (LCG) ─────────────────────────────────────────────────

(defn- lcg-step [s]
  (mod (+ (* 1664525 s) 1013904223) 4294967296))

(defn make-rng
  "Returns a stateful RNG seeded by `seed` (float 0–1)."
  [seed]
  (let [state (atom (Math/abs (Math/floor (* seed 1000000))))]
    (fn []
      (swap! state lcg-step)
      (/ @state 4294967296.0))))

(defn rng-int   [rng n]      (Math/floor (* (rng) n)))
(defn rng-pick  [rng v]      (nth v (rng-int rng (count v))))
(defn rng-between [rng lo hi] (+ lo (* (rng) (- hi lo))))

;; ─── Grid construction ───────────────────────────────────────────────────────

(defn build-cuts
  "Divide `size` px into `n` segments with random proportional widths.
   Returns interior cut positions (excludes 0 and size)."
  [rng size n]
  (let [weights (mapv (fn [_] (rng-between rng 0.3 2.0)) (range n))
        total   (reduce + weights)]
    (loop [acc [] pos 0.0 [w & rest] weights]
      (if (nil? w)
        (vec (butlast acc))
        (recur (conj acc (+ pos (/ (* size w) total)))
               (+ pos (/ (* size w) total))
               rest)))))

(defn cuts->cells
  "Converts cut positions → [[start length] …] pairs."
  [cuts size]
  (let [edges (into [0.0] (conj cuts (float size)))]
    (mapv (fn [[a b]] [a (- b a)]) (partition 2 1 edges))))

;; ─── Colour assignment ───────────────────────────────────────────────────────

(defn assign-colors [rng rows cols density bg colors]
  (into {}
    (for [ri (range rows) ci (range cols)]
      [[ri ci]
       (if (< (* (rng) 100.0) density)
         (rng-pick rng colors)
         bg)])))

;; ─── Geometry helpers ────────────────────────────────────────────────────────

(defn- lerp [a b t] (+ a (* t (- b a))))

(defn- apply-center-pull
  "Lerp the rectangle's center toward the canvas center by `t` (0–1).
   Returns new [x y] top-left corner (width/height unchanged)."
  [rx ry rw rh canvas-cx canvas-cy t]
  (let [rect-cx (+ rx (/ rw 2))
        rect-cy (+ ry (/ rh 2))
        new-cx  (lerp rect-cx canvas-cx t)
        new-cy  (lerp rect-cy canvas-cy t)]
    [(- new-cx (/ rw 2))
     (- new-cy (/ rh 2))]))

(defn- deg->rad [d] (* d (/ Math/PI 180.0)))

;; ─── Main draw function ──────────────────────────────────────────────────────

(defn draw!
  "Draw a De Stijl composition onto `ctx`.

   opts:
     :size        — canvas px (square)
     :divisions   — grid complexity hint
     :line-weight — stroke px
     :line-color  — grid line colour string
     :density     — % of cells coloured (0–100)
     :spacing     — inset px between grid line and rect edge
     :center-pull — 0–100, lerp rect centres toward canvas centre
     :tilt        — 0–180, degrees each rect rotates around canvas centre
     :aperture    — 0–100, invisible shrinking frame; any rect touching it is dropped entirely
     :bg          — background colour
     :colors      — vector of fill colour strings
     :loc-seed    — seed for colour assignment
     :prop-seed   — seed for grid structure"
  [ctx {:keys [size divisions line-weight line-color density spacing
               center-pull tilt aperture bg colors loc-seed prop-seed]}]

  (let [loc-rng  (make-rng loc-seed)
        prop-rng (make-rng prop-seed)
        lw       (Math/round (or line-weight 0))
        half-lw  (/ lw 2.0)
        inset    (+ spacing half-lw)

        n-cols   (+ 2 (rng-int prop-rng (- divisions 1)))
        n-rows   (+ 2 (rng-int prop-rng (- divisions 1)))
        x-cuts   (build-cuts prop-rng size n-cols)
        y-cuts   (build-cuts prop-rng size n-rows)
        x-cells  (cuts->cells x-cuts size)
        y-cells  (cuts->cells y-cuts size)

        color-map (assign-colors loc-rng n-rows n-cols density bg (vec colors))

        canvas-cx (/ size 2.0)
        canvas-cy (/ size 2.0)
        pull-t    (/ (or center-pull 0) 100.0)
        tilt-rad  (deg->rad (or tilt 0))

        ;; Aperture: margin that shrinks inward from each edge (0–50% of half-size).
        ;; A rect is kept only if it fits entirely inside [margin, size-margin].
        margin    (* (/ (or aperture 0) 100.0) (/ size 2.0))
        ap-x0     margin
        ap-y0     margin
        ap-x1     (- size margin)
        ap-y1     (- size margin)

        ;; Returns true when the rect [rx ry rw rh] lies fully inside the aperture.
        inside?   (fn [rx ry rw rh]
                    (and (>= rx ap-x0)
                         (>= ry ap-y0)
                         (<= (+ rx rw) ap-x1)
                         (<= (+ ry rh) ap-y1)))]

    ;; — Background —
    (set! (.-fillStyle ctx) bg)
    (.fillRect ctx 0 0 size size)

    ;; — Coloured rectangles —
    (doseq [ri (range n-rows)
            ci (range n-cols)]
      (let [[cx cw] (nth x-cells ci)
            [cy ch] (nth y-cells ri)
            color   (get color-map [ri ci])
            rx0     (+ cx inset)
            ry0     (+ cy inset)
            rw      (- cw (* 2 inset))
            rh      (- ch (* 2 inset))]
        (when (and (pos? rw) (pos? rh))
          (let [[rx ry] (apply-center-pull rx0 ry0 rw rh canvas-cx canvas-cy pull-t)]
            ;; Drop any rect that touches or crosses the aperture boundary.
            (when (inside? rx ry rw rh)
              (set! (.-fillStyle ctx) color)
              (.save ctx)
              (.translate ctx canvas-cx canvas-cy)
              (.rotate ctx tilt-rad)
              (.translate ctx (- canvas-cx) (- canvas-cy))
              (.fillRect ctx rx ry rw rh)
              (.restore ctx))))))

    ;; — Grid lines — (skipped entirely when line-weight is 0)
    (when (pos? lw)
      (set! (.-strokeStyle ctx) (or line-color "#0a0a0a"))
      (set! (.-lineWidth ctx) lw)
      (.save ctx)
      (.translate ctx canvas-cx canvas-cy)
      (.rotate ctx tilt-rad)
      (.translate ctx (- canvas-cx) (- canvas-cy))
      (.beginPath ctx)
      (doseq [x (into [0 size] x-cuts)]
        (.moveTo ctx x 0)
        (.lineTo ctx x size))
      (doseq [y (into [0 size] y-cuts)]
        (.moveTo ctx 0 y)
        (.lineTo ctx size y))
      (.stroke ctx)
      (.restore ctx))))
