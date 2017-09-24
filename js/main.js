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
});