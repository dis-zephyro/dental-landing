$('.timer').countdown_sg(21);


$(".img-gallery").fancybox({
    "padding" : 0
});


$(".certification li a").fancybox({
    "padding" : 0
});


$(".btn-popup").fancybox({
    'padding' : 0,
    'closeBtn' : false
});

$('.btn-close').click(function(){
    $.fancybox.close();
});

$('.close-link').click(function(){
    $.fancybox.close();
});

//  �������

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


$('.certification ul').slick({
    dots: false,
    speed: 300,
    infinite: true,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1249,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});



// ���������� ������-�����

ymaps.ready(init);

var myMap,
    myPlacemark;

function init(){
    myMap = new ymaps.Map("map", {
        center: [55.8118,37.7830],
        zoom: 13,
        controls: ['smallMapDefaultSet']
    });

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: '��� ���������'
    }, {
        // �����.
        // ���������� ������� ������ ��� ������.
        iconLayout: 'default#image',
        // ��� ����������� ������ �����.
        iconImageHref: 'img/placemark.png',
        // ������� �����.
        iconImageSize: [120, 128],
        // �������� ������ �������� ���� ������ ������������
        // � "�����" (����� ��������).
        iconImageOffset: [-60, -100]
    });

    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(myPlacemark);
}



$(document).ready(function() {
// ��������� ����������
    var accordion_head = $('.faq  li > .quest'),
        accordion_body = $('.faq li > .answer');

// ������� �����
    accordion_head.on('click', function(event) {
// �������� �������� ������ �� ���������� �����
        event.preventDefault();
        if ($(this).attr('class') == 'active'){
            $(this).removeClass('active');
            accordion_body.slideUp('normal');
            return false;
        }
// ��������� ���������, ������� ��������
        if ($(this).attr('class') != 'active'){
            $(this).next().stop(true,true).slideToggle('normal');
            $(this).addClass('active');
        }
    });
});
