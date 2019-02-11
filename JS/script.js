$(window).on("load", function () {
    $(".loader .inner").fadeOut(500, function () {
        $(".loader").fadeOut(750);
    });

});


$(document).ready(function () {
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Front End Web Developer"],
        typeSpeed: 85,
        loop: true,
        startDelay: 800,
        showCursor: false,
        backDelay: 200,
        backSpeed: 40,
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            938: {
                items: 4
            }
        }
    });



    var skillsTopOffest = $(".skillsSection").offset().top;
    var statsTopOffest = $(".statsSection").offset().top;
    var countUpFinished = false;

    $(window).scroll(function () {

        if (window.pageYOffset > skillsTopOffest - $(window).height() + 200) {

            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: "#fff",
                trackColor: false,
                scaleColor: false,
                linewidth: 4,
                size: 152,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });

        }







        if (!countUpFinised && window.pageYOffset > statsTopOffest - $(window).height() + 200) {
            $(".counter").each(function () {
                var element = $(this);
                var endVal = parseInt(element.text());

                element.countup(endval);
            })

            countUpFinised = true;

        }
    });

    // $("[data-fancybox]").fancybox();

    // $(".items").isotope({
    //     filter: '*',
    //     animationOptions: {
    //         duration: 1500,
    //         easing: 'linear',
    //         queue: false
    //     }

    // });
    $("#navigation li a").click(function (e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPostion = $(targetElement).offset().top;
        $("html, body").animate({
            scrollTop: targetPostion - 50
        }, "slow");
    });





    // const nav = $("#navigation");
    // const navTop = nav.offset().top;

    // $(window).on("scroll", stickyNavigation);

    // function stickyNavigation() {

    //     var body = $("body");

    //     if($(window).scrollTop() >= navTop) {
    //         body.addClass("fixedNav");
    //     }
    //     else {
    //         body.removeClass("fixedNav");
    //     }


    // }



});
