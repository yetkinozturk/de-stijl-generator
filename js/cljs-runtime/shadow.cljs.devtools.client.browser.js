goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21886 = arguments.length;
var i__5727__auto___21887 = (0);
while(true){
if((i__5727__auto___21887 < len__5726__auto___21886)){
args__5732__auto__.push((arguments[i__5727__auto___21887]));

var G__21888 = (i__5727__auto___21887 + (1));
i__5727__auto___21887 = G__21888;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21600){
var G__21601 = cljs.core.first(seq21600);
var seq21600__$1 = cljs.core.next(seq21600);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21601,seq21600__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21604 = cljs.core.seq(sources);
var chunk__21605 = null;
var count__21606 = (0);
var i__21607 = (0);
while(true){
if((i__21607 < count__21606)){
var map__21612 = chunk__21605.cljs$core$IIndexed$_nth$arity$2(null,i__21607);
var map__21612__$1 = cljs.core.__destructure_map(map__21612);
var src = map__21612__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21612__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21612__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21612__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21612__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21613){var e_21889 = e21613;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21889);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21889.message)].join('')));
}

var G__21890 = seq__21604;
var G__21891 = chunk__21605;
var G__21892 = count__21606;
var G__21893 = (i__21607 + (1));
seq__21604 = G__21890;
chunk__21605 = G__21891;
count__21606 = G__21892;
i__21607 = G__21893;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21604);
if(temp__5804__auto__){
var seq__21604__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21604__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21604__$1);
var G__21894 = cljs.core.chunk_rest(seq__21604__$1);
var G__21895 = c__5525__auto__;
var G__21896 = cljs.core.count(c__5525__auto__);
var G__21897 = (0);
seq__21604 = G__21894;
chunk__21605 = G__21895;
count__21606 = G__21896;
i__21607 = G__21897;
continue;
} else {
var map__21614 = cljs.core.first(seq__21604__$1);
var map__21614__$1 = cljs.core.__destructure_map(map__21614);
var src = map__21614__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21614__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21614__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21614__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21614__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21615){var e_21898 = e21615;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21898);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21898.message)].join('')));
}

var G__21899 = cljs.core.next(seq__21604__$1);
var G__21900 = null;
var G__21901 = (0);
var G__21902 = (0);
seq__21604 = G__21899;
chunk__21605 = G__21900;
count__21606 = G__21901;
i__21607 = G__21902;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__21616 = cljs.core.seq(js_requires);
var chunk__21617 = null;
var count__21618 = (0);
var i__21619 = (0);
while(true){
if((i__21619 < count__21618)){
var js_ns = chunk__21617.cljs$core$IIndexed$_nth$arity$2(null,i__21619);
var require_str_21903 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21903);


var G__21904 = seq__21616;
var G__21905 = chunk__21617;
var G__21906 = count__21618;
var G__21907 = (i__21619 + (1));
seq__21616 = G__21904;
chunk__21617 = G__21905;
count__21618 = G__21906;
i__21619 = G__21907;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21616);
if(temp__5804__auto__){
var seq__21616__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21616__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21616__$1);
var G__21908 = cljs.core.chunk_rest(seq__21616__$1);
var G__21909 = c__5525__auto__;
var G__21910 = cljs.core.count(c__5525__auto__);
var G__21911 = (0);
seq__21616 = G__21908;
chunk__21617 = G__21909;
count__21618 = G__21910;
i__21619 = G__21911;
continue;
} else {
var js_ns = cljs.core.first(seq__21616__$1);
var require_str_21912 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21912);


var G__21913 = cljs.core.next(seq__21616__$1);
var G__21914 = null;
var G__21915 = (0);
var G__21916 = (0);
seq__21616 = G__21913;
chunk__21617 = G__21914;
count__21618 = G__21915;
i__21619 = G__21916;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21621){
var map__21622 = p__21621;
var map__21622__$1 = cljs.core.__destructure_map(map__21622);
var msg = map__21622__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21622__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21622__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21623(s__21624){
return (new cljs.core.LazySeq(null,(function (){
var s__21624__$1 = s__21624;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21624__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__21629 = cljs.core.first(xs__6360__auto__);
var map__21629__$1 = cljs.core.__destructure_map(map__21629);
var src = map__21629__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21629__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21629__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__21624__$1,map__21629,map__21629__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21622,map__21622__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21623_$_iter__21625(s__21626){
return (new cljs.core.LazySeq(null,((function (s__21624__$1,map__21629,map__21629__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21622,map__21622__$1,msg,info,reload_info){
return (function (){
var s__21626__$1 = s__21626;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21626__$1);
if(temp__5804__auto____$1){
var s__21626__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21626__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__21626__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__21628 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__21627 = (0);
while(true){
if((i__21627 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__21627);
cljs.core.chunk_append(b__21628,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21917 = (i__21627 + (1));
i__21627 = G__21917;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21628),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21623_$_iter__21625(cljs.core.chunk_rest(s__21626__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21628),null);
}
} else {
var warning = cljs.core.first(s__21626__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21623_$_iter__21625(cljs.core.rest(s__21626__$2)));
}
} else {
return null;
}
break;
}
});})(s__21624__$1,map__21629,map__21629__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21622,map__21622__$1,msg,info,reload_info))
,null,null));
});})(s__21624__$1,map__21629,map__21629__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21622,map__21622__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21623(cljs.core.rest(s__21624__$1)));
} else {
var G__21918 = cljs.core.rest(s__21624__$1);
s__21624__$1 = G__21918;
continue;
}
} else {
var G__21919 = cljs.core.rest(s__21624__$1);
s__21624__$1 = G__21919;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21630_21920 = cljs.core.seq(warnings);
var chunk__21631_21921 = null;
var count__21632_21922 = (0);
var i__21633_21923 = (0);
while(true){
if((i__21633_21923 < count__21632_21922)){
var map__21636_21924 = chunk__21631_21921.cljs$core$IIndexed$_nth$arity$2(null,i__21633_21923);
var map__21636_21925__$1 = cljs.core.__destructure_map(map__21636_21924);
var w_21926 = map__21636_21925__$1;
var msg_21927__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21636_21925__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21928 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21636_21925__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21929 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21636_21925__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21930 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21636_21925__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21930)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21928),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21929),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21927__$1)].join(''));


var G__21931 = seq__21630_21920;
var G__21932 = chunk__21631_21921;
var G__21933 = count__21632_21922;
var G__21934 = (i__21633_21923 + (1));
seq__21630_21920 = G__21931;
chunk__21631_21921 = G__21932;
count__21632_21922 = G__21933;
i__21633_21923 = G__21934;
continue;
} else {
var temp__5804__auto___21935 = cljs.core.seq(seq__21630_21920);
if(temp__5804__auto___21935){
var seq__21630_21936__$1 = temp__5804__auto___21935;
if(cljs.core.chunked_seq_QMARK_(seq__21630_21936__$1)){
var c__5525__auto___21937 = cljs.core.chunk_first(seq__21630_21936__$1);
var G__21938 = cljs.core.chunk_rest(seq__21630_21936__$1);
var G__21939 = c__5525__auto___21937;
var G__21940 = cljs.core.count(c__5525__auto___21937);
var G__21941 = (0);
seq__21630_21920 = G__21938;
chunk__21631_21921 = G__21939;
count__21632_21922 = G__21940;
i__21633_21923 = G__21941;
continue;
} else {
var map__21637_21942 = cljs.core.first(seq__21630_21936__$1);
var map__21637_21943__$1 = cljs.core.__destructure_map(map__21637_21942);
var w_21944 = map__21637_21943__$1;
var msg_21945__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21637_21943__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21946 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21637_21943__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21637_21943__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21637_21943__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21948)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21946),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21947),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21945__$1)].join(''));


var G__21949 = cljs.core.next(seq__21630_21936__$1);
var G__21950 = null;
var G__21951 = (0);
var G__21952 = (0);
seq__21630_21920 = G__21949;
chunk__21631_21921 = G__21950;
count__21632_21922 = G__21951;
i__21633_21923 = G__21952;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21620_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21620_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21639 = node_uri;
G__21639.setQuery(null);

G__21639.setPath(new$);

return G__21639;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21640){
var map__21641 = p__21640;
var map__21641__$1 = cljs.core.__destructure_map(map__21641);
var msg = map__21641__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21641__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21641__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21642 = cljs.core.seq(updates);
var chunk__21644 = null;
var count__21645 = (0);
var i__21646 = (0);
while(true){
if((i__21646 < count__21645)){
var path = chunk__21644.cljs$core$IIndexed$_nth$arity$2(null,i__21646);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21756_21953 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21760_21954 = null;
var count__21761_21955 = (0);
var i__21762_21956 = (0);
while(true){
if((i__21762_21956 < count__21761_21955)){
var node_21957 = chunk__21760_21954.cljs$core$IIndexed$_nth$arity$2(null,i__21762_21956);
if(cljs.core.not(node_21957.shadow$old)){
var path_match_21958 = shadow.cljs.devtools.client.browser.match_paths(node_21957.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21958)){
var new_link_21959 = (function (){var G__21788 = node_21957.cloneNode(true);
G__21788.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21958),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21788;
})();
(node_21957.shadow$old = true);

(new_link_21959.onload = ((function (seq__21756_21953,chunk__21760_21954,count__21761_21955,i__21762_21956,seq__21642,chunk__21644,count__21645,i__21646,new_link_21959,path_match_21958,node_21957,path,map__21641,map__21641__$1,msg,updates,reload_info){
return (function (e){
var seq__21789_21960 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21791_21961 = null;
var count__21792_21962 = (0);
var i__21793_21963 = (0);
while(true){
if((i__21793_21963 < count__21792_21962)){
var map__21797_21964 = chunk__21791_21961.cljs$core$IIndexed$_nth$arity$2(null,i__21793_21963);
var map__21797_21965__$1 = cljs.core.__destructure_map(map__21797_21964);
var task_21966 = map__21797_21965__$1;
var fn_str_21967 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21797_21965__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21968 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21797_21965__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21969 = goog.getObjectByName(fn_str_21967,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21968)].join(''));

(fn_obj_21969.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21969.cljs$core$IFn$_invoke$arity$2(path,new_link_21959) : fn_obj_21969.call(null,path,new_link_21959));


var G__21970 = seq__21789_21960;
var G__21971 = chunk__21791_21961;
var G__21972 = count__21792_21962;
var G__21973 = (i__21793_21963 + (1));
seq__21789_21960 = G__21970;
chunk__21791_21961 = G__21971;
count__21792_21962 = G__21972;
i__21793_21963 = G__21973;
continue;
} else {
var temp__5804__auto___21974 = cljs.core.seq(seq__21789_21960);
if(temp__5804__auto___21974){
var seq__21789_21975__$1 = temp__5804__auto___21974;
if(cljs.core.chunked_seq_QMARK_(seq__21789_21975__$1)){
var c__5525__auto___21976 = cljs.core.chunk_first(seq__21789_21975__$1);
var G__21977 = cljs.core.chunk_rest(seq__21789_21975__$1);
var G__21978 = c__5525__auto___21976;
var G__21979 = cljs.core.count(c__5525__auto___21976);
var G__21980 = (0);
seq__21789_21960 = G__21977;
chunk__21791_21961 = G__21978;
count__21792_21962 = G__21979;
i__21793_21963 = G__21980;
continue;
} else {
var map__21798_21981 = cljs.core.first(seq__21789_21975__$1);
var map__21798_21982__$1 = cljs.core.__destructure_map(map__21798_21981);
var task_21983 = map__21798_21982__$1;
var fn_str_21984 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21798_21982__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21985 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21798_21982__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21986 = goog.getObjectByName(fn_str_21984,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21985)].join(''));

(fn_obj_21986.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21986.cljs$core$IFn$_invoke$arity$2(path,new_link_21959) : fn_obj_21986.call(null,path,new_link_21959));


var G__21987 = cljs.core.next(seq__21789_21975__$1);
var G__21988 = null;
var G__21989 = (0);
var G__21990 = (0);
seq__21789_21960 = G__21987;
chunk__21791_21961 = G__21988;
count__21792_21962 = G__21989;
i__21793_21963 = G__21990;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21957);
});})(seq__21756_21953,chunk__21760_21954,count__21761_21955,i__21762_21956,seq__21642,chunk__21644,count__21645,i__21646,new_link_21959,path_match_21958,node_21957,path,map__21641,map__21641__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21958], 0));

goog.dom.insertSiblingAfter(new_link_21959,node_21957);


var G__21991 = seq__21756_21953;
var G__21992 = chunk__21760_21954;
var G__21993 = count__21761_21955;
var G__21994 = (i__21762_21956 + (1));
seq__21756_21953 = G__21991;
chunk__21760_21954 = G__21992;
count__21761_21955 = G__21993;
i__21762_21956 = G__21994;
continue;
} else {
var G__21995 = seq__21756_21953;
var G__21996 = chunk__21760_21954;
var G__21997 = count__21761_21955;
var G__21998 = (i__21762_21956 + (1));
seq__21756_21953 = G__21995;
chunk__21760_21954 = G__21996;
count__21761_21955 = G__21997;
i__21762_21956 = G__21998;
continue;
}
} else {
var G__21999 = seq__21756_21953;
var G__22000 = chunk__21760_21954;
var G__22001 = count__21761_21955;
var G__22002 = (i__21762_21956 + (1));
seq__21756_21953 = G__21999;
chunk__21760_21954 = G__22000;
count__21761_21955 = G__22001;
i__21762_21956 = G__22002;
continue;
}
} else {
var temp__5804__auto___22003 = cljs.core.seq(seq__21756_21953);
if(temp__5804__auto___22003){
var seq__21756_22004__$1 = temp__5804__auto___22003;
if(cljs.core.chunked_seq_QMARK_(seq__21756_22004__$1)){
var c__5525__auto___22005 = cljs.core.chunk_first(seq__21756_22004__$1);
var G__22006 = cljs.core.chunk_rest(seq__21756_22004__$1);
var G__22007 = c__5525__auto___22005;
var G__22008 = cljs.core.count(c__5525__auto___22005);
var G__22009 = (0);
seq__21756_21953 = G__22006;
chunk__21760_21954 = G__22007;
count__21761_21955 = G__22008;
i__21762_21956 = G__22009;
continue;
} else {
var node_22010 = cljs.core.first(seq__21756_22004__$1);
if(cljs.core.not(node_22010.shadow$old)){
var path_match_22011 = shadow.cljs.devtools.client.browser.match_paths(node_22010.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22011)){
var new_link_22012 = (function (){var G__21799 = node_22010.cloneNode(true);
G__21799.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22011),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21799;
})();
(node_22010.shadow$old = true);

(new_link_22012.onload = ((function (seq__21756_21953,chunk__21760_21954,count__21761_21955,i__21762_21956,seq__21642,chunk__21644,count__21645,i__21646,new_link_22012,path_match_22011,node_22010,seq__21756_22004__$1,temp__5804__auto___22003,path,map__21641,map__21641__$1,msg,updates,reload_info){
return (function (e){
var seq__21800_22013 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21802_22014 = null;
var count__21803_22015 = (0);
var i__21804_22016 = (0);
while(true){
if((i__21804_22016 < count__21803_22015)){
var map__21808_22017 = chunk__21802_22014.cljs$core$IIndexed$_nth$arity$2(null,i__21804_22016);
var map__21808_22018__$1 = cljs.core.__destructure_map(map__21808_22017);
var task_22019 = map__21808_22018__$1;
var fn_str_22020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21808_22018__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22021 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21808_22018__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22022 = goog.getObjectByName(fn_str_22020,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22021)].join(''));

(fn_obj_22022.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22022.cljs$core$IFn$_invoke$arity$2(path,new_link_22012) : fn_obj_22022.call(null,path,new_link_22012));


var G__22023 = seq__21800_22013;
var G__22024 = chunk__21802_22014;
var G__22025 = count__21803_22015;
var G__22026 = (i__21804_22016 + (1));
seq__21800_22013 = G__22023;
chunk__21802_22014 = G__22024;
count__21803_22015 = G__22025;
i__21804_22016 = G__22026;
continue;
} else {
var temp__5804__auto___22027__$1 = cljs.core.seq(seq__21800_22013);
if(temp__5804__auto___22027__$1){
var seq__21800_22028__$1 = temp__5804__auto___22027__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21800_22028__$1)){
var c__5525__auto___22029 = cljs.core.chunk_first(seq__21800_22028__$1);
var G__22030 = cljs.core.chunk_rest(seq__21800_22028__$1);
var G__22031 = c__5525__auto___22029;
var G__22032 = cljs.core.count(c__5525__auto___22029);
var G__22033 = (0);
seq__21800_22013 = G__22030;
chunk__21802_22014 = G__22031;
count__21803_22015 = G__22032;
i__21804_22016 = G__22033;
continue;
} else {
var map__21809_22034 = cljs.core.first(seq__21800_22028__$1);
var map__21809_22035__$1 = cljs.core.__destructure_map(map__21809_22034);
var task_22036 = map__21809_22035__$1;
var fn_str_22037 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21809_22035__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22038 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21809_22035__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22039 = goog.getObjectByName(fn_str_22037,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22038)].join(''));

(fn_obj_22039.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22039.cljs$core$IFn$_invoke$arity$2(path,new_link_22012) : fn_obj_22039.call(null,path,new_link_22012));


var G__22040 = cljs.core.next(seq__21800_22028__$1);
var G__22041 = null;
var G__22042 = (0);
var G__22043 = (0);
seq__21800_22013 = G__22040;
chunk__21802_22014 = G__22041;
count__21803_22015 = G__22042;
i__21804_22016 = G__22043;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22010);
});})(seq__21756_21953,chunk__21760_21954,count__21761_21955,i__21762_21956,seq__21642,chunk__21644,count__21645,i__21646,new_link_22012,path_match_22011,node_22010,seq__21756_22004__$1,temp__5804__auto___22003,path,map__21641,map__21641__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22011], 0));

goog.dom.insertSiblingAfter(new_link_22012,node_22010);


var G__22044 = cljs.core.next(seq__21756_22004__$1);
var G__22045 = null;
var G__22046 = (0);
var G__22047 = (0);
seq__21756_21953 = G__22044;
chunk__21760_21954 = G__22045;
count__21761_21955 = G__22046;
i__21762_21956 = G__22047;
continue;
} else {
var G__22048 = cljs.core.next(seq__21756_22004__$1);
var G__22049 = null;
var G__22050 = (0);
var G__22051 = (0);
seq__21756_21953 = G__22048;
chunk__21760_21954 = G__22049;
count__21761_21955 = G__22050;
i__21762_21956 = G__22051;
continue;
}
} else {
var G__22052 = cljs.core.next(seq__21756_22004__$1);
var G__22053 = null;
var G__22054 = (0);
var G__22055 = (0);
seq__21756_21953 = G__22052;
chunk__21760_21954 = G__22053;
count__21761_21955 = G__22054;
i__21762_21956 = G__22055;
continue;
}
}
} else {
}
}
break;
}


var G__22056 = seq__21642;
var G__22057 = chunk__21644;
var G__22058 = count__21645;
var G__22059 = (i__21646 + (1));
seq__21642 = G__22056;
chunk__21644 = G__22057;
count__21645 = G__22058;
i__21646 = G__22059;
continue;
} else {
var G__22060 = seq__21642;
var G__22061 = chunk__21644;
var G__22062 = count__21645;
var G__22063 = (i__21646 + (1));
seq__21642 = G__22060;
chunk__21644 = G__22061;
count__21645 = G__22062;
i__21646 = G__22063;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21642);
if(temp__5804__auto__){
var seq__21642__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21642__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21642__$1);
var G__22064 = cljs.core.chunk_rest(seq__21642__$1);
var G__22065 = c__5525__auto__;
var G__22066 = cljs.core.count(c__5525__auto__);
var G__22067 = (0);
seq__21642 = G__22064;
chunk__21644 = G__22065;
count__21645 = G__22066;
i__21646 = G__22067;
continue;
} else {
var path = cljs.core.first(seq__21642__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21810_22068 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21814_22069 = null;
var count__21815_22070 = (0);
var i__21816_22071 = (0);
while(true){
if((i__21816_22071 < count__21815_22070)){
var node_22072 = chunk__21814_22069.cljs$core$IIndexed$_nth$arity$2(null,i__21816_22071);
if(cljs.core.not(node_22072.shadow$old)){
var path_match_22073 = shadow.cljs.devtools.client.browser.match_paths(node_22072.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22073)){
var new_link_22074 = (function (){var G__21842 = node_22072.cloneNode(true);
G__21842.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22073),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21842;
})();
(node_22072.shadow$old = true);

(new_link_22074.onload = ((function (seq__21810_22068,chunk__21814_22069,count__21815_22070,i__21816_22071,seq__21642,chunk__21644,count__21645,i__21646,new_link_22074,path_match_22073,node_22072,path,seq__21642__$1,temp__5804__auto__,map__21641,map__21641__$1,msg,updates,reload_info){
return (function (e){
var seq__21843_22075 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21845_22076 = null;
var count__21846_22077 = (0);
var i__21847_22078 = (0);
while(true){
if((i__21847_22078 < count__21846_22077)){
var map__21851_22079 = chunk__21845_22076.cljs$core$IIndexed$_nth$arity$2(null,i__21847_22078);
var map__21851_22080__$1 = cljs.core.__destructure_map(map__21851_22079);
var task_22081 = map__21851_22080__$1;
var fn_str_22082 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21851_22080__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21851_22080__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22084 = goog.getObjectByName(fn_str_22082,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22083)].join(''));

(fn_obj_22084.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22084.cljs$core$IFn$_invoke$arity$2(path,new_link_22074) : fn_obj_22084.call(null,path,new_link_22074));


var G__22085 = seq__21843_22075;
var G__22086 = chunk__21845_22076;
var G__22087 = count__21846_22077;
var G__22088 = (i__21847_22078 + (1));
seq__21843_22075 = G__22085;
chunk__21845_22076 = G__22086;
count__21846_22077 = G__22087;
i__21847_22078 = G__22088;
continue;
} else {
var temp__5804__auto___22089__$1 = cljs.core.seq(seq__21843_22075);
if(temp__5804__auto___22089__$1){
var seq__21843_22090__$1 = temp__5804__auto___22089__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21843_22090__$1)){
var c__5525__auto___22091 = cljs.core.chunk_first(seq__21843_22090__$1);
var G__22092 = cljs.core.chunk_rest(seq__21843_22090__$1);
var G__22093 = c__5525__auto___22091;
var G__22094 = cljs.core.count(c__5525__auto___22091);
var G__22095 = (0);
seq__21843_22075 = G__22092;
chunk__21845_22076 = G__22093;
count__21846_22077 = G__22094;
i__21847_22078 = G__22095;
continue;
} else {
var map__21852_22096 = cljs.core.first(seq__21843_22090__$1);
var map__21852_22097__$1 = cljs.core.__destructure_map(map__21852_22096);
var task_22098 = map__21852_22097__$1;
var fn_str_22099 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21852_22097__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21852_22097__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22101 = goog.getObjectByName(fn_str_22099,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22100)].join(''));

(fn_obj_22101.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22101.cljs$core$IFn$_invoke$arity$2(path,new_link_22074) : fn_obj_22101.call(null,path,new_link_22074));


var G__22102 = cljs.core.next(seq__21843_22090__$1);
var G__22103 = null;
var G__22104 = (0);
var G__22105 = (0);
seq__21843_22075 = G__22102;
chunk__21845_22076 = G__22103;
count__21846_22077 = G__22104;
i__21847_22078 = G__22105;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22072);
});})(seq__21810_22068,chunk__21814_22069,count__21815_22070,i__21816_22071,seq__21642,chunk__21644,count__21645,i__21646,new_link_22074,path_match_22073,node_22072,path,seq__21642__$1,temp__5804__auto__,map__21641,map__21641__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22073], 0));

goog.dom.insertSiblingAfter(new_link_22074,node_22072);


var G__22106 = seq__21810_22068;
var G__22107 = chunk__21814_22069;
var G__22108 = count__21815_22070;
var G__22109 = (i__21816_22071 + (1));
seq__21810_22068 = G__22106;
chunk__21814_22069 = G__22107;
count__21815_22070 = G__22108;
i__21816_22071 = G__22109;
continue;
} else {
var G__22110 = seq__21810_22068;
var G__22111 = chunk__21814_22069;
var G__22112 = count__21815_22070;
var G__22113 = (i__21816_22071 + (1));
seq__21810_22068 = G__22110;
chunk__21814_22069 = G__22111;
count__21815_22070 = G__22112;
i__21816_22071 = G__22113;
continue;
}
} else {
var G__22114 = seq__21810_22068;
var G__22115 = chunk__21814_22069;
var G__22116 = count__21815_22070;
var G__22117 = (i__21816_22071 + (1));
seq__21810_22068 = G__22114;
chunk__21814_22069 = G__22115;
count__21815_22070 = G__22116;
i__21816_22071 = G__22117;
continue;
}
} else {
var temp__5804__auto___22118__$1 = cljs.core.seq(seq__21810_22068);
if(temp__5804__auto___22118__$1){
var seq__21810_22119__$1 = temp__5804__auto___22118__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21810_22119__$1)){
var c__5525__auto___22120 = cljs.core.chunk_first(seq__21810_22119__$1);
var G__22121 = cljs.core.chunk_rest(seq__21810_22119__$1);
var G__22122 = c__5525__auto___22120;
var G__22123 = cljs.core.count(c__5525__auto___22120);
var G__22124 = (0);
seq__21810_22068 = G__22121;
chunk__21814_22069 = G__22122;
count__21815_22070 = G__22123;
i__21816_22071 = G__22124;
continue;
} else {
var node_22125 = cljs.core.first(seq__21810_22119__$1);
if(cljs.core.not(node_22125.shadow$old)){
var path_match_22126 = shadow.cljs.devtools.client.browser.match_paths(node_22125.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22126)){
var new_link_22127 = (function (){var G__21853 = node_22125.cloneNode(true);
G__21853.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22126),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21853;
})();
(node_22125.shadow$old = true);

(new_link_22127.onload = ((function (seq__21810_22068,chunk__21814_22069,count__21815_22070,i__21816_22071,seq__21642,chunk__21644,count__21645,i__21646,new_link_22127,path_match_22126,node_22125,seq__21810_22119__$1,temp__5804__auto___22118__$1,path,seq__21642__$1,temp__5804__auto__,map__21641,map__21641__$1,msg,updates,reload_info){
return (function (e){
var seq__21854_22128 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21856_22129 = null;
var count__21857_22130 = (0);
var i__21858_22131 = (0);
while(true){
if((i__21858_22131 < count__21857_22130)){
var map__21862_22132 = chunk__21856_22129.cljs$core$IIndexed$_nth$arity$2(null,i__21858_22131);
var map__21862_22133__$1 = cljs.core.__destructure_map(map__21862_22132);
var task_22134 = map__21862_22133__$1;
var fn_str_22135 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21862_22133__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22136 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21862_22133__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22137 = goog.getObjectByName(fn_str_22135,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22136)].join(''));

(fn_obj_22137.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22137.cljs$core$IFn$_invoke$arity$2(path,new_link_22127) : fn_obj_22137.call(null,path,new_link_22127));


var G__22138 = seq__21854_22128;
var G__22139 = chunk__21856_22129;
var G__22140 = count__21857_22130;
var G__22141 = (i__21858_22131 + (1));
seq__21854_22128 = G__22138;
chunk__21856_22129 = G__22139;
count__21857_22130 = G__22140;
i__21858_22131 = G__22141;
continue;
} else {
var temp__5804__auto___22142__$2 = cljs.core.seq(seq__21854_22128);
if(temp__5804__auto___22142__$2){
var seq__21854_22143__$1 = temp__5804__auto___22142__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21854_22143__$1)){
var c__5525__auto___22144 = cljs.core.chunk_first(seq__21854_22143__$1);
var G__22145 = cljs.core.chunk_rest(seq__21854_22143__$1);
var G__22146 = c__5525__auto___22144;
var G__22147 = cljs.core.count(c__5525__auto___22144);
var G__22148 = (0);
seq__21854_22128 = G__22145;
chunk__21856_22129 = G__22146;
count__21857_22130 = G__22147;
i__21858_22131 = G__22148;
continue;
} else {
var map__21863_22149 = cljs.core.first(seq__21854_22143__$1);
var map__21863_22150__$1 = cljs.core.__destructure_map(map__21863_22149);
var task_22151 = map__21863_22150__$1;
var fn_str_22152 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21863_22150__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22153 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21863_22150__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22154 = goog.getObjectByName(fn_str_22152,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22153)].join(''));

(fn_obj_22154.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22154.cljs$core$IFn$_invoke$arity$2(path,new_link_22127) : fn_obj_22154.call(null,path,new_link_22127));


var G__22155 = cljs.core.next(seq__21854_22143__$1);
var G__22156 = null;
var G__22157 = (0);
var G__22158 = (0);
seq__21854_22128 = G__22155;
chunk__21856_22129 = G__22156;
count__21857_22130 = G__22157;
i__21858_22131 = G__22158;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22125);
});})(seq__21810_22068,chunk__21814_22069,count__21815_22070,i__21816_22071,seq__21642,chunk__21644,count__21645,i__21646,new_link_22127,path_match_22126,node_22125,seq__21810_22119__$1,temp__5804__auto___22118__$1,path,seq__21642__$1,temp__5804__auto__,map__21641,map__21641__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22126], 0));

goog.dom.insertSiblingAfter(new_link_22127,node_22125);


var G__22159 = cljs.core.next(seq__21810_22119__$1);
var G__22160 = null;
var G__22161 = (0);
var G__22162 = (0);
seq__21810_22068 = G__22159;
chunk__21814_22069 = G__22160;
count__21815_22070 = G__22161;
i__21816_22071 = G__22162;
continue;
} else {
var G__22163 = cljs.core.next(seq__21810_22119__$1);
var G__22164 = null;
var G__22165 = (0);
var G__22166 = (0);
seq__21810_22068 = G__22163;
chunk__21814_22069 = G__22164;
count__21815_22070 = G__22165;
i__21816_22071 = G__22166;
continue;
}
} else {
var G__22167 = cljs.core.next(seq__21810_22119__$1);
var G__22168 = null;
var G__22169 = (0);
var G__22170 = (0);
seq__21810_22068 = G__22167;
chunk__21814_22069 = G__22168;
count__21815_22070 = G__22169;
i__21816_22071 = G__22170;
continue;
}
}
} else {
}
}
break;
}


var G__22171 = cljs.core.next(seq__21642__$1);
var G__22172 = null;
var G__22173 = (0);
var G__22174 = (0);
seq__21642 = G__22171;
chunk__21644 = G__22172;
count__21645 = G__22173;
i__21646 = G__22174;
continue;
} else {
var G__22175 = cljs.core.next(seq__21642__$1);
var G__22176 = null;
var G__22177 = (0);
var G__22178 = (0);
seq__21642 = G__22175;
chunk__21644 = G__22176;
count__21645 = G__22177;
i__21646 = G__22178;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__21865 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21865) : success.call(null,G__21865));
}catch (e21864){var e = e21864;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__21866,success,fail){
var map__21867 = p__21866;
var map__21867__$1 = cljs.core.__destructure_map(map__21867);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21867__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__21869 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21869) : success.call(null,G__21869));
}catch (e21868){var e = e21868;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21870,done,error){
var map__21871 = p__21870;
var map__21871__$1 = cljs.core.__destructure_map(map__21871);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21871__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21872,done,error){
var map__21873 = p__21872;
var map__21873__$1 = cljs.core.__destructure_map(map__21873);
var msg = map__21873__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21873__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21873__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21873__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21874){
var map__21875 = p__21874;
var map__21875__$1 = cljs.core.__destructure_map(map__21875);
var src = map__21875__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21875__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21876 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21876) : done.call(null,G__21876));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21877){
var map__21878 = p__21877;
var map__21878__$1 = cljs.core.__destructure_map(map__21878);
var msg__$1 = map__21878__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21878__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21879){var ex = e21879;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21880){
var map__21881 = p__21880;
var map__21881__$1 = cljs.core.__destructure_map(map__21881);
var env = map__21881__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21881__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21882){
var map__21883 = p__21882;
var map__21883__$1 = cljs.core.__destructure_map(map__21883);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21883__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21883__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21884){
var map__21885 = p__21884;
var map__21885__$1 = cljs.core.__destructure_map(map__21885);
var svc = map__21885__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21885__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
