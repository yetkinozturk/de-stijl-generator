(ns de-stijl.core
  (:require [de-stijl.ui :as ui]))

;; ─── Entry point ─────────────────────────────────────────────────────────────

(defn init! []
  (js/console.log "De Stijl — init")
  (ui/mount!))
