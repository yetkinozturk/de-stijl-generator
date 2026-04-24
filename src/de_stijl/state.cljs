(ns de-stijl.state)

;; ─── Preset palettes ─────────────────────────────────────────────────────────

(def presets
  [{:name   "Classic Mondrian"
    :bg     "#f5f2e8"
    :colors ["#D42B2B" "#1B3A8C" "#F5C800" "#0a0a0a"]}
   {:name   "De Stijl Dark"
    :bg     "#0a0a0a"
    :colors ["#D42B2B" "#1B3A8C" "#F5C800" "#f5f2e8"]}
   {:name   "Van Doesburg"
    :bg     "#e8e0c8"
    :colors ["#B02020" "#0a2a7a" "#D4A800" "#3a3a3a" "#f5f2e8"]}
   {:name   "Gerrit Rietveld"
    :bg     "#d0ccc0"
    :colors ["#CC2200" "#002288" "#FFCC00" "#111111" "#888888"]}
   {:name   "Rotterdam Blue"
    :bg     "#1B3A8C"
    :colors ["#f5f2e8" "#D42B2B" "#F5C800" "#0a0a0a"]}
   {:name   "Minimal"
    :bg     "#f5f2e8"
    :colors ["#0a0a0a" "#888888"]}])

;; ─── Shared swatch palette ────────────────────────────────────────────────────
;; Used for both background and line-color pickers.

(def swatches
  ["#f5f2e8" "#e8e0c8" "#d0ccc0"
   "#0a0a0a" "#3a3a3a" "#888888"
   "#D42B2B" "#B02020" "#8B1A1A"
   "#1B3A8C" "#0a2a7a" "#002288"
   "#F5C800" "#D4A800" "#FFCC00"])

;; ─── De Stijl colour suggestions (palette editor) ────────────────────────────

(def palette-suggestions
  ["#D42B2B" "#1B3A8C" "#F5C800" "#0a0a0a" "#f5f2e8"
   "#B02020" "#0a2a7a" "#D4A800" "#888888" "#3a3a3a"
   "#CC2200" "#002288" "#FFCC00" "#AA1111" "#001177"])

;; ─── Initial state ───────────────────────────────────────────────────────────

(defonce app-state
  (atom {:bg          "#f5f2e8"
         :colors      ["#D42B2B" "#1B3A8C" "#F5C800" "#0a0a0a"]
         :line-color  "#0a0a0a"
         :divisions   6
         :line-weight 4
         :density     60
         :spacing     0
         :center-pull 0
         :tilt        0
         :aperture    0
         :anim-speed  10
         :loc-seed    (js/Math.random)
         :prop-seed   (js/Math.random)}))
