$(document).ready(function() {


    // adjusting height of the navbar

    if(window.matchMedia("(min-width: 768px)").matches){

        $(window).on("scroll", function(){

            var wScroll = $(this).scrollTop();

            if (wScroll > 55){
                $("#navbar-wrapper").css({
                    "height": "60px"
                })
            }
            else{
                $("#navbar-wrapper").css({
                    "height": "180px"
                })
            }
        });
    }

// navigation smooth scroll

    $(".menu-item").find("a").on("click", function(e){

        var $href = $(this).attr('href');
        var $anchor = $($href).offset().top;
        $('html, body').animate({
            scrollTop: $anchor
        },1000);
    });

    $(".logo, .logo-mobile").on("click", function(){
        $('html, body').animate({
            scrollTop: 0
        },1000)

    });

// google map

    $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCyRoTT8eBgjEA-gdiQhkXb0Gkemh9pRGU", function(){

        initMap();
    });

    function initMap() {
        var seattle = {lat: 47.621487, lng: -122.348125};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 14,
            center: seattle
        });
        var marker = new google.maps.Marker({
            position: seattle,
            map: map
        });
    }

});