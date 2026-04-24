(ns de-stijl.ui
  (:require [de-stijl.draw  :as draw]
            [de-stijl.state :as state]))

;; ─── Helpers ─────────────────────────────────────────────────────────────────

(defn by-id [id] (.getElementById js/document id))

(defn set-text! [id txt]
  (set! (.-textContent (by-id id)) txt))

(defn el
  "Create a DOM element with optional attrs map and children."
  ([tag] (el tag {} []))
  ([tag attrs] (el tag attrs []))
  ([tag attrs children]
   (let [node (.createElement js/document tag)]
     (doseq [[k v] attrs]
       (case k
         :class      (set! (.-className node) v)
         :style      (set! (.-cssText (.-style node)) v)
         :title      (.setAttribute node "title" v)
         :type       (.setAttribute node "type" v)
         :value      (set! (.-value node) v)
         :min        (.setAttribute node "min" v)
         :max        (.setAttribute node "max" v)
         :step       (.setAttribute node "step" v)
         :data-color (.setAttribute node "data-color" v)
         nil))
     (doseq [child children]
       (if (string? child)
         (.appendChild node (.createTextNode js/document child))
         (.appendChild node child)))
     node)))

(defn on! [node event f]
  (.addEventListener node event f)
  node)

;; ─── Canvas ──────────────────────────────────────────────────────────────────

(def ^:private canvas-size 700)

(defn- get-canvas [] (by-id "canvas"))
(defn- get-ctx []    (.getContext (get-canvas) "2d"))

(defn render! []
  (let [s @state/app-state]
    (draw/draw! (get-ctx) (assoc s :size canvas-size))))

;; ─── Generic swatch builder ──────────────────────────────────────────────────
;;
;; Both bg and line-color use the same shared `state/swatches` palette.
;; `container-id` scopes the active-class queries so the two groups
;; don't interfere with each other.

(defn- build-swatches!
  "Render colour swatches into `container-id`.
   `state-key`    — which key in app-state to update (:bg or :line-color)
   `container-id` — id of the wrapping div"
  [container-id state-key]
  (let [container (by-id container-id)]
    (set! (.-innerHTML container) "")
    (doseq [color state/swatches]
      (let [active?  (= color (get @state/app-state state-key))
            swatch   (el "div"
                         {:class      (str "bg-swatch" (when active? " active"))
                          :style      (str "background:" color)
                          :data-color color})]
        (on! swatch "click"
             (fn []
               (swap! state/app-state assoc state-key color)
               (doseq [s (.querySelectorAll container ".bg-swatch")]
                 (.remove (.-classList s) "active"))
               (.add (.-classList swatch) "active")
               (render!)))
        (.appendChild container swatch)))))

;; ─── Palette editor ──────────────────────────────────────────────────────────

(defn- next-suggestion []
  (let [current (set (:colors @state/app-state))]
    (or (first (remove current state/palette-suggestions)) "#888888")))

(defn- render-palette! []
  (let [list-el (by-id "palette-list")]
    (set! (.-innerHTML list-el) "")
    (doall
      (map-indexed
        (fn [i color]
          (let [slot  (el "div" {:class "color-slot" :style (str "background:" color)})
                inp   (el "input" {:type "color" :value color})
                label (el "span" {:class "color-label"} [color])
                rm    (el "button" {:class "color-remove" :title "Remove"} ["×"])
                row   (el "div" {:class "palette-row"})]
            (on! inp "input"
                 (fn [e]
                   (let [v (.. e -target -value)]
                     (swap! state/app-state update :colors assoc i v)
                     (set! (.-background (.-style slot)) v)
                     (set! (.-textContent label) v)
                     (render!))))
            (on! rm "click"
                 (fn []
                   (swap! state/app-state update :colors
                          (fn [cs] (vec (keep-indexed #(when (not= %1 i) %2) cs))))
                   (render-palette!)
                   (render!)))
            (.appendChild slot inp)
            (doseq [child [slot label rm]] (.appendChild row child))
            (.appendChild list-el row)))
        (:colors @state/app-state)))))

;; ─── Presets ─────────────────────────────────────────────────────────────────

(defn- build-presets! []
  (let [container (by-id "presets")]
    (set! (.-innerHTML container) "")
    (doseq [{:keys [name bg colors]} state/presets]
      (let [dots (el "div" {:class "preset-dots"})
            lbl  (el "span" {} [name])
            btn  (el "button" {:class "preset-btn"})]
        (doseq [c (take 4 colors)]
          (.appendChild dots (el "div" {:class "preset-dot"
                                        :style (str "background:" c)})))
        (.appendChild btn dots)
        (.appendChild btn lbl)
        (on! btn "click"
             (fn []
               (swap! state/app-state assoc :bg bg :colors (vec colors))
               (build-swatches! "bg-swatches" :bg)
               (render-palette!)
               (render!)))
        (.appendChild container btn)))))

;; ─── Sliders ─────────────────────────────────────────────────────────────────

(defn- wire-slider! [id state-key display-id]
  (on! (by-id id) "input"
       (fn [e]
         (let [v (js/parseFloat (.. e -target -value))]
           (swap! state/app-state assoc state-key v)
           (set-text! display-id (str v))
           (render!)))))

;; ─── Buttons ─────────────────────────────────────────────────────────────────

(defn- wire-buttons! []
  (on! (by-id "btn-add-color") "click"
       (fn []
         (swap! state/app-state update :colors conj (next-suggestion))
         (render-palette!)
         (render!)))

  (on! (by-id "btn-locations") "click"
       (fn []
         (swap! state/app-state assoc :loc-seed (js/Math.random))
         (render!)))

  (on! (by-id "btn-proportions") "click"
       (fn []
         (swap! state/app-state assoc :prop-seed (js/Math.random))
         (render!)))

  (on! (by-id "btn-generate") "click"
       (fn []
         (swap! state/app-state assoc
                :loc-seed  (js/Math.random)
                :prop-seed (js/Math.random))
         (render!)))

  (on! (by-id "btn-save") "click"
       (fn []
         ;; Render to an offscreen canvas at the chosen scale factor,
         ;; then trigger a PNG download. The on-screen canvas stays at 700px.
         (let [scale      (js/parseInt (.. (by-id "select-resolution") -value))
               hi-size    (* canvas-size scale)
               off-canvas (.createElement js/document "canvas")
               off-ctx    (.getContext off-canvas "2d")]
           (set! (.-width  off-canvas) hi-size)
           (set! (.-height off-canvas) hi-size)
           ;; Scale the context so draw! coordinates stay identical
           (.scale off-ctx scale scale)
           (draw/draw! off-ctx (assoc @state/app-state :size canvas-size))
           (let [link (.createElement js/document "a")]
             (set! (.-download link)
                   (str "de-stijl-" hi-size "px-" (.now js/Date) ".png"))
             (set! (.-href link) (.toDataURL off-canvas "image/png"))
             (.click link))))))

;; ─── Animation ───────────────────────────────────────────────────────────────
;;
;; A single setTimeout fires every N seconds (from the slider, 1–30).
;; Each tick calls next-generation! which picks new seeds, then renders once.
;;
;; next-generation! runs in two levels:
;;   — within a run of 10 generations, seeds nudge slightly (±small delta)
;;     around a fixed macro anchor, so images stay related to each other.
;;   — after 10 generations a new random macro anchor is chosen,
;;     giving a fresh departure every ~10 images.

(defn- rand-seed [] (js/Math.random))

(defn- small-delta
  "A small random offset in [-max, max], used to nudge seeds slightly
   each generation so changes feel organic rather than random."
  [max]
  (- (* (js/Math.random) 2 max) max))

(defonce ^:private anim-state
  (atom {:playing?   false
         :timer      nil
         :from-loc   (rand-seed)
         :to-loc     (rand-seed)
         :from-prop  (rand-seed)
         :to-prop    (rand-seed)
         :gen-in-run 0
         :macro-loc  (rand-seed)
         :macro-prop (rand-seed)}))

(defn- next-generation!
  "Pick new from/to seeds for the next generation.
   If we've done 10 gens, randomize a new macro anchor first."
  []
  (swap! anim-state
         (fn [a]
           (let [gen        (:gen-in-run a)
                 new-macro? (>= gen 10)
                 ml  (if new-macro? (rand-seed) (:macro-loc a))
                 mp  (if new-macro? (rand-seed) (:macro-prop a))
                 ;; next 'from' is the current 'to'
                 fl  (:to-loc a)
                 fp  (:to-prop a)
                 ;; next 'to' is macro anchor ± small delta, clamped to [0,1]
                 tl  (-> (+ ml (small-delta 0.08)) (max 0.0) (min 1.0))
                 tp  (-> (+ mp (small-delta 0.05)) (max 0.0) (min 1.0))]
             (assoc a
                    :gen-in-run  (if new-macro? 1 (inc gen))
                    :macro-loc   ml
                    :macro-prop  mp
                    :from-loc    fl
                    :to-loc      tl
                    :from-prop   fp
                    :to-prop     tp)))))

(defn- schedule-next! []
  (let [secs  (or (:anim-speed @state/app-state) 10)
        timer (js/setTimeout
                (fn []
                  (when (:playing? @anim-state)
                    (next-generation!)
                    (let [{:keys [to-loc to-prop]} @anim-state]
                      (swap! state/app-state assoc :loc-seed to-loc :prop-seed to-prop))
                    (render!)
                    (schedule-next!)))
                (* secs 1000))]
    (swap! anim-state assoc :timer timer)))

(defn- set-playing! [playing?]
  (let [btn (by-id "btn-playpause")]
    (swap! anim-state assoc :playing? playing?)
    (set! (.-textContent btn) (if playing? "❚❚" "▶"))
    (if playing?
      (schedule-next!)
      (do (js/clearTimeout (:timer @anim-state))
          (swap! anim-state assoc :timer nil)))))

(defn- wire-playpause! []
  (on! (by-id "btn-playpause") "click"
       (fn []
         (set-playing! (not (:playing? @anim-state))))))

;; ─── Mount ───────────────────────────────────────────────────────────────────

(defn mount! []
  (build-swatches! "bg-swatches"   :bg)
  (build-swatches! "line-swatches" :line-color)
  (render-palette!)
  (build-presets!)

  (wire-slider! "slider-spacing"      :spacing      "val-spacing")
  (wire-slider! "slider-divisions"    :divisions    "val-divisions")
  (wire-slider! "slider-lineweight"   :line-weight  "val-lineweight")
  (wire-slider! "slider-density"      :density      "val-density")
  (wire-slider! "slider-center-pull"  :center-pull  "val-center-pull")
  (wire-slider! "slider-tilt"         :tilt         "val-tilt")
  (wire-slider! "slider-aperture"     :aperture     "val-aperture")
  (wire-slider! "slider-anim-speed"   :anim-speed   "val-anim-speed")

  (wire-buttons!)
  (wire-playpause!)
  (render!)
  (js/console.log "De Stijl UI mounted"))
