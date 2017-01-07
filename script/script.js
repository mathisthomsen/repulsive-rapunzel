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
        return '<img class="youtube-thumb" src="../img/youtube-thumb.jpg"><div class="play-button material-icons"></div>';
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
            }, 1000);
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


//Accordeon=============================

     $( ".accordeon-link" ).click(function() {
       $(this).next("p").fadeToggle();
       $(this).toggleClass("down");
    });
});

//Map================================

    var map;
    var center = {lat: 50.73743, lng: 7.0982068};
    var zoom = 11;
    var koorLav = {lat: 50.7372326, lng: 7.085939000000053};
    var koorSession={lat: 50.73280150000001, lng: 7.099229100000002};
    function initMap() {
        var mapOptions = {
            zoom: zoom,
            center: center,
            disableDefaultUI: true,
            draggable: true,
            zoomControl: true,
            scrollwheel: true,
            styles : [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]
        };
        map = new google.maps.Map(document.getElementById('map'),
        mapOptions);
        var image = 'img/map-loc.png';

        //Setting InfoWindows
        var infoTextSession = '<h3 class="info">Session</h3>' + '<p>Am Bahnhof 666</p>' + '<a href="https://maps.google.com" target="_blank">Route planen</a>';
        var infowindowSession = new google.maps.InfoWindow({
            content: infoTextSession
          });
        var infoTextLaVictoria = '<h3>La Victoria</h3>' + '<p>Bornheimer Str. 666</p>' + '<a href="https://maps.google.com" target="_blank">Route planen</a>';
        var infowindowLaVictoria = new google.maps.InfoWindow({
              content: infoTextLaVictoria
        });

        //Marker Session
        var markerSession = new google.maps.Marker({
            position: koorSession,
            map: map,
            title: 'Session',
            icon: image
         });
        markerSession.addListener('click', function() {
            infowindowSession.open(map, markerSession);
            map.setZoom(14);
            map.setCenter(markerSession.getPosition());
        });

        //Marker La Victoria
        var markerLaVictoria = new google.maps.Marker({
            position: koorLav,
            map: map,
            title: 'La Victoria',
            icon: image
            });
        markerLaVictoria.addListener('click', function() {
            infowindowLaVictoria.open(map, markerLaVictoria);
            map.setZoom(14);
            map.setCenter(markerLaVictoria.getPosition());
        });

        //Add Link
        $('#session').click(function(){
            infowindowSession.open(map, markerSession);
            map.setZoom(14);
            map.setCenter(markerSession.getPosition());
        });

        $('#laVictoria').click(function(){
            infowindowLaVictoria.open(map, markerLaVictoria);
            map.setZoom(14);
            map.setCenter(markerLaVictoria.getPosition());
        });
    }


//Map-Links============================
