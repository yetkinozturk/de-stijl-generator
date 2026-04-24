goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14803 = (function (f,blockable,meta14804){
this.f = f;
this.blockable = blockable;
this.meta14804 = meta14804;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14805,meta14804__$1){
var self__ = this;
var _14805__$1 = this;
return (new cljs.core.async.t_cljs$core$async14803(self__.f,self__.blockable,meta14804__$1));
}));

(cljs.core.async.t_cljs$core$async14803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14805){
var self__ = this;
var _14805__$1 = this;
return self__.meta14804;
}));

(cljs.core.async.t_cljs$core$async14803.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14803.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14803.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14803.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14803.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14804","meta14804",1477705055,null)], null);
}));

(cljs.core.async.t_cljs$core$async14803.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14803.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14803");

(cljs.core.async.t_cljs$core$async14803.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14803");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14803.
 */
cljs.core.async.__GT_t_cljs$core$async14803 = (function cljs$core$async$__GT_t_cljs$core$async14803(f,blockable,meta14804){
return (new cljs.core.async.t_cljs$core$async14803(f,blockable,meta14804));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14796 = arguments.length;
switch (G__14796) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14803(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14845 = arguments.length;
switch (G__14845) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14866 = arguments.length;
switch (G__14866) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14891 = arguments.length;
switch (G__14891) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_19161 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19161) : fn1.call(null,val_19161));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19161) : fn1.call(null,val_19161));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14909 = arguments.length;
switch (G__14909) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___19169 = n;
var x_19170 = (0);
while(true){
if((x_19170 < n__5593__auto___19169)){
(a[x_19170] = x_19170);

var G__19177 = (x_19170 + (1));
x_19170 = G__19177;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14929 = (function (flag,meta14930){
this.flag = flag;
this.meta14930 = meta14930;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14931,meta14930__$1){
var self__ = this;
var _14931__$1 = this;
return (new cljs.core.async.t_cljs$core$async14929(self__.flag,meta14930__$1));
}));

(cljs.core.async.t_cljs$core$async14929.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14931){
var self__ = this;
var _14931__$1 = this;
return self__.meta14930;
}));

(cljs.core.async.t_cljs$core$async14929.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14929.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14929.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14929.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14929.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14930","meta14930",-119394547,null)], null);
}));

(cljs.core.async.t_cljs$core$async14929.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14929.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14929");

(cljs.core.async.t_cljs$core$async14929.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14929");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14929.
 */
cljs.core.async.__GT_t_cljs$core$async14929 = (function cljs$core$async$__GT_t_cljs$core$async14929(flag,meta14930){
return (new cljs.core.async.t_cljs$core$async14929(flag,meta14930));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14929(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14942 = (function (flag,cb,meta14943){
this.flag = flag;
this.cb = cb;
this.meta14943 = meta14943;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14944,meta14943__$1){
var self__ = this;
var _14944__$1 = this;
return (new cljs.core.async.t_cljs$core$async14942(self__.flag,self__.cb,meta14943__$1));
}));

(cljs.core.async.t_cljs$core$async14942.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14944){
var self__ = this;
var _14944__$1 = this;
return self__.meta14943;
}));

(cljs.core.async.t_cljs$core$async14942.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14942.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14942.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14942.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14942.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14943","meta14943",-1948130807,null)], null);
}));

(cljs.core.async.t_cljs$core$async14942.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14942.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14942");

(cljs.core.async.t_cljs$core$async14942.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14942");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14942.
 */
cljs.core.async.__GT_t_cljs$core$async14942 = (function cljs$core$async$__GT_t_cljs$core$async14942(flag,cb,meta14943){
return (new cljs.core.async.t_cljs$core$async14942(flag,cb,meta14943));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14942(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14985_SHARP_){
var G__14994 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14985_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14994) : fret.call(null,G__14994));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14986_SHARP_){
var G__14996 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14986_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14996) : fret.call(null,G__14996));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19194 = (i + (1));
i = G__19194;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19199 = arguments.length;
var i__5727__auto___19200 = (0);
while(true){
if((i__5727__auto___19200 < len__5726__auto___19199)){
args__5732__auto__.push((arguments[i__5727__auto___19200]));

var G__19201 = (i__5727__auto___19200 + (1));
i__5727__auto___19200 = G__19201;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15026){
var map__15027 = p__15026;
var map__15027__$1 = cljs.core.__destructure_map(map__15027);
var opts = map__15027__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15022){
var G__15023 = cljs.core.first(seq15022);
var seq15022__$1 = cljs.core.next(seq15022);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15023,seq15022__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__15042 = arguments.length;
switch (G__15042) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14618__auto___19204 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14619__auto__ = (function (){var switch__13389__auto__ = (function (state_15105){
var state_val_15107 = (state_15105[(1)]);
if((state_val_15107 === (7))){
var inst_15098 = (state_15105[(2)]);
var state_15105__$1 = state_15105;
var statearr_15113_19205 = state_15105__$1;
(statearr_15113_19205[(2)] = inst_15098);

(statearr_15113_19205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15107 === (1))){
var state_15105__$1 = state_15105;
var statearr_15118_19207 = state_15105__$1;
(statearr_15118_19207[(2)] = null);

(statearr_15118_19207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15107 === (4))){
var inst_15069 = (state_15105[(7)]);
var inst_15069__$1 = (state_15105[(2)]);
var inst_15070 = (inst_15069__$1 == null);
var state_15105__$1 = (function (){var statearr_15122 = state_15105;
(statearr_15122[(7)] = inst_15069__$1);

return statearr_15122;
})();
if(cljs.core.truth_(inst_15070)){
var statearr_15123_19208 = state_15105__$1;
(statearr_15123_19208[(1)] = (5));

} else {
var statearr_15124_19210 = state_15105__$1;
(statearr_15124_19210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15107 === (13))){
var state_15105__$1 = state_15105;
var statearr_15129_19211 = state_15105__$1;
(statearr_15129_19211[(2)] = null);

(statearr_15129_19211[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15107 === (6))){
var inst_15069 = (state_15105[(7)]);
var state_15105__$1 = state_15105;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15105__$1,(11),to,inst_15069);
} else {
if((state_val_15107 === (3))){
var inst_15100 = (state_15105[(2)]);
var state_15105__$1 = state_15105;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15105__$1,inst_15100);
} else {
if((state_val_15107 === (12))){
var state_15105__$1 = state_15105;
var statearr_15131_19212 = state_15105__$1;
(statearr_15131_19212[(2)] = null);

(statearr_15131_19212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15107 === (2))){
var state_15105__$1 = state_15105;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15105__$1,(4),from);
} else {
if((state_val_15107 === (11))){
var inst_15083 = (state_15105[(2)]);
var state_15105__$1 = state_15105;
if(cljs.core.truth_(inst_15083)){
var statearr_15138_19213 = state_15105__$1;
(statearr_15138_19213[(1)] = (12));

} else {
var statearr_15139_19214 = state_15105__$1;
(statearr_15139_19214[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15107 === (9))){
var state_15105__$1 = state_15105;
var statearr_15142_19215 = state_15105__$1;
(statearr_15142_19215[(2)] = null);

(statearr_15142_19215[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15107 === (5))){
var state_15105__$1 = state_15105;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15145_19216 = state_15105__$1;
(statearr_15145_19216[(1)] = (8));

} else {
var statearr_15147_19217 = state_15105__$1;
(statearr_15147_19217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15107 === (14))){
var inst_15096 = (state_15105[(2)]);
var state_15105__$1 = state_15105;
var statearr_15148_19218 = state_15105__$1;
(statearr_15148_19218[(2)] = inst_15096);

(statearr_15148_19218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15107 === (10))){
var inst_15080 = (state_15105[(2)]);
var state_15105__$1 = state_15105;
var statearr_15149_19219 = state_15105__$1;
(statearr_15149_19219[(2)] = inst_15080);

(statearr_15149_19219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15107 === (8))){
var inst_15077 = cljs.core.async.close_BANG_(to);
var state_15105__$1 = state_15105;
var statearr_15155_19220 = state_15105__$1;
(statearr_15155_19220[(2)] = inst_15077);

(statearr_15155_19220[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13390__auto__ = null;
var cljs$core$async$state_machine__13390__auto____0 = (function (){
var statearr_15159 = [null,null,null,null,null,null,null,null];
(statearr_15159[(0)] = cljs$core$async$state_machine__13390__auto__);

(statearr_15159[(1)] = (1));

return statearr_15159;
});
var cljs$core$async$state_machine__13390__auto____1 = (function (state_15105){
while(true){
var ret_value__13391__auto__ = (function (){try{while(true){
var result__13392__auto__ = switch__13389__auto__(state_15105);
if(cljs.core.keyword_identical_QMARK_(result__13392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13392__auto__;
}
break;
}
}catch (e15160){var ex__13393__auto__ = e15160;
var statearr_15161_19221 = state_15105;
(statearr_15161_19221[(2)] = ex__13393__auto__);


if(cljs.core.seq((state_15105[(4)]))){
var statearr_15162_19222 = state_15105;
(statearr_15162_19222[(1)] = cljs.core.first((state_15105[(4)])));

} else {
throw ex__13393__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19223 = state_15105;
state_15105 = G__19223;
continue;
} else {
return ret_value__13391__auto__;
}
break;
}
});
cljs$core$async$state_machine__13390__auto__ = function(state_15105){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13390__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13390__auto____1.call(this,state_15105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13390__auto____0;
cljs$core$async$state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13390__auto____1;
return cljs$core$async$state_machine__13390__auto__;
})()
})();
var state__14620__auto__ = (function (){var statearr_15165 = f__14619__auto__();
(statearr_15165[(6)] = c__14618__auto___19204);

return statearr_15165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14620__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__15180){
var vec__15181 = p__15180;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15181,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15181,(1),null);
var job = vec__15181;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14618__auto___19225 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14619__auto__ = (function (){var switch__13389__auto__ = (function (state_15188){
var state_val_15189 = (state_15188[(1)]);
if((state_val_15189 === (1))){
var state_15188__$1 = state_15188;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15188__$1,(2),res,v);
} else {
if((state_val_15189 === (2))){
var inst_15185 = (state_15188[(2)]);
var inst_15186 = cljs.core.async.close_BANG_(res);
var state_15188__$1 = (function (){var statearr_15212 = state_15188;
(statearr_15212[(7)] = inst_15185);

return statearr_15212;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15188__$1,inst_15186);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13390__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13390__auto____0 = (function (){
var statearr_15213 = [null,null,null,null,null,null,null,null];
(statearr_15213[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13390__auto__);

(statearr_15213[(1)] = (1));

return statearr_15213;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13390__auto____1 = (function (state_15188){
while(true){
var ret_value__13391__auto__ = (function (){try{while(true){
var result__13392__auto__ = switch__13389__auto__(state_15188);
if(cljs.core.keyword_identical_QMARK_(result__13392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13392__auto__;
}
break;
}
}catch (e15214){var ex__13393__auto__ = e15214;
var statearr_15215_19233 = state_15188;
(statearr_15215_19233[(2)] = ex__13393__auto__);


if(cljs.core.seq((state_15188[(4)]))){
var statearr_15220_19235 = state_15188;
(statearr_15220_19235[(1)] = cljs.core.first((state_15188[(4)])));

} else {
throw ex__13393__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19236 = state_15188;
state_15188 = G__19236;
continue;
} else {
return ret_value__13391__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13390__auto__ = function(state_15188){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13390__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13390__auto____1.call(this,state_15188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13390__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13390__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13390__auto__;
})()
})();
var state__14620__auto__ = (function (){var statearr_15231 = f__14619__auto__();
(statearr_15231[(6)] = c__14618__auto___19225);

return statearr_15231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14620__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15240){
var vec__15242 = p__15240;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15242,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15242,(1),null);
var job = vec__15242;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___19240 = n;
var __19241 = (0);
while(true){
if((__19241 < n__5593__auto___19240)){
var G__15265_19242 = type;
var G__15265_19243__$1 = (((G__15265_19242 instanceof cljs.core.Keyword))?G__15265_19242.fqn:null);
switch (G__15265_19243__$1) {
case "compute":
var c__14618__auto___19249 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19241,c__14618__auto___19249,G__15265_19242,G__15265_19243__$1,n__5593__auto___19240,jobs,results,process__$1,async){
return (function (){
var f__14619__auto__ = (function (){var switch__13389__auto__ = ((function (__19241,c__14618__auto___19249,G__15265_19242,G__15265_19243__$1,n__5593__auto___19240,jobs,results,process__$1,async){
return (function (state_15280){
var state_val_15281 = (state_15280[(1)]);
if((state_val_15281 === (1))){
var state_15280__$1 = state_15280;
var statearr_15290_19251 = state_15280__$1;
(statearr_15290_19251[(2)] = null);

(statearr_15290_19251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15281 === (2))){
var state_15280__$1 = state_15280;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15280__$1,(4),jobs);
} else {
if((state_val_15281 === (3))){
var inst_15278 = (state_15280[(2)]);
var state_15280__$1 = state_15280;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15280__$1,inst_15278);
} else {
if((state_val_15281 === (4))){
var inst_15268 = (state_15280[(2)]);
var inst_15269 = process__$1(inst_15268);
var state_15280__$1 = state_15280;
if(cljs.core.truth_(inst_15269)){
var statearr_15317_19254 = state_15280__$1;
(statearr_15317_19254[(1)] = (5));

} else {
var statearr_15326_19255 = state_15280__$1;
(statearr_15326_19255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15281 === (5))){
var state_15280__$1 = state_15280;
var statearr_15335_19256 = state_15280__$1;
(statearr_15335_19256[(2)] = null);

(statearr_15335_19256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15281 === (6))){
var state_15280__$1 = state_15280;
var statearr_15343_19258 = state_15280__$1;
(statearr_15343_19258[(2)] = null);

(statearr_15343_19258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15281 === (7))){
var inst_15274 = (state_15280[(2)]);
var state_15280__$1 = state_15280;
var statearr_15359_19260 = state_15280__$1;
(statearr_15359_19260[(2)] = inst_15274);

(statearr_15359_19260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19241,c__14618__auto___19249,G__15265_19242,G__15265_19243__$1,n__5593__auto___19240,jobs,results,process__$1,async))
;
return ((function (__19241,switch__13389__auto__,c__14618__auto___19249,G__15265_19242,G__15265_19243__$1,n__5593__auto___19240,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13390__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13390__auto____0 = (function (){
var statearr_15379 = [null,null,null,null,null,null,null];
(statearr_15379[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13390__auto__);

(statearr_15379[(1)] = (1));

return statearr_15379;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13390__auto____1 = (function (state_15280){
while(true){
var ret_value__13391__auto__ = (function (){try{while(true){
var result__13392__auto__ = switch__13389__auto__(state_15280);
if(cljs.core.keyword_identical_QMARK_(result__13392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13392__auto__;
}
break;
}
}catch (e15384){var ex__13393__auto__ = e15384;
var statearr_15385_19264 = state_15280;
(statearr_15385_19264[(2)] = ex__13393__auto__);


if(cljs.core.seq((state_15280[(4)]))){
var statearr_15390_19268 = state_15280;
(statearr_15390_19268[(1)] = cljs.core.first((state_15280[(4)])));

} else {
throw ex__13393__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19269 = state_15280;
state_15280 = G__19269;
continue;
} else {
return ret_value__13391__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13390__auto__ = function(state_15280){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13390__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13390__auto____1.call(this,state_15280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13390__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13390__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13390__auto__;
})()
;})(__19241,switch__13389__auto__,c__14618__auto___19249,G__15265_19242,G__15265_19243__$1,n__5593__auto___19240,jobs,results,process__$1,async))
})();
var state__14620__auto__ = (function (){var statearr_15401 = f__14619__auto__();
(statearr_15401[(6)] = c__14618__auto___19249);

return statearr_15401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14620__auto__);
});})(__19241,c__14618__auto___19249,G__15265_19242,G__15265_19243__$1,n__5593__auto___19240,jobs,results,process__$1,async))
);


break;
case "async":
var c__14618__auto___19276 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19241,c__14618__auto___19276,G__15265_19242,G__15265_19243__$1,n__5593__auto___19240,jobs,results,process__$1,async){
return (function (){
var f__14619__auto__ = (function (){var switch__13389__auto__ = ((function (__19241,c__14618__auto___19276,G__15265_19242,G__15265_19243__$1,n__5593__auto___19240,jobs,results,process__$1,async){
return (function (state_15426){
var state_val_15427 = (state_15426[(1)]);
if((state_val_15427 === (1))){
var state_15426__$1 = state_15426;
var statearr_15441_19277 = state_15426__$1;
(statearr_15441_19277[(2)] = null);

(statearr_15441_19277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15427 === (2))){
var state_15426__$1 = state_15426;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15426__$1,(4),jobs);
} else {
if((state_val_15427 === (3))){
var inst_15424 = (state_15426[(2)]);
var state_15426__$1 = state_15426;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15426__$1,inst_15424);
} else {
if((state_val_15427 === (4))){
var inst_15415 = (state_15426[(2)]);
var inst_15416 = async(inst_15415);
var state_15426__$1 = state_15426;
if(cljs.core.truth_(inst_15416)){
var statearr_15480_19278 = state_15426__$1;
(statearr_15480_19278[(1)] = (5));

} else {
var statearr_15489_19279 = state_15426__$1;
(statearr_15489_19279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15427 === (5))){
var state_15426__$1 = state_15426;
var statearr_15506_19280 = state_15426__$1;
(statearr_15506_19280[(2)] = null);

(statearr_15506_19280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15427 === (6))){
var state_15426__$1 = state_15426;
var statearr_15507_19281 = state_15426__$1;
(statearr_15507_19281[(2)] = null);

(statearr_15507_19281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15427 === (7))){
var inst_15422 = (state_15426[(2)]);
var state_15426__$1 = state_15426;
var statearr_15513_19282 = state_15426__$1;
(statearr_15513_19282[(2)] = inst_15422);

(statearr_15513_19282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19241,c__14618__auto___19276,G__15265_19242,G__15265_19243__$1,n__5593__auto___19240,jobs,results,process__$1,async))
;
return ((function (__19241,switch__13389__auto__,c__14618__auto___19276,G__15265_19242,G__15265_19243__$1,n__5593__auto___19240,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13390__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13390__auto____0 = (function (){
var statearr_15518 = [null,null,null,null,null,null,null];
(statearr_15518[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13390__auto__);

(statearr_15518[(1)] = (1));

return statearr_15518;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13390__auto____1 = (function (state_15426){
while(true){
var ret_value__13391__auto__ = (function (){try{while(true){
var result__13392__auto__ = switch__13389__auto__(state_15426);
if(cljs.core.keyword_identical_QMARK_(result__13392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13392__auto__;
}
break;
}
}catch (e15520){var ex__13393__auto__ = e15520;
var statearr_15525_19295 = state_15426;
(statearr_15525_19295[(2)] = ex__13393__auto__);


if(cljs.core.seq((state_15426[(4)]))){
var statearr_15532_19296 = state_15426;
(statearr_15532_19296[(1)] = cljs.core.first((state_15426[(4)])));

} else {
throw ex__13393__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19297 = state_15426;
state_15426 = G__19297;
continue;
} else {
return ret_value__13391__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13390__auto__ = function(state_15426){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13390__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13390__auto____1.call(this,state_15426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13390__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13390__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13390__auto__;
})()
;})(__19241,switch__13389__auto__,c__14618__auto___19276,G__15265_19242,G__15265_19243__$1,n__5593__auto___19240,jobs,results,process__$1,async))
})();
var state__14620__auto__ = (function (){var statearr_15542 = f__14619__auto__();
(statearr_15542[(6)] = c__14618__auto___19276);

return statearr_15542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14620__auto__);
});})(__19241,c__14618__auto___19276,G__15265_19242,G__15265_19243__$1,n__5593__auto___19240,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15265_19243__$1)].join('')));

}

var G__19298 = (__19241 + (1));
__19241 = G__19298;
continue;
} else {
}
break;
}

var c__14618__auto___19299 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14619__auto__ = (function (){var switch__13389__auto__ = (function (state_15580){
var state_val_15581 = (state_15580[(1)]);
if((state_val_15581 === (7))){
var inst_15574 = (state_15580[(2)]);
var state_15580__$1 = state_15580;
var statearr_15601_19301 = state_15580__$1;
(statearr_15601_19301[(2)] = inst_15574);

(statearr_15601_19301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15581 === (1))){
var state_15580__$1 = state_15580;
var statearr_15605_19302 = state_15580__$1;
(statearr_15605_19302[(2)] = null);

(statearr_15605_19302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15581 === (4))){
var inst_15551 = (state_15580[(7)]);
var inst_15551__$1 = (state_15580[(2)]);
var inst_15552 = (inst_15551__$1 == null);
var state_15580__$1 = (function (){var statearr_15607 = state_15580;
(statearr_15607[(7)] = inst_15551__$1);

return statearr_15607;
})();
if(cljs.core.truth_(inst_15552)){
var statearr_15609_19309 = state_15580__$1;
(statearr_15609_19309[(1)] = (5));

} else {
var statearr_15613_19310 = state_15580__$1;
(statearr_15613_19310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15581 === (6))){
var inst_15551 = (state_15580[(7)]);
var inst_15559 = (state_15580[(8)]);
var inst_15559__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15561 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15566 = [inst_15551,inst_15559__$1];
var inst_15567 = (new cljs.core.PersistentVector(null,2,(5),inst_15561,inst_15566,null));
var state_15580__$1 = (function (){var statearr_15615 = state_15580;
(statearr_15615[(8)] = inst_15559__$1);

return statearr_15615;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15580__$1,(8),jobs,inst_15567);
} else {
if((state_val_15581 === (3))){
var inst_15576 = (state_15580[(2)]);
var state_15580__$1 = state_15580;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15580__$1,inst_15576);
} else {
if((state_val_15581 === (2))){
var state_15580__$1 = state_15580;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15580__$1,(4),from);
} else {
if((state_val_15581 === (9))){
var inst_15571 = (state_15580[(2)]);
var state_15580__$1 = (function (){var statearr_15624 = state_15580;
(statearr_15624[(9)] = inst_15571);

return statearr_15624;
})();
var statearr_15627_19315 = state_15580__$1;
(statearr_15627_19315[(2)] = null);

(statearr_15627_19315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15581 === (5))){
var inst_15555 = cljs.core.async.close_BANG_(jobs);
var state_15580__$1 = state_15580;
var statearr_15630_19320 = state_15580__$1;
(statearr_15630_19320[(2)] = inst_15555);

(statearr_15630_19320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15581 === (8))){
var inst_15559 = (state_15580[(8)]);
var inst_15569 = (state_15580[(2)]);
var state_15580__$1 = (function (){var statearr_15633 = state_15580;
(statearr_15633[(10)] = inst_15569);

return statearr_15633;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15580__$1,(9),results,inst_15559);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13390__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13390__auto____0 = (function (){
var statearr_15643 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15643[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13390__auto__);

(statearr_15643[(1)] = (1));

return statearr_15643;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13390__auto____1 = (function (state_15580){
while(true){
var ret_value__13391__auto__ = (function (){try{while(true){
var result__13392__auto__ = switch__13389__auto__(state_15580);
if(cljs.core.keyword_identical_QMARK_(result__13392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13392__auto__;
}
break;
}
}catch (e15646){var ex__13393__auto__ = e15646;
var statearr_15647_19328 = state_15580;
(statearr_15647_19328[(2)] = ex__13393__auto__);


if(cljs.core.seq((state_15580[(4)]))){
var statearr_15651_19329 = state_15580;
(statearr_15651_19329[(1)] = cljs.core.first((state_15580[(4)])));

} else {
throw ex__13393__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19330 = state_15580;
state_15580 = G__19330;
continue;
} else {
return ret_value__13391__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13390__auto__ = function(state_15580){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13390__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13390__auto____1.call(this,state_15580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13390__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13390__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13390__auto__;
})()
})();
var state__14620__auto__ = (function (){var statearr_15658 = f__14619__auto__();
(statearr_15658[(6)] = c__14618__auto___19299);

return statearr_15658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14620__auto__);
}));


var c__14618__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14619__auto__ = (function (){var switch__13389__auto__ = (function (state_15727){
var state_val_15729 = (state_15727[(1)]);
if((state_val_15729 === (7))){
var inst_15716 = (state_15727[(2)]);
var state_15727__$1 = state_15727;
var statearr_15746_19335 = state_15727__$1;
(statearr_15746_19335[(2)] = inst_15716);

(statearr_15746_19335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (20))){
var state_15727__$1 = state_15727;
var statearr_15753_19338 = state_15727__$1;
(statearr_15753_19338[(2)] = null);

(statearr_15753_19338[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (1))){
var state_15727__$1 = state_15727;
var statearr_15763_19339 = state_15727__$1;
(statearr_15763_19339[(2)] = null);

(statearr_15763_19339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (4))){
var inst_15663 = (state_15727[(7)]);
var inst_15663__$1 = (state_15727[(2)]);
var inst_15664 = (inst_15663__$1 == null);
var state_15727__$1 = (function (){var statearr_15782 = state_15727;
(statearr_15782[(7)] = inst_15663__$1);

return statearr_15782;
})();
if(cljs.core.truth_(inst_15664)){
var statearr_15787_19340 = state_15727__$1;
(statearr_15787_19340[(1)] = (5));

} else {
var statearr_15792_19341 = state_15727__$1;
(statearr_15792_19341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (15))){
var inst_15679 = (state_15727[(8)]);
var state_15727__$1 = state_15727;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15727__$1,(18),to,inst_15679);
} else {
if((state_val_15729 === (21))){
var inst_15709 = (state_15727[(2)]);
var state_15727__$1 = state_15727;
var statearr_15817_19346 = state_15727__$1;
(statearr_15817_19346[(2)] = inst_15709);

(statearr_15817_19346[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (13))){
var inst_15711 = (state_15727[(2)]);
var state_15727__$1 = (function (){var statearr_15834 = state_15727;
(statearr_15834[(9)] = inst_15711);

return statearr_15834;
})();
var statearr_15838_19347 = state_15727__$1;
(statearr_15838_19347[(2)] = null);

(statearr_15838_19347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (6))){
var inst_15663 = (state_15727[(7)]);
var state_15727__$1 = state_15727;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15727__$1,(11),inst_15663);
} else {
if((state_val_15729 === (17))){
var inst_15704 = (state_15727[(2)]);
var state_15727__$1 = state_15727;
if(cljs.core.truth_(inst_15704)){
var statearr_15864_19350 = state_15727__$1;
(statearr_15864_19350[(1)] = (19));

} else {
var statearr_15865_19351 = state_15727__$1;
(statearr_15865_19351[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (3))){
var inst_15718 = (state_15727[(2)]);
var state_15727__$1 = state_15727;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15727__$1,inst_15718);
} else {
if((state_val_15729 === (12))){
var inst_15676 = (state_15727[(10)]);
var state_15727__$1 = state_15727;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15727__$1,(14),inst_15676);
} else {
if((state_val_15729 === (2))){
var state_15727__$1 = state_15727;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15727__$1,(4),results);
} else {
if((state_val_15729 === (19))){
var state_15727__$1 = state_15727;
var statearr_15874_19369 = state_15727__$1;
(statearr_15874_19369[(2)] = null);

(statearr_15874_19369[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (11))){
var inst_15676 = (state_15727[(2)]);
var state_15727__$1 = (function (){var statearr_15877 = state_15727;
(statearr_15877[(10)] = inst_15676);

return statearr_15877;
})();
var statearr_15879_19379 = state_15727__$1;
(statearr_15879_19379[(2)] = null);

(statearr_15879_19379[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (9))){
var state_15727__$1 = state_15727;
var statearr_15881_19385 = state_15727__$1;
(statearr_15881_19385[(2)] = null);

(statearr_15881_19385[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (5))){
var state_15727__$1 = state_15727;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15883_19386 = state_15727__$1;
(statearr_15883_19386[(1)] = (8));

} else {
var statearr_15886_19391 = state_15727__$1;
(statearr_15886_19391[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (14))){
var inst_15681 = (state_15727[(11)]);
var inst_15679 = (state_15727[(8)]);
var inst_15679__$1 = (state_15727[(2)]);
var inst_15680 = (inst_15679__$1 == null);
var inst_15681__$1 = cljs.core.not(inst_15680);
var state_15727__$1 = (function (){var statearr_15890 = state_15727;
(statearr_15890[(11)] = inst_15681__$1);

(statearr_15890[(8)] = inst_15679__$1);

return statearr_15890;
})();
if(inst_15681__$1){
var statearr_15891_19402 = state_15727__$1;
(statearr_15891_19402[(1)] = (15));

} else {
var statearr_15893_19403 = state_15727__$1;
(statearr_15893_19403[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (16))){
var inst_15681 = (state_15727[(11)]);
var state_15727__$1 = state_15727;
var statearr_15897_19404 = state_15727__$1;
(statearr_15897_19404[(2)] = inst_15681);

(statearr_15897_19404[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (10))){
var inst_15673 = (state_15727[(2)]);
var state_15727__$1 = state_15727;
var statearr_15902_19405 = state_15727__$1;
(statearr_15902_19405[(2)] = inst_15673);

(statearr_15902_19405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (18))){
var inst_15701 = (state_15727[(2)]);
var state_15727__$1 = state_15727;
var statearr_15906_19410 = state_15727__$1;
(statearr_15906_19410[(2)] = inst_15701);

(statearr_15906_19410[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (8))){
var inst_15669 = cljs.core.async.close_BANG_(to);
var state_15727__$1 = state_15727;
var statearr_15908_19413 = state_15727__$1;
(statearr_15908_19413[(2)] = inst_15669);

(statearr_15908_19413[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13390__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13390__auto____0 = (function (){
var statearr_15912 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15912[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13390__auto__);

(statearr_15912[(1)] = (1));

return statearr_15912;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13390__auto____1 = (function (state_15727){
while(true){
var ret_value__13391__auto__ = (function (){try{while(true){
var result__13392__auto__ = switch__13389__auto__(state_15727);
if(cljs.core.keyword_identical_QMARK_(result__13392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13392__auto__;
}
break;
}
}catch (e15914){var ex__13393__auto__ = e15914;
var statearr_15915_19422 = state_15727;
(statearr_15915_19422[(2)] = ex__13393__auto__);


if(cljs.core.seq((state_15727[(4)]))){
var statearr_15919_19427 = state_15727;
(statearr_15919_19427[(1)] = cljs.core.first((state_15727[(4)])));

} else {
throw ex__13393__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19433 = state_15727;
state_15727 = G__19433;
continue;
} else {
return ret_value__13391__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13390__auto__ = function(state_15727){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13390__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13390__auto____1.call(this,state_15727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13390__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13390__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13390__auto__;
})()
})();
var state__14620__auto__ = (function (){var statearr_15925 = f__14619__auto__();
(statearr_15925[(6)] = c__14618__auto__);

return statearr_15925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14620__auto__);
}));

return c__14618__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15934 = arguments.length;
switch (G__15934) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15947 = arguments.length;
switch (G__15947) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15963 = arguments.length;
switch (G__15963) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14618__auto___19483 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14619__auto__ = (function (){var switch__13389__auto__ = (function (state_16003){
var state_val_16004 = (state_16003[(1)]);
if((state_val_16004 === (7))){
var inst_15999 = (state_16003[(2)]);
var state_16003__$1 = state_16003;
var statearr_16006_19490 = state_16003__$1;
(statearr_16006_19490[(2)] = inst_15999);

(statearr_16006_19490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (1))){
var state_16003__$1 = state_16003;
var statearr_16007_19495 = state_16003__$1;
(statearr_16007_19495[(2)] = null);

(statearr_16007_19495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (4))){
var inst_15977 = (state_16003[(7)]);
var inst_15977__$1 = (state_16003[(2)]);
var inst_15978 = (inst_15977__$1 == null);
var state_16003__$1 = (function (){var statearr_16008 = state_16003;
(statearr_16008[(7)] = inst_15977__$1);

return statearr_16008;
})();
if(cljs.core.truth_(inst_15978)){
var statearr_16009_19497 = state_16003__$1;
(statearr_16009_19497[(1)] = (5));

} else {
var statearr_16010_19498 = state_16003__$1;
(statearr_16010_19498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (13))){
var state_16003__$1 = state_16003;
var statearr_16011_19501 = state_16003__$1;
(statearr_16011_19501[(2)] = null);

(statearr_16011_19501[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (6))){
var inst_15977 = (state_16003[(7)]);
var inst_15984 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15977) : p.call(null,inst_15977));
var state_16003__$1 = state_16003;
if(cljs.core.truth_(inst_15984)){
var statearr_16012_19514 = state_16003__$1;
(statearr_16012_19514[(1)] = (9));

} else {
var statearr_16013_19516 = state_16003__$1;
(statearr_16013_19516[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (3))){
var inst_16001 = (state_16003[(2)]);
var state_16003__$1 = state_16003;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16003__$1,inst_16001);
} else {
if((state_val_16004 === (12))){
var state_16003__$1 = state_16003;
var statearr_16015_19520 = state_16003__$1;
(statearr_16015_19520[(2)] = null);

(statearr_16015_19520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (2))){
var state_16003__$1 = state_16003;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16003__$1,(4),ch);
} else {
if((state_val_16004 === (11))){
var inst_15977 = (state_16003[(7)]);
var inst_15988 = (state_16003[(2)]);
var state_16003__$1 = state_16003;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16003__$1,(8),inst_15988,inst_15977);
} else {
if((state_val_16004 === (9))){
var state_16003__$1 = state_16003;
var statearr_16016_19521 = state_16003__$1;
(statearr_16016_19521[(2)] = tc);

(statearr_16016_19521[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (5))){
var inst_15981 = cljs.core.async.close_BANG_(tc);
var inst_15982 = cljs.core.async.close_BANG_(fc);
var state_16003__$1 = (function (){var statearr_16017 = state_16003;
(statearr_16017[(8)] = inst_15981);

return statearr_16017;
})();
var statearr_16018_19524 = state_16003__$1;
(statearr_16018_19524[(2)] = inst_15982);

(statearr_16018_19524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (14))){
var inst_15997 = (state_16003[(2)]);
var state_16003__$1 = state_16003;
var statearr_16019_19526 = state_16003__$1;
(statearr_16019_19526[(2)] = inst_15997);

(statearr_16019_19526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (10))){
var state_16003__$1 = state_16003;
var statearr_16020_19528 = state_16003__$1;
(statearr_16020_19528[(2)] = fc);

(statearr_16020_19528[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (8))){
var inst_15992 = (state_16003[(2)]);
var state_16003__$1 = state_16003;
if(cljs.core.truth_(inst_15992)){
var statearr_16022_19529 = state_16003__$1;
(statearr_16022_19529[(1)] = (12));

} else {
var statearr_16023_19530 = state_16003__$1;
(statearr_16023_19530[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13390__auto__ = null;
var cljs$core$async$state_machine__13390__auto____0 = (function (){
var statearr_16024 = [null,null,null,null,null,null,null,null,null];
(statearr_16024[(0)] = cljs$core$async$state_machine__13390__auto__);

(statearr_16024[(1)] = (1));

return statearr_16024;
});
var cljs$core$async$state_machine__13390__auto____1 = (function (state_16003){
while(true){
var ret_value__13391__auto__ = (function (){try{while(true){
var result__13392__auto__ = switch__13389__auto__(state_16003);
if(cljs.core.keyword_identical_QMARK_(result__13392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13392__auto__;
}
break;
}
}catch (e16025){var ex__13393__auto__ = e16025;
var statearr_16026_19534 = state_16003;
(statearr_16026_19534[(2)] = ex__13393__auto__);


if(cljs.core.seq((state_16003[(4)]))){
var statearr_16027_19535 = state_16003;
(statearr_16027_19535[(1)] = cljs.core.first((state_16003[(4)])));

} else {
throw ex__13393__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19536 = state_16003;
state_16003 = G__19536;
continue;
} else {
return ret_value__13391__auto__;
}
break;
}
});
cljs$core$async$state_machine__13390__auto__ = function(state_16003){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13390__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13390__auto____1.call(this,state_16003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13390__auto____0;
cljs$core$async$state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13390__auto____1;
return cljs$core$async$state_machine__13390__auto__;
})()
})();
var state__14620__auto__ = (function (){var statearr_16031 = f__14619__auto__();
(statearr_16031[(6)] = c__14618__auto___19483);

return statearr_16031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14620__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14618__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14619__auto__ = (function (){var switch__13389__auto__ = (function (state_16061){
var state_val_16062 = (state_16061[(1)]);
if((state_val_16062 === (7))){
var inst_16056 = (state_16061[(2)]);
var state_16061__$1 = state_16061;
var statearr_16067_19538 = state_16061__$1;
(statearr_16067_19538[(2)] = inst_16056);

(statearr_16067_19538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16062 === (1))){
var inst_16037 = init;
var inst_16038 = inst_16037;
var state_16061__$1 = (function (){var statearr_16069 = state_16061;
(statearr_16069[(7)] = inst_16038);

return statearr_16069;
})();
var statearr_16071_19539 = state_16061__$1;
(statearr_16071_19539[(2)] = null);

(statearr_16071_19539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16062 === (4))){
var inst_16042 = (state_16061[(8)]);
var inst_16042__$1 = (state_16061[(2)]);
var inst_16043 = (inst_16042__$1 == null);
var state_16061__$1 = (function (){var statearr_16073 = state_16061;
(statearr_16073[(8)] = inst_16042__$1);

return statearr_16073;
})();
if(cljs.core.truth_(inst_16043)){
var statearr_16078_19542 = state_16061__$1;
(statearr_16078_19542[(1)] = (5));

} else {
var statearr_16079_19543 = state_16061__$1;
(statearr_16079_19543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16062 === (6))){
var inst_16038 = (state_16061[(7)]);
var inst_16042 = (state_16061[(8)]);
var inst_16046 = (state_16061[(9)]);
var inst_16046__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16038,inst_16042) : f.call(null,inst_16038,inst_16042));
var inst_16048 = cljs.core.reduced_QMARK_(inst_16046__$1);
var state_16061__$1 = (function (){var statearr_16084 = state_16061;
(statearr_16084[(9)] = inst_16046__$1);

return statearr_16084;
})();
if(inst_16048){
var statearr_16086_19548 = state_16061__$1;
(statearr_16086_19548[(1)] = (8));

} else {
var statearr_16087_19550 = state_16061__$1;
(statearr_16087_19550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16062 === (3))){
var inst_16058 = (state_16061[(2)]);
var state_16061__$1 = state_16061;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16061__$1,inst_16058);
} else {
if((state_val_16062 === (2))){
var state_16061__$1 = state_16061;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16061__$1,(4),ch);
} else {
if((state_val_16062 === (9))){
var inst_16046 = (state_16061[(9)]);
var inst_16038 = inst_16046;
var state_16061__$1 = (function (){var statearr_16088 = state_16061;
(statearr_16088[(7)] = inst_16038);

return statearr_16088;
})();
var statearr_16093_19551 = state_16061__$1;
(statearr_16093_19551[(2)] = null);

(statearr_16093_19551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16062 === (5))){
var inst_16038 = (state_16061[(7)]);
var state_16061__$1 = state_16061;
var statearr_16097_19552 = state_16061__$1;
(statearr_16097_19552[(2)] = inst_16038);

(statearr_16097_19552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16062 === (10))){
var inst_16054 = (state_16061[(2)]);
var state_16061__$1 = state_16061;
var statearr_16099_19553 = state_16061__$1;
(statearr_16099_19553[(2)] = inst_16054);

(statearr_16099_19553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16062 === (8))){
var inst_16046 = (state_16061[(9)]);
var inst_16050 = cljs.core.deref(inst_16046);
var state_16061__$1 = state_16061;
var statearr_16101_19555 = state_16061__$1;
(statearr_16101_19555[(2)] = inst_16050);

(statearr_16101_19555[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13390__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13390__auto____0 = (function (){
var statearr_16105 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16105[(0)] = cljs$core$async$reduce_$_state_machine__13390__auto__);

(statearr_16105[(1)] = (1));

return statearr_16105;
});
var cljs$core$async$reduce_$_state_machine__13390__auto____1 = (function (state_16061){
while(true){
var ret_value__13391__auto__ = (function (){try{while(true){
var result__13392__auto__ = switch__13389__auto__(state_16061);
if(cljs.core.keyword_identical_QMARK_(result__13392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13392__auto__;
}
break;
}
}catch (e16107){var ex__13393__auto__ = e16107;
var statearr_16108_19560 = state_16061;
(statearr_16108_19560[(2)] = ex__13393__auto__);


if(cljs.core.seq((state_16061[(4)]))){
var statearr_16109_19568 = state_16061;
(statearr_16109_19568[(1)] = cljs.core.first((state_16061[(4)])));

} else {
throw ex__13393__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19571 = state_16061;
state_16061 = G__19571;
continue;
} else {
return ret_value__13391__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13390__auto__ = function(state_16061){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13390__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13390__auto____1.call(this,state_16061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13390__auto____0;
cljs$core$async$reduce_$_state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13390__auto____1;
return cljs$core$async$reduce_$_state_machine__13390__auto__;
})()
})();
var state__14620__auto__ = (function (){var statearr_16118 = f__14619__auto__();
(statearr_16118[(6)] = c__14618__auto__);

return statearr_16118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14620__auto__);
}));

return c__14618__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14618__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14619__auto__ = (function (){var switch__13389__auto__ = (function (state_16130){
var state_val_16131 = (state_16130[(1)]);
if((state_val_16131 === (1))){
var inst_16125 = cljs.core.async.reduce(f__$1,init,ch);
var state_16130__$1 = state_16130;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16130__$1,(2),inst_16125);
} else {
if((state_val_16131 === (2))){
var inst_16127 = (state_16130[(2)]);
var inst_16128 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16127) : f__$1.call(null,inst_16127));
var state_16130__$1 = state_16130;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16130__$1,inst_16128);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13390__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13390__auto____0 = (function (){
var statearr_16133 = [null,null,null,null,null,null,null];
(statearr_16133[(0)] = cljs$core$async$transduce_$_state_machine__13390__auto__);

(statearr_16133[(1)] = (1));

return statearr_16133;
});
var cljs$core$async$transduce_$_state_machine__13390__auto____1 = (function (state_16130){
while(true){
var ret_value__13391__auto__ = (function (){try{while(true){
var result__13392__auto__ = switch__13389__auto__(state_16130);
if(cljs.core.keyword_identical_QMARK_(result__13392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13392__auto__;
}
break;
}
}catch (e16141){var ex__13393__auto__ = e16141;
var statearr_16142_19574 = state_16130;
(statearr_16142_19574[(2)] = ex__13393__auto__);


if(cljs.core.seq((state_16130[(4)]))){
var statearr_16144_19575 = state_16130;
(statearr_16144_19575[(1)] = cljs.core.first((state_16130[(4)])));

} else {
throw ex__13393__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19577 = state_16130;
state_16130 = G__19577;
continue;
} else {
return ret_value__13391__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13390__auto__ = function(state_16130){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13390__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13390__auto____1.call(this,state_16130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13390__auto____0;
cljs$core$async$transduce_$_state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13390__auto____1;
return cljs$core$async$transduce_$_state_machine__13390__auto__;
})()
})();
var state__14620__auto__ = (function (){var statearr_16145 = f__14619__auto__();
(statearr_16145[(6)] = c__14618__auto__);

return statearr_16145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14620__auto__);
}));

return c__14618__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__16151 = arguments.length;
switch (G__16151) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14618__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14619__auto__ = (function (){var switch__13389__auto__ = (function (state_16197){
var state_val_16198 = (state_16197[(1)]);
if((state_val_16198 === (7))){
var inst_16174 = (state_16197[(2)]);
var state_16197__$1 = state_16197;
var statearr_16205_19579 = state_16197__$1;
(statearr_16205_19579[(2)] = inst_16174);

(statearr_16205_19579[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16198 === (1))){
var inst_16168 = cljs.core.seq(coll);
var inst_16169 = inst_16168;
var state_16197__$1 = (function (){var statearr_16206 = state_16197;
(statearr_16206[(7)] = inst_16169);

return statearr_16206;
})();
var statearr_16207_19580 = state_16197__$1;
(statearr_16207_19580[(2)] = null);

(statearr_16207_19580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16198 === (4))){
var inst_16169 = (state_16197[(7)]);
var inst_16172 = cljs.core.first(inst_16169);
var state_16197__$1 = state_16197;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16197__$1,(7),ch,inst_16172);
} else {
if((state_val_16198 === (13))){
var inst_16186 = (state_16197[(2)]);
var state_16197__$1 = state_16197;
var statearr_16222_19585 = state_16197__$1;
(statearr_16222_19585[(2)] = inst_16186);

(statearr_16222_19585[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16198 === (6))){
var inst_16177 = (state_16197[(2)]);
var state_16197__$1 = state_16197;
if(cljs.core.truth_(inst_16177)){
var statearr_16223_19586 = state_16197__$1;
(statearr_16223_19586[(1)] = (8));

} else {
var statearr_16225_19587 = state_16197__$1;
(statearr_16225_19587[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16198 === (3))){
var inst_16190 = (state_16197[(2)]);
var state_16197__$1 = state_16197;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16197__$1,inst_16190);
} else {
if((state_val_16198 === (12))){
var state_16197__$1 = state_16197;
var statearr_16226_19593 = state_16197__$1;
(statearr_16226_19593[(2)] = null);

(statearr_16226_19593[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16198 === (2))){
var inst_16169 = (state_16197[(7)]);
var state_16197__$1 = state_16197;
if(cljs.core.truth_(inst_16169)){
var statearr_16227_19594 = state_16197__$1;
(statearr_16227_19594[(1)] = (4));

} else {
var statearr_16228_19595 = state_16197__$1;
(statearr_16228_19595[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16198 === (11))){
var inst_16183 = cljs.core.async.close_BANG_(ch);
var state_16197__$1 = state_16197;
var statearr_16234_19598 = state_16197__$1;
(statearr_16234_19598[(2)] = inst_16183);

(statearr_16234_19598[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16198 === (9))){
var state_16197__$1 = state_16197;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16235_19604 = state_16197__$1;
(statearr_16235_19604[(1)] = (11));

} else {
var statearr_16237_19605 = state_16197__$1;
(statearr_16237_19605[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16198 === (5))){
var inst_16169 = (state_16197[(7)]);
var state_16197__$1 = state_16197;
var statearr_16239_19606 = state_16197__$1;
(statearr_16239_19606[(2)] = inst_16169);

(statearr_16239_19606[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16198 === (10))){
var inst_16188 = (state_16197[(2)]);
var state_16197__$1 = state_16197;
var statearr_16240_19607 = state_16197__$1;
(statearr_16240_19607[(2)] = inst_16188);

(statearr_16240_19607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16198 === (8))){
var inst_16169 = (state_16197[(7)]);
var inst_16179 = cljs.core.next(inst_16169);
var inst_16169__$1 = inst_16179;
var state_16197__$1 = (function (){var statearr_16244 = state_16197;
(statearr_16244[(7)] = inst_16169__$1);

return statearr_16244;
})();
var statearr_16246_19608 = state_16197__$1;
(statearr_16246_19608[(2)] = null);

(statearr_16246_19608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13390__auto__ = null;
var cljs$core$async$state_machine__13390__auto____0 = (function (){
var statearr_16255 = [null,null,null,null,null,null,null,null];
(statearr_16255[(0)] = cljs$core$async$state_machine__13390__auto__);

(statearr_16255[(1)] = (1));

return statearr_16255;
});
var cljs$core$async$state_machine__13390__auto____1 = (function (state_16197){
while(true){
var ret_value__13391__auto__ = (function (){try{while(true){
var result__13392__auto__ = switch__13389__auto__(state_16197);
if(cljs.core.keyword_identical_QMARK_(result__13392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13392__auto__;
}
break;
}
}catch (e16262){var ex__13393__auto__ = e16262;
var statearr_16263_19613 = state_16197;
(statearr_16263_19613[(2)] = ex__13393__auto__);


if(cljs.core.seq((state_16197[(4)]))){
var statearr_16265_19614 = state_16197;
(statearr_16265_19614[(1)] = cljs.core.first((state_16197[(4)])));

} else {
throw ex__13393__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19615 = state_16197;
state_16197 = G__19615;
continue;
} else {
return ret_value__13391__auto__;
}
break;
}
});
cljs$core$async$state_machine__13390__auto__ = function(state_16197){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13390__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13390__auto____1.call(this,state_16197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13390__auto____0;
cljs$core$async$state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13390__auto____1;
return cljs$core$async$state_machine__13390__auto__;
})()
})();
var state__14620__auto__ = (function (){var statearr_16268 = f__14619__auto__();
(statearr_16268[(6)] = c__14618__auto__);

return statearr_16268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14620__auto__);
}));

return c__14618__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__16276 = arguments.length;
switch (G__16276) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_19632 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null,_));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_19632(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_19644 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_19644(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_19661 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_19661(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_19666 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_19666(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16328 = (function (ch,cs,meta16329){
this.ch = ch;
this.cs = cs;
this.meta16329 = meta16329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16330,meta16329__$1){
var self__ = this;
var _16330__$1 = this;
return (new cljs.core.async.t_cljs$core$async16328(self__.ch,self__.cs,meta16329__$1));
}));

(cljs.core.async.t_cljs$core$async16328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16330){
var self__ = this;
var _16330__$1 = this;
return self__.meta16329;
}));

(cljs.core.async.t_cljs$core$async16328.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16328.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16328.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16328.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async16328.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async16328.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async16328.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16329","meta16329",1533357813,null)], null);
}));

(cljs.core.async.t_cljs$core$async16328.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16328.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16328");

(cljs.core.async.t_cljs$core$async16328.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16328");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16328.
 */
cljs.core.async.__GT_t_cljs$core$async16328 = (function cljs$core$async$__GT_t_cljs$core$async16328(ch,cs,meta16329){
return (new cljs.core.async.t_cljs$core$async16328(ch,cs,meta16329));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async16328(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14618__auto___19713 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14619__auto__ = (function (){var switch__13389__auto__ = (function (state_16512){
var state_val_16513 = (state_16512[(1)]);
if((state_val_16513 === (7))){
var inst_16500 = (state_16512[(2)]);
var state_16512__$1 = state_16512;
var statearr_16515_19719 = state_16512__$1;
(statearr_16515_19719[(2)] = inst_16500);

(statearr_16515_19719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (20))){
var inst_16379 = (state_16512[(7)]);
var inst_16391 = cljs.core.first(inst_16379);
var inst_16392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16391,(0),null);
var inst_16393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16391,(1),null);
var state_16512__$1 = (function (){var statearr_16519 = state_16512;
(statearr_16519[(8)] = inst_16392);

return statearr_16519;
})();
if(cljs.core.truth_(inst_16393)){
var statearr_16524_19732 = state_16512__$1;
(statearr_16524_19732[(1)] = (22));

} else {
var statearr_16525_19733 = state_16512__$1;
(statearr_16525_19733[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (27))){
var inst_16452 = (state_16512[(9)]);
var inst_16340 = (state_16512[(10)]);
var inst_16445 = (state_16512[(11)]);
var inst_16447 = (state_16512[(12)]);
var inst_16452__$1 = cljs.core._nth(inst_16445,inst_16447);
var inst_16453 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16452__$1,inst_16340,done);
var state_16512__$1 = (function (){var statearr_16526 = state_16512;
(statearr_16526[(9)] = inst_16452__$1);

return statearr_16526;
})();
if(cljs.core.truth_(inst_16453)){
var statearr_16527_19738 = state_16512__$1;
(statearr_16527_19738[(1)] = (30));

} else {
var statearr_16529_19739 = state_16512__$1;
(statearr_16529_19739[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (1))){
var state_16512__$1 = state_16512;
var statearr_16532_19740 = state_16512__$1;
(statearr_16532_19740[(2)] = null);

(statearr_16532_19740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (24))){
var inst_16379 = (state_16512[(7)]);
var inst_16398 = (state_16512[(2)]);
var inst_16399 = cljs.core.next(inst_16379);
var inst_16349 = inst_16399;
var inst_16350 = null;
var inst_16351 = (0);
var inst_16352 = (0);
var state_16512__$1 = (function (){var statearr_16534 = state_16512;
(statearr_16534[(13)] = inst_16349);

(statearr_16534[(14)] = inst_16352);

(statearr_16534[(15)] = inst_16350);

(statearr_16534[(16)] = inst_16398);

(statearr_16534[(17)] = inst_16351);

return statearr_16534;
})();
var statearr_16537_19748 = state_16512__$1;
(statearr_16537_19748[(2)] = null);

(statearr_16537_19748[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (39))){
var state_16512__$1 = state_16512;
var statearr_16544_19753 = state_16512__$1;
(statearr_16544_19753[(2)] = null);

(statearr_16544_19753[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (4))){
var inst_16340 = (state_16512[(10)]);
var inst_16340__$1 = (state_16512[(2)]);
var inst_16341 = (inst_16340__$1 == null);
var state_16512__$1 = (function (){var statearr_16547 = state_16512;
(statearr_16547[(10)] = inst_16340__$1);

return statearr_16547;
})();
if(cljs.core.truth_(inst_16341)){
var statearr_16548_19756 = state_16512__$1;
(statearr_16548_19756[(1)] = (5));

} else {
var statearr_16549_19762 = state_16512__$1;
(statearr_16549_19762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (15))){
var inst_16349 = (state_16512[(13)]);
var inst_16352 = (state_16512[(14)]);
var inst_16350 = (state_16512[(15)]);
var inst_16351 = (state_16512[(17)]);
var inst_16373 = (state_16512[(2)]);
var inst_16374 = (inst_16352 + (1));
var tmp16538 = inst_16349;
var tmp16539 = inst_16350;
var tmp16540 = inst_16351;
var inst_16349__$1 = tmp16538;
var inst_16350__$1 = tmp16539;
var inst_16351__$1 = tmp16540;
var inst_16352__$1 = inst_16374;
var state_16512__$1 = (function (){var statearr_16550 = state_16512;
(statearr_16550[(13)] = inst_16349__$1);

(statearr_16550[(14)] = inst_16352__$1);

(statearr_16550[(15)] = inst_16350__$1);

(statearr_16550[(18)] = inst_16373);

(statearr_16550[(17)] = inst_16351__$1);

return statearr_16550;
})();
var statearr_16551_19766 = state_16512__$1;
(statearr_16551_19766[(2)] = null);

(statearr_16551_19766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (21))){
var inst_16402 = (state_16512[(2)]);
var state_16512__$1 = state_16512;
var statearr_16555_19767 = state_16512__$1;
(statearr_16555_19767[(2)] = inst_16402);

(statearr_16555_19767[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (31))){
var inst_16452 = (state_16512[(9)]);
var inst_16456 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16452);
var state_16512__$1 = state_16512;
var statearr_16556_19768 = state_16512__$1;
(statearr_16556_19768[(2)] = inst_16456);

(statearr_16556_19768[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (32))){
var inst_16446 = (state_16512[(19)]);
var inst_16445 = (state_16512[(11)]);
var inst_16447 = (state_16512[(12)]);
var inst_16444 = (state_16512[(20)]);
var inst_16458 = (state_16512[(2)]);
var inst_16459 = (inst_16447 + (1));
var tmp16552 = inst_16446;
var tmp16553 = inst_16445;
var tmp16554 = inst_16444;
var inst_16444__$1 = tmp16554;
var inst_16445__$1 = tmp16553;
var inst_16446__$1 = tmp16552;
var inst_16447__$1 = inst_16459;
var state_16512__$1 = (function (){var statearr_16564 = state_16512;
(statearr_16564[(19)] = inst_16446__$1);

(statearr_16564[(11)] = inst_16445__$1);

(statearr_16564[(21)] = inst_16458);

(statearr_16564[(12)] = inst_16447__$1);

(statearr_16564[(20)] = inst_16444__$1);

return statearr_16564;
})();
var statearr_16566_19773 = state_16512__$1;
(statearr_16566_19773[(2)] = null);

(statearr_16566_19773[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (40))){
var inst_16472 = (state_16512[(22)]);
var inst_16477 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16472);
var state_16512__$1 = state_16512;
var statearr_16571_19774 = state_16512__$1;
(statearr_16571_19774[(2)] = inst_16477);

(statearr_16571_19774[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (33))){
var inst_16462 = (state_16512[(23)]);
var inst_16464 = cljs.core.chunked_seq_QMARK_(inst_16462);
var state_16512__$1 = state_16512;
if(inst_16464){
var statearr_16575_19775 = state_16512__$1;
(statearr_16575_19775[(1)] = (36));

} else {
var statearr_16576_19776 = state_16512__$1;
(statearr_16576_19776[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (13))){
var inst_16363 = (state_16512[(24)]);
var inst_16368 = cljs.core.async.close_BANG_(inst_16363);
var state_16512__$1 = state_16512;
var statearr_16582_19777 = state_16512__$1;
(statearr_16582_19777[(2)] = inst_16368);

(statearr_16582_19777[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (22))){
var inst_16392 = (state_16512[(8)]);
var inst_16395 = cljs.core.async.close_BANG_(inst_16392);
var state_16512__$1 = state_16512;
var statearr_16583_19778 = state_16512__$1;
(statearr_16583_19778[(2)] = inst_16395);

(statearr_16583_19778[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (36))){
var inst_16462 = (state_16512[(23)]);
var inst_16467 = cljs.core.chunk_first(inst_16462);
var inst_16468 = cljs.core.chunk_rest(inst_16462);
var inst_16469 = cljs.core.count(inst_16467);
var inst_16444 = inst_16468;
var inst_16445 = inst_16467;
var inst_16446 = inst_16469;
var inst_16447 = (0);
var state_16512__$1 = (function (){var statearr_16594 = state_16512;
(statearr_16594[(19)] = inst_16446);

(statearr_16594[(11)] = inst_16445);

(statearr_16594[(12)] = inst_16447);

(statearr_16594[(20)] = inst_16444);

return statearr_16594;
})();
var statearr_16595_19779 = state_16512__$1;
(statearr_16595_19779[(2)] = null);

(statearr_16595_19779[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (41))){
var inst_16462 = (state_16512[(23)]);
var inst_16479 = (state_16512[(2)]);
var inst_16480 = cljs.core.next(inst_16462);
var inst_16444 = inst_16480;
var inst_16445 = null;
var inst_16446 = (0);
var inst_16447 = (0);
var state_16512__$1 = (function (){var statearr_16598 = state_16512;
(statearr_16598[(19)] = inst_16446);

(statearr_16598[(11)] = inst_16445);

(statearr_16598[(25)] = inst_16479);

(statearr_16598[(12)] = inst_16447);

(statearr_16598[(20)] = inst_16444);

return statearr_16598;
})();
var statearr_16599_19780 = state_16512__$1;
(statearr_16599_19780[(2)] = null);

(statearr_16599_19780[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (43))){
var state_16512__$1 = state_16512;
var statearr_16607_19781 = state_16512__$1;
(statearr_16607_19781[(2)] = null);

(statearr_16607_19781[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (29))){
var inst_16488 = (state_16512[(2)]);
var state_16512__$1 = state_16512;
var statearr_16609_19782 = state_16512__$1;
(statearr_16609_19782[(2)] = inst_16488);

(statearr_16609_19782[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (44))){
var inst_16497 = (state_16512[(2)]);
var state_16512__$1 = (function (){var statearr_16618 = state_16512;
(statearr_16618[(26)] = inst_16497);

return statearr_16618;
})();
var statearr_16619_19783 = state_16512__$1;
(statearr_16619_19783[(2)] = null);

(statearr_16619_19783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (6))){
var inst_16436 = (state_16512[(27)]);
var inst_16435 = cljs.core.deref(cs);
var inst_16436__$1 = cljs.core.keys(inst_16435);
var inst_16437 = cljs.core.count(inst_16436__$1);
var inst_16438 = cljs.core.reset_BANG_(dctr,inst_16437);
var inst_16443 = cljs.core.seq(inst_16436__$1);
var inst_16444 = inst_16443;
var inst_16445 = null;
var inst_16446 = (0);
var inst_16447 = (0);
var state_16512__$1 = (function (){var statearr_16622 = state_16512;
(statearr_16622[(19)] = inst_16446);

(statearr_16622[(11)] = inst_16445);

(statearr_16622[(12)] = inst_16447);

(statearr_16622[(27)] = inst_16436__$1);

(statearr_16622[(28)] = inst_16438);

(statearr_16622[(20)] = inst_16444);

return statearr_16622;
})();
var statearr_16623_19792 = state_16512__$1;
(statearr_16623_19792[(2)] = null);

(statearr_16623_19792[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (28))){
var inst_16462 = (state_16512[(23)]);
var inst_16444 = (state_16512[(20)]);
var inst_16462__$1 = cljs.core.seq(inst_16444);
var state_16512__$1 = (function (){var statearr_16627 = state_16512;
(statearr_16627[(23)] = inst_16462__$1);

return statearr_16627;
})();
if(inst_16462__$1){
var statearr_16628_19793 = state_16512__$1;
(statearr_16628_19793[(1)] = (33));

} else {
var statearr_16629_19794 = state_16512__$1;
(statearr_16629_19794[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (25))){
var inst_16446 = (state_16512[(19)]);
var inst_16447 = (state_16512[(12)]);
var inst_16449 = (inst_16447 < inst_16446);
var inst_16450 = inst_16449;
var state_16512__$1 = state_16512;
if(cljs.core.truth_(inst_16450)){
var statearr_16631_19796 = state_16512__$1;
(statearr_16631_19796[(1)] = (27));

} else {
var statearr_16632_19797 = state_16512__$1;
(statearr_16632_19797[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (34))){
var state_16512__$1 = state_16512;
var statearr_16633_19798 = state_16512__$1;
(statearr_16633_19798[(2)] = null);

(statearr_16633_19798[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (17))){
var state_16512__$1 = state_16512;
var statearr_16639_19799 = state_16512__$1;
(statearr_16639_19799[(2)] = null);

(statearr_16639_19799[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (3))){
var inst_16502 = (state_16512[(2)]);
var state_16512__$1 = state_16512;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16512__$1,inst_16502);
} else {
if((state_val_16513 === (12))){
var inst_16424 = (state_16512[(2)]);
var state_16512__$1 = state_16512;
var statearr_16640_19801 = state_16512__$1;
(statearr_16640_19801[(2)] = inst_16424);

(statearr_16640_19801[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (2))){
var state_16512__$1 = state_16512;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16512__$1,(4),ch);
} else {
if((state_val_16513 === (23))){
var state_16512__$1 = state_16512;
var statearr_16656_19802 = state_16512__$1;
(statearr_16656_19802[(2)] = null);

(statearr_16656_19802[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (35))){
var inst_16486 = (state_16512[(2)]);
var state_16512__$1 = state_16512;
var statearr_16663_19810 = state_16512__$1;
(statearr_16663_19810[(2)] = inst_16486);

(statearr_16663_19810[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (19))){
var inst_16379 = (state_16512[(7)]);
var inst_16383 = cljs.core.chunk_first(inst_16379);
var inst_16384 = cljs.core.chunk_rest(inst_16379);
var inst_16385 = cljs.core.count(inst_16383);
var inst_16349 = inst_16384;
var inst_16350 = inst_16383;
var inst_16351 = inst_16385;
var inst_16352 = (0);
var state_16512__$1 = (function (){var statearr_16664 = state_16512;
(statearr_16664[(13)] = inst_16349);

(statearr_16664[(14)] = inst_16352);

(statearr_16664[(15)] = inst_16350);

(statearr_16664[(17)] = inst_16351);

return statearr_16664;
})();
var statearr_16665_19813 = state_16512__$1;
(statearr_16665_19813[(2)] = null);

(statearr_16665_19813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (11))){
var inst_16349 = (state_16512[(13)]);
var inst_16379 = (state_16512[(7)]);
var inst_16379__$1 = cljs.core.seq(inst_16349);
var state_16512__$1 = (function (){var statearr_16672 = state_16512;
(statearr_16672[(7)] = inst_16379__$1);

return statearr_16672;
})();
if(inst_16379__$1){
var statearr_16676_19814 = state_16512__$1;
(statearr_16676_19814[(1)] = (16));

} else {
var statearr_16677_19815 = state_16512__$1;
(statearr_16677_19815[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (9))){
var inst_16426 = (state_16512[(2)]);
var state_16512__$1 = state_16512;
var statearr_16681_19816 = state_16512__$1;
(statearr_16681_19816[(2)] = inst_16426);

(statearr_16681_19816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (5))){
var inst_16347 = cljs.core.deref(cs);
var inst_16348 = cljs.core.seq(inst_16347);
var inst_16349 = inst_16348;
var inst_16350 = null;
var inst_16351 = (0);
var inst_16352 = (0);
var state_16512__$1 = (function (){var statearr_16690 = state_16512;
(statearr_16690[(13)] = inst_16349);

(statearr_16690[(14)] = inst_16352);

(statearr_16690[(15)] = inst_16350);

(statearr_16690[(17)] = inst_16351);

return statearr_16690;
})();
var statearr_16695_19820 = state_16512__$1;
(statearr_16695_19820[(2)] = null);

(statearr_16695_19820[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (14))){
var state_16512__$1 = state_16512;
var statearr_16699_19821 = state_16512__$1;
(statearr_16699_19821[(2)] = null);

(statearr_16699_19821[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (45))){
var inst_16494 = (state_16512[(2)]);
var state_16512__$1 = state_16512;
var statearr_16700_19826 = state_16512__$1;
(statearr_16700_19826[(2)] = inst_16494);

(statearr_16700_19826[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (26))){
var inst_16436 = (state_16512[(27)]);
var inst_16490 = (state_16512[(2)]);
var inst_16491 = cljs.core.seq(inst_16436);
var state_16512__$1 = (function (){var statearr_16701 = state_16512;
(statearr_16701[(29)] = inst_16490);

return statearr_16701;
})();
if(inst_16491){
var statearr_16702_19827 = state_16512__$1;
(statearr_16702_19827[(1)] = (42));

} else {
var statearr_16703_19828 = state_16512__$1;
(statearr_16703_19828[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (16))){
var inst_16379 = (state_16512[(7)]);
var inst_16381 = cljs.core.chunked_seq_QMARK_(inst_16379);
var state_16512__$1 = state_16512;
if(inst_16381){
var statearr_16704_19829 = state_16512__$1;
(statearr_16704_19829[(1)] = (19));

} else {
var statearr_16705_19830 = state_16512__$1;
(statearr_16705_19830[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (38))){
var inst_16483 = (state_16512[(2)]);
var state_16512__$1 = state_16512;
var statearr_16718_19831 = state_16512__$1;
(statearr_16718_19831[(2)] = inst_16483);

(statearr_16718_19831[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (30))){
var state_16512__$1 = state_16512;
var statearr_16719_19832 = state_16512__$1;
(statearr_16719_19832[(2)] = null);

(statearr_16719_19832[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (10))){
var inst_16352 = (state_16512[(14)]);
var inst_16350 = (state_16512[(15)]);
var inst_16362 = cljs.core._nth(inst_16350,inst_16352);
var inst_16363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16362,(0),null);
var inst_16364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16362,(1),null);
var state_16512__$1 = (function (){var statearr_16730 = state_16512;
(statearr_16730[(24)] = inst_16363);

return statearr_16730;
})();
if(cljs.core.truth_(inst_16364)){
var statearr_16731_19836 = state_16512__$1;
(statearr_16731_19836[(1)] = (13));

} else {
var statearr_16732_19837 = state_16512__$1;
(statearr_16732_19837[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (18))){
var inst_16417 = (state_16512[(2)]);
var state_16512__$1 = state_16512;
var statearr_16733_19838 = state_16512__$1;
(statearr_16733_19838[(2)] = inst_16417);

(statearr_16733_19838[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (42))){
var state_16512__$1 = state_16512;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16512__$1,(45),dchan);
} else {
if((state_val_16513 === (37))){
var inst_16462 = (state_16512[(23)]);
var inst_16340 = (state_16512[(10)]);
var inst_16472 = (state_16512[(22)]);
var inst_16472__$1 = cljs.core.first(inst_16462);
var inst_16474 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16472__$1,inst_16340,done);
var state_16512__$1 = (function (){var statearr_16737 = state_16512;
(statearr_16737[(22)] = inst_16472__$1);

return statearr_16737;
})();
if(cljs.core.truth_(inst_16474)){
var statearr_16739_19840 = state_16512__$1;
(statearr_16739_19840[(1)] = (39));

} else {
var statearr_16740_19841 = state_16512__$1;
(statearr_16740_19841[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16513 === (8))){
var inst_16352 = (state_16512[(14)]);
var inst_16351 = (state_16512[(17)]);
var inst_16354 = (inst_16352 < inst_16351);
var inst_16355 = inst_16354;
var state_16512__$1 = state_16512;
if(cljs.core.truth_(inst_16355)){
var statearr_16741_19842 = state_16512__$1;
(statearr_16741_19842[(1)] = (10));

} else {
var statearr_16744_19843 = state_16512__$1;
(statearr_16744_19843[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13390__auto__ = null;
var cljs$core$async$mult_$_state_machine__13390__auto____0 = (function (){
var statearr_16755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16755[(0)] = cljs$core$async$mult_$_state_machine__13390__auto__);

(statearr_16755[(1)] = (1));

return statearr_16755;
});
var cljs$core$async$mult_$_state_machine__13390__auto____1 = (function (state_16512){
while(true){
var ret_value__13391__auto__ = (function (){try{while(true){
var result__13392__auto__ = switch__13389__auto__(state_16512);
if(cljs.core.keyword_identical_QMARK_(result__13392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13392__auto__;
}
break;
}
}catch (e16759){var ex__13393__auto__ = e16759;
var statearr_16760_19845 = state_16512;
(statearr_16760_19845[(2)] = ex__13393__auto__);


if(cljs.core.seq((state_16512[(4)]))){
var statearr_16762_19846 = state_16512;
(statearr_16762_19846[(1)] = cljs.core.first((state_16512[(4)])));

} else {
throw ex__13393__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19847 = state_16512;
state_16512 = G__19847;
continue;
} else {
return ret_value__13391__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13390__auto__ = function(state_16512){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13390__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13390__auto____1.call(this,state_16512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13390__auto____0;
cljs$core$async$mult_$_state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13390__auto____1;
return cljs$core$async$mult_$_state_machine__13390__auto__;
})()
})();
var state__14620__auto__ = (function (){var statearr_16766 = f__14619__auto__();
(statearr_16766[(6)] = c__14618__auto___19713);

return statearr_16766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14620__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16780 = arguments.length;
switch (G__16780) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_19853 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_19853(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_19854 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_19854(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_19856 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_19856(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_19863 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null,m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_19863(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_19869 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null,m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_19869(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19870 = arguments.length;
var i__5727__auto___19871 = (0);
while(true){
if((i__5727__auto___19871 < len__5726__auto___19870)){
args__5732__auto__.push((arguments[i__5727__auto___19871]));

var G__19872 = (i__5727__auto___19871 + (1));
i__5727__auto___19871 = G__19872;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16869){
var map__16870 = p__16869;
var map__16870__$1 = cljs.core.__destructure_map(map__16870);
var opts = map__16870__$1;
var statearr_16871_19873 = state;
(statearr_16871_19873[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16877_19877 = state;
(statearr_16877_19877[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16878_19878 = state;
(statearr_16878_19878[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16850){
var G__16851 = cljs.core.first(seq16850);
var seq16850__$1 = cljs.core.next(seq16850);
var G__16852 = cljs.core.first(seq16850__$1);
var seq16850__$2 = cljs.core.next(seq16850__$1);
var G__16853 = cljs.core.first(seq16850__$2);
var seq16850__$3 = cljs.core.next(seq16850__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16851,G__16852,G__16853,seq16850__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16902 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16903){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16903 = meta16903;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16904,meta16903__$1){
var self__ = this;
var _16904__$1 = this;
return (new cljs.core.async.t_cljs$core$async16902(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16903__$1));
}));

(cljs.core.async.t_cljs$core$async16902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16904){
var self__ = this;
var _16904__$1 = this;
return self__.meta16903;
}));

(cljs.core.async.t_cljs$core$async16902.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16902.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16902.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16902.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16902.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16902.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16902.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16902.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16902.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16903","meta16903",414465872,null)], null);
}));

(cljs.core.async.t_cljs$core$async16902.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16902.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16902");

(cljs.core.async.t_cljs$core$async16902.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16902");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16902.
 */
cljs.core.async.__GT_t_cljs$core$async16902 = (function cljs$core$async$__GT_t_cljs$core$async16902(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16903){
return (new cljs.core.async.t_cljs$core$async16902(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16903));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16902(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14618__auto___19898 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14619__auto__ = (function (){var switch__13389__auto__ = (function (state_17029){
var state_val_17030 = (state_17029[(1)]);
if((state_val_17030 === (7))){
var inst_16970 = (state_17029[(2)]);
var state_17029__$1 = state_17029;
if(cljs.core.truth_(inst_16970)){
var statearr_17044_19899 = state_17029__$1;
(statearr_17044_19899[(1)] = (8));

} else {
var statearr_17045_19900 = state_17029__$1;
(statearr_17045_19900[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17030 === (20))){
var inst_16963 = (state_17029[(7)]);
var state_17029__$1 = state_17029;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17029__$1,(23),out,inst_16963);
} else {
if((state_val_17030 === (1))){
var inst_16946 = calc_state();
var inst_16947 = cljs.core.__destructure_map(inst_16946);
var inst_16948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16947,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16949 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16947,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16950 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16947,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16951 = inst_16946;
var state_17029__$1 = (function (){var statearr_17054 = state_17029;
(statearr_17054[(8)] = inst_16951);

(statearr_17054[(9)] = inst_16950);

(statearr_17054[(10)] = inst_16948);

(statearr_17054[(11)] = inst_16949);

return statearr_17054;
})();
var statearr_17055_19901 = state_17029__$1;
(statearr_17055_19901[(2)] = null);

(statearr_17055_19901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17030 === (24))){
var inst_16954 = (state_17029[(12)]);
var inst_16951 = inst_16954;
var state_17029__$1 = (function (){var statearr_17062 = state_17029;
(statearr_17062[(8)] = inst_16951);

return statearr_17062;
})();
var statearr_17063_19902 = state_17029__$1;
(statearr_17063_19902[(2)] = null);

(statearr_17063_19902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17030 === (4))){
var inst_16965 = (state_17029[(13)]);
var inst_16963 = (state_17029[(7)]);
var inst_16962 = (state_17029[(2)]);
var inst_16963__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16962,(0),null);
var inst_16964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16962,(1),null);
var inst_16965__$1 = (inst_16963__$1 == null);
var state_17029__$1 = (function (){var statearr_17064 = state_17029;
(statearr_17064[(13)] = inst_16965__$1);

(statearr_17064[(7)] = inst_16963__$1);

(statearr_17064[(14)] = inst_16964);

return statearr_17064;
})();
if(cljs.core.truth_(inst_16965__$1)){
var statearr_17065_19903 = state_17029__$1;
(statearr_17065_19903[(1)] = (5));

} else {
var statearr_17069_19904 = state_17029__$1;
(statearr_17069_19904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17030 === (15))){
var inst_16955 = (state_17029[(15)]);
var inst_16997 = (state_17029[(16)]);
var inst_16997__$1 = cljs.core.empty_QMARK_(inst_16955);
var state_17029__$1 = (function (){var statearr_17076 = state_17029;
(statearr_17076[(16)] = inst_16997__$1);

return statearr_17076;
})();
if(inst_16997__$1){
var statearr_17077_19905 = state_17029__$1;
(statearr_17077_19905[(1)] = (17));

} else {
var statearr_17078_19906 = state_17029__$1;
(statearr_17078_19906[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17030 === (21))){
var inst_16954 = (state_17029[(12)]);
var inst_16951 = inst_16954;
var state_17029__$1 = (function (){var statearr_17082 = state_17029;
(statearr_17082[(8)] = inst_16951);

return statearr_17082;
})();
var statearr_17083_19907 = state_17029__$1;
(statearr_17083_19907[(2)] = null);

(statearr_17083_19907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17030 === (13))){
var inst_16983 = (state_17029[(2)]);
var inst_16984 = calc_state();
var inst_16951 = inst_16984;
var state_17029__$1 = (function (){var statearr_17084 = state_17029;
(statearr_17084[(8)] = inst_16951);

(statearr_17084[(17)] = inst_16983);

return statearr_17084;
})();
var statearr_17085_19908 = state_17029__$1;
(statearr_17085_19908[(2)] = null);

(statearr_17085_19908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17030 === (22))){
var inst_17023 = (state_17029[(2)]);
var state_17029__$1 = state_17029;
var statearr_17087_19909 = state_17029__$1;
(statearr_17087_19909[(2)] = inst_17023);

(statearr_17087_19909[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17030 === (6))){
var inst_16964 = (state_17029[(14)]);
var inst_16968 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16964,change);
var state_17029__$1 = state_17029;
var statearr_17092_19911 = state_17029__$1;
(statearr_17092_19911[(2)] = inst_16968);

(statearr_17092_19911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17030 === (25))){
var state_17029__$1 = state_17029;
var statearr_17093_19912 = state_17029__$1;
(statearr_17093_19912[(2)] = null);

(statearr_17093_19912[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17030 === (17))){
var inst_16964 = (state_17029[(14)]);
var inst_16956 = (state_17029[(18)]);
var inst_17002 = (inst_16956.cljs$core$IFn$_invoke$arity$1 ? inst_16956.cljs$core$IFn$_invoke$arity$1(inst_16964) : inst_16956.call(null,inst_16964));
var inst_17003 = cljs.core.not(inst_17002);
var state_17029__$1 = state_17029;
var statearr_17095_19914 = state_17029__$1;
(statearr_17095_19914[(2)] = inst_17003);

(statearr_17095_19914[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17030 === (3))){
var inst_17027 = (state_17029[(2)]);
var state_17029__$1 = state_17029;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17029__$1,inst_17027);
} else {
if((state_val_17030 === (12))){
var state_17029__$1 = state_17029;
var statearr_17096_19924 = state_17029__$1;
(statearr_17096_19924[(2)] = null);

(statearr_17096_19924[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17030 === (2))){
var inst_16951 = (state_17029[(8)]);
var inst_16954 = (state_17029[(12)]);
var inst_16954__$1 = cljs.core.__destructure_map(inst_16951);
var inst_16955 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16954__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16956 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16954__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16954__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_17029__$1 = (function (){var statearr_17101 = state_17029;
(statearr_17101[(15)] = inst_16955);

(statearr_17101[(12)] = inst_16954__$1);

(statearr_17101[(18)] = inst_16956);

return statearr_17101;
})();
return cljs.core.async.ioc_alts_BANG_(state_17029__$1,(4),inst_16957);
} else {
if((state_val_17030 === (23))){
var inst_17014 = (state_17029[(2)]);
var state_17029__$1 = state_17029;
if(cljs.core.truth_(inst_17014)){
var statearr_17114_19925 = state_17029__$1;
(statearr_17114_19925[(1)] = (24));

} else {
var statearr_17115_19926 = state_17029__$1;
(statearr_17115_19926[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17030 === (19))){
var inst_17006 = (state_17029[(2)]);
var state_17029__$1 = state_17029;
var statearr_17116_19927 = state_17029__$1;
(statearr_17116_19927[(2)] = inst_17006);

(statearr_17116_19927[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17030 === (11))){
var inst_16964 = (state_17029[(14)]);
var inst_16980 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16964);
var state_17029__$1 = state_17029;
var statearr_17119_19928 = state_17029__$1;
(statearr_17119_19928[(2)] = inst_16980);

(statearr_17119_19928[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17030 === (9))){
var inst_16955 = (state_17029[(15)]);
var inst_16964 = (state_17029[(14)]);
var inst_16988 = (state_17029[(19)]);
var inst_16988__$1 = (inst_16955.cljs$core$IFn$_invoke$arity$1 ? inst_16955.cljs$core$IFn$_invoke$arity$1(inst_16964) : inst_16955.call(null,inst_16964));
var state_17029__$1 = (function (){var statearr_17121 = state_17029;
(statearr_17121[(19)] = inst_16988__$1);

return statearr_17121;
})();
if(cljs.core.truth_(inst_16988__$1)){
var statearr_17122_19933 = state_17029__$1;
(statearr_17122_19933[(1)] = (14));

} else {
var statearr_17123_19934 = state_17029__$1;
(statearr_17123_19934[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17030 === (5))){
var inst_16965 = (state_17029[(13)]);
var state_17029__$1 = state_17029;
var statearr_17124_19936 = state_17029__$1;
(statearr_17124_19936[(2)] = inst_16965);

(statearr_17124_19936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17030 === (14))){
var inst_16988 = (state_17029[(19)]);
var state_17029__$1 = state_17029;
var statearr_17125_19937 = state_17029__$1;
(statearr_17125_19937[(2)] = inst_16988);

(statearr_17125_19937[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17030 === (26))){
var inst_17019 = (state_17029[(2)]);
var state_17029__$1 = state_17029;
var statearr_17129_19938 = state_17029__$1;
(statearr_17129_19938[(2)] = inst_17019);

(statearr_17129_19938[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17030 === (16))){
var inst_17008 = (state_17029[(2)]);
var state_17029__$1 = state_17029;
if(cljs.core.truth_(inst_17008)){
var statearr_17130_19942 = state_17029__$1;
(statearr_17130_19942[(1)] = (20));

} else {
var statearr_17131_19943 = state_17029__$1;
(statearr_17131_19943[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17030 === (10))){
var inst_17025 = (state_17029[(2)]);
var state_17029__$1 = state_17029;
var statearr_17132_19944 = state_17029__$1;
(statearr_17132_19944[(2)] = inst_17025);

(statearr_17132_19944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17030 === (18))){
var inst_16997 = (state_17029[(16)]);
var state_17029__$1 = state_17029;
var statearr_17133_19945 = state_17029__$1;
(statearr_17133_19945[(2)] = inst_16997);

(statearr_17133_19945[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17030 === (8))){
var inst_16963 = (state_17029[(7)]);
var inst_16978 = (inst_16963 == null);
var state_17029__$1 = state_17029;
if(cljs.core.truth_(inst_16978)){
var statearr_17134_19947 = state_17029__$1;
(statearr_17134_19947[(1)] = (11));

} else {
var statearr_17135_19948 = state_17029__$1;
(statearr_17135_19948[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13390__auto__ = null;
var cljs$core$async$mix_$_state_machine__13390__auto____0 = (function (){
var statearr_17138 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17138[(0)] = cljs$core$async$mix_$_state_machine__13390__auto__);

(statearr_17138[(1)] = (1));

return statearr_17138;
});
var cljs$core$async$mix_$_state_machine__13390__auto____1 = (function (state_17029){
while(true){
var ret_value__13391__auto__ = (function (){try{while(true){
var result__13392__auto__ = switch__13389__auto__(state_17029);
if(cljs.core.keyword_identical_QMARK_(result__13392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13392__auto__;
}
break;
}
}catch (e17144){var ex__13393__auto__ = e17144;
var statearr_17145_19951 = state_17029;
(statearr_17145_19951[(2)] = ex__13393__auto__);


if(cljs.core.seq((state_17029[(4)]))){
var statearr_17146_19952 = state_17029;
(statearr_17146_19952[(1)] = cljs.core.first((state_17029[(4)])));

} else {
throw ex__13393__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19953 = state_17029;
state_17029 = G__19953;
continue;
} else {
return ret_value__13391__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13390__auto__ = function(state_17029){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13390__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13390__auto____1.call(this,state_17029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13390__auto____0;
cljs$core$async$mix_$_state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13390__auto____1;
return cljs$core$async$mix_$_state_machine__13390__auto__;
})()
})();
var state__14620__auto__ = (function (){var statearr_17147 = f__14619__auto__();
(statearr_17147[(6)] = c__14618__auto___19898);

return statearr_17147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14620__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_19958 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_19958(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_19960 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null,p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_19960(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_19964 = (function() {
var G__19965 = null;
var G__19965__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null,p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__19965__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null,p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__19965 = function(p,v){
switch(arguments.length){
case 1:
return G__19965__1.call(this,p);
case 2:
return G__19965__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19965.cljs$core$IFn$_invoke$arity$1 = G__19965__1;
G__19965.cljs$core$IFn$_invoke$arity$2 = G__19965__2;
return G__19965;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17286 = arguments.length;
switch (G__17286) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19964(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19964(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17418 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17419){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17419 = meta17419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17420,meta17419__$1){
var self__ = this;
var _17420__$1 = this;
return (new cljs.core.async.t_cljs$core$async17418(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17419__$1));
}));

(cljs.core.async.t_cljs$core$async17418.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17420){
var self__ = this;
var _17420__$1 = this;
return self__.meta17419;
}));

(cljs.core.async.t_cljs$core$async17418.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17418.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17418.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17418.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async17418.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async17418.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async17418.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async17418.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17419","meta17419",-1715925304,null)], null);
}));

(cljs.core.async.t_cljs$core$async17418.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17418.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17418");

(cljs.core.async.t_cljs$core$async17418.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17418");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17418.
 */
cljs.core.async.__GT_t_cljs$core$async17418 = (function cljs$core$async$__GT_t_cljs$core$async17418(ch,topic_fn,buf_fn,mults,ensure_mult,meta17419){
return (new cljs.core.async.t_cljs$core$async17418(ch,topic_fn,buf_fn,mults,ensure_mult,meta17419));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__17366 = arguments.length;
switch (G__17366) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__17333_SHARP_){
if(cljs.core.truth_((p1__17333_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17333_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17333_SHARP_.call(null,topic)))){
return p1__17333_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17333_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async17418(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14618__auto___19973 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14619__auto__ = (function (){var switch__13389__auto__ = (function (state_17529){
var state_val_17530 = (state_17529[(1)]);
if((state_val_17530 === (7))){
var inst_17525 = (state_17529[(2)]);
var state_17529__$1 = state_17529;
var statearr_17531_19975 = state_17529__$1;
(statearr_17531_19975[(2)] = inst_17525);

(statearr_17531_19975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17530 === (20))){
var state_17529__$1 = state_17529;
var statearr_17532_19976 = state_17529__$1;
(statearr_17532_19976[(2)] = null);

(statearr_17532_19976[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17530 === (1))){
var state_17529__$1 = state_17529;
var statearr_17536_19977 = state_17529__$1;
(statearr_17536_19977[(2)] = null);

(statearr_17536_19977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17530 === (24))){
var inst_17506 = (state_17529[(7)]);
var inst_17517 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17506);
var state_17529__$1 = state_17529;
var statearr_17545_19978 = state_17529__$1;
(statearr_17545_19978[(2)] = inst_17517);

(statearr_17545_19978[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17530 === (4))){
var inst_17442 = (state_17529[(8)]);
var inst_17442__$1 = (state_17529[(2)]);
var inst_17443 = (inst_17442__$1 == null);
var state_17529__$1 = (function (){var statearr_17550 = state_17529;
(statearr_17550[(8)] = inst_17442__$1);

return statearr_17550;
})();
if(cljs.core.truth_(inst_17443)){
var statearr_17555_19979 = state_17529__$1;
(statearr_17555_19979[(1)] = (5));

} else {
var statearr_17556_19980 = state_17529__$1;
(statearr_17556_19980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17530 === (15))){
var inst_17496 = (state_17529[(2)]);
var state_17529__$1 = state_17529;
var statearr_17557_19981 = state_17529__$1;
(statearr_17557_19981[(2)] = inst_17496);

(statearr_17557_19981[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17530 === (21))){
var inst_17522 = (state_17529[(2)]);
var state_17529__$1 = (function (){var statearr_17558 = state_17529;
(statearr_17558[(9)] = inst_17522);

return statearr_17558;
})();
var statearr_17559_19982 = state_17529__$1;
(statearr_17559_19982[(2)] = null);

(statearr_17559_19982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17530 === (13))){
var inst_17475 = (state_17529[(10)]);
var inst_17477 = cljs.core.chunked_seq_QMARK_(inst_17475);
var state_17529__$1 = state_17529;
if(inst_17477){
var statearr_17560_19983 = state_17529__$1;
(statearr_17560_19983[(1)] = (16));

} else {
var statearr_17561_19984 = state_17529__$1;
(statearr_17561_19984[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17530 === (22))){
var inst_17512 = (state_17529[(2)]);
var state_17529__$1 = state_17529;
if(cljs.core.truth_(inst_17512)){
var statearr_17562_19985 = state_17529__$1;
(statearr_17562_19985[(1)] = (23));

} else {
var statearr_17563_19986 = state_17529__$1;
(statearr_17563_19986[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17530 === (6))){
var inst_17508 = (state_17529[(11)]);
var inst_17506 = (state_17529[(7)]);
var inst_17442 = (state_17529[(8)]);
var inst_17506__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17442) : topic_fn.call(null,inst_17442));
var inst_17507 = cljs.core.deref(mults);
var inst_17508__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17507,inst_17506__$1);
var state_17529__$1 = (function (){var statearr_17564 = state_17529;
(statearr_17564[(11)] = inst_17508__$1);

(statearr_17564[(7)] = inst_17506__$1);

return statearr_17564;
})();
if(cljs.core.truth_(inst_17508__$1)){
var statearr_17565_19987 = state_17529__$1;
(statearr_17565_19987[(1)] = (19));

} else {
var statearr_17566_19988 = state_17529__$1;
(statearr_17566_19988[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17530 === (25))){
var inst_17519 = (state_17529[(2)]);
var state_17529__$1 = state_17529;
var statearr_17567_19989 = state_17529__$1;
(statearr_17567_19989[(2)] = inst_17519);

(statearr_17567_19989[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17530 === (17))){
var inst_17475 = (state_17529[(10)]);
var inst_17487 = cljs.core.first(inst_17475);
var inst_17488 = cljs.core.async.muxch_STAR_(inst_17487);
var inst_17489 = cljs.core.async.close_BANG_(inst_17488);
var inst_17490 = cljs.core.next(inst_17475);
var inst_17455 = inst_17490;
var inst_17459 = null;
var inst_17460 = (0);
var inst_17461 = (0);
var state_17529__$1 = (function (){var statearr_17569 = state_17529;
(statearr_17569[(12)] = inst_17461);

(statearr_17569[(13)] = inst_17459);

(statearr_17569[(14)] = inst_17460);

(statearr_17569[(15)] = inst_17455);

(statearr_17569[(16)] = inst_17489);

return statearr_17569;
})();
var statearr_17574_19990 = state_17529__$1;
(statearr_17574_19990[(2)] = null);

(statearr_17574_19990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17530 === (3))){
var inst_17527 = (state_17529[(2)]);
var state_17529__$1 = state_17529;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17529__$1,inst_17527);
} else {
if((state_val_17530 === (12))){
var inst_17498 = (state_17529[(2)]);
var state_17529__$1 = state_17529;
var statearr_17578_19991 = state_17529__$1;
(statearr_17578_19991[(2)] = inst_17498);

(statearr_17578_19991[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17530 === (2))){
var state_17529__$1 = state_17529;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17529__$1,(4),ch);
} else {
if((state_val_17530 === (23))){
var state_17529__$1 = state_17529;
var statearr_17581_19992 = state_17529__$1;
(statearr_17581_19992[(2)] = null);

(statearr_17581_19992[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17530 === (19))){
var inst_17508 = (state_17529[(11)]);
var inst_17442 = (state_17529[(8)]);
var inst_17510 = cljs.core.async.muxch_STAR_(inst_17508);
var state_17529__$1 = state_17529;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17529__$1,(22),inst_17510,inst_17442);
} else {
if((state_val_17530 === (11))){
var inst_17455 = (state_17529[(15)]);
var inst_17475 = (state_17529[(10)]);
var inst_17475__$1 = cljs.core.seq(inst_17455);
var state_17529__$1 = (function (){var statearr_17586 = state_17529;
(statearr_17586[(10)] = inst_17475__$1);

return statearr_17586;
})();
if(inst_17475__$1){
var statearr_17588_19993 = state_17529__$1;
(statearr_17588_19993[(1)] = (13));

} else {
var statearr_17591_19994 = state_17529__$1;
(statearr_17591_19994[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17530 === (9))){
var inst_17500 = (state_17529[(2)]);
var state_17529__$1 = state_17529;
var statearr_17602_19995 = state_17529__$1;
(statearr_17602_19995[(2)] = inst_17500);

(statearr_17602_19995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17530 === (5))){
var inst_17452 = cljs.core.deref(mults);
var inst_17453 = cljs.core.vals(inst_17452);
var inst_17454 = cljs.core.seq(inst_17453);
var inst_17455 = inst_17454;
var inst_17459 = null;
var inst_17460 = (0);
var inst_17461 = (0);
var state_17529__$1 = (function (){var statearr_17612 = state_17529;
(statearr_17612[(12)] = inst_17461);

(statearr_17612[(13)] = inst_17459);

(statearr_17612[(14)] = inst_17460);

(statearr_17612[(15)] = inst_17455);

return statearr_17612;
})();
var statearr_17616_19996 = state_17529__$1;
(statearr_17616_19996[(2)] = null);

(statearr_17616_19996[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17530 === (14))){
var state_17529__$1 = state_17529;
var statearr_17621_19997 = state_17529__$1;
(statearr_17621_19997[(2)] = null);

(statearr_17621_19997[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17530 === (16))){
var inst_17475 = (state_17529[(10)]);
var inst_17482 = cljs.core.chunk_first(inst_17475);
var inst_17483 = cljs.core.chunk_rest(inst_17475);
var inst_17484 = cljs.core.count(inst_17482);
var inst_17455 = inst_17483;
var inst_17459 = inst_17482;
var inst_17460 = inst_17484;
var inst_17461 = (0);
var state_17529__$1 = (function (){var statearr_17627 = state_17529;
(statearr_17627[(12)] = inst_17461);

(statearr_17627[(13)] = inst_17459);

(statearr_17627[(14)] = inst_17460);

(statearr_17627[(15)] = inst_17455);

return statearr_17627;
})();
var statearr_17628_19998 = state_17529__$1;
(statearr_17628_19998[(2)] = null);

(statearr_17628_19998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17530 === (10))){
var inst_17461 = (state_17529[(12)]);
var inst_17459 = (state_17529[(13)]);
var inst_17460 = (state_17529[(14)]);
var inst_17455 = (state_17529[(15)]);
var inst_17468 = cljs.core._nth(inst_17459,inst_17461);
var inst_17470 = cljs.core.async.muxch_STAR_(inst_17468);
var inst_17471 = cljs.core.async.close_BANG_(inst_17470);
var inst_17472 = (inst_17461 + (1));
var tmp17617 = inst_17459;
var tmp17618 = inst_17460;
var tmp17619 = inst_17455;
var inst_17455__$1 = tmp17619;
var inst_17459__$1 = tmp17617;
var inst_17460__$1 = tmp17618;
var inst_17461__$1 = inst_17472;
var state_17529__$1 = (function (){var statearr_17629 = state_17529;
(statearr_17629[(12)] = inst_17461__$1);

(statearr_17629[(13)] = inst_17459__$1);

(statearr_17629[(17)] = inst_17471);

(statearr_17629[(14)] = inst_17460__$1);

(statearr_17629[(15)] = inst_17455__$1);

return statearr_17629;
})();
var statearr_17630_20000 = state_17529__$1;
(statearr_17630_20000[(2)] = null);

(statearr_17630_20000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17530 === (18))){
var inst_17493 = (state_17529[(2)]);
var state_17529__$1 = state_17529;
var statearr_17631_20001 = state_17529__$1;
(statearr_17631_20001[(2)] = inst_17493);

(statearr_17631_20001[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17530 === (8))){
var inst_17461 = (state_17529[(12)]);
var inst_17460 = (state_17529[(14)]);
var inst_17463 = (inst_17461 < inst_17460);
var inst_17464 = inst_17463;
var state_17529__$1 = state_17529;
if(cljs.core.truth_(inst_17464)){
var statearr_17632_20002 = state_17529__$1;
(statearr_17632_20002[(1)] = (10));

} else {
var statearr_17633_20003 = state_17529__$1;
(statearr_17633_20003[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13390__auto__ = null;
var cljs$core$async$state_machine__13390__auto____0 = (function (){
var statearr_17652 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17652[(0)] = cljs$core$async$state_machine__13390__auto__);

(statearr_17652[(1)] = (1));

return statearr_17652;
});
var cljs$core$async$state_machine__13390__auto____1 = (function (state_17529){
while(true){
var ret_value__13391__auto__ = (function (){try{while(true){
var result__13392__auto__ = switch__13389__auto__(state_17529);
if(cljs.core.keyword_identical_QMARK_(result__13392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13392__auto__;
}
break;
}
}catch (e17657){var ex__13393__auto__ = e17657;
var statearr_17658_20007 = state_17529;
(statearr_17658_20007[(2)] = ex__13393__auto__);


if(cljs.core.seq((state_17529[(4)]))){
var statearr_17659_20008 = state_17529;
(statearr_17659_20008[(1)] = cljs.core.first((state_17529[(4)])));

} else {
throw ex__13393__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20009 = state_17529;
state_17529 = G__20009;
continue;
} else {
return ret_value__13391__auto__;
}
break;
}
});
cljs$core$async$state_machine__13390__auto__ = function(state_17529){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13390__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13390__auto____1.call(this,state_17529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13390__auto____0;
cljs$core$async$state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13390__auto____1;
return cljs$core$async$state_machine__13390__auto__;
})()
})();
var state__14620__auto__ = (function (){var statearr_17660 = f__14619__auto__();
(statearr_17660[(6)] = c__14618__auto___19973);

return statearr_17660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14620__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__17662 = arguments.length;
switch (G__17662) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__17679 = arguments.length;
switch (G__17679) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__17696 = arguments.length;
switch (G__17696) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14618__auto___20014 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14619__auto__ = (function (){var switch__13389__auto__ = (function (state_17770){
var state_val_17771 = (state_17770[(1)]);
if((state_val_17771 === (7))){
var state_17770__$1 = state_17770;
var statearr_17779_20015 = state_17770__$1;
(statearr_17779_20015[(2)] = null);

(statearr_17779_20015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (1))){
var state_17770__$1 = state_17770;
var statearr_17780_20017 = state_17770__$1;
(statearr_17780_20017[(2)] = null);

(statearr_17780_20017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (4))){
var inst_17716 = (state_17770[(7)]);
var inst_17715 = (state_17770[(8)]);
var inst_17718 = (inst_17716 < inst_17715);
var state_17770__$1 = state_17770;
if(cljs.core.truth_(inst_17718)){
var statearr_17785_20018 = state_17770__$1;
(statearr_17785_20018[(1)] = (6));

} else {
var statearr_17786_20019 = state_17770__$1;
(statearr_17786_20019[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (15))){
var inst_17748 = (state_17770[(9)]);
var inst_17756 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17748);
var state_17770__$1 = state_17770;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17770__$1,(17),out,inst_17756);
} else {
if((state_val_17771 === (13))){
var inst_17748 = (state_17770[(9)]);
var inst_17748__$1 = (state_17770[(2)]);
var inst_17749 = cljs.core.some(cljs.core.nil_QMARK_,inst_17748__$1);
var state_17770__$1 = (function (){var statearr_17787 = state_17770;
(statearr_17787[(9)] = inst_17748__$1);

return statearr_17787;
})();
if(cljs.core.truth_(inst_17749)){
var statearr_17788_20020 = state_17770__$1;
(statearr_17788_20020[(1)] = (14));

} else {
var statearr_17789_20021 = state_17770__$1;
(statearr_17789_20021[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (6))){
var state_17770__$1 = state_17770;
var statearr_17790_20022 = state_17770__$1;
(statearr_17790_20022[(2)] = null);

(statearr_17790_20022[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (17))){
var inst_17758 = (state_17770[(2)]);
var state_17770__$1 = (function (){var statearr_17806 = state_17770;
(statearr_17806[(10)] = inst_17758);

return statearr_17806;
})();
var statearr_17812_20023 = state_17770__$1;
(statearr_17812_20023[(2)] = null);

(statearr_17812_20023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (3))){
var inst_17763 = (state_17770[(2)]);
var state_17770__$1 = state_17770;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17770__$1,inst_17763);
} else {
if((state_val_17771 === (12))){
var _ = (function (){var statearr_17830 = state_17770;
(statearr_17830[(4)] = cljs.core.rest((state_17770[(4)])));

return statearr_17830;
})();
var state_17770__$1 = state_17770;
var ex17805 = (state_17770__$1[(2)]);
var statearr_17834_20024 = state_17770__$1;
(statearr_17834_20024[(5)] = ex17805);


if((ex17805 instanceof Object)){
var statearr_17839_20025 = state_17770__$1;
(statearr_17839_20025[(1)] = (11));

(statearr_17839_20025[(5)] = null);

} else {
throw ex17805;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (2))){
var inst_17714 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17715 = cnt;
var inst_17716 = (0);
var state_17770__$1 = (function (){var statearr_17854 = state_17770;
(statearr_17854[(7)] = inst_17716);

(statearr_17854[(11)] = inst_17714);

(statearr_17854[(8)] = inst_17715);

return statearr_17854;
})();
var statearr_17859_20029 = state_17770__$1;
(statearr_17859_20029[(2)] = null);

(statearr_17859_20029[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (11))){
var inst_17725 = (state_17770[(2)]);
var inst_17728 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17770__$1 = (function (){var statearr_17861 = state_17770;
(statearr_17861[(12)] = inst_17725);

return statearr_17861;
})();
var statearr_17863_20030 = state_17770__$1;
(statearr_17863_20030[(2)] = inst_17728);

(statearr_17863_20030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (9))){
var inst_17716 = (state_17770[(7)]);
var _ = (function (){var statearr_17866 = state_17770;
(statearr_17866[(4)] = cljs.core.cons((12),(state_17770[(4)])));

return statearr_17866;
})();
var inst_17734 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17716) : chs__$1.call(null,inst_17716));
var inst_17735 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17716) : done.call(null,inst_17716));
var inst_17736 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17734,inst_17735);
var ___$1 = (function (){var statearr_17867 = state_17770;
(statearr_17867[(4)] = cljs.core.rest((state_17770[(4)])));

return statearr_17867;
})();
var state_17770__$1 = state_17770;
var statearr_17868_20040 = state_17770__$1;
(statearr_17868_20040[(2)] = inst_17736);

(statearr_17868_20040[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (5))){
var inst_17746 = (state_17770[(2)]);
var state_17770__$1 = (function (){var statearr_17869 = state_17770;
(statearr_17869[(13)] = inst_17746);

return statearr_17869;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17770__$1,(13),dchan);
} else {
if((state_val_17771 === (14))){
var inst_17754 = cljs.core.async.close_BANG_(out);
var state_17770__$1 = state_17770;
var statearr_17871_20041 = state_17770__$1;
(statearr_17871_20041[(2)] = inst_17754);

(statearr_17871_20041[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (16))){
var inst_17761 = (state_17770[(2)]);
var state_17770__$1 = state_17770;
var statearr_17872_20042 = state_17770__$1;
(statearr_17872_20042[(2)] = inst_17761);

(statearr_17872_20042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (10))){
var inst_17716 = (state_17770[(7)]);
var inst_17739 = (state_17770[(2)]);
var inst_17740 = (inst_17716 + (1));
var inst_17716__$1 = inst_17740;
var state_17770__$1 = (function (){var statearr_17873 = state_17770;
(statearr_17873[(14)] = inst_17739);

(statearr_17873[(7)] = inst_17716__$1);

return statearr_17873;
})();
var statearr_17874_20043 = state_17770__$1;
(statearr_17874_20043[(2)] = null);

(statearr_17874_20043[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (8))){
var inst_17744 = (state_17770[(2)]);
var state_17770__$1 = state_17770;
var statearr_17879_20046 = state_17770__$1;
(statearr_17879_20046[(2)] = inst_17744);

(statearr_17879_20046[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13390__auto__ = null;
var cljs$core$async$state_machine__13390__auto____0 = (function (){
var statearr_17887 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17887[(0)] = cljs$core$async$state_machine__13390__auto__);

(statearr_17887[(1)] = (1));

return statearr_17887;
});
var cljs$core$async$state_machine__13390__auto____1 = (function (state_17770){
while(true){
var ret_value__13391__auto__ = (function (){try{while(true){
var result__13392__auto__ = switch__13389__auto__(state_17770);
if(cljs.core.keyword_identical_QMARK_(result__13392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13392__auto__;
}
break;
}
}catch (e17891){var ex__13393__auto__ = e17891;
var statearr_17892_20049 = state_17770;
(statearr_17892_20049[(2)] = ex__13393__auto__);


if(cljs.core.seq((state_17770[(4)]))){
var statearr_17893_20050 = state_17770;
(statearr_17893_20050[(1)] = cljs.core.first((state_17770[(4)])));

} else {
throw ex__13393__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20051 = state_17770;
state_17770 = G__20051;
continue;
} else {
return ret_value__13391__auto__;
}
break;
}
});
cljs$core$async$state_machine__13390__auto__ = function(state_17770){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13390__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13390__auto____1.call(this,state_17770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13390__auto____0;
cljs$core$async$state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13390__auto____1;
return cljs$core$async$state_machine__13390__auto__;
})()
})();
var state__14620__auto__ = (function (){var statearr_17897 = f__14619__auto__();
(statearr_17897[(6)] = c__14618__auto___20014);

return statearr_17897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14620__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__17900 = arguments.length;
switch (G__17900) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14618__auto___20053 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14619__auto__ = (function (){var switch__13389__auto__ = (function (state_17934){
var state_val_17935 = (state_17934[(1)]);
if((state_val_17935 === (7))){
var inst_17912 = (state_17934[(7)]);
var inst_17913 = (state_17934[(8)]);
var inst_17912__$1 = (state_17934[(2)]);
var inst_17913__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17912__$1,(0),null);
var inst_17914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17912__$1,(1),null);
var inst_17915 = (inst_17913__$1 == null);
var state_17934__$1 = (function (){var statearr_17936 = state_17934;
(statearr_17936[(7)] = inst_17912__$1);

(statearr_17936[(8)] = inst_17913__$1);

(statearr_17936[(9)] = inst_17914);

return statearr_17936;
})();
if(cljs.core.truth_(inst_17915)){
var statearr_17938_20057 = state_17934__$1;
(statearr_17938_20057[(1)] = (8));

} else {
var statearr_17940_20058 = state_17934__$1;
(statearr_17940_20058[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17935 === (1))){
var inst_17901 = cljs.core.vec(chs);
var inst_17902 = inst_17901;
var state_17934__$1 = (function (){var statearr_17941 = state_17934;
(statearr_17941[(10)] = inst_17902);

return statearr_17941;
})();
var statearr_17942_20059 = state_17934__$1;
(statearr_17942_20059[(2)] = null);

(statearr_17942_20059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17935 === (4))){
var inst_17902 = (state_17934[(10)]);
var state_17934__$1 = state_17934;
return cljs.core.async.ioc_alts_BANG_(state_17934__$1,(7),inst_17902);
} else {
if((state_val_17935 === (6))){
var inst_17930 = (state_17934[(2)]);
var state_17934__$1 = state_17934;
var statearr_17943_20060 = state_17934__$1;
(statearr_17943_20060[(2)] = inst_17930);

(statearr_17943_20060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17935 === (3))){
var inst_17932 = (state_17934[(2)]);
var state_17934__$1 = state_17934;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17934__$1,inst_17932);
} else {
if((state_val_17935 === (2))){
var inst_17902 = (state_17934[(10)]);
var inst_17904 = cljs.core.count(inst_17902);
var inst_17905 = (inst_17904 > (0));
var state_17934__$1 = state_17934;
if(cljs.core.truth_(inst_17905)){
var statearr_17955_20061 = state_17934__$1;
(statearr_17955_20061[(1)] = (4));

} else {
var statearr_17956_20062 = state_17934__$1;
(statearr_17956_20062[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17935 === (11))){
var inst_17902 = (state_17934[(10)]);
var inst_17923 = (state_17934[(2)]);
var tmp17945 = inst_17902;
var inst_17902__$1 = tmp17945;
var state_17934__$1 = (function (){var statearr_17967 = state_17934;
(statearr_17967[(11)] = inst_17923);

(statearr_17967[(10)] = inst_17902__$1);

return statearr_17967;
})();
var statearr_17968_20063 = state_17934__$1;
(statearr_17968_20063[(2)] = null);

(statearr_17968_20063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17935 === (9))){
var inst_17913 = (state_17934[(8)]);
var state_17934__$1 = state_17934;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17934__$1,(11),out,inst_17913);
} else {
if((state_val_17935 === (5))){
var inst_17928 = cljs.core.async.close_BANG_(out);
var state_17934__$1 = state_17934;
var statearr_17973_20064 = state_17934__$1;
(statearr_17973_20064[(2)] = inst_17928);

(statearr_17973_20064[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17935 === (10))){
var inst_17926 = (state_17934[(2)]);
var state_17934__$1 = state_17934;
var statearr_17983_20065 = state_17934__$1;
(statearr_17983_20065[(2)] = inst_17926);

(statearr_17983_20065[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17935 === (8))){
var inst_17912 = (state_17934[(7)]);
var inst_17902 = (state_17934[(10)]);
var inst_17913 = (state_17934[(8)]);
var inst_17914 = (state_17934[(9)]);
var inst_17918 = (function (){var cs = inst_17902;
var vec__17907 = inst_17912;
var v = inst_17913;
var c = inst_17914;
return (function (p1__17898_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17898_SHARP_);
});
})();
var inst_17919 = cljs.core.filterv(inst_17918,inst_17902);
var inst_17902__$1 = inst_17919;
var state_17934__$1 = (function (){var statearr_17985 = state_17934;
(statearr_17985[(10)] = inst_17902__$1);

return statearr_17985;
})();
var statearr_17988_20074 = state_17934__$1;
(statearr_17988_20074[(2)] = null);

(statearr_17988_20074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13390__auto__ = null;
var cljs$core$async$state_machine__13390__auto____0 = (function (){
var statearr_17998 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17998[(0)] = cljs$core$async$state_machine__13390__auto__);

(statearr_17998[(1)] = (1));

return statearr_17998;
});
var cljs$core$async$state_machine__13390__auto____1 = (function (state_17934){
while(true){
var ret_value__13391__auto__ = (function (){try{while(true){
var result__13392__auto__ = switch__13389__auto__(state_17934);
if(cljs.core.keyword_identical_QMARK_(result__13392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13392__auto__;
}
break;
}
}catch (e18004){var ex__13393__auto__ = e18004;
var statearr_18006_20081 = state_17934;
(statearr_18006_20081[(2)] = ex__13393__auto__);


if(cljs.core.seq((state_17934[(4)]))){
var statearr_18013_20082 = state_17934;
(statearr_18013_20082[(1)] = cljs.core.first((state_17934[(4)])));

} else {
throw ex__13393__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20083 = state_17934;
state_17934 = G__20083;
continue;
} else {
return ret_value__13391__auto__;
}
break;
}
});
cljs$core$async$state_machine__13390__auto__ = function(state_17934){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13390__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13390__auto____1.call(this,state_17934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13390__auto____0;
cljs$core$async$state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13390__auto____1;
return cljs$core$async$state_machine__13390__auto__;
})()
})();
var state__14620__auto__ = (function (){var statearr_18030 = f__14619__auto__();
(statearr_18030[(6)] = c__14618__auto___20053);

return statearr_18030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14620__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__18052 = arguments.length;
switch (G__18052) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14618__auto___20086 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14619__auto__ = (function (){var switch__13389__auto__ = (function (state_18117){
var state_val_18121 = (state_18117[(1)]);
if((state_val_18121 === (7))){
var inst_18088 = (state_18117[(7)]);
var inst_18088__$1 = (state_18117[(2)]);
var inst_18093 = (inst_18088__$1 == null);
var inst_18094 = cljs.core.not(inst_18093);
var state_18117__$1 = (function (){var statearr_18144 = state_18117;
(statearr_18144[(7)] = inst_18088__$1);

return statearr_18144;
})();
if(inst_18094){
var statearr_18145_20087 = state_18117__$1;
(statearr_18145_20087[(1)] = (8));

} else {
var statearr_18151_20088 = state_18117__$1;
(statearr_18151_20088[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (1))){
var inst_18073 = (0);
var state_18117__$1 = (function (){var statearr_18153 = state_18117;
(statearr_18153[(8)] = inst_18073);

return statearr_18153;
})();
var statearr_18160_20089 = state_18117__$1;
(statearr_18160_20089[(2)] = null);

(statearr_18160_20089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (4))){
var state_18117__$1 = state_18117;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18117__$1,(7),ch);
} else {
if((state_val_18121 === (6))){
var inst_18109 = (state_18117[(2)]);
var state_18117__$1 = state_18117;
var statearr_18161_20091 = state_18117__$1;
(statearr_18161_20091[(2)] = inst_18109);

(statearr_18161_20091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (3))){
var inst_18111 = (state_18117[(2)]);
var inst_18112 = cljs.core.async.close_BANG_(out);
var state_18117__$1 = (function (){var statearr_18162 = state_18117;
(statearr_18162[(9)] = inst_18111);

return statearr_18162;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18117__$1,inst_18112);
} else {
if((state_val_18121 === (2))){
var inst_18073 = (state_18117[(8)]);
var inst_18080 = (inst_18073 < n);
var state_18117__$1 = state_18117;
if(cljs.core.truth_(inst_18080)){
var statearr_18172_20092 = state_18117__$1;
(statearr_18172_20092[(1)] = (4));

} else {
var statearr_18173_20093 = state_18117__$1;
(statearr_18173_20093[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (11))){
var inst_18073 = (state_18117[(8)]);
var inst_18097 = (state_18117[(2)]);
var inst_18102 = (inst_18073 + (1));
var inst_18073__$1 = inst_18102;
var state_18117__$1 = (function (){var statearr_18178 = state_18117;
(statearr_18178[(10)] = inst_18097);

(statearr_18178[(8)] = inst_18073__$1);

return statearr_18178;
})();
var statearr_18180_20094 = state_18117__$1;
(statearr_18180_20094[(2)] = null);

(statearr_18180_20094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (9))){
var state_18117__$1 = state_18117;
var statearr_18188_20095 = state_18117__$1;
(statearr_18188_20095[(2)] = null);

(statearr_18188_20095[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (5))){
var state_18117__$1 = state_18117;
var statearr_18196_20100 = state_18117__$1;
(statearr_18196_20100[(2)] = null);

(statearr_18196_20100[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (10))){
var inst_18106 = (state_18117[(2)]);
var state_18117__$1 = state_18117;
var statearr_18201_20101 = state_18117__$1;
(statearr_18201_20101[(2)] = inst_18106);

(statearr_18201_20101[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (8))){
var inst_18088 = (state_18117[(7)]);
var state_18117__$1 = state_18117;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18117__$1,(11),out,inst_18088);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13390__auto__ = null;
var cljs$core$async$state_machine__13390__auto____0 = (function (){
var statearr_18205 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18205[(0)] = cljs$core$async$state_machine__13390__auto__);

(statearr_18205[(1)] = (1));

return statearr_18205;
});
var cljs$core$async$state_machine__13390__auto____1 = (function (state_18117){
while(true){
var ret_value__13391__auto__ = (function (){try{while(true){
var result__13392__auto__ = switch__13389__auto__(state_18117);
if(cljs.core.keyword_identical_QMARK_(result__13392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13392__auto__;
}
break;
}
}catch (e18212){var ex__13393__auto__ = e18212;
var statearr_18215_20103 = state_18117;
(statearr_18215_20103[(2)] = ex__13393__auto__);


if(cljs.core.seq((state_18117[(4)]))){
var statearr_18222_20104 = state_18117;
(statearr_18222_20104[(1)] = cljs.core.first((state_18117[(4)])));

} else {
throw ex__13393__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20105 = state_18117;
state_18117 = G__20105;
continue;
} else {
return ret_value__13391__auto__;
}
break;
}
});
cljs$core$async$state_machine__13390__auto__ = function(state_18117){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13390__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13390__auto____1.call(this,state_18117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13390__auto____0;
cljs$core$async$state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13390__auto____1;
return cljs$core$async$state_machine__13390__auto__;
})()
})();
var state__14620__auto__ = (function (){var statearr_18235 = f__14619__auto__();
(statearr_18235[(6)] = c__14618__auto___20086);

return statearr_18235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14620__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18306 = (function (f,ch,meta18262,_,fn1,meta18307){
this.f = f;
this.ch = ch;
this.meta18262 = meta18262;
this._ = _;
this.fn1 = fn1;
this.meta18307 = meta18307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18308,meta18307__$1){
var self__ = this;
var _18308__$1 = this;
return (new cljs.core.async.t_cljs$core$async18306(self__.f,self__.ch,self__.meta18262,self__._,self__.fn1,meta18307__$1));
}));

(cljs.core.async.t_cljs$core$async18306.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18308){
var self__ = this;
var _18308__$1 = this;
return self__.meta18307;
}));

(cljs.core.async.t_cljs$core$async18306.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18306.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async18306.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18306.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__18252_SHARP_){
var G__18320 = (((p1__18252_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18252_SHARP_) : self__.f.call(null,p1__18252_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18320) : f1.call(null,G__18320));
});
}));

(cljs.core.async.t_cljs$core$async18306.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18262","meta18262",528324868,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18261","cljs.core.async/t_cljs$core$async18261",1539697124,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18307","meta18307",291499044,null)], null);
}));

(cljs.core.async.t_cljs$core$async18306.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18306.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18306");

(cljs.core.async.t_cljs$core$async18306.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18306");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18306.
 */
cljs.core.async.__GT_t_cljs$core$async18306 = (function cljs$core$async$__GT_t_cljs$core$async18306(f,ch,meta18262,_,fn1,meta18307){
return (new cljs.core.async.t_cljs$core$async18306(f,ch,meta18262,_,fn1,meta18307));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18261 = (function (f,ch,meta18262){
this.f = f;
this.ch = ch;
this.meta18262 = meta18262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18263,meta18262__$1){
var self__ = this;
var _18263__$1 = this;
return (new cljs.core.async.t_cljs$core$async18261(self__.f,self__.ch,meta18262__$1));
}));

(cljs.core.async.t_cljs$core$async18261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18263){
var self__ = this;
var _18263__$1 = this;
return self__.meta18262;
}));

(cljs.core.async.t_cljs$core$async18261.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18261.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18261.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18261.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18261.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async18306(self__.f,self__.ch,self__.meta18262,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18348 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18348) : self__.f.call(null,G__18348));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async18261.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18261.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async18261.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18262","meta18262",528324868,null)], null);
}));

(cljs.core.async.t_cljs$core$async18261.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18261.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18261");

(cljs.core.async.t_cljs$core$async18261.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18261");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18261.
 */
cljs.core.async.__GT_t_cljs$core$async18261 = (function cljs$core$async$__GT_t_cljs$core$async18261(f,ch,meta18262){
return (new cljs.core.async.t_cljs$core$async18261(f,ch,meta18262));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18261(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18388 = (function (f,ch,meta18389){
this.f = f;
this.ch = ch;
this.meta18389 = meta18389;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18390,meta18389__$1){
var self__ = this;
var _18390__$1 = this;
return (new cljs.core.async.t_cljs$core$async18388(self__.f,self__.ch,meta18389__$1));
}));

(cljs.core.async.t_cljs$core$async18388.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18390){
var self__ = this;
var _18390__$1 = this;
return self__.meta18389;
}));

(cljs.core.async.t_cljs$core$async18388.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18388.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18388.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18388.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18388.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18388.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async18388.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18389","meta18389",-2090582509,null)], null);
}));

(cljs.core.async.t_cljs$core$async18388.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18388.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18388");

(cljs.core.async.t_cljs$core$async18388.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18388");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18388.
 */
cljs.core.async.__GT_t_cljs$core$async18388 = (function cljs$core$async$__GT_t_cljs$core$async18388(f,ch,meta18389){
return (new cljs.core.async.t_cljs$core$async18388(f,ch,meta18389));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18388(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18417 = (function (p,ch,meta18418){
this.p = p;
this.ch = ch;
this.meta18418 = meta18418;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18419,meta18418__$1){
var self__ = this;
var _18419__$1 = this;
return (new cljs.core.async.t_cljs$core$async18417(self__.p,self__.ch,meta18418__$1));
}));

(cljs.core.async.t_cljs$core$async18417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18419){
var self__ = this;
var _18419__$1 = this;
return self__.meta18418;
}));

(cljs.core.async.t_cljs$core$async18417.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18417.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18417.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18417.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18417.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18417.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18417.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async18417.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18418","meta18418",-1078967500,null)], null);
}));

(cljs.core.async.t_cljs$core$async18417.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18417.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18417");

(cljs.core.async.t_cljs$core$async18417.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18417");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18417.
 */
cljs.core.async.__GT_t_cljs$core$async18417 = (function cljs$core$async$__GT_t_cljs$core$async18417(p,ch,meta18418){
return (new cljs.core.async.t_cljs$core$async18417(p,ch,meta18418));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async18417(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__18472 = arguments.length;
switch (G__18472) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14618__auto___20120 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14619__auto__ = (function (){var switch__13389__auto__ = (function (state_18503){
var state_val_18504 = (state_18503[(1)]);
if((state_val_18504 === (7))){
var inst_18497 = (state_18503[(2)]);
var state_18503__$1 = state_18503;
var statearr_18508_20121 = state_18503__$1;
(statearr_18508_20121[(2)] = inst_18497);

(statearr_18508_20121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18504 === (1))){
var state_18503__$1 = state_18503;
var statearr_18509_20122 = state_18503__$1;
(statearr_18509_20122[(2)] = null);

(statearr_18509_20122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18504 === (4))){
var inst_18483 = (state_18503[(7)]);
var inst_18483__$1 = (state_18503[(2)]);
var inst_18484 = (inst_18483__$1 == null);
var state_18503__$1 = (function (){var statearr_18516 = state_18503;
(statearr_18516[(7)] = inst_18483__$1);

return statearr_18516;
})();
if(cljs.core.truth_(inst_18484)){
var statearr_18517_20123 = state_18503__$1;
(statearr_18517_20123[(1)] = (5));

} else {
var statearr_18521_20124 = state_18503__$1;
(statearr_18521_20124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18504 === (6))){
var inst_18483 = (state_18503[(7)]);
var inst_18488 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18483) : p.call(null,inst_18483));
var state_18503__$1 = state_18503;
if(cljs.core.truth_(inst_18488)){
var statearr_18522_20125 = state_18503__$1;
(statearr_18522_20125[(1)] = (8));

} else {
var statearr_18523_20126 = state_18503__$1;
(statearr_18523_20126[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18504 === (3))){
var inst_18500 = (state_18503[(2)]);
var state_18503__$1 = state_18503;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18503__$1,inst_18500);
} else {
if((state_val_18504 === (2))){
var state_18503__$1 = state_18503;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18503__$1,(4),ch);
} else {
if((state_val_18504 === (11))){
var inst_18491 = (state_18503[(2)]);
var state_18503__$1 = state_18503;
var statearr_18527_20127 = state_18503__$1;
(statearr_18527_20127[(2)] = inst_18491);

(statearr_18527_20127[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18504 === (9))){
var state_18503__$1 = state_18503;
var statearr_18528_20128 = state_18503__$1;
(statearr_18528_20128[(2)] = null);

(statearr_18528_20128[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18504 === (5))){
var inst_18486 = cljs.core.async.close_BANG_(out);
var state_18503__$1 = state_18503;
var statearr_18533_20129 = state_18503__$1;
(statearr_18533_20129[(2)] = inst_18486);

(statearr_18533_20129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18504 === (10))){
var inst_18494 = (state_18503[(2)]);
var state_18503__$1 = (function (){var statearr_18537 = state_18503;
(statearr_18537[(8)] = inst_18494);

return statearr_18537;
})();
var statearr_18538_20130 = state_18503__$1;
(statearr_18538_20130[(2)] = null);

(statearr_18538_20130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18504 === (8))){
var inst_18483 = (state_18503[(7)]);
var state_18503__$1 = state_18503;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18503__$1,(11),out,inst_18483);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13390__auto__ = null;
var cljs$core$async$state_machine__13390__auto____0 = (function (){
var statearr_18539 = [null,null,null,null,null,null,null,null,null];
(statearr_18539[(0)] = cljs$core$async$state_machine__13390__auto__);

(statearr_18539[(1)] = (1));

return statearr_18539;
});
var cljs$core$async$state_machine__13390__auto____1 = (function (state_18503){
while(true){
var ret_value__13391__auto__ = (function (){try{while(true){
var result__13392__auto__ = switch__13389__auto__(state_18503);
if(cljs.core.keyword_identical_QMARK_(result__13392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13392__auto__;
}
break;
}
}catch (e18541){var ex__13393__auto__ = e18541;
var statearr_18542_20133 = state_18503;
(statearr_18542_20133[(2)] = ex__13393__auto__);


if(cljs.core.seq((state_18503[(4)]))){
var statearr_18543_20134 = state_18503;
(statearr_18543_20134[(1)] = cljs.core.first((state_18503[(4)])));

} else {
throw ex__13393__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20135 = state_18503;
state_18503 = G__20135;
continue;
} else {
return ret_value__13391__auto__;
}
break;
}
});
cljs$core$async$state_machine__13390__auto__ = function(state_18503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13390__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13390__auto____1.call(this,state_18503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13390__auto____0;
cljs$core$async$state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13390__auto____1;
return cljs$core$async$state_machine__13390__auto__;
})()
})();
var state__14620__auto__ = (function (){var statearr_18550 = f__14619__auto__();
(statearr_18550[(6)] = c__14618__auto___20120);

return statearr_18550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14620__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18558 = arguments.length;
switch (G__18558) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14618__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14619__auto__ = (function (){var switch__13389__auto__ = (function (state_18640){
var state_val_18641 = (state_18640[(1)]);
if((state_val_18641 === (7))){
var inst_18635 = (state_18640[(2)]);
var state_18640__$1 = state_18640;
var statearr_18643_20137 = state_18640__$1;
(statearr_18643_20137[(2)] = inst_18635);

(statearr_18643_20137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18641 === (20))){
var inst_18605 = (state_18640[(7)]);
var inst_18616 = (state_18640[(2)]);
var inst_18617 = cljs.core.next(inst_18605);
var inst_18585 = inst_18617;
var inst_18586 = null;
var inst_18587 = (0);
var inst_18588 = (0);
var state_18640__$1 = (function (){var statearr_18647 = state_18640;
(statearr_18647[(8)] = inst_18586);

(statearr_18647[(9)] = inst_18588);

(statearr_18647[(10)] = inst_18616);

(statearr_18647[(11)] = inst_18585);

(statearr_18647[(12)] = inst_18587);

return statearr_18647;
})();
var statearr_18648_20138 = state_18640__$1;
(statearr_18648_20138[(2)] = null);

(statearr_18648_20138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18641 === (1))){
var state_18640__$1 = state_18640;
var statearr_18649_20140 = state_18640__$1;
(statearr_18649_20140[(2)] = null);

(statearr_18649_20140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18641 === (4))){
var inst_18574 = (state_18640[(13)]);
var inst_18574__$1 = (state_18640[(2)]);
var inst_18575 = (inst_18574__$1 == null);
var state_18640__$1 = (function (){var statearr_18650 = state_18640;
(statearr_18650[(13)] = inst_18574__$1);

return statearr_18650;
})();
if(cljs.core.truth_(inst_18575)){
var statearr_18656_20144 = state_18640__$1;
(statearr_18656_20144[(1)] = (5));

} else {
var statearr_18660_20145 = state_18640__$1;
(statearr_18660_20145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18641 === (15))){
var state_18640__$1 = state_18640;
var statearr_18669_20146 = state_18640__$1;
(statearr_18669_20146[(2)] = null);

(statearr_18669_20146[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18641 === (21))){
var state_18640__$1 = state_18640;
var statearr_18670_20147 = state_18640__$1;
(statearr_18670_20147[(2)] = null);

(statearr_18670_20147[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18641 === (13))){
var inst_18586 = (state_18640[(8)]);
var inst_18588 = (state_18640[(9)]);
var inst_18585 = (state_18640[(11)]);
var inst_18587 = (state_18640[(12)]);
var inst_18601 = (state_18640[(2)]);
var inst_18602 = (inst_18588 + (1));
var tmp18661 = inst_18586;
var tmp18662 = inst_18585;
var tmp18663 = inst_18587;
var inst_18585__$1 = tmp18662;
var inst_18586__$1 = tmp18661;
var inst_18587__$1 = tmp18663;
var inst_18588__$1 = inst_18602;
var state_18640__$1 = (function (){var statearr_18671 = state_18640;
(statearr_18671[(8)] = inst_18586__$1);

(statearr_18671[(9)] = inst_18588__$1);

(statearr_18671[(14)] = inst_18601);

(statearr_18671[(11)] = inst_18585__$1);

(statearr_18671[(12)] = inst_18587__$1);

return statearr_18671;
})();
var statearr_18672_20149 = state_18640__$1;
(statearr_18672_20149[(2)] = null);

(statearr_18672_20149[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18641 === (22))){
var state_18640__$1 = state_18640;
var statearr_18673_20150 = state_18640__$1;
(statearr_18673_20150[(2)] = null);

(statearr_18673_20150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18641 === (6))){
var inst_18574 = (state_18640[(13)]);
var inst_18583 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18574) : f.call(null,inst_18574));
var inst_18584 = cljs.core.seq(inst_18583);
var inst_18585 = inst_18584;
var inst_18586 = null;
var inst_18587 = (0);
var inst_18588 = (0);
var state_18640__$1 = (function (){var statearr_18675 = state_18640;
(statearr_18675[(8)] = inst_18586);

(statearr_18675[(9)] = inst_18588);

(statearr_18675[(11)] = inst_18585);

(statearr_18675[(12)] = inst_18587);

return statearr_18675;
})();
var statearr_18676_20157 = state_18640__$1;
(statearr_18676_20157[(2)] = null);

(statearr_18676_20157[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18641 === (17))){
var inst_18605 = (state_18640[(7)]);
var inst_18609 = cljs.core.chunk_first(inst_18605);
var inst_18610 = cljs.core.chunk_rest(inst_18605);
var inst_18611 = cljs.core.count(inst_18609);
var inst_18585 = inst_18610;
var inst_18586 = inst_18609;
var inst_18587 = inst_18611;
var inst_18588 = (0);
var state_18640__$1 = (function (){var statearr_18683 = state_18640;
(statearr_18683[(8)] = inst_18586);

(statearr_18683[(9)] = inst_18588);

(statearr_18683[(11)] = inst_18585);

(statearr_18683[(12)] = inst_18587);

return statearr_18683;
})();
var statearr_18685_20158 = state_18640__$1;
(statearr_18685_20158[(2)] = null);

(statearr_18685_20158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18641 === (3))){
var inst_18637 = (state_18640[(2)]);
var state_18640__$1 = state_18640;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18640__$1,inst_18637);
} else {
if((state_val_18641 === (12))){
var inst_18625 = (state_18640[(2)]);
var state_18640__$1 = state_18640;
var statearr_18691_20159 = state_18640__$1;
(statearr_18691_20159[(2)] = inst_18625);

(statearr_18691_20159[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18641 === (2))){
var state_18640__$1 = state_18640;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18640__$1,(4),in$);
} else {
if((state_val_18641 === (23))){
var inst_18633 = (state_18640[(2)]);
var state_18640__$1 = state_18640;
var statearr_18693_20160 = state_18640__$1;
(statearr_18693_20160[(2)] = inst_18633);

(statearr_18693_20160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18641 === (19))){
var inst_18620 = (state_18640[(2)]);
var state_18640__$1 = state_18640;
var statearr_18697_20161 = state_18640__$1;
(statearr_18697_20161[(2)] = inst_18620);

(statearr_18697_20161[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18641 === (11))){
var inst_18605 = (state_18640[(7)]);
var inst_18585 = (state_18640[(11)]);
var inst_18605__$1 = cljs.core.seq(inst_18585);
var state_18640__$1 = (function (){var statearr_18698 = state_18640;
(statearr_18698[(7)] = inst_18605__$1);

return statearr_18698;
})();
if(inst_18605__$1){
var statearr_18699_20165 = state_18640__$1;
(statearr_18699_20165[(1)] = (14));

} else {
var statearr_18700_20166 = state_18640__$1;
(statearr_18700_20166[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18641 === (9))){
var inst_18627 = (state_18640[(2)]);
var inst_18628 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18640__$1 = (function (){var statearr_18701 = state_18640;
(statearr_18701[(15)] = inst_18627);

return statearr_18701;
})();
if(cljs.core.truth_(inst_18628)){
var statearr_18702_20170 = state_18640__$1;
(statearr_18702_20170[(1)] = (21));

} else {
var statearr_18703_20171 = state_18640__$1;
(statearr_18703_20171[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18641 === (5))){
var inst_18577 = cljs.core.async.close_BANG_(out);
var state_18640__$1 = state_18640;
var statearr_18708_20172 = state_18640__$1;
(statearr_18708_20172[(2)] = inst_18577);

(statearr_18708_20172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18641 === (14))){
var inst_18605 = (state_18640[(7)]);
var inst_18607 = cljs.core.chunked_seq_QMARK_(inst_18605);
var state_18640__$1 = state_18640;
if(inst_18607){
var statearr_18710_20173 = state_18640__$1;
(statearr_18710_20173[(1)] = (17));

} else {
var statearr_18711_20174 = state_18640__$1;
(statearr_18711_20174[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18641 === (16))){
var inst_18623 = (state_18640[(2)]);
var state_18640__$1 = state_18640;
var statearr_18713_20175 = state_18640__$1;
(statearr_18713_20175[(2)] = inst_18623);

(statearr_18713_20175[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18641 === (10))){
var inst_18586 = (state_18640[(8)]);
var inst_18588 = (state_18640[(9)]);
var inst_18594 = cljs.core._nth(inst_18586,inst_18588);
var state_18640__$1 = state_18640;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18640__$1,(13),out,inst_18594);
} else {
if((state_val_18641 === (18))){
var inst_18605 = (state_18640[(7)]);
var inst_18614 = cljs.core.first(inst_18605);
var state_18640__$1 = state_18640;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18640__$1,(20),out,inst_18614);
} else {
if((state_val_18641 === (8))){
var inst_18588 = (state_18640[(9)]);
var inst_18587 = (state_18640[(12)]);
var inst_18590 = (inst_18588 < inst_18587);
var inst_18591 = inst_18590;
var state_18640__$1 = state_18640;
if(cljs.core.truth_(inst_18591)){
var statearr_18723_20176 = state_18640__$1;
(statearr_18723_20176[(1)] = (10));

} else {
var statearr_18726_20177 = state_18640__$1;
(statearr_18726_20177[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13390__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13390__auto____0 = (function (){
var statearr_18731 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18731[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13390__auto__);

(statearr_18731[(1)] = (1));

return statearr_18731;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13390__auto____1 = (function (state_18640){
while(true){
var ret_value__13391__auto__ = (function (){try{while(true){
var result__13392__auto__ = switch__13389__auto__(state_18640);
if(cljs.core.keyword_identical_QMARK_(result__13392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13392__auto__;
}
break;
}
}catch (e18732){var ex__13393__auto__ = e18732;
var statearr_18733_20180 = state_18640;
(statearr_18733_20180[(2)] = ex__13393__auto__);


if(cljs.core.seq((state_18640[(4)]))){
var statearr_18735_20181 = state_18640;
(statearr_18735_20181[(1)] = cljs.core.first((state_18640[(4)])));

} else {
throw ex__13393__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20182 = state_18640;
state_18640 = G__20182;
continue;
} else {
return ret_value__13391__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13390__auto__ = function(state_18640){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13390__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13390__auto____1.call(this,state_18640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13390__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13390__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13390__auto__;
})()
})();
var state__14620__auto__ = (function (){var statearr_18737 = f__14619__auto__();
(statearr_18737[(6)] = c__14618__auto__);

return statearr_18737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14620__auto__);
}));

return c__14618__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18741 = arguments.length;
switch (G__18741) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__18749 = arguments.length;
switch (G__18749) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__18759 = arguments.length;
switch (G__18759) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14618__auto___20191 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14619__auto__ = (function (){var switch__13389__auto__ = (function (state_18790){
var state_val_18791 = (state_18790[(1)]);
if((state_val_18791 === (7))){
var inst_18785 = (state_18790[(2)]);
var state_18790__$1 = state_18790;
var statearr_18795_20192 = state_18790__$1;
(statearr_18795_20192[(2)] = inst_18785);

(statearr_18795_20192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18791 === (1))){
var inst_18766 = null;
var state_18790__$1 = (function (){var statearr_18798 = state_18790;
(statearr_18798[(7)] = inst_18766);

return statearr_18798;
})();
var statearr_18800_20193 = state_18790__$1;
(statearr_18800_20193[(2)] = null);

(statearr_18800_20193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18791 === (4))){
var inst_18769 = (state_18790[(8)]);
var inst_18769__$1 = (state_18790[(2)]);
var inst_18770 = (inst_18769__$1 == null);
var inst_18771 = cljs.core.not(inst_18770);
var state_18790__$1 = (function (){var statearr_18834 = state_18790;
(statearr_18834[(8)] = inst_18769__$1);

return statearr_18834;
})();
if(inst_18771){
var statearr_18841_20194 = state_18790__$1;
(statearr_18841_20194[(1)] = (5));

} else {
var statearr_18848_20195 = state_18790__$1;
(statearr_18848_20195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18791 === (6))){
var state_18790__$1 = state_18790;
var statearr_18864_20196 = state_18790__$1;
(statearr_18864_20196[(2)] = null);

(statearr_18864_20196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18791 === (3))){
var inst_18787 = (state_18790[(2)]);
var inst_18788 = cljs.core.async.close_BANG_(out);
var state_18790__$1 = (function (){var statearr_18876 = state_18790;
(statearr_18876[(9)] = inst_18787);

return statearr_18876;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18790__$1,inst_18788);
} else {
if((state_val_18791 === (2))){
var state_18790__$1 = state_18790;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18790__$1,(4),ch);
} else {
if((state_val_18791 === (11))){
var inst_18769 = (state_18790[(8)]);
var inst_18779 = (state_18790[(2)]);
var inst_18766 = inst_18769;
var state_18790__$1 = (function (){var statearr_18883 = state_18790;
(statearr_18883[(10)] = inst_18779);

(statearr_18883[(7)] = inst_18766);

return statearr_18883;
})();
var statearr_18885_20202 = state_18790__$1;
(statearr_18885_20202[(2)] = null);

(statearr_18885_20202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18791 === (9))){
var inst_18769 = (state_18790[(8)]);
var state_18790__$1 = state_18790;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18790__$1,(11),out,inst_18769);
} else {
if((state_val_18791 === (5))){
var inst_18769 = (state_18790[(8)]);
var inst_18766 = (state_18790[(7)]);
var inst_18774 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18769,inst_18766);
var state_18790__$1 = state_18790;
if(inst_18774){
var statearr_18901_20205 = state_18790__$1;
(statearr_18901_20205[(1)] = (8));

} else {
var statearr_18904_20206 = state_18790__$1;
(statearr_18904_20206[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18791 === (10))){
var inst_18782 = (state_18790[(2)]);
var state_18790__$1 = state_18790;
var statearr_18905_20207 = state_18790__$1;
(statearr_18905_20207[(2)] = inst_18782);

(statearr_18905_20207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18791 === (8))){
var inst_18766 = (state_18790[(7)]);
var tmp18892 = inst_18766;
var inst_18766__$1 = tmp18892;
var state_18790__$1 = (function (){var statearr_18906 = state_18790;
(statearr_18906[(7)] = inst_18766__$1);

return statearr_18906;
})();
var statearr_18907_20208 = state_18790__$1;
(statearr_18907_20208[(2)] = null);

(statearr_18907_20208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13390__auto__ = null;
var cljs$core$async$state_machine__13390__auto____0 = (function (){
var statearr_18908 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18908[(0)] = cljs$core$async$state_machine__13390__auto__);

(statearr_18908[(1)] = (1));

return statearr_18908;
});
var cljs$core$async$state_machine__13390__auto____1 = (function (state_18790){
while(true){
var ret_value__13391__auto__ = (function (){try{while(true){
var result__13392__auto__ = switch__13389__auto__(state_18790);
if(cljs.core.keyword_identical_QMARK_(result__13392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13392__auto__;
}
break;
}
}catch (e18912){var ex__13393__auto__ = e18912;
var statearr_18913_20219 = state_18790;
(statearr_18913_20219[(2)] = ex__13393__auto__);


if(cljs.core.seq((state_18790[(4)]))){
var statearr_18914_20220 = state_18790;
(statearr_18914_20220[(1)] = cljs.core.first((state_18790[(4)])));

} else {
throw ex__13393__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20224 = state_18790;
state_18790 = G__20224;
continue;
} else {
return ret_value__13391__auto__;
}
break;
}
});
cljs$core$async$state_machine__13390__auto__ = function(state_18790){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13390__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13390__auto____1.call(this,state_18790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13390__auto____0;
cljs$core$async$state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13390__auto____1;
return cljs$core$async$state_machine__13390__auto__;
})()
})();
var state__14620__auto__ = (function (){var statearr_18916 = f__14619__auto__();
(statearr_18916[(6)] = c__14618__auto___20191);

return statearr_18916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14620__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18925 = arguments.length;
switch (G__18925) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14618__auto___20226 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14619__auto__ = (function (){var switch__13389__auto__ = (function (state_18964){
var state_val_18966 = (state_18964[(1)]);
if((state_val_18966 === (7))){
var inst_18960 = (state_18964[(2)]);
var state_18964__$1 = state_18964;
var statearr_18970_20227 = state_18964__$1;
(statearr_18970_20227[(2)] = inst_18960);

(statearr_18970_20227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (1))){
var inst_18927 = (new Array(n));
var inst_18928 = inst_18927;
var inst_18929 = (0);
var state_18964__$1 = (function (){var statearr_18972 = state_18964;
(statearr_18972[(7)] = inst_18928);

(statearr_18972[(8)] = inst_18929);

return statearr_18972;
})();
var statearr_18973_20231 = state_18964__$1;
(statearr_18973_20231[(2)] = null);

(statearr_18973_20231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (4))){
var inst_18932 = (state_18964[(9)]);
var inst_18932__$1 = (state_18964[(2)]);
var inst_18933 = (inst_18932__$1 == null);
var inst_18934 = cljs.core.not(inst_18933);
var state_18964__$1 = (function (){var statearr_18977 = state_18964;
(statearr_18977[(9)] = inst_18932__$1);

return statearr_18977;
})();
if(inst_18934){
var statearr_18978_20232 = state_18964__$1;
(statearr_18978_20232[(1)] = (5));

} else {
var statearr_18979_20233 = state_18964__$1;
(statearr_18979_20233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (15))){
var inst_18954 = (state_18964[(2)]);
var state_18964__$1 = state_18964;
var statearr_18982_20238 = state_18964__$1;
(statearr_18982_20238[(2)] = inst_18954);

(statearr_18982_20238[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (13))){
var state_18964__$1 = state_18964;
var statearr_18988_20242 = state_18964__$1;
(statearr_18988_20242[(2)] = null);

(statearr_18988_20242[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (6))){
var inst_18929 = (state_18964[(8)]);
var inst_18950 = (inst_18929 > (0));
var state_18964__$1 = state_18964;
if(cljs.core.truth_(inst_18950)){
var statearr_18989_20243 = state_18964__$1;
(statearr_18989_20243[(1)] = (12));

} else {
var statearr_18991_20244 = state_18964__$1;
(statearr_18991_20244[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (3))){
var inst_18962 = (state_18964[(2)]);
var state_18964__$1 = state_18964;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18964__$1,inst_18962);
} else {
if((state_val_18966 === (12))){
var inst_18928 = (state_18964[(7)]);
var inst_18952 = cljs.core.vec(inst_18928);
var state_18964__$1 = state_18964;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18964__$1,(15),out,inst_18952);
} else {
if((state_val_18966 === (2))){
var state_18964__$1 = state_18964;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18964__$1,(4),ch);
} else {
if((state_val_18966 === (11))){
var inst_18944 = (state_18964[(2)]);
var inst_18945 = (new Array(n));
var inst_18928 = inst_18945;
var inst_18929 = (0);
var state_18964__$1 = (function (){var statearr_18997 = state_18964;
(statearr_18997[(10)] = inst_18944);

(statearr_18997[(7)] = inst_18928);

(statearr_18997[(8)] = inst_18929);

return statearr_18997;
})();
var statearr_18998_20248 = state_18964__$1;
(statearr_18998_20248[(2)] = null);

(statearr_18998_20248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (9))){
var inst_18928 = (state_18964[(7)]);
var inst_18942 = cljs.core.vec(inst_18928);
var state_18964__$1 = state_18964;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18964__$1,(11),out,inst_18942);
} else {
if((state_val_18966 === (5))){
var inst_18932 = (state_18964[(9)]);
var inst_18937 = (state_18964[(11)]);
var inst_18928 = (state_18964[(7)]);
var inst_18929 = (state_18964[(8)]);
var inst_18936 = (inst_18928[inst_18929] = inst_18932);
var inst_18937__$1 = (inst_18929 + (1));
var inst_18938 = (inst_18937__$1 < n);
var state_18964__$1 = (function (){var statearr_19000 = state_18964;
(statearr_19000[(12)] = inst_18936);

(statearr_19000[(11)] = inst_18937__$1);

return statearr_19000;
})();
if(cljs.core.truth_(inst_18938)){
var statearr_19001_20249 = state_18964__$1;
(statearr_19001_20249[(1)] = (8));

} else {
var statearr_19002_20250 = state_18964__$1;
(statearr_19002_20250[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (14))){
var inst_18957 = (state_18964[(2)]);
var inst_18958 = cljs.core.async.close_BANG_(out);
var state_18964__$1 = (function (){var statearr_19004 = state_18964;
(statearr_19004[(13)] = inst_18957);

return statearr_19004;
})();
var statearr_19005_20251 = state_18964__$1;
(statearr_19005_20251[(2)] = inst_18958);

(statearr_19005_20251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (10))){
var inst_18948 = (state_18964[(2)]);
var state_18964__$1 = state_18964;
var statearr_19006_20252 = state_18964__$1;
(statearr_19006_20252[(2)] = inst_18948);

(statearr_19006_20252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (8))){
var inst_18937 = (state_18964[(11)]);
var inst_18928 = (state_18964[(7)]);
var tmp19003 = inst_18928;
var inst_18928__$1 = tmp19003;
var inst_18929 = inst_18937;
var state_18964__$1 = (function (){var statearr_19008 = state_18964;
(statearr_19008[(7)] = inst_18928__$1);

(statearr_19008[(8)] = inst_18929);

return statearr_19008;
})();
var statearr_19011_20253 = state_18964__$1;
(statearr_19011_20253[(2)] = null);

(statearr_19011_20253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13390__auto__ = null;
var cljs$core$async$state_machine__13390__auto____0 = (function (){
var statearr_19012 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19012[(0)] = cljs$core$async$state_machine__13390__auto__);

(statearr_19012[(1)] = (1));

return statearr_19012;
});
var cljs$core$async$state_machine__13390__auto____1 = (function (state_18964){
while(true){
var ret_value__13391__auto__ = (function (){try{while(true){
var result__13392__auto__ = switch__13389__auto__(state_18964);
if(cljs.core.keyword_identical_QMARK_(result__13392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13392__auto__;
}
break;
}
}catch (e19013){var ex__13393__auto__ = e19013;
var statearr_19014_20256 = state_18964;
(statearr_19014_20256[(2)] = ex__13393__auto__);


if(cljs.core.seq((state_18964[(4)]))){
var statearr_19015_20257 = state_18964;
(statearr_19015_20257[(1)] = cljs.core.first((state_18964[(4)])));

} else {
throw ex__13393__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20258 = state_18964;
state_18964 = G__20258;
continue;
} else {
return ret_value__13391__auto__;
}
break;
}
});
cljs$core$async$state_machine__13390__auto__ = function(state_18964){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13390__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13390__auto____1.call(this,state_18964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13390__auto____0;
cljs$core$async$state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13390__auto____1;
return cljs$core$async$state_machine__13390__auto__;
})()
})();
var state__14620__auto__ = (function (){var statearr_19016 = f__14619__auto__();
(statearr_19016[(6)] = c__14618__auto___20226);

return statearr_19016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14620__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19020 = arguments.length;
switch (G__19020) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14618__auto___20263 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14619__auto__ = (function (){var switch__13389__auto__ = (function (state_19076){
var state_val_19078 = (state_19076[(1)]);
if((state_val_19078 === (7))){
var inst_19072 = (state_19076[(2)]);
var state_19076__$1 = state_19076;
var statearr_19080_20264 = state_19076__$1;
(statearr_19080_20264[(2)] = inst_19072);

(statearr_19080_20264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (1))){
var inst_19025 = [];
var inst_19026 = inst_19025;
var inst_19027 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19076__$1 = (function (){var statearr_19081 = state_19076;
(statearr_19081[(7)] = inst_19027);

(statearr_19081[(8)] = inst_19026);

return statearr_19081;
})();
var statearr_19082_20272 = state_19076__$1;
(statearr_19082_20272[(2)] = null);

(statearr_19082_20272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (4))){
var inst_19030 = (state_19076[(9)]);
var inst_19030__$1 = (state_19076[(2)]);
var inst_19031 = (inst_19030__$1 == null);
var inst_19032 = cljs.core.not(inst_19031);
var state_19076__$1 = (function (){var statearr_19085 = state_19076;
(statearr_19085[(9)] = inst_19030__$1);

return statearr_19085;
})();
if(inst_19032){
var statearr_19089_20273 = state_19076__$1;
(statearr_19089_20273[(1)] = (5));

} else {
var statearr_19091_20274 = state_19076__$1;
(statearr_19091_20274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (15))){
var inst_19026 = (state_19076[(8)]);
var inst_19064 = cljs.core.vec(inst_19026);
var state_19076__$1 = state_19076;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19076__$1,(18),out,inst_19064);
} else {
if((state_val_19078 === (13))){
var inst_19059 = (state_19076[(2)]);
var state_19076__$1 = state_19076;
var statearr_19093_20276 = state_19076__$1;
(statearr_19093_20276[(2)] = inst_19059);

(statearr_19093_20276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (6))){
var inst_19026 = (state_19076[(8)]);
var inst_19061 = inst_19026.length;
var inst_19062 = (inst_19061 > (0));
var state_19076__$1 = state_19076;
if(cljs.core.truth_(inst_19062)){
var statearr_19094_20277 = state_19076__$1;
(statearr_19094_20277[(1)] = (15));

} else {
var statearr_19098_20278 = state_19076__$1;
(statearr_19098_20278[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (17))){
var inst_19069 = (state_19076[(2)]);
var inst_19070 = cljs.core.async.close_BANG_(out);
var state_19076__$1 = (function (){var statearr_19100 = state_19076;
(statearr_19100[(10)] = inst_19069);

return statearr_19100;
})();
var statearr_19101_20279 = state_19076__$1;
(statearr_19101_20279[(2)] = inst_19070);

(statearr_19101_20279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (3))){
var inst_19074 = (state_19076[(2)]);
var state_19076__$1 = state_19076;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19076__$1,inst_19074);
} else {
if((state_val_19078 === (12))){
var inst_19026 = (state_19076[(8)]);
var inst_19052 = cljs.core.vec(inst_19026);
var state_19076__$1 = state_19076;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19076__$1,(14),out,inst_19052);
} else {
if((state_val_19078 === (2))){
var state_19076__$1 = state_19076;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19076__$1,(4),ch);
} else {
if((state_val_19078 === (11))){
var inst_19034 = (state_19076[(11)]);
var inst_19026 = (state_19076[(8)]);
var inst_19030 = (state_19076[(9)]);
var inst_19049 = inst_19026.push(inst_19030);
var tmp19103 = inst_19026;
var inst_19026__$1 = tmp19103;
var inst_19027 = inst_19034;
var state_19076__$1 = (function (){var statearr_19105 = state_19076;
(statearr_19105[(7)] = inst_19027);

(statearr_19105[(8)] = inst_19026__$1);

(statearr_19105[(12)] = inst_19049);

return statearr_19105;
})();
var statearr_19106_20280 = state_19076__$1;
(statearr_19106_20280[(2)] = null);

(statearr_19106_20280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (9))){
var inst_19027 = (state_19076[(7)]);
var inst_19044 = cljs.core.keyword_identical_QMARK_(inst_19027,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_19076__$1 = state_19076;
var statearr_19107_20281 = state_19076__$1;
(statearr_19107_20281[(2)] = inst_19044);

(statearr_19107_20281[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (5))){
var inst_19034 = (state_19076[(11)]);
var inst_19041 = (state_19076[(13)]);
var inst_19027 = (state_19076[(7)]);
var inst_19030 = (state_19076[(9)]);
var inst_19034__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19030) : f.call(null,inst_19030));
var inst_19041__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19034__$1,inst_19027);
var state_19076__$1 = (function (){var statearr_19108 = state_19076;
(statearr_19108[(11)] = inst_19034__$1);

(statearr_19108[(13)] = inst_19041__$1);

return statearr_19108;
})();
if(inst_19041__$1){
var statearr_19109_20282 = state_19076__$1;
(statearr_19109_20282[(1)] = (8));

} else {
var statearr_19110_20283 = state_19076__$1;
(statearr_19110_20283[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (14))){
var inst_19034 = (state_19076[(11)]);
var inst_19030 = (state_19076[(9)]);
var inst_19054 = (state_19076[(2)]);
var inst_19055 = [];
var inst_19056 = inst_19055.push(inst_19030);
var inst_19026 = inst_19055;
var inst_19027 = inst_19034;
var state_19076__$1 = (function (){var statearr_19114 = state_19076;
(statearr_19114[(14)] = inst_19054);

(statearr_19114[(15)] = inst_19056);

(statearr_19114[(7)] = inst_19027);

(statearr_19114[(8)] = inst_19026);

return statearr_19114;
})();
var statearr_19115_20284 = state_19076__$1;
(statearr_19115_20284[(2)] = null);

(statearr_19115_20284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (16))){
var state_19076__$1 = state_19076;
var statearr_19119_20285 = state_19076__$1;
(statearr_19119_20285[(2)] = null);

(statearr_19119_20285[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (10))){
var inst_19047 = (state_19076[(2)]);
var state_19076__$1 = state_19076;
if(cljs.core.truth_(inst_19047)){
var statearr_19121_20286 = state_19076__$1;
(statearr_19121_20286[(1)] = (11));

} else {
var statearr_19122_20287 = state_19076__$1;
(statearr_19122_20287[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (18))){
var inst_19066 = (state_19076[(2)]);
var state_19076__$1 = state_19076;
var statearr_19123_20288 = state_19076__$1;
(statearr_19123_20288[(2)] = inst_19066);

(statearr_19123_20288[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (8))){
var inst_19041 = (state_19076[(13)]);
var state_19076__$1 = state_19076;
var statearr_19124_20289 = state_19076__$1;
(statearr_19124_20289[(2)] = inst_19041);

(statearr_19124_20289[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13390__auto__ = null;
var cljs$core$async$state_machine__13390__auto____0 = (function (){
var statearr_19125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19125[(0)] = cljs$core$async$state_machine__13390__auto__);

(statearr_19125[(1)] = (1));

return statearr_19125;
});
var cljs$core$async$state_machine__13390__auto____1 = (function (state_19076){
while(true){
var ret_value__13391__auto__ = (function (){try{while(true){
var result__13392__auto__ = switch__13389__auto__(state_19076);
if(cljs.core.keyword_identical_QMARK_(result__13392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13392__auto__;
}
break;
}
}catch (e19126){var ex__13393__auto__ = e19126;
var statearr_19127_20290 = state_19076;
(statearr_19127_20290[(2)] = ex__13393__auto__);


if(cljs.core.seq((state_19076[(4)]))){
var statearr_19128_20291 = state_19076;
(statearr_19128_20291[(1)] = cljs.core.first((state_19076[(4)])));

} else {
throw ex__13393__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20293 = state_19076;
state_19076 = G__20293;
continue;
} else {
return ret_value__13391__auto__;
}
break;
}
});
cljs$core$async$state_machine__13390__auto__ = function(state_19076){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13390__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13390__auto____1.call(this,state_19076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13390__auto____0;
cljs$core$async$state_machine__13390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13390__auto____1;
return cljs$core$async$state_machine__13390__auto__;
})()
})();
var state__14620__auto__ = (function (){var statearr_19133 = f__14619__auto__();
(statearr_19133[(6)] = c__14618__auto___20263);

return statearr_19133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14620__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
