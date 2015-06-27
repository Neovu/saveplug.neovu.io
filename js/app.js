function loadBundles(lang) {
    $.i18n.properties({
        name: 'Messages',
        path: 'bundle/',
        mode: 'both',
        language: lang,
        callback: function () {
            $.get("bundle/Messages.properties", function (data) {
                var items = data.split('\n');
                $(items).each(function (index, element) {
                    var ele = element.split('=');
                    $("." + ele[0]).text(ele[1]);

                });
            });
        }
    });
}


$(document).ready(function () {

    //loadBundles($.i18n.browserLang());
    loadBundles("pt_PT");

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
    });

    $(".follow").mouseover(function () {
        $(".img-follow").addClass("visible").removeClass("hidden");
        $(".img-standard").addClass("hidden").removeClass("visible");

    });
    $(".follow").mouseout(function () {
        $(".img-follow").addClass("hidden").removeClass("visible");
        $(".img-standard").addClass("visible").removeClass("hidden");
    });

    $(".notification").mouseover(function () {
        $(".img-notification").addClass("visible").removeClass("hidden");
        $(".img-standard").addClass("hidden").removeClass("visible");

    });
    $(".notification").mouseout(function () {
        $(".img-notification").addClass("hidden").removeClass("visible");
        $(".img-standard").addClass("visible").removeClass("hidden");
    });

    $(".manage").mouseover(function () {
        $(".img-manage").addClass("visible").removeClass("hidden");
        $(".img-standard").addClass("hidden").removeClass("visible");

    });
    $(".manage").mouseout(function () {
        $(".img-manage").addClass("hidden").removeClass("visible");
        $(".img-standard").addClass("visible").removeClass("hidden");
    });

    $(".open-saveflow").click(function () {
        $('#saveflow').addClass('visible').removeClass('hidden');
        return false;
    });

    $(".close-saveflow").click(function () {
        $('#saveflow').addClass('hidden').removeClass('visible');
        return false;
    });

    var altura_tela = $(window).height();/*cria variável com valor do altura da janela*/
    $("#video-save").height(altura_tela); /* aplica a variável a altura da div*/
    $(window).resize(function () {
        var altura_tela = $(window).height();
        $("#video-save").height(altura_tela);
    });

    $(".navbar-nav li a[href^='#'], p.lead a, #specification p a, .value2 a, .navbar-header a, .open-saveflow, #saveflow a").on('click', function (e) {
        e.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 69
        }, 1000, function () {
            window.location.hash = hash - 69;
        });

    });

    $('#contact-button').click(function (e) {
        e.preventDefault();
        var submitData = $('#contact-form').serialize();
        var $name = $('#contact-form').find('input[name="name"]');
        var $email = $('#contact-form').find('input[name="email"]');
        var $subject = $('#contact-form').find('textarea[name="subject"]');
        var $message = $('#contact-form').find('textarea[name="message"]');
        var $submit = $('#contact-form').find('button[name="submit"]');
        var $dataStatus = $('#contact-form').find('.data-status');

        $name.attr('disabled', 'disabled');
        $email.attr('disabled', 'disabled');
        $subject.attr('disabled', 'disabled');
        $message.attr('disabled', 'disabled');
        $submit.attr('disabled', 'disabled');

        $dataStatus.show().html('<div class="alert alert-info"><strong>Sending...</strong></div>');
        console.log("clie de mail" + submitData);

        $.ajax({
            type: 'POST',
            url: '/mail/send_mail.php',
            data: submitData + '&action=add',
            dataType: 'text',
            success: function (msg) {
                var msg_split = msg.split('|');
                if (msg_split[0] === 'success') {
                    $name.val('').removeAttr('disabled');
                    $email.val('').removeAttr('disabled');
                    $subject.val('').removeAttr('disabled');
                    $message.val('').removeAttr('disabled');
                    $submit.removeAttr('disabled');
                    $dataStatus.html(msg_split[1]).fadeIn();
                } else {
                    $name.removeAttr('disabled');
                    $email.removeAttr('disabled');
                    $subject.removeAttr('disabled');
                    $message.removeAttr('disabled');
                    $submit.removeAttr('disabled');
                    $dataStatus.html(msg_split[1]).fadeIn();
                }

            }
        });

    });

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

    // configure language combo box
    $('#sidebar').change(function () {
        var selection = $('#sidebar option:selected').val();
        loadBundles(selection !== 'browser' ? selection : $.i18n.browserLang());

    });


});

(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-40632331-3', 'auto');
ga('send', 'pageview');