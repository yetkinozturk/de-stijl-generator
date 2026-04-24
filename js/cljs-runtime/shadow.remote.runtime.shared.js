goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__13588){
var map__13589 = p__13588;
var map__13589__$1 = cljs.core.__destructure_map(map__13589);
var runtime = map__13589__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13589__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_14132 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_14132)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__13604 = runtime;
var G__13605 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_14132);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__13604,G__13605) : shadow.remote.runtime.shared.process.call(null,G__13604,G__13605));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__13610,res){
var map__13611 = p__13610;
var map__13611__$1 = cljs.core.__destructure_map(map__13611);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13611__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13611__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__13614 = res;
var G__13614__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13614,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__13614);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13614__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__13614__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__13625 = arguments.length;
switch (G__13625) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__13655,msg,handlers,timeout_after_ms){
var map__13656 = p__13655;
var map__13656__$1 = cljs.core.__destructure_map(map__13656);
var runtime = map__13656__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13656__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___14176 = arguments.length;
var i__5727__auto___14177 = (0);
while(true){
if((i__5727__auto___14177 < len__5726__auto___14176)){
args__5732__auto__.push((arguments[i__5727__auto___14177]));

var G__14180 = (i__5727__auto___14177 + (1));
i__5727__auto___14177 = G__14180;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__13694,ev,args){
var map__13699 = p__13694;
var map__13699__$1 = cljs.core.__destructure_map(map__13699);
var runtime = map__13699__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13699__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__13703 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__13706 = null;
var count__13707 = (0);
var i__13708 = (0);
while(true){
if((i__13708 < count__13707)){
var ext = chunk__13706.cljs$core$IIndexed$_nth$arity$2(null,i__13708);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14200 = seq__13703;
var G__14201 = chunk__13706;
var G__14202 = count__13707;
var G__14203 = (i__13708 + (1));
seq__13703 = G__14200;
chunk__13706 = G__14201;
count__13707 = G__14202;
i__13708 = G__14203;
continue;
} else {
var G__14204 = seq__13703;
var G__14205 = chunk__13706;
var G__14206 = count__13707;
var G__14207 = (i__13708 + (1));
seq__13703 = G__14204;
chunk__13706 = G__14205;
count__13707 = G__14206;
i__13708 = G__14207;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13703);
if(temp__5804__auto__){
var seq__13703__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13703__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13703__$1);
var G__14208 = cljs.core.chunk_rest(seq__13703__$1);
var G__14209 = c__5525__auto__;
var G__14210 = cljs.core.count(c__5525__auto__);
var G__14211 = (0);
seq__13703 = G__14208;
chunk__13706 = G__14209;
count__13707 = G__14210;
i__13708 = G__14211;
continue;
} else {
var ext = cljs.core.first(seq__13703__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14212 = cljs.core.next(seq__13703__$1);
var G__14213 = null;
var G__14214 = (0);
var G__14215 = (0);
seq__13703 = G__14212;
chunk__13706 = G__14213;
count__13707 = G__14214;
i__13708 = G__14215;
continue;
} else {
var G__14217 = cljs.core.next(seq__13703__$1);
var G__14218 = null;
var G__14219 = (0);
var G__14220 = (0);
seq__13703 = G__14217;
chunk__13706 = G__14218;
count__13707 = G__14219;
i__13708 = G__14220;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq13670){
var G__13671 = cljs.core.first(seq13670);
var seq13670__$1 = cljs.core.next(seq13670);
var G__13672 = cljs.core.first(seq13670__$1);
var seq13670__$2 = cljs.core.next(seq13670__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13671,G__13672,seq13670__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__13794,p__13795){
var map__13796 = p__13794;
var map__13796__$1 = cljs.core.__destructure_map(map__13796);
var runtime = map__13796__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13796__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__13797 = p__13795;
var map__13797__$1 = cljs.core.__destructure_map(map__13797);
var msg = map__13797__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13797__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__13798 = cljs.core.deref(state_ref);
var map__13798__$1 = cljs.core.__destructure_map(map__13798);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13798__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13798__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__13805,msg){
var map__13806 = p__13805;
var map__13806__$1 = cljs.core.__destructure_map(map__13806);
var runtime = map__13806__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13806__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__13819,key,p__13820){
var map__13821 = p__13819;
var map__13821__$1 = cljs.core.__destructure_map(map__13821);
var state = map__13821__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13821__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__13822 = p__13820;
var map__13822__$1 = cljs.core.__destructure_map(map__13822);
var spec = map__13822__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13822__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13822__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__13887,key,spec){
var map__13888 = p__13887;
var map__13888__$1 = cljs.core.__destructure_map(map__13888);
var runtime = map__13888__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13888__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___14257 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___14257 == null)){
} else {
var on_welcome_14258 = temp__5808__auto___14257;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_14258.cljs$core$IFn$_invoke$arity$0 ? on_welcome_14258.cljs$core$IFn$_invoke$arity$0() : on_welcome_14258.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__13907_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__13907_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__13908_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__13908_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__13909_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__13909_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__13910_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__13910_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__13911_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__13911_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__13957,key){
var map__14005 = p__13957;
var map__14005__$1 = cljs.core.__destructure_map(map__14005);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14005__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__14016,msg){
var map__14017 = p__14016;
var map__14017__$1 = cljs.core.__destructure_map(map__14017);
var runtime = map__14017__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14017__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__14029,p__14030){
var map__14032 = p__14029;
var map__14032__$1 = cljs.core.__destructure_map(map__14032);
var runtime = map__14032__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14032__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14033 = p__14030;
var map__14033__$1 = cljs.core.__destructure_map(map__14033);
var msg = map__14033__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14033__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14033__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__14052 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14054 = null;
var count__14055 = (0);
var i__14056 = (0);
while(true){
if((i__14056 < count__14055)){
var map__14066 = chunk__14054.cljs$core$IIndexed$_nth$arity$2(null,i__14056);
var map__14066__$1 = cljs.core.__destructure_map(map__14066);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14066__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14307 = seq__14052;
var G__14308 = chunk__14054;
var G__14309 = count__14055;
var G__14310 = (i__14056 + (1));
seq__14052 = G__14307;
chunk__14054 = G__14308;
count__14055 = G__14309;
i__14056 = G__14310;
continue;
} else {
var G__14311 = seq__14052;
var G__14312 = chunk__14054;
var G__14313 = count__14055;
var G__14314 = (i__14056 + (1));
seq__14052 = G__14311;
chunk__14054 = G__14312;
count__14055 = G__14313;
i__14056 = G__14314;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14052);
if(temp__5804__auto__){
var seq__14052__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14052__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14052__$1);
var G__14315 = cljs.core.chunk_rest(seq__14052__$1);
var G__14316 = c__5525__auto__;
var G__14317 = cljs.core.count(c__5525__auto__);
var G__14318 = (0);
seq__14052 = G__14315;
chunk__14054 = G__14316;
count__14055 = G__14317;
i__14056 = G__14318;
continue;
} else {
var map__14085 = cljs.core.first(seq__14052__$1);
var map__14085__$1 = cljs.core.__destructure_map(map__14085);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14085__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14319 = cljs.core.next(seq__14052__$1);
var G__14320 = null;
var G__14321 = (0);
var G__14322 = (0);
seq__14052 = G__14319;
chunk__14054 = G__14320;
count__14055 = G__14321;
i__14056 = G__14322;
continue;
} else {
var G__14323 = cljs.core.next(seq__14052__$1);
var G__14324 = null;
var G__14325 = (0);
var G__14326 = (0);
seq__14052 = G__14323;
chunk__14054 = G__14324;
count__14055 = G__14325;
i__14056 = G__14326;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
