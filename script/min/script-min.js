$(document).ready(function(){function t(t){return'<img class="youtube-thumb" src="../img/youtube-thumb.jpg"><div class="play-button material-icons"></div>'}function e(){$(".spinner").show();var t=document.createElement("iframe");t.setAttribute("src","https://www.youtube.com/embed/"+this.parentNode.dataset.id+"?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=1&showinfo=0"),t.setAttribute("frameborder","0"),t.setAttribute("id","youtube-iframe"),this.parentNode.replaceChild(t,this),$("iframe").load(function(){$(".spinner").hide()})}!function(){for(var o=document.getElementsByClassName("youtube-player"),n=0;n<o.length;n++){var i=document.createElement("div");i.innerHTML=t(o[n].dataset.id),i.onclick=e,o[n].appendChild(i)}}(),$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")||location.hostname==this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html,body").animate({scrollTop:t.offset().top},1e3),!1}}),$(window).scroll(function(){var t=$(this).scrollTop();if(t>=$(window).height()&&$(window).width()>1249&&($(".logo svg").css({width:"9.375em",background:"none"}),$(".b").css({stroke:"#000000"}),$(".c").css({stroke:"#000000"})),t>$(".flex").offset().top-$(window).height()&&$(window).width()>769){var e=Math.min(0,t-$(".flex").offset().top+$(window).height()-400);$(".ramon").css({transform:"translate("+e+"px, 0px)"}),$(".mathis").css({transform:"translate("+Math.abs(e)+"px, 0px)"})}})}),$(".accordeon-link").click(function(){$(this).next("p").fadeToggle(),$(this).toggleClass("down")});