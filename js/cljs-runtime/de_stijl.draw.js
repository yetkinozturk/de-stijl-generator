goog.provide('de_stijl.draw');
de_stijl.draw.lcg_step = (function de_stijl$draw$lcg_step(s){
return cljs.core.mod((((1664525) * s) + (1013904223)),(4294967296));
});
/**
 * Returns a stateful RNG seeded by `seed` (float 0–1).
 */
de_stijl.draw.make_rng = (function de_stijl$draw$make_rng(seed){
var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(Math.abs(Math.floor((seed * (1000000)))));
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,de_stijl.draw.lcg_step);

return (cljs.core.deref(state) / 4.294967296E9);
});
});
de_stijl.draw.rng_int = (function de_stijl$draw$rng_int(rng,n){
return Math.floor(((rng.cljs$core$IFn$_invoke$arity$0 ? rng.cljs$core$IFn$_invoke$arity$0() : rng.call(null)) * n));
});
de_stijl.draw.rng_pick = (function de_stijl$draw$rng_pick(rng,v){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,de_stijl.draw.rng_int(rng,cljs.core.count(v)));
});
de_stijl.draw.rng_between = (function de_stijl$draw$rng_between(rng,lo,hi){
return (lo + ((rng.cljs$core$IFn$_invoke$arity$0 ? rng.cljs$core$IFn$_invoke$arity$0() : rng.call(null)) * (hi - lo)));
});
/**
 * Divide `size` px into `n` segments with random proportional widths.
 * Returns interior cut positions (excludes 0 and size).
 */
de_stijl.draw.build_cuts = (function de_stijl$draw$build_cuts(rng,size,n){
var weights = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (_){
return de_stijl.draw.rng_between(rng,0.3,2.0);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
var total = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,weights);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = 0.0;
var G__16560 = weights;
var vec__16561 = G__16560;
var seq__16562 = cljs.core.seq(vec__16561);
var first__16563 = cljs.core.first(seq__16562);
var seq__16562__$1 = cljs.core.next(seq__16562);
var w = first__16563;
var rest = seq__16562__$1;
var acc__$1 = acc;
var pos__$1 = pos;
var G__16560__$1 = G__16560;
while(true){
var acc__$2 = acc__$1;
var pos__$2 = pos__$1;
var vec__16572 = G__16560__$1;
var seq__16573 = cljs.core.seq(vec__16572);
var first__16574 = cljs.core.first(seq__16573);
var seq__16573__$1 = cljs.core.next(seq__16573);
var w__$1 = first__16574;
var rest__$1 = seq__16573__$1;
if((w__$1 == null)){
return cljs.core.vec(cljs.core.butlast(acc__$2));
} else {
var G__17139 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,(pos__$2 + ((size * w__$1) / total)));
var G__17140 = (pos__$2 + ((size * w__$1) / total));
var G__17141 = rest__$1;
acc__$1 = G__17139;
pos__$1 = G__17140;
G__16560__$1 = G__17141;
continue;
}
break;
}
});
/**
 * Converts cut positions → [[start length] …] pairs.
 */
de_stijl.draw.cuts__GT_cells = (function de_stijl$draw$cuts__GT_cells(cuts,size){
var edges = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cuts,size));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__16584){
var vec__16589 = p__16584;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16589,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16589,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,(b - a)], null);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),edges));
});
de_stijl.draw.assign_colors = (function de_stijl$draw$assign_colors(rng,rows,cols,density,bg,colors){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5480__auto__ = (function de_stijl$draw$assign_colors_$_iter__16600(s__16601){
return (new cljs.core.LazySeq(null,(function (){
var s__16601__$1 = s__16601;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__16601__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var ri = cljs.core.first(xs__6360__auto__);
var iterys__5476__auto__ = ((function (s__16601__$1,ri,xs__6360__auto__,temp__5804__auto__){
return (function de_stijl$draw$assign_colors_$_iter__16600_$_iter__16602(s__16603){
return (new cljs.core.LazySeq(null,((function (s__16601__$1,ri,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__16603__$1 = s__16603;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__16603__$1);
if(temp__5804__auto____$1){
var s__16603__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16603__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__16603__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__16605 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__16604 = (0);
while(true){
if((i__16604 < size__5479__auto__)){
var ci = cljs.core._nth(c__5478__auto__,i__16604);
cljs.core.chunk_append(b__16605,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ri,ci], null),(((((rng.cljs$core$IFn$_invoke$arity$0 ? rng.cljs$core$IFn$_invoke$arity$0() : rng.call(null)) * 100.0) < density))?de_stijl.draw.rng_pick(rng,colors):bg)], null));

var G__17148 = (i__16604 + (1));
i__16604 = G__17148;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16605),de_stijl$draw$assign_colors_$_iter__16600_$_iter__16602(cljs.core.chunk_rest(s__16603__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16605),null);
}
} else {
var ci = cljs.core.first(s__16603__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ri,ci], null),(((((rng.cljs$core$IFn$_invoke$arity$0 ? rng.cljs$core$IFn$_invoke$arity$0() : rng.call(null)) * 100.0) < density))?de_stijl.draw.rng_pick(rng,colors):bg)], null),de_stijl$draw$assign_colors_$_iter__16600_$_iter__16602(cljs.core.rest(s__16603__$2)));
}
} else {
return null;
}
break;
}
});})(s__16601__$1,ri,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__16601__$1,ri,xs__6360__auto__,temp__5804__auto__))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cols)));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,de_stijl$draw$assign_colors_$_iter__16600(cljs.core.rest(s__16601__$1)));
} else {
var G__17158 = cljs.core.rest(s__16601__$1);
s__16601__$1 = G__17158;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(rows));
})());
});
de_stijl.draw.lerp = (function de_stijl$draw$lerp(a,b,t){
return (a + (t * (b - a)));
});
/**
 * Lerp the rectangle's center toward the canvas center by `t` (0–1).
 * Returns new [x y] top-left corner (width/height unchanged).
 */
de_stijl.draw.apply_center_pull = (function de_stijl$draw$apply_center_pull(rx,ry,rw,rh,canvas_cx,canvas_cy,t){
var rect_cx = (rx + (rw / (2)));
var rect_cy = (ry + (rh / (2)));
var new_cx = de_stijl.draw.lerp(rect_cx,canvas_cx,t);
var new_cy = de_stijl.draw.lerp(rect_cy,canvas_cy,t);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new_cx - (rw / (2))),(new_cy - (rh / (2)))], null);
});
de_stijl.draw.deg__GT_rad = (function de_stijl$draw$deg__GT_rad(d){
return (d * (Math.PI / 180.0));
});
/**
 * Draw a De Stijl composition onto `ctx`.
 * 
 * opts:
 *   :size        — canvas px (square)
 *   :divisions   — grid complexity hint
 *   :line-weight — stroke px
 *   :line-color  — grid line colour string
 *   :density     — % of cells coloured (0–100)
 *   :spacing     — inset px between grid line and rect edge
 *   :center-pull — 0–100, lerp rect centres toward canvas centre
 *   :tilt        — 0–180, degrees each rect rotates around canvas centre
 *   :aperture    — 0–100, invisible shrinking frame; any rect touching it is dropped entirely
 *   :bg          — background colour
 *   :colors      — vector of fill colour strings
 *   :loc-seed    — seed for colour assignment
 *   :prop-seed   — seed for grid structure
 */
de_stijl.draw.draw_BANG_ = (function de_stijl$draw$draw_BANG_(ctx,p__16666){
var map__16671 = p__16666;
var map__16671__$1 = cljs.core.__destructure_map(map__16671);
var density = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16671__$1,new cljs.core.Keyword(null,"density","density",-1664155941));
var bg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16671__$1,new cljs.core.Keyword(null,"bg","bg",-206688421));
var spacing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16671__$1,new cljs.core.Keyword(null,"spacing","spacing",204422175));
var center_pull = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16671__$1,new cljs.core.Keyword(null,"center-pull","center-pull",-386551264));
var aperture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16671__$1,new cljs.core.Keyword(null,"aperture","aperture",-1785896285));
var line_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16671__$1,new cljs.core.Keyword(null,"line-color","line-color",1331573993));
var divisions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16671__$1,new cljs.core.Keyword(null,"divisions","divisions",-1442532790));
var colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16671__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
var tilt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16671__$1,new cljs.core.Keyword(null,"tilt","tilt",-828681332));
var line_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16671__$1,new cljs.core.Keyword(null,"line-weight","line-weight",1717590509));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16671__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var prop_seed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16671__$1,new cljs.core.Keyword(null,"prop-seed","prop-seed",1031470068));
var loc_seed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16671__$1,new cljs.core.Keyword(null,"loc-seed","loc-seed",-2117808459));
var loc_rng = de_stijl.draw.make_rng(loc_seed);
var prop_rng = de_stijl.draw.make_rng(prop_seed);
var lw = Math.round((function (){var or__5002__auto__ = line_weight;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})());
var half_lw = (lw / 2.0);
var inset = (spacing + half_lw);
var n_cols = ((2) + de_stijl.draw.rng_int(prop_rng,(divisions - (1))));
var n_rows = ((2) + de_stijl.draw.rng_int(prop_rng,(divisions - (1))));
var x_cuts = de_stijl.draw.build_cuts(prop_rng,size,n_cols);
var y_cuts = de_stijl.draw.build_cuts(prop_rng,size,n_rows);
var x_cells = de_stijl.draw.cuts__GT_cells(x_cuts,size);
var y_cells = de_stijl.draw.cuts__GT_cells(y_cuts,size);
var color_map = de_stijl.draw.assign_colors(loc_rng,n_rows,n_cols,density,bg,cljs.core.vec(colors));
var canvas_cx = (size / 2.0);
var canvas_cy = (size / 2.0);
var pull_t = ((function (){var or__5002__auto__ = center_pull;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})() / 100.0);
var tilt_rad = de_stijl.draw.deg__GT_rad((function (){var or__5002__auto__ = tilt;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})());
var margin = (((function (){var or__5002__auto__ = aperture;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})() / 100.0) * (size / 2.0));
var ap_x0 = margin;
var ap_y0 = margin;
var ap_x1 = (size - margin);
var ap_y1 = (size - margin);
var inside_QMARK_ = (function (rx,ry,rw,rh){
return (((rx >= ap_x0)) && ((((ry >= ap_y0)) && (((((rx + rw) <= ap_x1)) && (((ry + rh) <= ap_y1)))))));
});
(ctx.fillStyle = bg);

ctx.fillRect((0),(0),size,size);

var seq__16706_17184 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n_rows));
var chunk__16711_17185 = null;
var count__16712_17186 = (0);
var i__16713_17187 = (0);
while(true){
if((i__16713_17187 < count__16712_17186)){
var ri_17193 = chunk__16711_17185.cljs$core$IIndexed$_nth$arity$2(null,i__16713_17187);
var seq__16714_17194 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n_cols));
var chunk__16715_17195 = null;
var count__16716_17196 = (0);
var i__16717_17197 = (0);
while(true){
if((i__16717_17197 < count__16716_17196)){
var ci_17199 = chunk__16715_17195.cljs$core$IIndexed$_nth$arity$2(null,i__16717_17197);
var vec__16912_17200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x_cells,ci_17199);
var cx_17201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16912_17200,(0),null);
var cw_17202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16912_17200,(1),null);
var vec__16915_17203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(y_cells,ri_17193);
var cy_17204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16915_17203,(0),null);
var ch_17205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16915_17203,(1),null);
var color_17206 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(color_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ri_17193,ci_17199], null));
var rx0_17207 = (cx_17201 + inset);
var ry0_17208 = (cy_17204 + inset);
var rw_17209 = (cw_17202 - ((2) * inset));
var rh_17210 = (ch_17205 - ((2) * inset));
if((((rw_17209 > (0))) && ((rh_17210 > (0))))){
var vec__16919_17218 = de_stijl.draw.apply_center_pull(rx0_17207,ry0_17208,rw_17209,rh_17210,canvas_cx,canvas_cy,pull_t);
var rx_17219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16919_17218,(0),null);
var ry_17220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16919_17218,(1),null);
if(inside_QMARK_(rx_17219,ry_17220,rw_17209,rh_17210)){
(ctx.fillStyle = color_17206);

ctx.save();

ctx.translate(canvas_cx,canvas_cy);

ctx.rotate(tilt_rad);

ctx.translate((- canvas_cx),(- canvas_cy));

ctx.fillRect(rx_17219,ry_17220,rw_17209,rh_17210);

ctx.restore();
} else {
}
} else {
}


var G__17224 = seq__16714_17194;
var G__17225 = chunk__16715_17195;
var G__17226 = count__16716_17196;
var G__17227 = (i__16717_17197 + (1));
seq__16714_17194 = G__17224;
chunk__16715_17195 = G__17225;
count__16716_17196 = G__17226;
i__16717_17197 = G__17227;
continue;
} else {
var temp__5804__auto___17228 = cljs.core.seq(seq__16714_17194);
if(temp__5804__auto___17228){
var seq__16714_17229__$1 = temp__5804__auto___17228;
if(cljs.core.chunked_seq_QMARK_(seq__16714_17229__$1)){
var c__5525__auto___17230 = cljs.core.chunk_first(seq__16714_17229__$1);
var G__17231 = cljs.core.chunk_rest(seq__16714_17229__$1);
var G__17232 = c__5525__auto___17230;
var G__17233 = cljs.core.count(c__5525__auto___17230);
var G__17234 = (0);
seq__16714_17194 = G__17231;
chunk__16715_17195 = G__17232;
count__16716_17196 = G__17233;
i__16717_17197 = G__17234;
continue;
} else {
var ci_17235 = cljs.core.first(seq__16714_17229__$1);
var vec__16927_17238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x_cells,ci_17235);
var cx_17239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16927_17238,(0),null);
var cw_17240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16927_17238,(1),null);
var vec__16930_17241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(y_cells,ri_17193);
var cy_17242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16930_17241,(0),null);
var ch_17243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16930_17241,(1),null);
var color_17244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(color_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ri_17193,ci_17235], null));
var rx0_17245 = (cx_17239 + inset);
var ry0_17246 = (cy_17242 + inset);
var rw_17247 = (cw_17240 - ((2) * inset));
var rh_17248 = (ch_17243 - ((2) * inset));
if((((rw_17247 > (0))) && ((rh_17248 > (0))))){
var vec__16939_17253 = de_stijl.draw.apply_center_pull(rx0_17245,ry0_17246,rw_17247,rh_17248,canvas_cx,canvas_cy,pull_t);
var rx_17254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16939_17253,(0),null);
var ry_17255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16939_17253,(1),null);
if(inside_QMARK_(rx_17254,ry_17255,rw_17247,rh_17248)){
(ctx.fillStyle = color_17244);

ctx.save();

ctx.translate(canvas_cx,canvas_cy);

ctx.rotate(tilt_rad);

ctx.translate((- canvas_cx),(- canvas_cy));

ctx.fillRect(rx_17254,ry_17255,rw_17247,rh_17248);

ctx.restore();
} else {
}
} else {
}


var G__17259 = cljs.core.next(seq__16714_17229__$1);
var G__17260 = null;
var G__17261 = (0);
var G__17262 = (0);
seq__16714_17194 = G__17259;
chunk__16715_17195 = G__17260;
count__16716_17196 = G__17261;
i__16717_17197 = G__17262;
continue;
}
} else {
}
}
break;
}

var G__17263 = seq__16706_17184;
var G__17264 = chunk__16711_17185;
var G__17265 = count__16712_17186;
var G__17266 = (i__16713_17187 + (1));
seq__16706_17184 = G__17263;
chunk__16711_17185 = G__17264;
count__16712_17186 = G__17265;
i__16713_17187 = G__17266;
continue;
} else {
var temp__5804__auto___17267 = cljs.core.seq(seq__16706_17184);
if(temp__5804__auto___17267){
var seq__16706_17268__$1 = temp__5804__auto___17267;
if(cljs.core.chunked_seq_QMARK_(seq__16706_17268__$1)){
var c__5525__auto___17269 = cljs.core.chunk_first(seq__16706_17268__$1);
var G__17274 = cljs.core.chunk_rest(seq__16706_17268__$1);
var G__17275 = c__5525__auto___17269;
var G__17276 = cljs.core.count(c__5525__auto___17269);
var G__17277 = (0);
seq__16706_17184 = G__17274;
chunk__16711_17185 = G__17275;
count__16712_17186 = G__17276;
i__16713_17187 = G__17277;
continue;
} else {
var ri_17280 = cljs.core.first(seq__16706_17268__$1);
var seq__16707_17281 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n_cols));
var chunk__16708_17282 = null;
var count__16709_17283 = (0);
var i__16710_17284 = (0);
while(true){
if((i__16710_17284 < count__16709_17283)){
var ci_17285 = chunk__16708_17282.cljs$core$IIndexed$_nth$arity$2(null,i__16710_17284);
var vec__17048_17287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x_cells,ci_17285);
var cx_17288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17048_17287,(0),null);
var cw_17289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17048_17287,(1),null);
var vec__17051_17290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(y_cells,ri_17280);
var cy_17291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17051_17290,(0),null);
var ch_17292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17051_17290,(1),null);
var color_17293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(color_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ri_17280,ci_17285], null));
var rx0_17294 = (cx_17288 + inset);
var ry0_17295 = (cy_17291 + inset);
var rw_17296 = (cw_17289 - ((2) * inset));
var rh_17297 = (ch_17292 - ((2) * inset));
if((((rw_17296 > (0))) && ((rh_17297 > (0))))){
var vec__17059_17299 = de_stijl.draw.apply_center_pull(rx0_17294,ry0_17295,rw_17296,rh_17297,canvas_cx,canvas_cy,pull_t);
var rx_17300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17059_17299,(0),null);
var ry_17301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17059_17299,(1),null);
if(inside_QMARK_(rx_17300,ry_17301,rw_17296,rh_17297)){
(ctx.fillStyle = color_17293);

ctx.save();

ctx.translate(canvas_cx,canvas_cy);

ctx.rotate(tilt_rad);

ctx.translate((- canvas_cx),(- canvas_cy));

ctx.fillRect(rx_17300,ry_17301,rw_17296,rh_17297);

ctx.restore();
} else {
}
} else {
}


var G__17302 = seq__16707_17281;
var G__17303 = chunk__16708_17282;
var G__17304 = count__16709_17283;
var G__17305 = (i__16710_17284 + (1));
seq__16707_17281 = G__17302;
chunk__16708_17282 = G__17303;
count__16709_17283 = G__17304;
i__16710_17284 = G__17305;
continue;
} else {
var temp__5804__auto___17306__$1 = cljs.core.seq(seq__16707_17281);
if(temp__5804__auto___17306__$1){
var seq__16707_17307__$1 = temp__5804__auto___17306__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16707_17307__$1)){
var c__5525__auto___17308 = cljs.core.chunk_first(seq__16707_17307__$1);
var G__17309 = cljs.core.chunk_rest(seq__16707_17307__$1);
var G__17310 = c__5525__auto___17308;
var G__17311 = cljs.core.count(c__5525__auto___17308);
var G__17312 = (0);
seq__16707_17281 = G__17309;
chunk__16708_17282 = G__17310;
count__16709_17283 = G__17311;
i__16710_17284 = G__17312;
continue;
} else {
var ci_17313 = cljs.core.first(seq__16707_17307__$1);
var vec__17070_17317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x_cells,ci_17313);
var cx_17318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17070_17317,(0),null);
var cw_17319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17070_17317,(1),null);
var vec__17073_17320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(y_cells,ri_17280);
var cy_17321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17073_17320,(0),null);
var ch_17322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17073_17320,(1),null);
var color_17323 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(color_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ri_17280,ci_17313], null));
var rx0_17324 = (cx_17318 + inset);
var ry0_17325 = (cy_17321 + inset);
var rw_17326 = (cw_17319 - ((2) * inset));
var rh_17327 = (ch_17322 - ((2) * inset));
if((((rw_17326 > (0))) && ((rh_17327 > (0))))){
var vec__17079_17340 = de_stijl.draw.apply_center_pull(rx0_17324,ry0_17325,rw_17326,rh_17327,canvas_cx,canvas_cy,pull_t);
var rx_17341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17079_17340,(0),null);
var ry_17342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17079_17340,(1),null);
if(inside_QMARK_(rx_17341,ry_17342,rw_17326,rh_17327)){
(ctx.fillStyle = color_17323);

ctx.save();

ctx.translate(canvas_cx,canvas_cy);

ctx.rotate(tilt_rad);

ctx.translate((- canvas_cx),(- canvas_cy));

ctx.fillRect(rx_17341,ry_17342,rw_17326,rh_17327);

ctx.restore();
} else {
}
} else {
}


var G__17346 = cljs.core.next(seq__16707_17307__$1);
var G__17347 = null;
var G__17348 = (0);
var G__17349 = (0);
seq__16707_17281 = G__17346;
chunk__16708_17282 = G__17347;
count__16709_17283 = G__17348;
i__16710_17284 = G__17349;
continue;
}
} else {
}
}
break;
}

var G__17350 = cljs.core.next(seq__16706_17268__$1);
var G__17351 = null;
var G__17352 = (0);
var G__17353 = (0);
seq__16706_17184 = G__17350;
chunk__16711_17185 = G__17351;
count__16712_17186 = G__17352;
i__16713_17187 = G__17353;
continue;
}
} else {
}
}
break;
}

if((lw > (0))){
(ctx.strokeStyle = (function (){var or__5002__auto__ = line_color;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "#0a0a0a";
}
})());

(ctx.lineWidth = lw);

ctx.save();

ctx.translate(canvas_cx,canvas_cy);

ctx.rotate(tilt_rad);

ctx.translate((- canvas_cx),(- canvas_cy));

ctx.beginPath();

var seq__17088_17361 = cljs.core.seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),size], null),x_cuts));
var chunk__17089_17362 = null;
var count__17090_17363 = (0);
var i__17091_17364 = (0);
while(true){
if((i__17091_17364 < count__17090_17363)){
var x_17365 = chunk__17089_17362.cljs$core$IIndexed$_nth$arity$2(null,i__17091_17364);
ctx.moveTo(x_17365,(0));

ctx.lineTo(x_17365,size);


var G__17367 = seq__17088_17361;
var G__17368 = chunk__17089_17362;
var G__17369 = count__17090_17363;
var G__17370 = (i__17091_17364 + (1));
seq__17088_17361 = G__17367;
chunk__17089_17362 = G__17368;
count__17090_17363 = G__17369;
i__17091_17364 = G__17370;
continue;
} else {
var temp__5804__auto___17371 = cljs.core.seq(seq__17088_17361);
if(temp__5804__auto___17371){
var seq__17088_17372__$1 = temp__5804__auto___17371;
if(cljs.core.chunked_seq_QMARK_(seq__17088_17372__$1)){
var c__5525__auto___17373 = cljs.core.chunk_first(seq__17088_17372__$1);
var G__17374 = cljs.core.chunk_rest(seq__17088_17372__$1);
var G__17375 = c__5525__auto___17373;
var G__17376 = cljs.core.count(c__5525__auto___17373);
var G__17377 = (0);
seq__17088_17361 = G__17374;
chunk__17089_17362 = G__17375;
count__17090_17363 = G__17376;
i__17091_17364 = G__17377;
continue;
} else {
var x_17378 = cljs.core.first(seq__17088_17372__$1);
ctx.moveTo(x_17378,(0));

ctx.lineTo(x_17378,size);


var G__17379 = cljs.core.next(seq__17088_17372__$1);
var G__17380 = null;
var G__17381 = (0);
var G__17382 = (0);
seq__17088_17361 = G__17379;
chunk__17089_17362 = G__17380;
count__17090_17363 = G__17381;
i__17091_17364 = G__17382;
continue;
}
} else {
}
}
break;
}

var seq__17097_17383 = cljs.core.seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),size], null),y_cuts));
var chunk__17098_17384 = null;
var count__17099_17385 = (0);
var i__17100_17386 = (0);
while(true){
if((i__17100_17386 < count__17099_17385)){
var y_17387 = chunk__17098_17384.cljs$core$IIndexed$_nth$arity$2(null,i__17100_17386);
ctx.moveTo((0),y_17387);

ctx.lineTo(size,y_17387);


var G__17388 = seq__17097_17383;
var G__17389 = chunk__17098_17384;
var G__17390 = count__17099_17385;
var G__17391 = (i__17100_17386 + (1));
seq__17097_17383 = G__17388;
chunk__17098_17384 = G__17389;
count__17099_17385 = G__17390;
i__17100_17386 = G__17391;
continue;
} else {
var temp__5804__auto___17392 = cljs.core.seq(seq__17097_17383);
if(temp__5804__auto___17392){
var seq__17097_17393__$1 = temp__5804__auto___17392;
if(cljs.core.chunked_seq_QMARK_(seq__17097_17393__$1)){
var c__5525__auto___17394 = cljs.core.chunk_first(seq__17097_17393__$1);
var G__17395 = cljs.core.chunk_rest(seq__17097_17393__$1);
var G__17396 = c__5525__auto___17394;
var G__17397 = cljs.core.count(c__5525__auto___17394);
var G__17398 = (0);
seq__17097_17383 = G__17395;
chunk__17098_17384 = G__17396;
count__17099_17385 = G__17397;
i__17100_17386 = G__17398;
continue;
} else {
var y_17399 = cljs.core.first(seq__17097_17393__$1);
ctx.moveTo((0),y_17399);

ctx.lineTo(size,y_17399);


var G__17400 = cljs.core.next(seq__17097_17393__$1);
var G__17401 = null;
var G__17402 = (0);
var G__17403 = (0);
seq__17097_17383 = G__17400;
chunk__17098_17384 = G__17401;
count__17099_17385 = G__17402;
i__17100_17386 = G__17403;
continue;
}
} else {
}
}
break;
}

ctx.stroke();

return ctx.restore();
} else {
return null;
}
});

//# sourceMappingURL=de_stijl.draw.js.map
