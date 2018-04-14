//YOUTUBE===================================

$(document).ready(function(){
    (function() {
    var v = document.getElementsByClassName("youtube-player");
    for (var n = 0; n < v.length; n++) {
        var p = document.createElement("div");
        p.innerHTML = labnolThumb(v[n].dataset.id);
        p.onclick = labnolIframe;
        v[n].appendChild(p);
    }
    })();

    function labnolThumb(id) {
        return '<img class="youtube-thumb" src="../img/youtube-thumb-preload.jpg">';
    }

    function labnolIframe() {
        $('.spinner').show();
        var iframe = document.createElement("iframe");
        iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.parentNode.dataset.id + "?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=1&showinfo=0");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("id", "youtube-iframe");
        this.parentNode.replaceChild(iframe, this);
        $( "iframe" ).load(function() {
            $('.spinner').hide();
        });

    }


    //SCROLLING==================================


   $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 600);
            return false;
        }
    }
    });


//PARALLAX=============================

    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        if(wScroll >= $(window).height() && $(window).width() > 1249){
            $('.logo svg').css({
                'width' : '9.375em', 'background' : 'none'
            });
            $('.b').css({
                'stroke' : '#000000'
            });
            $('.c').css({
                'stroke' : '#000000'
            });
        }

        if(wScroll > $('.flex').offset().top - $(window).height() && $(window).width() > 769){

            var offset = Math.min(0, wScroll - $('.flex').offset().top + $(window).height() - 400);

            $('.ramon').css({
                'transform' : 'translate(' + offset + 'px, 0px)'
            });

            $('.mathis').css({
                'transform' : 'translate(' + Math.abs(offset) + 'px, 0px)'
            });

        }
    });

//Lazy-Loading============================


    var my_image = new Image();
    my_image.src = '../img/background_1.jpg';

    function notify_complete()
    {
        console.log('The image has been loaded into the browser cache.');
    }

    my_image.onload = function(){
        notify_complete;
        $("header").css({
            "background-image" : "url('../img/background_1.jpg')"
        });
    };

    //youtube thumb
    $(window).scroll(function(event){
        var wScroll = $(this).scrollTop();
        if(wScroll >=10){
            console.log('Height: video');
            $('.spinner').show();
            var my_youtube_image = new Image();
            my_youtube_image.src = '../img/youtube-thumb.jpg';
            my_youtube_image.onload = function(){
                $('.youtube-thumb').attr('src','/img/youtube-thumb.jpg');
                $('.youtube-thumb').after('<div class="play-button material-icons"></div>')
                $('.spinner').hide();
            };

            $(this).off(event);
        };
    });

    //gallery
    $(window).scroll(function(event){
        var wScroll = $(this).scrollTop();
        if(wScroll >= $('#event').offset().top - $(window).height()){
            console.log('Height: event');
            $('.gallery').children().each(function() {
                var pic = $(this).children().attr("id");
                $(this).children().attr('src','/img/gallery/' + pic + '.jpg')
                console.log(pic);
            });
            $(this).off(event);
        };
    });

    //maps
    $(window).scroll(function(event){
        var wScroll = $(this).scrollTop();
        if(wScroll >= $('#video').offset().top - $(window).height()){
            console.log('Height: Event');
            $('body').append('<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCL29v-kehD_tbzAn3yIHpZh0Xpha6cW7A&callback=initMap"></script>')

            $(this).off(event);
        };
    });

});



//window.onload = function() {
    //$('body').append('<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCL29v-kehD_tbzAn3yIHpZh0Xpha6cW7A&callback=initMap"></script>')
//};
