/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* 
 VIEWS DEVICE
 */
$(document).ready(function () {
    $(".featurette ol li:nth-child(1)").click(function () {
        $('.featurette-image.1').addClass('visible').removeClass('hidden');
        $('.featurette-image.2, .featurette-image.3').addClass('hidden');
        $('.featurette ol li:nth-child(1)').addClass('active');
        $('.featurette ol li:nth-child(2), .featurette ol li:nth-child(3)').removeClass('active');
        return false;
    });
    $(".featurette ol li:nth-child(2)").click(function () {
        $('.featurette-image.2').addClass('visible').removeClass('hidden');
        $('.featurette-image.1, .featurette-image.3').addClass('hidden');
        $('.featurette ol li:nth-child(2)').addClass('active');
        $('.featurette ol li:nth-child(1), .featurette ol li:nth-child(3)').removeClass('active');
        return false;
    });
    $(".featurette ol li:nth-child(3)").click(function () {
        $('.featurette-image.3').addClass('visible').removeClass('hidden');
        $('.featurette-image.2, .featurette-image.1').addClass('hidden');
        $('.featurette ol li:nth-child(3)').addClass('active');
        $('.featurette ol li:nth-child(1), .featurette ol li:nth-child(2)').removeClass('active');
        return false;
    }); /* 
     END VIEWS DEVICE
     */

    /* 
     ALTURA DO BANNER
     */

    var altura_tela = $(window).height();/*cria variável com valor do altura da janela*/
    $("#myCarousel, .carousel .item").height(altura_tela); /* aplica a variável a altura da div*/
    $(window).resize(function () {
        var altura_tela = $(window).height();
        $("#myCarousel, .carousel .item").height(altura_tela);
    });

    /* 
     END ALTURA DO BANNER
     */

    /* 
     SCROLL SMOOTH
     */

    +function ($) {
        'use strict';
// spy and scroll menu boogey
        $(".navbar-nav li a[href^='#'], p.lead a, #specification p a, #works a, .navbar-header a").on('click', function (e) {
// prevent default anchor click behavior
            e.preventDefault();
// store hash
            var hash = this.hash;
// animate
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 69
            }, 1000, function () {
                window.location.hash = hash - 69;
            })

        })

    }(jQuery);
    /* 
     ANIMATION MENU
     */
    $(window).scroll(function () {
        //variavel semi-global
        var hScrollTop = $(this).scrollTop();
        var go = true;
        //Menu Fixo: barra cinza
        if (hScrollTop > 10 && go) {
            $(".navbar-wrapper").stop().animate({
                "font-size": "1em",
                height: "70px"}, "fast");
            $(".navbar-header img").stop().animate({
                width: "70px"}, "fast");
            $(".navbar-collapse").stop().animate({"margin-top": "10px"}, "fast");
            go = false;
        }
        else if (hScrollTop < 10 && go) {
            $(".navbar-wrapper").stop().animate({
                "font-size": "1.25em",
                height: "90px"}, "fast");
            $(".navbar-header img").stop().animate({
                width: "90px"}, "fast");
            $(".navbar-collapse").stop().animate({"margin-top": "20px"}, "fast");

            go = true;
        }
    });

});



