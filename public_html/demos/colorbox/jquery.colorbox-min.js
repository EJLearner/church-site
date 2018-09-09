﻿// ColorBox v1.3.23 - A lightweight customizable lightbox plugin
// Copyright (c) 2013 Jack Moore - jack@colorpowered.com
// Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
(function(b,r,ea){function c(a,f,c){a=r.createElement(a);f&&(a.id=q+f);c&&(a.style.cssText=c);return b(a)}function M(a){var b=j.length;a=(p+a)%b;return 0>a?b+a:a}function n(a,b){return Math.round((/%/.test(a)?("x"===b?m.width():m.height())/100:1)*parseInt(a,10))}function fa(b){return a.photo||/\.(gif|png|jp(e|g|eg)|bmp|ico)((#|\?).*)?$/i.test(b)}function ga(){var B,f=b.data(k,v);null==f?(a=b.extend({},R),console&&console.log&&console.log("Error: cboxElement missing settings object")):a=b.extend({}, f);for(B in a)b.isFunction(a[B])&&"on"!==B.slice(0,2)&&(a[B]=a[B].call(k));a.rel=a.rel||k.rel||b(k).data("rel")||"nofollow";a.href=a.href||b(k).attr("href");a.title=a.title||k.title;"string"===typeof a.href&&(a.href=b.trim(a.href))}function D(a,f){b(r).trigger(a);b("*",h).trigger(a);f&&f.call(k)}function ma(){var b,f=q+"Slideshow_",c="click."+q,e,t;a.slideshow&&j[1]?(e=function(){G.html(a.slideshowStop).unbind(c).bind(S,function(){if(a.loop||j[p+1])b=setTimeout(g.next,a.slideshowSpeed)}).bind(T,function(){clearTimeout(b)}).one(c+ " "+U,t);h.removeClass(f+"off").addClass(f+"on");b=setTimeout(g.next,a.slideshowSpeed)},t=function(){clearTimeout(b);G.html(a.slideshowStart).unbind([S,T,U,c].join(" ")).one(c,function(){g.next();e()});h.removeClass(f+"on").addClass(f+"off")},a.slideshowAuto?e():t()):h.removeClass(f+"off "+f+"on")}function ha(c){N||(k=c,ga(),j=b(k),p=0,"nofollow"!==a.rel&&(j=b("."+F).filter(function(){var c=b.data(this,v),B;c&&(B=b(this).data("rel")||c.rel||this.rel);return B===a.rel}),p=j.index(k),-1===p&&(j=j.add(k), p=j.length-1)),w||(w=H=!0,h.show(),a.returnFocus&&(b(k).blur(),b(r).one(ia,function(){b(k).focus()})),C.css({opacity:+a.opacity,cursor:a.overlayClose?"pointer":"auto"}).show(),a.w=n(a.initialWidth,"x"),a.h=n(a.initialHeight,"y"),g.position(),O&&m.bind("resize."+P+" scroll."+P,function(){C.css({width:m.width(),height:m.height(),top:m.scrollTop(),left:m.scrollLeft()})}).trigger("resize."+P),D(ja,a.onOpen),V.add(W).hide(),X.html(a.close).show()),g.load(!0))}function ka(){!h&&r.body&&(Y=!1,m=b(ea),h= c(e).attr({id:v,"class":I?q+(O?"IE6":"IE"):""}).hide(),C=c(e,"Overlay",O?"position:absolute":"").hide(),Z=c(e,"LoadingOverlay").add(c(e,"LoadingGraphic")),E=c(e,"Wrapper"),u=c(e,"Content").append(l=c(e,"LoadedContent","width:0; height:0; overflow:hidden"),W=c(e,"Title"),$=c(e,"Current"),J=c(e,"Next"),K=c(e,"Previous"),G=c(e,"Slideshow").bind(ja,ma),X=c(e,"Close")),E.append(c(e).append(c(e,"TopLeft"),aa=c(e,"TopCenter"),c(e,"TopRight")),c(e,!1,"clear:left").append(ba=c(e,"MiddleLeft"),u,ca=c(e,"MiddleRight")), c(e,!1,"clear:left").append(c(e,"BottomLeft"),da=c(e,"BottomCenter"),c(e,"BottomRight"))).find("div div").css({"float":"left"}),L=c(e,!1,"position:absolute; width:9999px; visibility:hidden; display:none"),V=J.add(K).add($).add(G),b(r.body).append(C,h.append(E,L)))}var R={transition:"elastic",speed:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1, title:!1,rel:!1,opacity:0.9,preloading:!0,current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",open:!1,returnFocus:!0,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1, data:void 0},v="colorbox",q="cbox",F=q+"Element",ja=q+"_open",T=q+"_load",S=q+"_complete",U=q+"_cleanup",ia=q+"_closed",Q=q+"_purge",I=!b.support.leadingWhitespace,O=I&&!ea.XMLHttpRequest,P=q+"_IE6",C,h,E,u,aa,ba,ca,da,j,m,l,L,Z,W,$,G,J,K,X,V,a,x,y,z,A,k,p,d,w,H,N,la,g,e="div",Y;b.colorbox||(b(ka),g=b.fn[v]=b[v]=function(c,e){var d=this;c=c||{};ka();var s;h?(Y||(Y=!0,x=aa.height()+da.height()+u.outerHeight(!0)-u.height(),y=ba.width()+ca.width()+u.outerWidth(!0)-u.width(),z=l.outerHeight(!0),A=l.outerWidth(!0), J.click(function(){g.next()}),K.click(function(){g.prev()}),X.click(function(){g.close()}),C.click(function(){a.overlayClose&&g.close()}),b(r).bind("keydown."+q,function(b){var c=b.keyCode;w&&(a.escKey&&27===c)&&(b.preventDefault(),g.close());w&&(a.arrowKey&&j[1])&&(37===c?(b.preventDefault(),K.click()):39===c&&(b.preventDefault(),J.click()))}),b(r).delegate("."+F,"click",function(a){1<a.which||(a.shiftKey||a.altKey||a.metaKey)||(a.preventDefault(),ha(this))})),s=!0):s=!1;if(s){if(b.isFunction(d))d= b("<a/>"),c.open=!0;else if(!d[0])return d;e&&(c.onComplete=e);d.each(function(){b.data(this,v,b.extend({},b.data(this,v)||R,c))}).addClass(F);(b.isFunction(c.open)&&c.open.call(d)||c.open)&&ha(d[0])}return d},g.position=function(b,c){function e(a){aa[0].style.width=da[0].style.width=u[0].style.width=parseInt(a.style.width,10)-y+"px";u[0].style.height=ba[0].style.height=ca[0].style.height=parseInt(a.style.height,10)-x+"px"}var d,j=d=0,l=h.offset(),p,k;m.unbind("resize."+q);h.css({top:-9E4,left:-9E4}); p=m.scrollTop();k=m.scrollLeft();a.fixed&&!O?(l.top-=p,l.left-=k,h.css({position:"fixed"})):(d=p,j=k,h.css({position:"absolute"}));j=!1!==a.right?j+Math.max(m.width()-a.w-A-y-n(a.right,"x"),0):!1!==a.left?j+n(a.left,"x"):j+Math.round(Math.max(m.width()-a.w-A-y,0)/2);d=!1!==a.bottom?d+Math.max(m.height()-a.h-z-x-n(a.bottom,"y"),0):!1!==a.top?d+n(a.top,"y"):d+Math.round(Math.max(m.height()-a.h-z-x,0)/2);h.css({top:l.top,left:l.left});b=h.width()===a.w+A&&h.height()===a.h+z?0:b||0;E[0].style.width=E[0].style.height= "9999px";d={width:a.w+A+y,height:a.h+z+x,top:d,left:j};0===b&&h.css(d);h.dequeue().animate(d,{duration:b,complete:function(){e(this);H=!1;E[0].style.width=a.w+A+y+"px";E[0].style.height=a.h+z+x+"px";a.reposition&&setTimeout(function(){m.bind("resize."+q,g.position)},1);c&&c()},step:function(){e(this)}})},g.resize=function(b){w&&(b=b||{},b.width&&(a.w=n(b.width,"x")-A-y),b.innerWidth&&(a.w=n(b.innerWidth,"x")),l.css({width:a.w}),b.height&&(a.h=n(b.height,"y")-z-x),b.innerHeight&&(a.h=n(b.innerHeight, "y")),!b.innerHeight&&!b.height&&(l.css({height:"auto"}),a.h=l.height()),l.css({height:a.h}),g.position("none"===a.transition?0:a.speed))},g.prep=function(k){function f(){a.w=a.w||l.width();a.w=a.mw&&a.mw<a.w?a.mw:a.w;return a.w}function m(){a.h=a.h||l.height();a.h=a.mh&&a.mh<a.h?a.mh:a.h;return a.h}if(w){var n,t="none"===a.transition?0:a.speed;l.remove();l=c(e,"LoadedContent").append(k);l.hide().appendTo(L.show()).css({width:f(),overflow:a.scrolling?"auto":"hidden"}).css({height:m()}).prependTo(u); L.hide();b(d).css({"float":"none"});n=function(){function e(){I&&h[0].style.removeAttribute("filter")}var g=j.length,f,k;w&&(k=function(){clearTimeout(la);Z.detach().hide();D(S,a.onComplete)},I&&d&&l.fadeIn(100),W.html(a.title).add(l).show(),1<g?("string"===typeof a.current&&$.html(a.current.replace("{current}",p+1).replace("{total}",g)).show(),J[a.loop||p<g-1?"show":"hide"]().html(a.next),K[a.loop||p?"show":"hide"]().html(a.previous),a.slideshow&&G.show(),a.preloading&&b.each([M(-1),M(1)],function(){var a, c;c=j[this];(a=b.data(c,v))&&a.href?(a=a.href,b.isFunction(a)&&(a=a.call(c))):a=c.href;fa(a)&&(c=new Image,c.src=a)})):V.hide(),a.iframe?(f=c("iframe")[0],"frameBorder"in f&&(f.frameBorder=0),"allowTransparency"in f&&(f.allowTransparency="true"),a.scrolling||(f.scrolling="no"),b(f).attr({src:a.href,name:(new Date).getTime(),"class":q+"Iframe",allowFullScreen:!0,webkitAllowFullScreen:!0,mozallowfullscreen:!0}).one("load",k).appendTo(l),b(r).one(Q,function(){f.src="//about:blank"}),a.fastIframe&&b(f).trigger("load")): k(),"fade"===a.transition?h.fadeTo(t,1,e):e())};"fade"===a.transition?h.fadeTo(t,0,function(){g.position(0,n)}):g.position(t,n)}},g.load=function(h){var f,m,s=g.prep,t;H=!0;d=!1;k=j[p];h||ga();D(Q);D(T,a.onLoad);a.h=a.height?n(a.height,"y")-z-x:a.innerHeight&&n(a.innerHeight,"y");a.w=a.width?n(a.width,"x")-A-y:a.innerWidth&&n(a.innerWidth,"x");a.mw=a.w;a.mh=a.h;a.maxWidth&&(a.mw=n(a.maxWidth,"x")-A-y,a.mw=a.w&&a.w<a.mw?a.w:a.mw);a.maxHeight&&(a.mh=n(a.maxHeight,"y")-z-x,a.mh=a.h&&a.h<a.mh?a.h:a.mh); f=a.href;la=setTimeout(function(){Z.show().appendTo(u)},100);a.inline?(t=c(e).hide().insertBefore(b(f)[0]),b(r).one(Q,function(){t.replaceWith(l.children())}),s(b(f))):a.iframe?s(" "):a.html?s(a.html):fa(f)?(b(d=new Image).addClass(q+"Photo").bind("error",function(){a.title=!1;s(c(e,"Error").html(a.imgError))}).load(function(){var b;d.onload=null;a.scalePhotos&&(m=function(){d.height-=d.height*b;d.width-=d.width*b},a.mw&&d.width>a.mw&&(b=(d.width-a.mw)/d.width,m()),a.mh&&d.height>a.mh&&(b=(d.height- a.mh)/d.height,m()));a.h&&(d.style.marginTop=Math.max(a.h-d.height,0)/2+"px");if(j[1]&&(a.loop||j[p+1]))d.style.cursor="pointer",d.onclick=function(){g.next()};I&&(d.style.msInterpolationMode="bicubic");setTimeout(function(){s(d)},1)}),setTimeout(function(){d.src=f},1)):f&&L.load(f,a.data,function(d,f){s("error"===f?c(e,"Error").html(a.xhrError):b(this).contents())})},g.next=function(){if(!H&&j[1]&&(a.loop||j[p+1]))p=M(1),g.load()},g.prev=function(){if(!H&&j[1]&&(a.loop||p))p=M(-1),g.load()},g.close= function(){w&&!N&&(N=!0,w=!1,D(U,a.onCleanup),m.unbind("."+q+" ."+P),C.fadeTo(200,0),h.stop().fadeTo(300,0,function(){h.add(C).css({opacity:1,cursor:"auto"}).hide();D(Q);l.remove();setTimeout(function(){N=!1;D(ia,a.onClosed)},1)}))},g.remove=function(){b([]).add(h).add(C).remove();h=null;b("."+F).removeData(v).removeClass(F);b(r).undelegate("."+F)},g.element=function(){return b(k)},g.settings=R)})(jQuery,document,window);
