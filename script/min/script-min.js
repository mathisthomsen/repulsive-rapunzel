$(document).ready(function(){function t(t){return'<img class="youtube-thumb" src="http://img.youtube.com/vi/'+t+'/maxresdefault.jpg"><div class="play-button material-icons"></div>'}function e(){var t=document.createElement("iframe");t.setAttribute("src","https://www.youtube.com/embed/"+this.parentNode.dataset.id+"?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=0&showinfo=0"),t.setAttribute("frameborder","0"),t.setAttribute("id","youtube-iframe"),this.parentNode.replaceChild(t,this)}!function(){for(var i=document.getElementsByClassName("youtube-player"),a=0;a<i.length;a++){var r=document.createElement("div");r.innerHTML=t(i[a].dataset.id),r.onclick=e,i[a].appendChild(r)}}(),function($){"use strict";$.fn.fitVids=function(t){var e={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var i=document.head||document.getElementsByTagName("head")[0],a=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",r=document.createElement("div");r.innerHTML='<p>x</p><style id="fit-vids-style">'+a+"</style>",i.appendChild(r.childNodes[1])}return t&&$.extend(e,t),this.each(function(){var t=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];e.customSelector&&t.push(e.customSelector);var i=".fitvidsignore";e.ignore&&(i=i+", "+e.ignore);var a=$(this).find(t.join(","));a=a.not("object object"),a=a.not(i),a.each(function(t){var e=$(this);if(!(e.parents(i).length>0||"embed"===this.tagName.toLowerCase()&&e.parent("object").length||e.parent(".fluid-width-video-wrapper").length)){e.css("height")||e.css("width")||!isNaN(e.attr("height"))&&!isNaN(e.attr("width"))||(e.attr("height",9),e.attr("width",16));var a="object"===this.tagName.toLowerCase()||e.attr("height")&&!isNaN(parseInt(e.attr("height"),10))?parseInt(e.attr("height"),10):e.height(),r=isNaN(parseInt(e.attr("width"),10))?e.width():parseInt(e.attr("width"),10),o=a/r;if(!e.attr("id")){var n="fitvid"+t;e.attr("id",n)}e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*o+"%"),e.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto),$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")||location.hostname==this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html,body").animate({scrollTop:t.offset().top},1e3),!1}}),$(window).scroll(function(){var t=$(this).scrollTop();if(t<=$("#start").height()&&$(window).width()>374&&($(".logo").css({transform:"translate(0px, "+t/9+"%)",opacity:.6-t/700}),$(".rapunzel").css({transform:"translate(0px, "+t/.9+"%)"}),$(".dig").css({opacity:1-t/300})),t>$(".flex").offset().top-$(window).height()&&$(window).width()>769){var e=Math.min(0,t-$(".flex").offset().top+$(window).height()-400);$(".ramon").css({transform:"translate("+e+"px, 0px)"}),$(".mathis").css({transform:"translate("+Math.abs(e)+"px, 0px)"})}})});