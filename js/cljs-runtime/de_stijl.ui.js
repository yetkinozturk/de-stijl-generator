goog.provide('de_stijl.ui');
de_stijl.ui.by_id = (function de_stijl$ui$by_id(id){
return document.getElementById(id);
});
de_stijl.ui.set_text_BANG_ = (function de_stijl$ui$set_text_BANG_(id,txt){
return (de_stijl.ui.by_id(id).textContent = txt);
});
/**
 * Create a DOM element with optional attrs map and children.
 */
de_stijl.ui.el = (function de_stijl$ui$el(var_args){
var G__17162 = arguments.length;
switch (G__17162) {
case 1:
return de_stijl.ui.el.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return de_stijl.ui.el.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return de_stijl.ui.el.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(de_stijl.ui.el.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return de_stijl.ui.el.cljs$core$IFn$_invoke$arity$3(tag,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY);
}));

(de_stijl.ui.el.cljs$core$IFn$_invoke$arity$2 = (function (tag,attrs){
return de_stijl.ui.el.cljs$core$IFn$_invoke$arity$3(tag,attrs,cljs.core.PersistentVector.EMPTY);
}));

(de_stijl.ui.el.cljs$core$IFn$_invoke$arity$3 = (function (tag,attrs,children){
var node = document.createElement(tag);
var seq__17168_17989 = cljs.core.seq(attrs);
var chunk__17169_17990 = null;
var count__17170_17991 = (0);
var i__17171_17992 = (0);
while(true){
if((i__17171_17992 < count__17170_17991)){
var vec__17215_17993 = chunk__17169_17990.cljs$core$IIndexed$_nth$arity$2(null,i__17171_17992);
var k_17994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17215_17993,(0),null);
var v_17995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17215_17993,(1),null);
var G__17223_17996 = k_17994;
var G__17223_17997__$1 = (((G__17223_17996 instanceof cljs.core.Keyword))?G__17223_17996.fqn:null);
switch (G__17223_17997__$1) {
case "class":
(node.className = v_17995);

break;
case "style":
(node.style.cssText = v_17995);

break;
case "title":
node.setAttribute("title",v_17995);

break;
case "type":
node.setAttribute("type",v_17995);

break;
case "value":
(node.value = v_17995);

break;
case "min":
node.setAttribute("min",v_17995);

break;
case "max":
node.setAttribute("max",v_17995);

break;
case "step":
node.setAttribute("step",v_17995);

break;
case "data-color":
node.setAttribute("data-color",v_17995);

break;
default:

}


var G__18000 = seq__17168_17989;
var G__18001 = chunk__17169_17990;
var G__18002 = count__17170_17991;
var G__18003 = (i__17171_17992 + (1));
seq__17168_17989 = G__18000;
chunk__17169_17990 = G__18001;
count__17170_17991 = G__18002;
i__17171_17992 = G__18003;
continue;
} else {
var temp__5804__auto___18005 = cljs.core.seq(seq__17168_17989);
if(temp__5804__auto___18005){
var seq__17168_18007__$1 = temp__5804__auto___18005;
if(cljs.core.chunked_seq_QMARK_(seq__17168_18007__$1)){
var c__5525__auto___18008 = cljs.core.chunk_first(seq__17168_18007__$1);
var G__18009 = cljs.core.chunk_rest(seq__17168_18007__$1);
var G__18010 = c__5525__auto___18008;
var G__18011 = cljs.core.count(c__5525__auto___18008);
var G__18012 = (0);
seq__17168_17989 = G__18009;
chunk__17169_17990 = G__18010;
count__17170_17991 = G__18011;
i__17171_17992 = G__18012;
continue;
} else {
var vec__17250_18014 = cljs.core.first(seq__17168_18007__$1);
var k_18015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17250_18014,(0),null);
var v_18016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17250_18014,(1),null);
var G__17258_18017 = k_18015;
var G__17258_18018__$1 = (((G__17258_18017 instanceof cljs.core.Keyword))?G__17258_18017.fqn:null);
switch (G__17258_18018__$1) {
case "class":
(node.className = v_18016);

break;
case "style":
(node.style.cssText = v_18016);

break;
case "title":
node.setAttribute("title",v_18016);

break;
case "type":
node.setAttribute("type",v_18016);

break;
case "value":
(node.value = v_18016);

break;
case "min":
node.setAttribute("min",v_18016);

break;
case "max":
node.setAttribute("max",v_18016);

break;
case "step":
node.setAttribute("step",v_18016);

break;
case "data-color":
node.setAttribute("data-color",v_18016);

break;
default:

}


var G__18022 = cljs.core.next(seq__17168_18007__$1);
var G__18023 = null;
var G__18024 = (0);
var G__18025 = (0);
seq__17168_17989 = G__18022;
chunk__17169_17990 = G__18023;
count__17170_17991 = G__18024;
i__17171_17992 = G__18025;
continue;
}
} else {
}
}
break;
}

var seq__17270_18026 = cljs.core.seq(children);
var chunk__17271_18027 = null;
var count__17272_18028 = (0);
var i__17273_18029 = (0);
while(true){
if((i__17273_18029 < count__17272_18028)){
var child_18031 = chunk__17271_18027.cljs$core$IIndexed$_nth$arity$2(null,i__17273_18029);
if(typeof child_18031 === 'string'){
node.appendChild(document.createTextNode(child_18031));
} else {
node.appendChild(child_18031);
}


var G__18032 = seq__17270_18026;
var G__18033 = chunk__17271_18027;
var G__18034 = count__17272_18028;
var G__18035 = (i__17273_18029 + (1));
seq__17270_18026 = G__18032;
chunk__17271_18027 = G__18033;
count__17272_18028 = G__18034;
i__17273_18029 = G__18035;
continue;
} else {
var temp__5804__auto___18036 = cljs.core.seq(seq__17270_18026);
if(temp__5804__auto___18036){
var seq__17270_18037__$1 = temp__5804__auto___18036;
if(cljs.core.chunked_seq_QMARK_(seq__17270_18037__$1)){
var c__5525__auto___18038 = cljs.core.chunk_first(seq__17270_18037__$1);
var G__18039 = cljs.core.chunk_rest(seq__17270_18037__$1);
var G__18040 = c__5525__auto___18038;
var G__18041 = cljs.core.count(c__5525__auto___18038);
var G__18042 = (0);
seq__17270_18026 = G__18039;
chunk__17271_18027 = G__18040;
count__17272_18028 = G__18041;
i__17273_18029 = G__18042;
continue;
} else {
var child_18043 = cljs.core.first(seq__17270_18037__$1);
if(typeof child_18043 === 'string'){
node.appendChild(document.createTextNode(child_18043));
} else {
node.appendChild(child_18043);
}


var G__18044 = cljs.core.next(seq__17270_18037__$1);
var G__18045 = null;
var G__18046 = (0);
var G__18047 = (0);
seq__17270_18026 = G__18044;
chunk__17271_18027 = G__18045;
count__17272_18028 = G__18046;
i__17273_18029 = G__18047;
continue;
}
} else {
}
}
break;
}

return node;
}));

(de_stijl.ui.el.cljs$lang$maxFixedArity = 3);

de_stijl.ui.on_BANG_ = (function de_stijl$ui$on_BANG_(node,event,f){
node.addEventListener(event,f);

return node;
});
de_stijl.ui.canvas_size = (700);
de_stijl.ui.get_canvas = (function de_stijl$ui$get_canvas(){
return de_stijl.ui.by_id("canvas");
});
de_stijl.ui.get_ctx = (function de_stijl$ui$get_ctx(){
return de_stijl.ui.get_canvas().getContext("2d");
});
de_stijl.ui.render_BANG_ = (function de_stijl$ui$render_BANG_(){
var s = cljs.core.deref(de_stijl.state.app_state);
return de_stijl.draw.draw_BANG_(de_stijl.ui.get_ctx(),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"size","size",1098693007),de_stijl.ui.canvas_size));
});
/**
 * Render colour swatches into `container-id`.
 * `state-key`    — which key in app-state to update (:bg or :line-color)
 * `container-id` — id of the wrapping div
 */
de_stijl.ui.build_swatches_BANG_ = (function de_stijl$ui$build_swatches_BANG_(container_id,state_key){
var container = de_stijl.ui.by_id(container_id);
(container.innerHTML = "");

var seq__17429 = cljs.core.seq(de_stijl.state.swatches);
var chunk__17431 = null;
var count__17433 = (0);
var i__17434 = (0);
while(true){
if((i__17434 < count__17433)){
var color = chunk__17431.cljs$core$IIndexed$_nth$arity$2(null,i__17434);
var active_QMARK__18054 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(de_stijl.state.app_state),state_key));
var swatch_18055 = de_stijl.ui.el.cljs$core$IFn$_invoke$arity$2("div",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["bg-swatch",((active_QMARK__18054)?" active":null)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),["background:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)].join(''),new cljs.core.Keyword(null,"data-color","data-color",-1132407184),color], null));
de_stijl.ui.on_BANG_(swatch_18055,"click",((function (seq__17429,chunk__17431,count__17433,i__17434,active_QMARK__18054,swatch_18055,color,container){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(de_stijl.state.app_state,cljs.core.assoc,state_key,color);

var seq__17551_18056 = cljs.core.seq(container.querySelectorAll(".bg-swatch"));
var chunk__17552_18057 = null;
var count__17553_18058 = (0);
var i__17554_18059 = (0);
while(true){
if((i__17554_18059 < count__17553_18058)){
var s_18063 = chunk__17552_18057.cljs$core$IIndexed$_nth$arity$2(null,i__17554_18059);
s_18063.classList.remove("active");


var G__18064 = seq__17551_18056;
var G__18065 = chunk__17552_18057;
var G__18066 = count__17553_18058;
var G__18067 = (i__17554_18059 + (1));
seq__17551_18056 = G__18064;
chunk__17552_18057 = G__18065;
count__17553_18058 = G__18066;
i__17554_18059 = G__18067;
continue;
} else {
var temp__5804__auto___18068 = cljs.core.seq(seq__17551_18056);
if(temp__5804__auto___18068){
var seq__17551_18071__$1 = temp__5804__auto___18068;
if(cljs.core.chunked_seq_QMARK_(seq__17551_18071__$1)){
var c__5525__auto___18072 = cljs.core.chunk_first(seq__17551_18071__$1);
var G__18075 = cljs.core.chunk_rest(seq__17551_18071__$1);
var G__18076 = c__5525__auto___18072;
var G__18077 = cljs.core.count(c__5525__auto___18072);
var G__18078 = (0);
seq__17551_18056 = G__18075;
chunk__17552_18057 = G__18076;
count__17553_18058 = G__18077;
i__17554_18059 = G__18078;
continue;
} else {
var s_18079 = cljs.core.first(seq__17551_18071__$1);
s_18079.classList.remove("active");


var G__18082 = cljs.core.next(seq__17551_18071__$1);
var G__18083 = null;
var G__18084 = (0);
var G__18085 = (0);
seq__17551_18056 = G__18082;
chunk__17552_18057 = G__18083;
count__17553_18058 = G__18084;
i__17554_18059 = G__18085;
continue;
}
} else {
}
}
break;
}

swatch_18055.classList.add("active");

return de_stijl.ui.render_BANG_();
});})(seq__17429,chunk__17431,count__17433,i__17434,active_QMARK__18054,swatch_18055,color,container))
);

container.appendChild(swatch_18055);


var G__18089 = seq__17429;
var G__18090 = chunk__17431;
var G__18091 = count__17433;
var G__18092 = (i__17434 + (1));
seq__17429 = G__18089;
chunk__17431 = G__18090;
count__17433 = G__18091;
i__17434 = G__18092;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17429);
if(temp__5804__auto__){
var seq__17429__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17429__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17429__$1);
var G__18098 = cljs.core.chunk_rest(seq__17429__$1);
var G__18099 = c__5525__auto__;
var G__18100 = cljs.core.count(c__5525__auto__);
var G__18101 = (0);
seq__17429 = G__18098;
chunk__17431 = G__18099;
count__17433 = G__18100;
i__17434 = G__18101;
continue;
} else {
var color = cljs.core.first(seq__17429__$1);
var active_QMARK__18115 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(de_stijl.state.app_state),state_key));
var swatch_18116 = de_stijl.ui.el.cljs$core$IFn$_invoke$arity$2("div",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["bg-swatch",((active_QMARK__18115)?" active":null)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),["background:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)].join(''),new cljs.core.Keyword(null,"data-color","data-color",-1132407184),color], null));
de_stijl.ui.on_BANG_(swatch_18116,"click",((function (seq__17429,chunk__17431,count__17433,i__17434,active_QMARK__18115,swatch_18116,color,seq__17429__$1,temp__5804__auto__,container){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(de_stijl.state.app_state,cljs.core.assoc,state_key,color);

var seq__17570_18123 = cljs.core.seq(container.querySelectorAll(".bg-swatch"));
var chunk__17571_18124 = null;
var count__17572_18125 = (0);
var i__17573_18126 = (0);
while(true){
if((i__17573_18126 < count__17572_18125)){
var s_18127 = chunk__17571_18124.cljs$core$IIndexed$_nth$arity$2(null,i__17573_18126);
s_18127.classList.remove("active");


var G__18128 = seq__17570_18123;
var G__18129 = chunk__17571_18124;
var G__18130 = count__17572_18125;
var G__18131 = (i__17573_18126 + (1));
seq__17570_18123 = G__18128;
chunk__17571_18124 = G__18129;
count__17572_18125 = G__18130;
i__17573_18126 = G__18131;
continue;
} else {
var temp__5804__auto___18132__$1 = cljs.core.seq(seq__17570_18123);
if(temp__5804__auto___18132__$1){
var seq__17570_18133__$1 = temp__5804__auto___18132__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17570_18133__$1)){
var c__5525__auto___18134 = cljs.core.chunk_first(seq__17570_18133__$1);
var G__18135 = cljs.core.chunk_rest(seq__17570_18133__$1);
var G__18136 = c__5525__auto___18134;
var G__18137 = cljs.core.count(c__5525__auto___18134);
var G__18138 = (0);
seq__17570_18123 = G__18135;
chunk__17571_18124 = G__18136;
count__17572_18125 = G__18137;
i__17573_18126 = G__18138;
continue;
} else {
var s_18139 = cljs.core.first(seq__17570_18133__$1);
s_18139.classList.remove("active");


var G__18140 = cljs.core.next(seq__17570_18133__$1);
var G__18141 = null;
var G__18142 = (0);
var G__18143 = (0);
seq__17570_18123 = G__18140;
chunk__17571_18124 = G__18141;
count__17572_18125 = G__18142;
i__17573_18126 = G__18143;
continue;
}
} else {
}
}
break;
}

swatch_18116.classList.add("active");

return de_stijl.ui.render_BANG_();
});})(seq__17429,chunk__17431,count__17433,i__17434,active_QMARK__18115,swatch_18116,color,seq__17429__$1,temp__5804__auto__,container))
);

container.appendChild(swatch_18116);


var G__18146 = cljs.core.next(seq__17429__$1);
var G__18147 = null;
var G__18148 = (0);
var G__18149 = (0);
seq__17429 = G__18146;
chunk__17431 = G__18147;
count__17433 = G__18148;
i__17434 = G__18149;
continue;
}
} else {
return null;
}
}
break;
}
});
de_stijl.ui.next_suggestion = (function de_stijl$ui$next_suggestion(){
var current = cljs.core.set(new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(de_stijl.state.app_state)));
var or__5002__auto__ = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(current,de_stijl.state.palette_suggestions));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "#888888";
}
});
de_stijl.ui.render_palette_BANG_ = (function de_stijl$ui$render_palette_BANG_(){
var list_el = de_stijl.ui.by_id("palette-list");
(list_el.innerHTML = "");

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,color){
var slot = de_stijl.ui.el.cljs$core$IFn$_invoke$arity$2("div",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"color-slot",new cljs.core.Keyword(null,"style","style",-496642736),["background:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)].join('')], null));
var inp = de_stijl.ui.el.cljs$core$IFn$_invoke$arity$2("input",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"color",new cljs.core.Keyword(null,"value","value",305978217),color], null));
var label = de_stijl.ui.el.cljs$core$IFn$_invoke$arity$3("span",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"color-label"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [color], null));
var rm = de_stijl.ui.el.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"color-remove",new cljs.core.Keyword(null,"title","title",636505583),"Remove"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u00D7"], null));
var row = de_stijl.ui.el.cljs$core$IFn$_invoke$arity$2("div",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"palette-row"], null));
de_stijl.ui.on_BANG_(inp,"input",(function (e){
var v = e.target.value;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(de_stijl.state.app_state,cljs.core.update,new cljs.core.Keyword(null,"colors","colors",1157174732),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i,v], 0));

(slot.style.background = v);

(label.textContent = v);

return de_stijl.ui.render_BANG_();
}));

de_stijl.ui.on_BANG_(rm,"click",(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(de_stijl.state.app_state,cljs.core.update,new cljs.core.Keyword(null,"colors","colors",1157174732),(function (cs){
return cljs.core.vec(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__17620_SHARP_,p2__17622_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__17620_SHARP_,i)){
return p2__17622_SHARP_;
} else {
return null;
}
}),cs));
}));

(de_stijl.ui.render_palette_BANG_.cljs$core$IFn$_invoke$arity$0 ? de_stijl.ui.render_palette_BANG_.cljs$core$IFn$_invoke$arity$0() : de_stijl.ui.render_palette_BANG_.call(null));

return de_stijl.ui.render_BANG_();
}));

slot.appendChild(inp);

var seq__17640_18174 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,label,rm], null));
var chunk__17641_18175 = null;
var count__17642_18176 = (0);
var i__17643_18177 = (0);
while(true){
if((i__17643_18177 < count__17642_18176)){
var child_18179 = chunk__17641_18175.cljs$core$IIndexed$_nth$arity$2(null,i__17643_18177);
row.appendChild(child_18179);


var G__18181 = seq__17640_18174;
var G__18182 = chunk__17641_18175;
var G__18183 = count__17642_18176;
var G__18184 = (i__17643_18177 + (1));
seq__17640_18174 = G__18181;
chunk__17641_18175 = G__18182;
count__17642_18176 = G__18183;
i__17643_18177 = G__18184;
continue;
} else {
var temp__5804__auto___18185 = cljs.core.seq(seq__17640_18174);
if(temp__5804__auto___18185){
var seq__17640_18187__$1 = temp__5804__auto___18185;
if(cljs.core.chunked_seq_QMARK_(seq__17640_18187__$1)){
var c__5525__auto___18189 = cljs.core.chunk_first(seq__17640_18187__$1);
var G__18190 = cljs.core.chunk_rest(seq__17640_18187__$1);
var G__18191 = c__5525__auto___18189;
var G__18192 = cljs.core.count(c__5525__auto___18189);
var G__18193 = (0);
seq__17640_18174 = G__18190;
chunk__17641_18175 = G__18191;
count__17642_18176 = G__18192;
i__17643_18177 = G__18193;
continue;
} else {
var child_18195 = cljs.core.first(seq__17640_18187__$1);
row.appendChild(child_18195);


var G__18197 = cljs.core.next(seq__17640_18187__$1);
var G__18198 = null;
var G__18199 = (0);
var G__18200 = (0);
seq__17640_18174 = G__18197;
chunk__17641_18175 = G__18198;
count__17642_18176 = G__18199;
i__17643_18177 = G__18200;
continue;
}
} else {
}
}
break;
}

return list_el.appendChild(row);
}),new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(de_stijl.state.app_state))));
});
de_stijl.ui.build_presets_BANG_ = (function de_stijl$ui$build_presets_BANG_(){
var container = de_stijl.ui.by_id("presets");
(container.innerHTML = "");

var seq__17666 = cljs.core.seq(de_stijl.state.presets);
var chunk__17667 = null;
var count__17668 = (0);
var i__17669 = (0);
while(true){
if((i__17669 < count__17668)){
var map__17766 = chunk__17667.cljs$core$IIndexed$_nth$arity$2(null,i__17669);
var map__17766__$1 = cljs.core.__destructure_map(map__17766);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17766__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var bg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17766__$1,new cljs.core.Keyword(null,"bg","bg",-206688421));
var colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17766__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
var dots_18202 = de_stijl.ui.el.cljs$core$IFn$_invoke$arity$2("div",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"preset-dots"], null));
var lbl_18203 = de_stijl.ui.el.cljs$core$IFn$_invoke$arity$3("span",cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null));
var btn_18204 = de_stijl.ui.el.cljs$core$IFn$_invoke$arity$2("button",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"preset-btn"], null));
var seq__17772_18207 = cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),colors));
var chunk__17773_18208 = null;
var count__17774_18209 = (0);
var i__17775_18210 = (0);
while(true){
if((i__17775_18210 < count__17774_18209)){
var c_18211 = chunk__17773_18208.cljs$core$IIndexed$_nth$arity$2(null,i__17775_18210);
dots_18202.appendChild(de_stijl.ui.el.cljs$core$IFn$_invoke$arity$2("div",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"preset-dot",new cljs.core.Keyword(null,"style","style",-496642736),["background:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_18211)].join('')], null)));


var G__18217 = seq__17772_18207;
var G__18218 = chunk__17773_18208;
var G__18219 = count__17774_18209;
var G__18220 = (i__17775_18210 + (1));
seq__17772_18207 = G__18217;
chunk__17773_18208 = G__18218;
count__17774_18209 = G__18219;
i__17775_18210 = G__18220;
continue;
} else {
var temp__5804__auto___18221 = cljs.core.seq(seq__17772_18207);
if(temp__5804__auto___18221){
var seq__17772_18223__$1 = temp__5804__auto___18221;
if(cljs.core.chunked_seq_QMARK_(seq__17772_18223__$1)){
var c__5525__auto___18225 = cljs.core.chunk_first(seq__17772_18223__$1);
var G__18226 = cljs.core.chunk_rest(seq__17772_18223__$1);
var G__18227 = c__5525__auto___18225;
var G__18228 = cljs.core.count(c__5525__auto___18225);
var G__18229 = (0);
seq__17772_18207 = G__18226;
chunk__17773_18208 = G__18227;
count__17774_18209 = G__18228;
i__17775_18210 = G__18229;
continue;
} else {
var c_18230 = cljs.core.first(seq__17772_18223__$1);
dots_18202.appendChild(de_stijl.ui.el.cljs$core$IFn$_invoke$arity$2("div",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"preset-dot",new cljs.core.Keyword(null,"style","style",-496642736),["background:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_18230)].join('')], null)));


var G__18231 = cljs.core.next(seq__17772_18223__$1);
var G__18232 = null;
var G__18233 = (0);
var G__18234 = (0);
seq__17772_18207 = G__18231;
chunk__17773_18208 = G__18232;
count__17774_18209 = G__18233;
i__17775_18210 = G__18234;
continue;
}
} else {
}
}
break;
}

btn_18204.appendChild(dots_18202);

btn_18204.appendChild(lbl_18203);

de_stijl.ui.on_BANG_(btn_18204,"click",((function (seq__17666,chunk__17667,count__17668,i__17669,dots_18202,lbl_18203,btn_18204,map__17766,map__17766__$1,name,bg,colors,container){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(de_stijl.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"bg","bg",-206688421),bg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"colors","colors",1157174732),cljs.core.vec(colors)], 0));

de_stijl.ui.build_swatches_BANG_("bg-swatches",new cljs.core.Keyword(null,"bg","bg",-206688421));

de_stijl.ui.render_palette_BANG_();

return de_stijl.ui.render_BANG_();
});})(seq__17666,chunk__17667,count__17668,i__17669,dots_18202,lbl_18203,btn_18204,map__17766,map__17766__$1,name,bg,colors,container))
);

container.appendChild(btn_18204);


var G__18247 = seq__17666;
var G__18248 = chunk__17667;
var G__18249 = count__17668;
var G__18250 = (i__17669 + (1));
seq__17666 = G__18247;
chunk__17667 = G__18248;
count__17668 = G__18249;
i__17669 = G__18250;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17666);
if(temp__5804__auto__){
var seq__17666__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17666__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17666__$1);
var G__18253 = cljs.core.chunk_rest(seq__17666__$1);
var G__18254 = c__5525__auto__;
var G__18255 = cljs.core.count(c__5525__auto__);
var G__18256 = (0);
seq__17666 = G__18253;
chunk__17667 = G__18254;
count__17668 = G__18255;
i__17669 = G__18256;
continue;
} else {
var map__17808 = cljs.core.first(seq__17666__$1);
var map__17808__$1 = cljs.core.__destructure_map(map__17808);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17808__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var bg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17808__$1,new cljs.core.Keyword(null,"bg","bg",-206688421));
var colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17808__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
var dots_18257 = de_stijl.ui.el.cljs$core$IFn$_invoke$arity$2("div",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"preset-dots"], null));
var lbl_18258 = de_stijl.ui.el.cljs$core$IFn$_invoke$arity$3("span",cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null));
var btn_18259 = de_stijl.ui.el.cljs$core$IFn$_invoke$arity$2("button",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"preset-btn"], null));
var seq__17826_18264 = cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),colors));
var chunk__17827_18265 = null;
var count__17828_18266 = (0);
var i__17829_18267 = (0);
while(true){
if((i__17829_18267 < count__17828_18266)){
var c_18270 = chunk__17827_18265.cljs$core$IIndexed$_nth$arity$2(null,i__17829_18267);
dots_18257.appendChild(de_stijl.ui.el.cljs$core$IFn$_invoke$arity$2("div",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"preset-dot",new cljs.core.Keyword(null,"style","style",-496642736),["background:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_18270)].join('')], null)));


var G__18273 = seq__17826_18264;
var G__18274 = chunk__17827_18265;
var G__18275 = count__17828_18266;
var G__18276 = (i__17829_18267 + (1));
seq__17826_18264 = G__18273;
chunk__17827_18265 = G__18274;
count__17828_18266 = G__18275;
i__17829_18267 = G__18276;
continue;
} else {
var temp__5804__auto___18277__$1 = cljs.core.seq(seq__17826_18264);
if(temp__5804__auto___18277__$1){
var seq__17826_18279__$1 = temp__5804__auto___18277__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17826_18279__$1)){
var c__5525__auto___18280 = cljs.core.chunk_first(seq__17826_18279__$1);
var G__18281 = cljs.core.chunk_rest(seq__17826_18279__$1);
var G__18282 = c__5525__auto___18280;
var G__18283 = cljs.core.count(c__5525__auto___18280);
var G__18284 = (0);
seq__17826_18264 = G__18281;
chunk__17827_18265 = G__18282;
count__17828_18266 = G__18283;
i__17829_18267 = G__18284;
continue;
} else {
var c_18285 = cljs.core.first(seq__17826_18279__$1);
dots_18257.appendChild(de_stijl.ui.el.cljs$core$IFn$_invoke$arity$2("div",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"preset-dot",new cljs.core.Keyword(null,"style","style",-496642736),["background:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_18285)].join('')], null)));


var G__18288 = cljs.core.next(seq__17826_18279__$1);
var G__18289 = null;
var G__18290 = (0);
var G__18291 = (0);
seq__17826_18264 = G__18288;
chunk__17827_18265 = G__18289;
count__17828_18266 = G__18290;
i__17829_18267 = G__18291;
continue;
}
} else {
}
}
break;
}

btn_18259.appendChild(dots_18257);

btn_18259.appendChild(lbl_18258);

de_stijl.ui.on_BANG_(btn_18259,"click",((function (seq__17666,chunk__17667,count__17668,i__17669,dots_18257,lbl_18258,btn_18259,map__17808,map__17808__$1,name,bg,colors,seq__17666__$1,temp__5804__auto__,container){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(de_stijl.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"bg","bg",-206688421),bg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"colors","colors",1157174732),cljs.core.vec(colors)], 0));

de_stijl.ui.build_swatches_BANG_("bg-swatches",new cljs.core.Keyword(null,"bg","bg",-206688421));

de_stijl.ui.render_palette_BANG_();

return de_stijl.ui.render_BANG_();
});})(seq__17666,chunk__17667,count__17668,i__17669,dots_18257,lbl_18258,btn_18259,map__17808,map__17808__$1,name,bg,colors,seq__17666__$1,temp__5804__auto__,container))
);

container.appendChild(btn_18259);


var G__18293 = cljs.core.next(seq__17666__$1);
var G__18294 = null;
var G__18295 = (0);
var G__18296 = (0);
seq__17666 = G__18293;
chunk__17667 = G__18294;
count__17668 = G__18295;
i__17669 = G__18296;
continue;
}
} else {
return null;
}
}
break;
}
});
de_stijl.ui.wire_slider_BANG_ = (function de_stijl$ui$wire_slider_BANG_(id,state_key,display_id){
return de_stijl.ui.on_BANG_(de_stijl.ui.by_id(id),"input",(function (e){
var v = parseFloat(e.target.value);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(de_stijl.state.app_state,cljs.core.assoc,state_key,v);

de_stijl.ui.set_text_BANG_(display_id,cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));

return de_stijl.ui.render_BANG_();
}));
});
de_stijl.ui.wire_buttons_BANG_ = (function de_stijl$ui$wire_buttons_BANG_(){
de_stijl.ui.on_BANG_(de_stijl.ui.by_id("btn-add-color"),"click",(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(de_stijl.state.app_state,cljs.core.update,new cljs.core.Keyword(null,"colors","colors",1157174732),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([de_stijl.ui.next_suggestion()], 0));

de_stijl.ui.render_palette_BANG_();

return de_stijl.ui.render_BANG_();
}));

de_stijl.ui.on_BANG_(de_stijl.ui.by_id("btn-locations"),"click",(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(de_stijl.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"loc-seed","loc-seed",-2117808459),Math.random());

return de_stijl.ui.render_BANG_();
}));

de_stijl.ui.on_BANG_(de_stijl.ui.by_id("btn-proportions"),"click",(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(de_stijl.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"prop-seed","prop-seed",1031470068),Math.random());

return de_stijl.ui.render_BANG_();
}));

de_stijl.ui.on_BANG_(de_stijl.ui.by_id("btn-generate"),"click",(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(de_stijl.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"loc-seed","loc-seed",-2117808459),Math.random(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prop-seed","prop-seed",1031470068),Math.random()], 0));

return de_stijl.ui.render_BANG_();
}));

return de_stijl.ui.on_BANG_(de_stijl.ui.by_id("btn-save"),"click",(function (){
var scale = parseInt(de_stijl.ui.by_id("select-resolution").value);
var hi_size = (de_stijl.ui.canvas_size * scale);
var off_canvas = document.createElement("canvas");
var off_ctx = off_canvas.getContext("2d");
(off_canvas.width = hi_size);

(off_canvas.height = hi_size);

off_ctx.scale(scale,scale);

de_stijl.draw.draw_BANG_(off_ctx,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(de_stijl.state.app_state),new cljs.core.Keyword(null,"size","size",1098693007),de_stijl.ui.canvas_size));

var link = document.createElement("a");
(link.download = ["de-stijl-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hi_size),"px-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Date.now()),".png"].join(''));

(link.href = off_canvas.toDataURL("image/png"));

return link.click();
}));
});
de_stijl.ui.rand_seed = (function de_stijl$ui$rand_seed(){
return Math.random();
});
/**
 * A small random offset in [-max, max], used to nudge seeds slightly
 * each generation so changes feel organic rather than random.
 */
de_stijl.ui.small_delta = (function de_stijl$ui$small_delta(max){
return (((Math.random() * (2)) * max) - max);
});
if((typeof de_stijl !== 'undefined') && (typeof de_stijl.ui !== 'undefined') && (typeof de_stijl.ui.anim_state !== 'undefined')){
} else {
de_stijl.ui.anim_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"from-prop","from-prop",-1484208895),new cljs.core.Keyword(null,"macro-loc","macro-loc",-1066427932),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"macro-prop","macro-prop",772164711),new cljs.core.Keyword(null,"to-loc","to-loc",-371147063),new cljs.core.Keyword(null,"to-prop","to-prop",-1263150677),new cljs.core.Keyword(null,"playing?","playing?",-1884542863),new cljs.core.Keyword(null,"from-loc","from-loc",955088054),new cljs.core.Keyword(null,"gen-in-run","gen-in-run",-1942377219)],[de_stijl.ui.rand_seed(),de_stijl.ui.rand_seed(),null,de_stijl.ui.rand_seed(),de_stijl.ui.rand_seed(),de_stijl.ui.rand_seed(),false,de_stijl.ui.rand_seed(),(0)]));
}
/**
 * Pick new from/to seeds for the next generation.
 * If we've done 10 gens, randomize a new macro anchor first.
 */
de_stijl.ui.next_generation_BANG_ = (function de_stijl$ui$next_generation_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(de_stijl.ui.anim_state,(function (a){
var gen = new cljs.core.Keyword(null,"gen-in-run","gen-in-run",-1942377219).cljs$core$IFn$_invoke$arity$1(a);
var new_macro_QMARK_ = (gen >= (10));
var ml = ((new_macro_QMARK_)?de_stijl.ui.rand_seed():new cljs.core.Keyword(null,"macro-loc","macro-loc",-1066427932).cljs$core$IFn$_invoke$arity$1(a));
var mp = ((new_macro_QMARK_)?de_stijl.ui.rand_seed():new cljs.core.Keyword(null,"macro-prop","macro-prop",772164711).cljs$core$IFn$_invoke$arity$1(a));
var fl = new cljs.core.Keyword(null,"to-loc","to-loc",-371147063).cljs$core$IFn$_invoke$arity$1(a);
var fp = new cljs.core.Keyword(null,"to-prop","to-prop",-1263150677).cljs$core$IFn$_invoke$arity$1(a);
var tl = (function (){var x__5090__auto__ = (function (){var x__5087__auto__ = (ml + de_stijl.ui.small_delta(0.08));
var y__5088__auto__ = 0.0;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var y__5091__auto__ = 1.0;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
var tp = (function (){var x__5090__auto__ = (function (){var x__5087__auto__ = (mp + de_stijl.ui.small_delta(0.05));
var y__5088__auto__ = 0.0;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var y__5091__auto__ = 1.0;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(a,new cljs.core.Keyword(null,"gen-in-run","gen-in-run",-1942377219),((new_macro_QMARK_)?(1):(gen + (1))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"macro-loc","macro-loc",-1066427932),ml,new cljs.core.Keyword(null,"macro-prop","macro-prop",772164711),mp,new cljs.core.Keyword(null,"from-loc","from-loc",955088054),fl,new cljs.core.Keyword(null,"to-loc","to-loc",-371147063),tl,new cljs.core.Keyword(null,"from-prop","from-prop",-1484208895),fp,new cljs.core.Keyword(null,"to-prop","to-prop",-1263150677),tp], 0));
}));
});
de_stijl.ui.schedule_next_BANG_ = (function de_stijl$ui$schedule_next_BANG_(){
var secs = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"anim-speed","anim-speed",-82458848).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(de_stijl.state.app_state));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (10);
}
})();
var timer = setTimeout((function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"playing?","playing?",-1884542863).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(de_stijl.ui.anim_state)))){
de_stijl.ui.next_generation_BANG_();

var map__17944_18328 = cljs.core.deref(de_stijl.ui.anim_state);
var map__17944_18329__$1 = cljs.core.__destructure_map(map__17944_18328);
var to_loc_18330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17944_18329__$1,new cljs.core.Keyword(null,"to-loc","to-loc",-371147063));
var to_prop_18331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17944_18329__$1,new cljs.core.Keyword(null,"to-prop","to-prop",-1263150677));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(de_stijl.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"loc-seed","loc-seed",-2117808459),to_loc_18330,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prop-seed","prop-seed",1031470068),to_prop_18331], 0));

de_stijl.ui.render_BANG_();

return (de_stijl.ui.schedule_next_BANG_.cljs$core$IFn$_invoke$arity$0 ? de_stijl.ui.schedule_next_BANG_.cljs$core$IFn$_invoke$arity$0() : de_stijl.ui.schedule_next_BANG_.call(null));
} else {
return null;
}
}),(secs * (1000)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(de_stijl.ui.anim_state,cljs.core.assoc,new cljs.core.Keyword(null,"timer","timer",-1266967739),timer);
});
de_stijl.ui.set_playing_BANG_ = (function de_stijl$ui$set_playing_BANG_(playing_QMARK_){
var btn = de_stijl.ui.by_id("btn-playpause");
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(de_stijl.ui.anim_state,cljs.core.assoc,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),playing_QMARK_);

(btn.textContent = (cljs.core.truth_(playing_QMARK_)?"\u275A\u275A":"\u25B6"));

if(cljs.core.truth_(playing_QMARK_)){
return de_stijl.ui.schedule_next_BANG_();
} else {
clearTimeout(new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(de_stijl.ui.anim_state)));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(de_stijl.ui.anim_state,cljs.core.assoc,new cljs.core.Keyword(null,"timer","timer",-1266967739),null);
}
});
de_stijl.ui.wire_playpause_BANG_ = (function de_stijl$ui$wire_playpause_BANG_(){
return de_stijl.ui.on_BANG_(de_stijl.ui.by_id("btn-playpause"),"click",(function (){
return de_stijl.ui.set_playing_BANG_(cljs.core.not(new cljs.core.Keyword(null,"playing?","playing?",-1884542863).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(de_stijl.ui.anim_state))));
}));
});
de_stijl.ui.mount_BANG_ = (function de_stijl$ui$mount_BANG_(){
de_stijl.ui.build_swatches_BANG_("bg-swatches",new cljs.core.Keyword(null,"bg","bg",-206688421));

de_stijl.ui.build_swatches_BANG_("line-swatches",new cljs.core.Keyword(null,"line-color","line-color",1331573993));

de_stijl.ui.render_palette_BANG_();

de_stijl.ui.build_presets_BANG_();

de_stijl.ui.wire_slider_BANG_("slider-spacing",new cljs.core.Keyword(null,"spacing","spacing",204422175),"val-spacing");

de_stijl.ui.wire_slider_BANG_("slider-divisions",new cljs.core.Keyword(null,"divisions","divisions",-1442532790),"val-divisions");

de_stijl.ui.wire_slider_BANG_("slider-lineweight",new cljs.core.Keyword(null,"line-weight","line-weight",1717590509),"val-lineweight");

de_stijl.ui.wire_slider_BANG_("slider-density",new cljs.core.Keyword(null,"density","density",-1664155941),"val-density");

de_stijl.ui.wire_slider_BANG_("slider-center-pull",new cljs.core.Keyword(null,"center-pull","center-pull",-386551264),"val-center-pull");

de_stijl.ui.wire_slider_BANG_("slider-tilt",new cljs.core.Keyword(null,"tilt","tilt",-828681332),"val-tilt");

de_stijl.ui.wire_slider_BANG_("slider-aperture",new cljs.core.Keyword(null,"aperture","aperture",-1785896285),"val-aperture");

de_stijl.ui.wire_slider_BANG_("slider-anim-speed",new cljs.core.Keyword(null,"anim-speed","anim-speed",-82458848),"val-anim-speed");

de_stijl.ui.wire_buttons_BANG_();

de_stijl.ui.wire_playpause_BANG_();

de_stijl.ui.render_BANG_();

return console.log("De Stijl UI mounted");
});

//# sourceMappingURL=de_stijl.ui.js.map
