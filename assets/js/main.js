$(document).ready(function () {
    $('.product-card').each(function (index, element) {
        element = this;
        const stars = element.children[1].children[1].children[1];
        const image = element.children[0].children[0];

        $(element).on('mouseenter', function () {
            $(image).css('opacity', '0');
            $(stars).css('animation', 'slide-up .3s');
            $(stars).css('opacity', '1');

        });
        $(element).on('mouseleave', function () {
            $(image).css('opacity', '1');
            $(stars).css('animation', 'slide-down .3s');
            $(stars).css('opacity', '0');
        });

    });

    $('footer .myList>a.btn').each(function (index, element) {
        element = this;
        const plus = $(element).children()[0];
        const minus = $(element).children()[1];

        $(element).on('click', function () {
            console.log();

            $(element).next().slideToggle("slow");

            if (minus.style.opacity == '1') {
                minus.style.opacity = '0'
                plus.style.opacity = '1'
                $(minus).removeClass('mycollapse');
                $(plus).removeClass('mycollapse');


            }
            else {
                plus.style.opacity = '0'
                minus.style.opacity = '1'
                $(plus).addClass('mycollapse');
                $(minus).addClass('mycollapse');

            }
        });
    });

    $('#orxan').on('click', function (params) {
        $('.mymodal').show();
        $('body').css('overflow', 'hidden');
        let right = $('.mymodal-dialog').position().left - $('.mymodal-dialog').width() + 'px';
        $('.mymodal-dialog').css('left', right);


    });

    $('.mymodal-header .fa-times').on('click', function (params) {
        $('.mymodal-dialog').css('left', '100%');
        $('body').css('overflow', 'scroll');

        setTimeout(() => {
            $('.mymodal').hide();
        }, 300);

    });

    $('.mymodal-header a.btn').on('mouseenter', function (params) {
        $(this).css('color', '#000');
        $(this).css('transform', 'rotate(90deg)');

    });
    $('.mymodal-header a.btn').on('mouseleave', function (params) {
        $(this).css('color', '#adb5bd');
        $(this).css('transform', 'rotate(0)');
    });

});

