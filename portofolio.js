$(document).ready(function () {
    // Smooth scrolling untuk navigasi
    $('nav a').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    });

    // Animasi fade-in untuk setiap section
    $(window).on('scroll', function () {
        $('.section').each(function () {
            if ($(window).scrollTop() + $(window).height() > $(this).offset().top + 100) {
                $(this).addClass('fade-in');
            }
        });
    });

    // Formulir kontak
    $("#contactForm").on("submit", function (event) {
        event.preventDefault();
        alert("Pesan berhasil dikirim!");
    });
});

$(document).ready(function () {
    // Smooth scrolling untuk navigasi
    $('nav a').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    });

    // Animasi fade-in untuk setiap section
    $(window).on('scroll', function () {
        $('.section').each(function () {
            if ($(window).scrollTop() + $(window).height() > $(this).offset().top + 100) {
                $(this).addClass('fade-in');
            }
        });
    });

    // Formulir kontak
    $("#contactForm").on("submit", function (event) {
        event.preventDefault();
        alert("Pesan berhasil dikirim!");
    });

    // Efek hover untuk ikon media sosial
    $(".social-icon").hover(
        function () {
            $(this).find("img").css("filter", "brightness(1.5)");
        },
        function () {
            $(this).find("img").css("filter", "brightness(1)");
        }
    );
});

