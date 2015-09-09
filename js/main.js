$('.timer').countdown_sg(21);


$(".img-gallery").fancybox({
    "padding" : 0
});


//  слайдер

$('.reply').slick({
    arrows: false,
    autoplay: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.reply-nav.prev').click(function(){
    $('.reply').slick('slickPrev');
});

$('.reply-nav.next').click(function(){
    $('.reply').slick('slickNext');
});





$(document).ready(function() {
// Указываем переменные
    var accordion_head = $('.faq  li > .quest'),
        accordion_body = $('.faq li > .answer');

// Функция клика
    accordion_head.on('click', function(event) {
// Скрывает открытый раздел по повторному клику
        event.preventDefault();
        if ($(this).attr('class') == 'active'){
            $(this).removeClass('active');
            accordion_body.slideUp('normal');
            return false;
        }
// Открывает следующий, скрывая открытый
        if ($(this).attr('class') != 'active'){
            $(this).next().stop(true,true).slideToggle('normal');
            $(this).addClass('active');
        }
    });
});
