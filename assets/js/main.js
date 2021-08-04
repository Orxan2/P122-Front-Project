$(document).ready(function () {
    $('.product-card').each(function (index, element) {
        element = this;
        const stars = element.children[1].children[1].children[1];
        const image = element.children[0].children[0];
        console.log(image);
     
        $(element).on('mouseenter', function() {
            $(image).css('opacity','0');
            $(stars).css('animation','slide-up .3s');
            $(stars).css('opacity','1');

        });
        $(element).on('mouseleave', function() {
            $(image).css('opacity','1');
            $(stars).css('animation','slide-down .3s');
            $(stars).css('opacity','0');
        });
        
    });
    
   
});

