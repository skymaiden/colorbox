/*!
	Colorbox v1.4.36 - 2014-02-01
	jQuery lightbox and modal window plugin
	(c) 2014 Jack Moore - http://www.jacklmoore.com/colorbox
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(e,t,n){function J(n,r,i){var o=t.createElement(n);if(r){o.className=s+r}if(i){o.style.cssText=i}return e(o)}function K(){return n.innerHeight?n.innerHeight:e(n).height()}function Q(e){var t=g.length,n=(B+e)%t;return n<0?t+n:n}function G(e,t){return Math.round((/%/.test(e)?(t==="x"?y.width():K())/100:1)*parseInt(e,10))}function Y(e,t){return e.photo||e.photoRegex.test(t)}function Z(e,t){return e.retinaUrl&&n.devicePixelRatio>1?t.replace(e.photoRegex,e.retinaSuffix):t}function et(e){if("contains"in d[0]&&!d[0].contains(e.target)){e.stopPropagation();d.focus()}}function tt(){var t,n=e.data(H,i);if(n==null){O=e.extend({},r);if(console&&console.log){console.log("Error: cboxElement missing settings object")}}else{O=e.extend({},n)}for(t in O){if(e.isFunction(O[t])&&t.slice(0,2)!=="on"){O[t]=O[t].call(H)}}O.rel=O.rel||H.rel||e(H).data("rel")||"nofollow";O.href=O.href||e(H).attr("href");O.title=O.title||H.title;if(typeof O.href==="string"){O.href=e.trim(O.href)}}function nt(n,r){e(t).trigger(n);A.triggerHandler(n);if(e.isFunction(r)){r.call(H)}}function it(n){if(!q){H=n;tt();g=e(H);B=0;if(O.rel!=="nofollow"){g=e("."+o).filter(function(){var t=e.data(this,i),n;if(t){n=e(this).data("rel")||t.rel||this.rel}return n===O.rel});B=g.index(H);if(B===-1){g=g.add(H);B=g.length-1}}p.css({opacity:parseFloat(O.opacity),cursor:O.overlayClose?"pointer":"auto",visibility:"visible"}).show();if(W){d.add(p).removeClass(W)}if(O.className){d.add(p).addClass(O.className)}W=O.className;if(O.closeButton){k.html(O.close).appendTo(m)}else{k.appendTo("<div/>")}if(!F){F=I=true;d.css({visibility:"hidden",display:"block"});b=J(z,"LoadedContent","width:0; height:0; overflow:hidden");m.css({width:"",height:""}).append(b);M=m.outerHeight(true)-m.height();_=m.outerWidth(true)-m.width();D=b.outerHeight(true);P=b.outerWidth(true);O.w=G(O.initialWidth,"x");O.h=G(O.initialHeight,"y");b.css({width:"",height:O.h});U.position();nt(u,O.onOpen);L.add(S).hide();d.focus();if(O.trapFocus){if(t.addEventListener){t.addEventListener("focus",et,true);A.one(c,function(){t.removeEventListener("focus",et,true)})}}if(O.returnFocus){A.one(c,function(){e(H).focus()})}}ut()}}function st(){if(!d&&t.body){$=false;y=e(n);d=J(z).attr({id:i,"class":e.support.opacity===false?s+"IE":"",role:"dialog",tabindex:"-1"}).hide();p=J(z,"Overlay").hide();E=e(J(z,"LoadingGraphic")[0]);v=J(z,"Wrapper");m=J(z,"Content").append(S=J(z,"Title"),x=J(z,"Current"),C=e('<button type="button"/>').attr({"class":s+"Previous"}),N=e('<button type="button"/>').attr({"class":s+"Next"}),T=J("button","Slideshow"),E);k=e('<button type="button"/>').attr({"class":s+"Close"});v.append(m);w=J(z,false,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;");L=N.add(C).add(x).add(T);e(t.body).append(p,d.append(v,w))}}function ot(){function n(e){if(!(e.which>1||e.shiftKey||e.altKey||e.metaKey||e.ctrlKey)){e.preventDefault();it(this)}}if(d){if(!$){$=true;N.click(function(){U.next()});C.click(function(){U.prev()});k.click(function(){U.close()});p.click(function(){if(O.overlayClose){U.close()}});e(t).bind("keydown."+s,function(e){var t=e.keyCode;if(F&&O.escKey&&t===27){e.preventDefault();U.close()}if(F&&O.arrowKey&&g[1]&&!e.altKey){if(t===37){e.preventDefault();C.click()}else if(t===39){e.preventDefault();N.click()}}});if(e.isFunction(e.fn.on)){e(t).on("click."+s,"."+o,n)}else{e("."+o).live("click."+s,n)}}return true}return false}function ut(){var r,i,o=U.prep,u,f=++X;I=true;j=false;H=g[B];tt();nt(h);nt(a,O.onLoad);O.h=O.height?G(O.height,"y")-D-M:O.innerHeight&&G(O.innerHeight,"y");O.w=O.width?G(O.width,"x")-P-_:O.innerWidth&&G(O.innerWidth,"x");O.mw=O.w;O.mh=O.h;if(O.maxWidth){O.mw=G(O.maxWidth,"x")-P-_;O.mw=O.w&&O.w<O.mw?O.w:O.mw}if(O.maxHeight){O.mh=G(O.maxHeight,"y")-D-M;O.mh=O.h&&O.h<O.mh?O.h:O.mh}r=O.href;R=setTimeout(function(){E.show()},100);if(O.inline){u=J(z).hide().insertBefore(e(r)[0]);A.one(h,function(){u.replaceWith(b.children())});o(e(r))}else if(O.iframe){o(" ")}else if(O.html){o(O.html)}else if(Y(O,r)){r=Z(O,r);j=t.createElement("img");e(j).addClass(s+"Photo").bind("error",function(){O.title=false;o(J(z,"Error").html(O.imgError))}).one("load",function(){var t;if(f!==X){return}e.each(["alt","longdesc","aria-describedby"],function(t,n){var r=e(H).attr(n)||e(H).attr("data-"+n);if(r){j.setAttribute(n,r)}});if(O.retinaImage&&n.devicePixelRatio>1){j.height=j.height/n.devicePixelRatio;j.width=j.width/n.devicePixelRatio}if(O.scalePhotos){i=function(){j.height-=j.height*t;j.width-=j.width*t};if(O.mw&&j.width>O.mw){t=(j.width-O.mw)/j.width;i()}if(O.mh&&j.height>O.mh){t=(j.height-O.mh)/j.height;i()}}if(O.h){j.style.marginTop=Math.max(O.mh-j.height,0)/2+"px"}if(g[1]&&(O.loop||g[B+1])){j.style.cursor="pointer";j.onclick=function(){U.next()}}j.style.width=j.width+"px";j.style.height=j.height+"px";setTimeout(function(){o(j)},1)});setTimeout(function(){j.src=r},1)}else if(r){w.load(r,O.data,function(t,n){if(f===X){o(n==="error"?J(z,"Error").html(O.xhrError):e(this).contents())}})}}var r={html:false,photo:false,iframe:false,inline:false,transition:"elastic",speed:300,fadeOut:300,width:false,initialWidth:"600",innerWidth:false,maxWidth:false,height:false,initialHeight:"450",innerHeight:false,maxHeight:false,scalePhotos:true,scrolling:true,href:false,title:false,rel:false,opacity:.9,preloading:true,className:false,overlayClose:true,escKey:true,arrowKey:true,top:false,bottom:false,left:false,right:false,fixed:false,data:undefined,closeButton:true,fastIframe:true,open:false,reposition:true,loop:true,slideshow:false,slideshowAuto:true,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i,retinaImage:false,retinaUrl:false,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:true,trapFocus:true,onOpen:false,onLoad:false,onComplete:false,onCleanup:false,onClosed:false},i="colorbox",s="cbox",o=s+"Element",u=s+"_open",a=s+"_load",f=s+"_complete",l=s+"_cleanup",c=s+"_closed",h=s+"_purge",p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A=e("<a/>"),O,M,_,D,P,H,B,j,F,I,q,R,U,z="div",W,X=0,V={},$;var rt=function(){function i(){clearTimeout(r)}function o(){if(O.loop||g[B+1]){i();r=setTimeout(U.next,O.slideshowSpeed)}}function u(){T.html(O.slideshowStop).unbind(n).one(n,c);A.bind(f,o).bind(a,i);d.removeClass(t+"off").addClass(t+"on")}function c(){i();A.unbind(f,o).unbind(a,i);T.html(O.slideshowStart).unbind(n).one(n,function(){U.next();u()});d.removeClass(t+"on").addClass(t+"off")}function h(){e=false;T.hide();i();A.unbind(f,o).unbind(a,i);d.removeClass(t+"off "+t+"on")}var e,t=s+"Slideshow_",n="click."+s,r;return function(){if(e){if(!O.slideshow){A.unbind(l,h);h()}}else{if(O.slideshow&&g[1]){e=true;A.one(l,h);if(O.slideshowAuto){u()}else{c()}T.show()}}}}();if(e.colorbox){return}e(st);U=e.fn[i]=e[i]=function(t,n){var s=this;t=t||{};st();if(ot()){if(e.isFunction(s)){s=e("<a/>");t.open=true}else if(!s[0]){return s}if(n){t.onComplete=n}s.each(function(){e.data(this,i,e.extend({},e.data(this,i)||r,t))}).addClass(o);if(e.isFunction(t.open)&&t.open.call(s)||t.open){it(s[0])}}return s};U.position=function(t,n){function l(){m[0].style.height=parseInt(d[0].style.height,10)-M+"px"}var r,i=0,o=0,u=d.offset(),a,f;y.unbind("resize."+s);d.css({top:-9e4,left:-9e4});a=y.scrollTop();f=y.scrollLeft();if(O.fixed){u.top-=a;u.left-=f;d.css({position:"fixed"})}else{i=a;o=f;d.css({position:"absolute"})}if(O.right!==false){o+=Math.max(y.width()-O.w-P-_-G(O.right,"x"),0)}else if(O.left!==false){o+=G(O.left,"x")}else{o+=Math.round(Math.max(y.width()-O.w-P-_,0)/2)}if(O.bottom!==false){i+=Math.max(K()-O.h-D-M-G(O.bottom,"y"),0)}else if(O.top!==false){i+=G(O.top,"y")}else{i+=Math.round(Math.max(K()-O.h-D-M,0)/2)}d.css({top:u.top,left:u.left,visibility:"visible"});v[0].style.width=v[0].style.height="9999px";r={width:O.w+P+_,height:O.h+D+M,top:i,left:o};if(t){var c=0;e.each(r,function(e){if(r[e]!==V[e]){c=t;return}});t=c}V=r;if(!t){d.css(r)}d.dequeue().animate(r,{duration:t||0,complete:function(){l();I=false;v[0].style.width=O.w+P+_+"px";v[0].style.height=O.h+D+M+"px";if(O.reposition){setTimeout(function(){y.bind("resize."+s,U.position)},1)}if(n){n()}},step:l})};U.resize=function(e){var t;if(F){e=e||{};if(e.width){O.w=G(e.width,"x")-P-_}if(e.innerWidth){O.w=G(e.innerWidth,"x")}b.css({width:O.w});if(e.height){O.h=G(e.height,"y")-D-M}if(e.innerHeight){O.h=G(e.innerHeight,"y")}if(!e.innerHeight&&!e.height){t=b.scrollTop();b.css({height:"auto"});O.h=b.height()}b.css({height:O.h});if(t){b.scrollTop(t)}U.position(O.transition==="none"?0:O.speed)}};U.prep=function(n){function u(){O.w=O.w||b.width();O.w=O.mw&&O.mw<O.w?O.mw:O.w;return O.w}function a(){O.h=O.h||b.height();O.h=O.mh&&O.mh<O.h?O.mh:O.h;return O.h}if(!F){return}var r,o=O.transition==="none"?0:O.speed;b.empty().remove();b=J(z,"LoadedContent").append(n);b.hide().appendTo(w.show()).css({width:u(),overflow:O.scrolling?"auto":"hidden"}).css({height:a()}).prependTo(m);w.hide();e(j).css({"float":"none"});r=function(){function c(){if(e.support.opacity===false){d[0].style.removeAttribute("filter")}}var n=g.length,r,u="frameBorder",a="allowTransparency",l;if(!F){return}l=function(){clearTimeout(R);E.hide();nt(f,O.onComplete)};S.html(O.title).add(b).show();if(n>1){if(typeof O.current==="string"){x.html(O.current.replace("{current}",B+1).replace("{total}",n)).show()}N[O.loop||B<n-1?"show":"hide"]().html(O.next);C[O.loop||B?"show":"hide"]().html(O.previous);rt();if(O.preloading){e.each([Q(-1),Q(1)],function(){var n,r,s=g[this],o=e.data(s,i);if(o&&o.href){n=o.href;if(e.isFunction(n)){n=n.call(s)}}else{n=e(s).attr("href")}if(n&&Y(o,n)){n=Z(o,n);r=t.createElement("img");r.src=n}})}}else{L.hide()}if(O.iframe){r=J("iframe")[0];if(u in r){r[u]=0}if(a in r){r[a]="true"}if(!O.scrolling){r.scrolling="no"}e(r).attr({src:O.href,name:(new Date).getTime(),"class":s+"Iframe",allowFullScreen:true,webkitAllowFullScreen:true,mozallowfullscreen:true}).one("load",l).appendTo(b);A.one(h,function(){r.src="//about:blank"});if(O.fastIframe){e(r).trigger("load")}}else{l()}if(O.transition==="fade"){d.fadeTo(o,1,c)}else{c()}};if(O.transition==="fade"){d.fadeTo(o,0,function(){U.position(0,r)})}else{U.position(o,r)}};U.reload=function(){ut()};U.next=function(){if(!I&&g[1]&&(O.loop||g[B+1])){B=Q(1);it(g[B])}};U.prev=function(){if(!I&&g[1]&&(O.loop||B)){B=Q(-1);it(g[B])}};U.close=function(){if(F&&!q){q=true;F=false;nt(l,O.onCleanup);y.unbind("."+s);p.fadeTo(O.fadeOut||0,0);d.stop().fadeTo(O.fadeOut||0,0,function(){d.add(p).css({opacity:1,cursor:"auto"}).hide();nt(h);b.empty().remove();setTimeout(function(){q=false;nt(c,O.onClosed)},1)})}};U.remove=function(){if(!d){return}d.stop();e.colorbox.close();d.stop().remove();p.remove();q=false;d=null;e("."+o).removeData(i).removeClass(o);e(t).unbind("click."+s)};U.element=function(){return e(H)};U.settings=r})(jQuery,document,window)