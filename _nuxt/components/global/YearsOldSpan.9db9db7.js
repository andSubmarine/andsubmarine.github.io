(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{297:function(t,e,n){"use strict";n.r(e);n(19),n(20),n(1),n(97);var r=n(12),c=n(23),o=n(36),f=n(50),l=n(26),d=n(22),h=n(73);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var O=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},v=function(t){Object(o.a)(n,t);var e=y(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"yearsOld",get:function(){var t=Date.now()-this.datetime,e=new Date(t);return Math.abs(e.getUTCFullYear()-1970)}}]),n}(h.Vue);O([Object(h.Prop)({default:new Date(1995,11,26).getTime()})],v.prototype,"datetime",void 0);var j=v=O([h.Component],v),w=n(51),component=Object(w.a)(j,(function(){var t=this.$createElement;return(this._self._c||t)("span",[this._v(this._s(this.yearsOld))])}),[],!1,null,null,null);e.default=component.exports}}]);