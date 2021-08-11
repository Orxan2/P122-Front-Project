$(document).ready(function () {



    $('.product-card').each(function (index, element) {
        element = this;
        const stars = element.children[1].children[1].children[1];
        const image = element.children[0].children[0];
        const basket = element.querySelector('.addbasket');
        $(element).on('mouseenter', function () {
            $(image).css('opacity', '0');
            $(stars).css('animation', 'slide-up .3s');
            $(stars).css('opacity', '1');
            $(basket).css('animation', 'slide-up .3s');
            $(basket).css('opacity', '1');

        });
        $(element).on('mouseleave', function () {
            $(image).css('opacity', '1');
            $(stars).css('animation', 'slide-down .3s');
            $(stars).css('opacity', '0');
            $(basket).css('animation', 'slide-down .3s');
            $(basket).css('opacity', '0');
        });

    });

    $('footer .myList>a.btn').each(function (index, element) {
        element = this;
        const plus = $(element).children()[0];
        const minus = $(element).children()[1];

        $(element).on('click', function () {

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



    //basket
    $('.addbasket > a').each(function (index, element) {
        element = this;


        $(element).on('click', () => {
            let productDatas = JSON.parse(localStorage.getItem('product'));
            let productCount = $('header .quantity');
            let totalPrice = document.querySelector('.mymodal .total-price');
            let sum = 0;
            // productCount.css('display', 'block');

            let product = {
                id: index + 1,
                name: $(element).parent().parent().next().children()[0].innerText,
                quantity: 1,
                price: parseFloat($(element).parent().parent().next().children()[1].children[0].innerText.replace("$", "")),
                path: $(element).parent().parent().children()[0].getAttribute('src')
            }
            if (productDatas == null) {
                productDatas = [];
                productDatas.push(product);
                console.log(productDatas);
                localStorage.setItem('product', JSON.stringify(productDatas));
                $(productCount).val(productDatas.length);
            }
            else {

                if (productDatas.find(x => x.id == (index + 1))) {
                    alert('the product is already on the cart');
                    return;
                }
                else {
                    productDatas.push(product);
                    console.log(productDatas);
                    localStorage.setItem('product', JSON.stringify(productDatas));
                }
            }
            console.log(productCount[0]);
            productCount[0].innerHTML = productDatas.length;

            $(productDatas).each(function (index, element) {
                const modalBody = document.querySelector('.mymodal .mymodal-body');
                const modalProduct = document.createElement('div');
                const modalImageBox = document.createElement('div');
                const modalImage = document.createElement('img');
                const mymodalText = document.createElement('div');
                const mymodalTitle = document.createElement('a');
                const mymodalQuantity = document.createElement('h6');
                const mymodalPrice = document.createElement('h6');

                $(modalProduct).addClass('mymodal-product');
                $(modalImageBox).addClass('mymodal-image');
                $(modalImage).addClass('h-100');
                $(mymodalText).addClass('mymodal-text');
                $(mymodalText).addClass('mx-3');
                $(mymodalTitle).addClass('btn');
                $(mymodalTitle).addClass('mymodal-title');
                $(mymodalQuantity).addClass('mymodal-quantity');
                $(mymodalPrice).addClass('mymodal-price');

                mymodalTitle.innerText = element.name;
                mymodalQuantity.innerText = `quantity : ${element.quantity}`;
                mymodalPrice.innerText = `$${element.price.toFixed(2)}`;
                $(modalImage).attr('src', element.path);



                $(mymodalTitle).appendTo(mymodalText);
                $(mymodalQuantity).appendTo(mymodalText);
                $(mymodalPrice).appendTo(mymodalText);
                $(modalImage).appendTo(modalImageBox);

                $(modalImageBox).appendTo(modalProduct);
                $(mymodalText).appendTo(modalProduct);

                $(modalProduct).appendTo(modalBody);

                sum += element.price;
            })

            //   console.log(productDatas.);
            console.log(totalPrice);
            totalPrice.innerHTML = `$${sum.toFixed(2)}`;


        });

    });

    // parallax 
    window.addEventListener('scroll', function (params) {

        $('.myparallax').css('transform', `translate3d(0,${-window.scrollY}px,0)`);
        $('.myparallax img').css('transform', `translate3d(0,${window.scrollY/2}px,0)`);
        
       

    });

    // products animation
    window.addEventListener('scroll', function (params) {

        $('section#products .product-card').each(function (index, element) {
            element = this;

            if (window.scrollY >= $(element).offset().top - $(element).height()) {
                $(element).css('animation-play-state', 'unset');
            }
        });

        $('section#blog-cards .blog-card').each(function (index, element) {
            element = this;

            if (window.scrollY >= $(element).offset().top - $(element).height() * 1.5) {
                $(element).css('animation-play-state', 'unset');
            }
        });
    });  

//header menu click width < 992px
$('header .menu-icon').on('click',function(){ 
    if ($(window).width() < 992)
  {
    $('header .myDropdownList').slideToggle(300);

    setTimeout(() => {  
        if (document.querySelector('header').getAttribute('data-position') == 'absolute') {
            if (document.querySelector('header').getAttribute('data-page') == 'index') {
                if (document.querySelector('header').style.position == 'relative') {
                    $('header').css('position','absolute');
                }
                else {
                    $('header').css('position','relative'); 
                } 
            }
            else{
                if (document.querySelector('header').style.backgroundColor == 'white')  
            {
                $('header').css('background','transparent'); 
            }
            else  
            {
                $('header').css('background-color','white'); 
            } 
            }    
        }         
             
 }, 150);

 }
    
});

//header menu click width > 992px
 $('.menu-icon').on('click', function (params) {
   if ($(window).width() >= 992) {
    $('.mymodal2').show();
    $('body').css('overflow', 'hidden');
    let right = $('.mymodal2-dialog').position().left - $('.mymodal2-dialog').width() + 'px';
    $('.mymodal2-dialog').css('left', right);
   }  
});


$('.mymodal2-header a.btn').on('mouseenter', function (params) {
    $(this).css('color', '#000');
    $(this).css('transform', 'rotate(90deg)');

});

$('.mymodal2-header a.btn').on('mouseleave', function (params) {
    $(this).css('color', '#adb5bd');
    $(this).css('transform', 'rotate(0)');
});
$('.mymodal2-header .fa-times').on('click', function (params) {
    $('.mymodal2-dialog').css('left', '100%');
    $('body').css('overflow', 'scroll');

    setTimeout(() => {
        $('.mymodal2').hide();
    }, 300);
});
$('.mymodal2__dropdown').on('click',()=>{
   
    if (document.querySelector('.mymodal2__dropdown-menu').style.display == 'none') {
        $('.mymodal2__dropdown i').css('transform','rotate(-180deg)');
    } 
    else {
        $('.mymodal2__dropdown i').css('transform','rotateX(0)');
    }
    
    $('.mymodal2__dropdown-menu').slideToggle('fast');
});
})

