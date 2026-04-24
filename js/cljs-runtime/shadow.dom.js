goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_15150 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_15150(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_15156 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_15156(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__13481 = coll;
var G__13482 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__13481,G__13482) : shadow.dom.lazy_native_coll_seq.call(null,G__13481,G__13482));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__13508 = arguments.length;
switch (G__13508) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__13514 = arguments.length;
switch (G__13514) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__13531 = arguments.length;
switch (G__13531) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__13539 = arguments.length;
switch (G__13539) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__13555 = arguments.length;
switch (G__13555) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__13567 = arguments.length;
switch (G__13567) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e13580){if((e13580 instanceof Object)){
var e = e13580;
return console.log("didnt support attachEvent",el,e);
} else {
throw e13580;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__13600 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__13601 = null;
var count__13602 = (0);
var i__13603 = (0);
while(true){
if((i__13603 < count__13602)){
var el = chunk__13601.cljs$core$IIndexed$_nth$arity$2(null,i__13603);
var handler_15192__$1 = ((function (seq__13600,chunk__13601,count__13602,i__13603,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__13600,chunk__13601,count__13602,i__13603,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15192__$1);


var G__15193 = seq__13600;
var G__15194 = chunk__13601;
var G__15195 = count__13602;
var G__15196 = (i__13603 + (1));
seq__13600 = G__15193;
chunk__13601 = G__15194;
count__13602 = G__15195;
i__13603 = G__15196;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13600);
if(temp__5804__auto__){
var seq__13600__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13600__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13600__$1);
var G__15197 = cljs.core.chunk_rest(seq__13600__$1);
var G__15198 = c__5525__auto__;
var G__15199 = cljs.core.count(c__5525__auto__);
var G__15200 = (0);
seq__13600 = G__15197;
chunk__13601 = G__15198;
count__13602 = G__15199;
i__13603 = G__15200;
continue;
} else {
var el = cljs.core.first(seq__13600__$1);
var handler_15204__$1 = ((function (seq__13600,chunk__13601,count__13602,i__13603,el,seq__13600__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__13600,chunk__13601,count__13602,i__13603,el,seq__13600__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15204__$1);


var G__15205 = cljs.core.next(seq__13600__$1);
var G__15206 = null;
var G__15207 = (0);
var G__15208 = (0);
seq__13600 = G__15205;
chunk__13601 = G__15206;
count__13602 = G__15207;
i__13603 = G__15208;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__13634 = arguments.length;
switch (G__13634) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__13659 = cljs.core.seq(events);
var chunk__13660 = null;
var count__13661 = (0);
var i__13662 = (0);
while(true){
if((i__13662 < count__13661)){
var vec__13711 = chunk__13660.cljs$core$IIndexed$_nth$arity$2(null,i__13662);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13711,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13711,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15216 = seq__13659;
var G__15217 = chunk__13660;
var G__15218 = count__13661;
var G__15219 = (i__13662 + (1));
seq__13659 = G__15216;
chunk__13660 = G__15217;
count__13661 = G__15218;
i__13662 = G__15219;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13659);
if(temp__5804__auto__){
var seq__13659__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13659__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13659__$1);
var G__15221 = cljs.core.chunk_rest(seq__13659__$1);
var G__15222 = c__5525__auto__;
var G__15223 = cljs.core.count(c__5525__auto__);
var G__15224 = (0);
seq__13659 = G__15221;
chunk__13660 = G__15222;
count__13661 = G__15223;
i__13662 = G__15224;
continue;
} else {
var vec__13733 = cljs.core.first(seq__13659__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13733,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13733,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15226 = cljs.core.next(seq__13659__$1);
var G__15227 = null;
var G__15228 = (0);
var G__15229 = (0);
seq__13659 = G__15226;
chunk__13660 = G__15227;
count__13661 = G__15228;
i__13662 = G__15229;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__13740 = cljs.core.seq(styles);
var chunk__13741 = null;
var count__13742 = (0);
var i__13743 = (0);
while(true){
if((i__13743 < count__13742)){
var vec__13755 = chunk__13741.cljs$core$IIndexed$_nth$arity$2(null,i__13743);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13755,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13755,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15232 = seq__13740;
var G__15233 = chunk__13741;
var G__15234 = count__13742;
var G__15235 = (i__13743 + (1));
seq__13740 = G__15232;
chunk__13741 = G__15233;
count__13742 = G__15234;
i__13743 = G__15235;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13740);
if(temp__5804__auto__){
var seq__13740__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13740__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13740__$1);
var G__15236 = cljs.core.chunk_rest(seq__13740__$1);
var G__15237 = c__5525__auto__;
var G__15238 = cljs.core.count(c__5525__auto__);
var G__15239 = (0);
seq__13740 = G__15236;
chunk__13741 = G__15237;
count__13742 = G__15238;
i__13743 = G__15239;
continue;
} else {
var vec__13761 = cljs.core.first(seq__13740__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13761,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13761,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15241 = cljs.core.next(seq__13740__$1);
var G__15243 = null;
var G__15244 = (0);
var G__15245 = (0);
seq__13740 = G__15241;
chunk__13741 = G__15243;
count__13742 = G__15244;
i__13743 = G__15245;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__13769_15248 = key;
var G__13769_15249__$1 = (((G__13769_15248 instanceof cljs.core.Keyword))?G__13769_15248.fqn:null);
switch (G__13769_15249__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_15252 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_15252,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_15252,"aria-");
}
})())){
el.setAttribute(ks_15252,value);
} else {
(el[ks_15252] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__13830){
var map__13831 = p__13830;
var map__13831__$1 = cljs.core.__destructure_map(map__13831);
var props = map__13831__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13831__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__13833 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13833,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13833,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13833,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__13841 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__13841,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__13841;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__13858 = arguments.length;
switch (G__13858) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__13876){
var vec__13879 = p__13876;
var seq__13880 = cljs.core.seq(vec__13879);
var first__13881 = cljs.core.first(seq__13880);
var seq__13880__$1 = cljs.core.next(seq__13880);
var nn = first__13881;
var first__13881__$1 = cljs.core.first(seq__13880__$1);
var seq__13880__$2 = cljs.core.next(seq__13880__$1);
var np = first__13881__$1;
var nc = seq__13880__$2;
var node = vec__13879;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__13898 = nn;
var G__13899 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__13898,G__13899) : create_fn.call(null,G__13898,G__13899));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__13905 = nn;
var G__13906 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__13905,G__13906) : create_fn.call(null,G__13905,G__13906));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__13914 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13914,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13914,(1),null);
var seq__13924_15284 = cljs.core.seq(node_children);
var chunk__13925_15285 = null;
var count__13926_15286 = (0);
var i__13927_15287 = (0);
while(true){
if((i__13927_15287 < count__13926_15286)){
var child_struct_15288 = chunk__13925_15285.cljs$core$IIndexed$_nth$arity$2(null,i__13927_15287);
var children_15289 = shadow.dom.dom_node(child_struct_15288);
if(cljs.core.seq_QMARK_(children_15289)){
var seq__13999_15291 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15289));
var chunk__14001_15292 = null;
var count__14002_15293 = (0);
var i__14003_15294 = (0);
while(true){
if((i__14003_15294 < count__14002_15293)){
var child_15296 = chunk__14001_15292.cljs$core$IIndexed$_nth$arity$2(null,i__14003_15294);
if(cljs.core.truth_(child_15296)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15296);


var G__15297 = seq__13999_15291;
var G__15298 = chunk__14001_15292;
var G__15299 = count__14002_15293;
var G__15300 = (i__14003_15294 + (1));
seq__13999_15291 = G__15297;
chunk__14001_15292 = G__15298;
count__14002_15293 = G__15299;
i__14003_15294 = G__15300;
continue;
} else {
var G__15301 = seq__13999_15291;
var G__15302 = chunk__14001_15292;
var G__15303 = count__14002_15293;
var G__15304 = (i__14003_15294 + (1));
seq__13999_15291 = G__15301;
chunk__14001_15292 = G__15302;
count__14002_15293 = G__15303;
i__14003_15294 = G__15304;
continue;
}
} else {
var temp__5804__auto___15305 = cljs.core.seq(seq__13999_15291);
if(temp__5804__auto___15305){
var seq__13999_15306__$1 = temp__5804__auto___15305;
if(cljs.core.chunked_seq_QMARK_(seq__13999_15306__$1)){
var c__5525__auto___15307 = cljs.core.chunk_first(seq__13999_15306__$1);
var G__15308 = cljs.core.chunk_rest(seq__13999_15306__$1);
var G__15309 = c__5525__auto___15307;
var G__15310 = cljs.core.count(c__5525__auto___15307);
var G__15311 = (0);
seq__13999_15291 = G__15308;
chunk__14001_15292 = G__15309;
count__14002_15293 = G__15310;
i__14003_15294 = G__15311;
continue;
} else {
var child_15312 = cljs.core.first(seq__13999_15306__$1);
if(cljs.core.truth_(child_15312)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15312);


var G__15313 = cljs.core.next(seq__13999_15306__$1);
var G__15314 = null;
var G__15315 = (0);
var G__15316 = (0);
seq__13999_15291 = G__15313;
chunk__14001_15292 = G__15314;
count__14002_15293 = G__15315;
i__14003_15294 = G__15316;
continue;
} else {
var G__15318 = cljs.core.next(seq__13999_15306__$1);
var G__15319 = null;
var G__15320 = (0);
var G__15321 = (0);
seq__13999_15291 = G__15318;
chunk__14001_15292 = G__15319;
count__14002_15293 = G__15320;
i__14003_15294 = G__15321;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15289);
}


var G__15322 = seq__13924_15284;
var G__15323 = chunk__13925_15285;
var G__15324 = count__13926_15286;
var G__15325 = (i__13927_15287 + (1));
seq__13924_15284 = G__15322;
chunk__13925_15285 = G__15323;
count__13926_15286 = G__15324;
i__13927_15287 = G__15325;
continue;
} else {
var temp__5804__auto___15327 = cljs.core.seq(seq__13924_15284);
if(temp__5804__auto___15327){
var seq__13924_15328__$1 = temp__5804__auto___15327;
if(cljs.core.chunked_seq_QMARK_(seq__13924_15328__$1)){
var c__5525__auto___15329 = cljs.core.chunk_first(seq__13924_15328__$1);
var G__15330 = cljs.core.chunk_rest(seq__13924_15328__$1);
var G__15331 = c__5525__auto___15329;
var G__15332 = cljs.core.count(c__5525__auto___15329);
var G__15333 = (0);
seq__13924_15284 = G__15330;
chunk__13925_15285 = G__15331;
count__13926_15286 = G__15332;
i__13927_15287 = G__15333;
continue;
} else {
var child_struct_15336 = cljs.core.first(seq__13924_15328__$1);
var children_15338 = shadow.dom.dom_node(child_struct_15336);
if(cljs.core.seq_QMARK_(children_15338)){
var seq__14035_15339 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15338));
var chunk__14038_15340 = null;
var count__14039_15341 = (0);
var i__14040_15342 = (0);
while(true){
if((i__14040_15342 < count__14039_15341)){
var child_15344 = chunk__14038_15340.cljs$core$IIndexed$_nth$arity$2(null,i__14040_15342);
if(cljs.core.truth_(child_15344)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15344);


var G__15345 = seq__14035_15339;
var G__15346 = chunk__14038_15340;
var G__15347 = count__14039_15341;
var G__15348 = (i__14040_15342 + (1));
seq__14035_15339 = G__15345;
chunk__14038_15340 = G__15346;
count__14039_15341 = G__15347;
i__14040_15342 = G__15348;
continue;
} else {
var G__15349 = seq__14035_15339;
var G__15350 = chunk__14038_15340;
var G__15351 = count__14039_15341;
var G__15352 = (i__14040_15342 + (1));
seq__14035_15339 = G__15349;
chunk__14038_15340 = G__15350;
count__14039_15341 = G__15351;
i__14040_15342 = G__15352;
continue;
}
} else {
var temp__5804__auto___15353__$1 = cljs.core.seq(seq__14035_15339);
if(temp__5804__auto___15353__$1){
var seq__14035_15358__$1 = temp__5804__auto___15353__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14035_15358__$1)){
var c__5525__auto___15360 = cljs.core.chunk_first(seq__14035_15358__$1);
var G__15361 = cljs.core.chunk_rest(seq__14035_15358__$1);
var G__15362 = c__5525__auto___15360;
var G__15363 = cljs.core.count(c__5525__auto___15360);
var G__15364 = (0);
seq__14035_15339 = G__15361;
chunk__14038_15340 = G__15362;
count__14039_15341 = G__15363;
i__14040_15342 = G__15364;
continue;
} else {
var child_15365 = cljs.core.first(seq__14035_15358__$1);
if(cljs.core.truth_(child_15365)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15365);


var G__15366 = cljs.core.next(seq__14035_15358__$1);
var G__15367 = null;
var G__15368 = (0);
var G__15369 = (0);
seq__14035_15339 = G__15366;
chunk__14038_15340 = G__15367;
count__14039_15341 = G__15368;
i__14040_15342 = G__15369;
continue;
} else {
var G__15370 = cljs.core.next(seq__14035_15358__$1);
var G__15371 = null;
var G__15372 = (0);
var G__15373 = (0);
seq__14035_15339 = G__15370;
chunk__14038_15340 = G__15371;
count__14039_15341 = G__15372;
i__14040_15342 = G__15373;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15338);
}


var G__15374 = cljs.core.next(seq__13924_15328__$1);
var G__15375 = null;
var G__15376 = (0);
var G__15377 = (0);
seq__13924_15284 = G__15374;
chunk__13925_15285 = G__15375;
count__13926_15286 = G__15376;
i__13927_15287 = G__15377;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__14155 = cljs.core.seq(node);
var chunk__14156 = null;
var count__14158 = (0);
var i__14159 = (0);
while(true){
if((i__14159 < count__14158)){
var n = chunk__14156.cljs$core$IIndexed$_nth$arity$2(null,i__14159);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15386 = seq__14155;
var G__15387 = chunk__14156;
var G__15388 = count__14158;
var G__15389 = (i__14159 + (1));
seq__14155 = G__15386;
chunk__14156 = G__15387;
count__14158 = G__15388;
i__14159 = G__15389;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14155);
if(temp__5804__auto__){
var seq__14155__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14155__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14155__$1);
var G__15391 = cljs.core.chunk_rest(seq__14155__$1);
var G__15392 = c__5525__auto__;
var G__15393 = cljs.core.count(c__5525__auto__);
var G__15394 = (0);
seq__14155 = G__15391;
chunk__14156 = G__15392;
count__14158 = G__15393;
i__14159 = G__15394;
continue;
} else {
var n = cljs.core.first(seq__14155__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15396 = cljs.core.next(seq__14155__$1);
var G__15397 = null;
var G__15398 = (0);
var G__15399 = (0);
seq__14155 = G__15396;
chunk__14156 = G__15397;
count__14158 = G__15398;
i__14159 = G__15399;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__14236 = arguments.length;
switch (G__14236) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__14246 = arguments.length;
switch (G__14246) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__14260 = arguments.length;
switch (G__14260) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15435 = arguments.length;
var i__5727__auto___15436 = (0);
while(true){
if((i__5727__auto___15436 < len__5726__auto___15435)){
args__5732__auto__.push((arguments[i__5727__auto___15436]));

var G__15437 = (i__5727__auto___15436 + (1));
i__5727__auto___15436 = G__15437;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__14337_15442 = cljs.core.seq(nodes);
var chunk__14338_15443 = null;
var count__14339_15444 = (0);
var i__14340_15445 = (0);
while(true){
if((i__14340_15445 < count__14339_15444)){
var node_15446 = chunk__14338_15443.cljs$core$IIndexed$_nth$arity$2(null,i__14340_15445);
fragment.appendChild(shadow.dom._to_dom(node_15446));


var G__15450 = seq__14337_15442;
var G__15451 = chunk__14338_15443;
var G__15452 = count__14339_15444;
var G__15453 = (i__14340_15445 + (1));
seq__14337_15442 = G__15450;
chunk__14338_15443 = G__15451;
count__14339_15444 = G__15452;
i__14340_15445 = G__15453;
continue;
} else {
var temp__5804__auto___15454 = cljs.core.seq(seq__14337_15442);
if(temp__5804__auto___15454){
var seq__14337_15455__$1 = temp__5804__auto___15454;
if(cljs.core.chunked_seq_QMARK_(seq__14337_15455__$1)){
var c__5525__auto___15457 = cljs.core.chunk_first(seq__14337_15455__$1);
var G__15459 = cljs.core.chunk_rest(seq__14337_15455__$1);
var G__15460 = c__5525__auto___15457;
var G__15461 = cljs.core.count(c__5525__auto___15457);
var G__15462 = (0);
seq__14337_15442 = G__15459;
chunk__14338_15443 = G__15460;
count__14339_15444 = G__15461;
i__14340_15445 = G__15462;
continue;
} else {
var node_15464 = cljs.core.first(seq__14337_15455__$1);
fragment.appendChild(shadow.dom._to_dom(node_15464));


var G__15466 = cljs.core.next(seq__14337_15455__$1);
var G__15467 = null;
var G__15468 = (0);
var G__15469 = (0);
seq__14337_15442 = G__15466;
chunk__14338_15443 = G__15467;
count__14339_15444 = G__15468;
i__14340_15445 = G__15469;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq14329){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14329));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__14389_15472 = cljs.core.seq(scripts);
var chunk__14390_15473 = null;
var count__14391_15474 = (0);
var i__14392_15475 = (0);
while(true){
if((i__14392_15475 < count__14391_15474)){
var vec__14437_15477 = chunk__14390_15473.cljs$core$IIndexed$_nth$arity$2(null,i__14392_15475);
var script_tag_15478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14437_15477,(0),null);
var script_body_15479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14437_15477,(1),null);
eval(script_body_15479);


var G__15482 = seq__14389_15472;
var G__15483 = chunk__14390_15473;
var G__15484 = count__14391_15474;
var G__15485 = (i__14392_15475 + (1));
seq__14389_15472 = G__15482;
chunk__14390_15473 = G__15483;
count__14391_15474 = G__15484;
i__14392_15475 = G__15485;
continue;
} else {
var temp__5804__auto___15487 = cljs.core.seq(seq__14389_15472);
if(temp__5804__auto___15487){
var seq__14389_15488__$1 = temp__5804__auto___15487;
if(cljs.core.chunked_seq_QMARK_(seq__14389_15488__$1)){
var c__5525__auto___15490 = cljs.core.chunk_first(seq__14389_15488__$1);
var G__15491 = cljs.core.chunk_rest(seq__14389_15488__$1);
var G__15492 = c__5525__auto___15490;
var G__15493 = cljs.core.count(c__5525__auto___15490);
var G__15494 = (0);
seq__14389_15472 = G__15491;
chunk__14390_15473 = G__15492;
count__14391_15474 = G__15493;
i__14392_15475 = G__15494;
continue;
} else {
var vec__14443_15496 = cljs.core.first(seq__14389_15488__$1);
var script_tag_15497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14443_15496,(0),null);
var script_body_15498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14443_15496,(1),null);
eval(script_body_15498);


var G__15501 = cljs.core.next(seq__14389_15488__$1);
var G__15502 = null;
var G__15503 = (0);
var G__15504 = (0);
seq__14389_15472 = G__15501;
chunk__14390_15473 = G__15502;
count__14391_15474 = G__15503;
i__14392_15475 = G__15504;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__14455){
var vec__14456 = p__14455;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14456,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14456,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__14489 = arguments.length;
switch (G__14489) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__14542 = cljs.core.seq(style_keys);
var chunk__14543 = null;
var count__14544 = (0);
var i__14545 = (0);
while(true){
if((i__14545 < count__14544)){
var it = chunk__14543.cljs$core$IIndexed$_nth$arity$2(null,i__14545);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__15521 = seq__14542;
var G__15522 = chunk__14543;
var G__15523 = count__14544;
var G__15524 = (i__14545 + (1));
seq__14542 = G__15521;
chunk__14543 = G__15522;
count__14544 = G__15523;
i__14545 = G__15524;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14542);
if(temp__5804__auto__){
var seq__14542__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14542__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14542__$1);
var G__15528 = cljs.core.chunk_rest(seq__14542__$1);
var G__15529 = c__5525__auto__;
var G__15530 = cljs.core.count(c__5525__auto__);
var G__15531 = (0);
seq__14542 = G__15528;
chunk__14543 = G__15529;
count__14544 = G__15530;
i__14545 = G__15531;
continue;
} else {
var it = cljs.core.first(seq__14542__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__15534 = cljs.core.next(seq__14542__$1);
var G__15535 = null;
var G__15536 = (0);
var G__15537 = (0);
seq__14542 = G__15534;
chunk__14543 = G__15535;
count__14544 = G__15536;
i__14545 = G__15537;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k14588,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__14681 = k14588;
var G__14681__$1 = (((G__14681 instanceof cljs.core.Keyword))?G__14681.fqn:null);
switch (G__14681__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14588,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__14699){
var vec__14704 = p__14699;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14704,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14704,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14587){
var self__ = this;
var G__14587__$1 = this;
return (new cljs.core.RecordIter((0),G__14587__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14589,other14590){
var self__ = this;
var this14589__$1 = this;
return (((!((other14590 == null)))) && ((((this14589__$1.constructor === other14590.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14589__$1.x,other14590.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14589__$1.y,other14590.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14589__$1.__extmap,other14590.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k14588){
var self__ = this;
var this__5307__auto____$1 = this;
var G__14761 = k14588;
var G__14761__$1 = (((G__14761 instanceof cljs.core.Keyword))?G__14761.fqn:null);
switch (G__14761__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14588);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__14587){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__14765 = cljs.core.keyword_identical_QMARK_;
var expr__14766 = k__5309__auto__;
if(cljs.core.truth_((pred__14765.cljs$core$IFn$_invoke$arity$2 ? pred__14765.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__14766) : pred__14765.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__14766)))){
return (new shadow.dom.Coordinate(G__14587,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14765.cljs$core$IFn$_invoke$arity$2 ? pred__14765.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__14766) : pred__14765.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__14766)))){
return (new shadow.dom.Coordinate(self__.x,G__14587,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__14587),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__14587){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__14587,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__14661){
var extmap__5342__auto__ = (function (){var G__14785 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14661,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__14661)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14785);
} else {
return G__14785;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__14661),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__14661),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k14800,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__14816 = k14800;
var G__14816__$1 = (((G__14816 instanceof cljs.core.Keyword))?G__14816.fqn:null);
switch (G__14816__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14800,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__14821){
var vec__14824 = p__14821;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14824,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14824,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14799){
var self__ = this;
var G__14799__$1 = this;
return (new cljs.core.RecordIter((0),G__14799__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14801,other14802){
var self__ = this;
var this14801__$1 = this;
return (((!((other14802 == null)))) && ((((this14801__$1.constructor === other14802.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14801__$1.w,other14802.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14801__$1.h,other14802.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14801__$1.__extmap,other14802.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k14800){
var self__ = this;
var this__5307__auto____$1 = this;
var G__14851 = k14800;
var G__14851__$1 = (((G__14851 instanceof cljs.core.Keyword))?G__14851.fqn:null);
switch (G__14851__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14800);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__14799){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__14857 = cljs.core.keyword_identical_QMARK_;
var expr__14858 = k__5309__auto__;
if(cljs.core.truth_((pred__14857.cljs$core$IFn$_invoke$arity$2 ? pred__14857.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__14858) : pred__14857.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__14858)))){
return (new shadow.dom.Size(G__14799,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14857.cljs$core$IFn$_invoke$arity$2 ? pred__14857.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__14858) : pred__14857.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__14858)))){
return (new shadow.dom.Size(self__.w,G__14799,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__14799),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__14799){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__14799,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__14808){
var extmap__5342__auto__ = (function (){var G__14878 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14808,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__14808)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14878);
} else {
return G__14878;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__14808),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__14808),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__15628 = (i + (1));
var G__15629 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__15628;
ret = G__15629;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14915){
var vec__14916 = p__14915;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14916,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14916,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__14922 = arguments.length;
switch (G__14922) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__15656 = ps;
var G__15657 = (i + (1));
el__$1 = G__15656;
i = G__15657;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__14953 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14953,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14953,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14953,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__14962_15692 = cljs.core.seq(props);
var chunk__14963_15693 = null;
var count__14964_15694 = (0);
var i__14965_15695 = (0);
while(true){
if((i__14965_15695 < count__14964_15694)){
var vec__14982_15697 = chunk__14963_15693.cljs$core$IIndexed$_nth$arity$2(null,i__14965_15695);
var k_15698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14982_15697,(0),null);
var v_15699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14982_15697,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_15698);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_15698),v_15699);


var G__15720 = seq__14962_15692;
var G__15721 = chunk__14963_15693;
var G__15722 = count__14964_15694;
var G__15723 = (i__14965_15695 + (1));
seq__14962_15692 = G__15720;
chunk__14963_15693 = G__15721;
count__14964_15694 = G__15722;
i__14965_15695 = G__15723;
continue;
} else {
var temp__5804__auto___15725 = cljs.core.seq(seq__14962_15692);
if(temp__5804__auto___15725){
var seq__14962_15726__$1 = temp__5804__auto___15725;
if(cljs.core.chunked_seq_QMARK_(seq__14962_15726__$1)){
var c__5525__auto___15728 = cljs.core.chunk_first(seq__14962_15726__$1);
var G__15730 = cljs.core.chunk_rest(seq__14962_15726__$1);
var G__15731 = c__5525__auto___15728;
var G__15732 = cljs.core.count(c__5525__auto___15728);
var G__15733 = (0);
seq__14962_15692 = G__15730;
chunk__14963_15693 = G__15731;
count__14964_15694 = G__15732;
i__14965_15695 = G__15733;
continue;
} else {
var vec__14987_15734 = cljs.core.first(seq__14962_15726__$1);
var k_15735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14987_15734,(0),null);
var v_15736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14987_15734,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_15735);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_15735),v_15736);


var G__15738 = cljs.core.next(seq__14962_15726__$1);
var G__15739 = null;
var G__15740 = (0);
var G__15741 = (0);
seq__14962_15692 = G__15738;
chunk__14963_15693 = G__15739;
count__14964_15694 = G__15740;
i__14965_15695 = G__15741;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__14999 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14999,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14999,(1),null);
var seq__15002_15747 = cljs.core.seq(node_children);
var chunk__15004_15748 = null;
var count__15005_15749 = (0);
var i__15006_15750 = (0);
while(true){
if((i__15006_15750 < count__15005_15749)){
var child_struct_15752 = chunk__15004_15748.cljs$core$IIndexed$_nth$arity$2(null,i__15006_15750);
if((!((child_struct_15752 == null)))){
if(typeof child_struct_15752 === 'string'){
var text_15754 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_15754),child_struct_15752].join(''));
} else {
var children_15755 = shadow.dom.svg_node(child_struct_15752);
if(cljs.core.seq_QMARK_(children_15755)){
var seq__15057_15756 = cljs.core.seq(children_15755);
var chunk__15059_15757 = null;
var count__15060_15758 = (0);
var i__15061_15759 = (0);
while(true){
if((i__15061_15759 < count__15060_15758)){
var child_15761 = chunk__15059_15757.cljs$core$IIndexed$_nth$arity$2(null,i__15061_15759);
if(cljs.core.truth_(child_15761)){
node.appendChild(child_15761);


var G__15764 = seq__15057_15756;
var G__15765 = chunk__15059_15757;
var G__15766 = count__15060_15758;
var G__15767 = (i__15061_15759 + (1));
seq__15057_15756 = G__15764;
chunk__15059_15757 = G__15765;
count__15060_15758 = G__15766;
i__15061_15759 = G__15767;
continue;
} else {
var G__15769 = seq__15057_15756;
var G__15770 = chunk__15059_15757;
var G__15771 = count__15060_15758;
var G__15772 = (i__15061_15759 + (1));
seq__15057_15756 = G__15769;
chunk__15059_15757 = G__15770;
count__15060_15758 = G__15771;
i__15061_15759 = G__15772;
continue;
}
} else {
var temp__5804__auto___15773 = cljs.core.seq(seq__15057_15756);
if(temp__5804__auto___15773){
var seq__15057_15774__$1 = temp__5804__auto___15773;
if(cljs.core.chunked_seq_QMARK_(seq__15057_15774__$1)){
var c__5525__auto___15775 = cljs.core.chunk_first(seq__15057_15774__$1);
var G__15776 = cljs.core.chunk_rest(seq__15057_15774__$1);
var G__15777 = c__5525__auto___15775;
var G__15778 = cljs.core.count(c__5525__auto___15775);
var G__15779 = (0);
seq__15057_15756 = G__15776;
chunk__15059_15757 = G__15777;
count__15060_15758 = G__15778;
i__15061_15759 = G__15779;
continue;
} else {
var child_15780 = cljs.core.first(seq__15057_15774__$1);
if(cljs.core.truth_(child_15780)){
node.appendChild(child_15780);


var G__15783 = cljs.core.next(seq__15057_15774__$1);
var G__15784 = null;
var G__15785 = (0);
var G__15786 = (0);
seq__15057_15756 = G__15783;
chunk__15059_15757 = G__15784;
count__15060_15758 = G__15785;
i__15061_15759 = G__15786;
continue;
} else {
var G__15788 = cljs.core.next(seq__15057_15774__$1);
var G__15789 = null;
var G__15790 = (0);
var G__15791 = (0);
seq__15057_15756 = G__15788;
chunk__15059_15757 = G__15789;
count__15060_15758 = G__15790;
i__15061_15759 = G__15791;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_15755);
}
}


var G__15798 = seq__15002_15747;
var G__15799 = chunk__15004_15748;
var G__15800 = count__15005_15749;
var G__15801 = (i__15006_15750 + (1));
seq__15002_15747 = G__15798;
chunk__15004_15748 = G__15799;
count__15005_15749 = G__15800;
i__15006_15750 = G__15801;
continue;
} else {
var G__15802 = seq__15002_15747;
var G__15803 = chunk__15004_15748;
var G__15804 = count__15005_15749;
var G__15805 = (i__15006_15750 + (1));
seq__15002_15747 = G__15802;
chunk__15004_15748 = G__15803;
count__15005_15749 = G__15804;
i__15006_15750 = G__15805;
continue;
}
} else {
var temp__5804__auto___15806 = cljs.core.seq(seq__15002_15747);
if(temp__5804__auto___15806){
var seq__15002_15809__$1 = temp__5804__auto___15806;
if(cljs.core.chunked_seq_QMARK_(seq__15002_15809__$1)){
var c__5525__auto___15811 = cljs.core.chunk_first(seq__15002_15809__$1);
var G__15812 = cljs.core.chunk_rest(seq__15002_15809__$1);
var G__15813 = c__5525__auto___15811;
var G__15814 = cljs.core.count(c__5525__auto___15811);
var G__15815 = (0);
seq__15002_15747 = G__15812;
chunk__15004_15748 = G__15813;
count__15005_15749 = G__15814;
i__15006_15750 = G__15815;
continue;
} else {
var child_struct_15816 = cljs.core.first(seq__15002_15809__$1);
if((!((child_struct_15816 == null)))){
if(typeof child_struct_15816 === 'string'){
var text_15818 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_15818),child_struct_15816].join(''));
} else {
var children_15819 = shadow.dom.svg_node(child_struct_15816);
if(cljs.core.seq_QMARK_(children_15819)){
var seq__15088_15820 = cljs.core.seq(children_15819);
var chunk__15090_15821 = null;
var count__15091_15822 = (0);
var i__15092_15823 = (0);
while(true){
if((i__15092_15823 < count__15091_15822)){
var child_15824 = chunk__15090_15821.cljs$core$IIndexed$_nth$arity$2(null,i__15092_15823);
if(cljs.core.truth_(child_15824)){
node.appendChild(child_15824);


var G__15826 = seq__15088_15820;
var G__15827 = chunk__15090_15821;
var G__15828 = count__15091_15822;
var G__15829 = (i__15092_15823 + (1));
seq__15088_15820 = G__15826;
chunk__15090_15821 = G__15827;
count__15091_15822 = G__15828;
i__15092_15823 = G__15829;
continue;
} else {
var G__15830 = seq__15088_15820;
var G__15831 = chunk__15090_15821;
var G__15832 = count__15091_15822;
var G__15833 = (i__15092_15823 + (1));
seq__15088_15820 = G__15830;
chunk__15090_15821 = G__15831;
count__15091_15822 = G__15832;
i__15092_15823 = G__15833;
continue;
}
} else {
var temp__5804__auto___15835__$1 = cljs.core.seq(seq__15088_15820);
if(temp__5804__auto___15835__$1){
var seq__15088_15836__$1 = temp__5804__auto___15835__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15088_15836__$1)){
var c__5525__auto___15837 = cljs.core.chunk_first(seq__15088_15836__$1);
var G__15839 = cljs.core.chunk_rest(seq__15088_15836__$1);
var G__15840 = c__5525__auto___15837;
var G__15841 = cljs.core.count(c__5525__auto___15837);
var G__15842 = (0);
seq__15088_15820 = G__15839;
chunk__15090_15821 = G__15840;
count__15091_15822 = G__15841;
i__15092_15823 = G__15842;
continue;
} else {
var child_15843 = cljs.core.first(seq__15088_15836__$1);
if(cljs.core.truth_(child_15843)){
node.appendChild(child_15843);


var G__15846 = cljs.core.next(seq__15088_15836__$1);
var G__15847 = null;
var G__15848 = (0);
var G__15849 = (0);
seq__15088_15820 = G__15846;
chunk__15090_15821 = G__15847;
count__15091_15822 = G__15848;
i__15092_15823 = G__15849;
continue;
} else {
var G__15851 = cljs.core.next(seq__15088_15836__$1);
var G__15852 = null;
var G__15853 = (0);
var G__15854 = (0);
seq__15088_15820 = G__15851;
chunk__15090_15821 = G__15852;
count__15091_15822 = G__15853;
i__15092_15823 = G__15854;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_15819);
}
}


var G__15855 = cljs.core.next(seq__15002_15809__$1);
var G__15856 = null;
var G__15857 = (0);
var G__15858 = (0);
seq__15002_15747 = G__15855;
chunk__15004_15748 = G__15856;
count__15005_15749 = G__15857;
i__15006_15750 = G__15858;
continue;
} else {
var G__15859 = cljs.core.next(seq__15002_15809__$1);
var G__15860 = null;
var G__15861 = (0);
var G__15862 = (0);
seq__15002_15747 = G__15859;
chunk__15004_15748 = G__15860;
count__15005_15749 = G__15861;
i__15006_15750 = G__15862;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15870 = arguments.length;
var i__5727__auto___15871 = (0);
while(true){
if((i__5727__auto___15871 < len__5726__auto___15870)){
args__5732__auto__.push((arguments[i__5727__auto___15871]));

var G__15872 = (i__5727__auto___15871 + (1));
i__5727__auto___15871 = G__15872;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq15126){
var G__15127 = cljs.core.first(seq15126);
var seq15126__$1 = cljs.core.next(seq15126);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15127,seq15126__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
