(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[179],{7376:(t,e,n)=>{"use strict";n(1539),n(9714),n(3710),n(5306),n(4916),n(9826),n(1249),$(window).scroll((function(){var t=$(this).scrollTop();t>100?$("header").addClass("scrolled"):$("header").removeClass("scrolled"),$(".background-wave").css("top",.25*t-500),$(".parallax").each((function(){var e=(t*$(this).data("speed")).toString()+"px",n=$(this).data("orientation").replace("[value]",e);$(this).css("background-position",n)}))})),$(document).ready((function(){var t,e;$(".navbar-nav li").not(".quote").not(".line-active").on("click",(function(){$(".navbar-nav li").removeClass("current-item"),$(this).addClass("current-item")})),$(".navbar-nav li").not(".quote").not(".line-active").mouseover((function(){var t=$(".line-active").position().left,e=$(this).position().left,n=$(this).width();t<e?$(".line-active").stop().animate({width:e-t+n},200,(function(){$(".line-active").stop().animate({width:n,left:e},300)})):$(".line-active").stop().animate({width:t-e+n,left:e},200,(function(){$(".line-active").stop().animate({width:n,left:e},300)}))})),$(".navbar-nav li").not(".quote").not(".line-active").mouseleave((function(){var t=$(".current-item"),e=$(".line-active").position().left,n=t.position().left,i=t.width();$(".line-active").stop().animate({width:n-e+i},200,(function(){$(".line-active").stop().animate({width:i,left:n},300)}))})),$(".navbar-nav li:first-child").trigger("mouseover");var n,i,a,o,r,s,c=$(".navbar"),l=c.outerHeight()+1,u=c.find("a").map((function(){var t=$($(this).data("target"));if(t.length)return t}));$(window).scroll((function(n){var i=$(this).scrollTop()+l,a=u.map((function(){if($(this).offset().top<i)return this}));a=a[a.length-1],e=a&&a.length?a[0].id:"",t!==e&&(t=e,$("#main-nav [data-target='."+e+"']").trigger("mouseover").stop())})),n=window,i=document,a="static.olark.com/jsclient/loader.js",n.olark||(o="script",s=i.createElement(o),o=i.getElementsByTagName(o)[0],s.async=1,s.src="//"+a,o.parentNode.insertBefore(s,o),(s=n.olark=function(){r.s.push(arguments),r.t.push(+new Date)}).extend=function(t,e){s("extend",t,e)},s.identify=function(t){s("identify",r.i=t)},s.configure=function(t,e){s("configure",t,e),r.c[t]=e},r=s._={s:[],t:[+new Date],c:{},l:a}),olark.identify("4841-480-10-7287")}))}},t=>{"use strict";t.O(0,[216],(()=>(7376,t(t.s=7376)))),t.O()}]);