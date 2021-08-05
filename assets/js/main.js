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
          

            // $(minus).css('transform','rotate(90deg)');
            // $(plus).css('transform','rotate(90deg)');
            if (minus.style.display == 'block') {
                minus.style.display = 'none'
                plus.style.display = 'block'
               
            }
            else {
                plus.style.display = 'none'
                minus.style.display = 'block'
               
            }
        });
    });
});

