//JavaScript Code
$(document).ready(function(){

    // //Active Scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', scrollActive);

    function scrollActive(){
        const scrollY = window.pageYOffset

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 85;
            sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.navbar-nav a[href*=' + sectionId + ']').classList.add('active')
            } else {
                document.querySelector('.navbar-nav a[href*=' + sectionId + ']').classList.remove('active')
            }
        })
    }

    //Scroll To Top
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 500) {
            $(".back-to-top").fadeIn(200);
        } else {
            $(".back-to-top").fadeOut(200);
        }
    })

    //Search Toggle Button
    $(function(){
        $('.toggle-overlay').click(function(){
            $('.search-overlay').toggleClass('open');
        })
    })

    //Menu Toggle Button
    $('.menu-toggle').click(function(){
        $('.menu-toggle').toggleClass('active');
    })

    //Filter Section
    $(".gallery-button").click(function () {
        var name = $(this).attr('data-filter');
        if (name == "all") {
            $(".shot-thumbnail").show('2000');
        } else {
            $(".shot-thumbnail").not("." + name).hide('2000');
            $(".shot-thumbnail").filter("." + name).show('2000');
        }
    })

    $('.navigation a').click(function(){
        $(this).addClass("active").siblings().removeClass('active');
    });



    //owl carousel
    $('#our-team').owlCarousel({
        loop:true,
        autoplay:true,
        margin:10,
        responsiveClass:true,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    }) 

     // Preloader
     $(window).on('load', function () {
        setTimeout(function () {
            $(".preloader").fadeOut('slow');
        }, 2000)
    });


 })
