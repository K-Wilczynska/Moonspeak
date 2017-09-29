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

});