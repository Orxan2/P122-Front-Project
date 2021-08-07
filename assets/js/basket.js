$(document).ready(function () {
    let products = JSON.parse(localStorage.getItem('product'));

    $(products).each(function (index, element) {
        element = this;


        const productItem = document.createElement('div');
        const firstRow = document.createElement('div');
        const leftside = document.createElement('div');
        const main = document.createElement('div');
        const imageBox = document.createElement('div');
        const imageAnchor = document.createElement('a');
        const image = document.createElement('img');
        const productName = document.createElement('div');
        const nameAnchor = document.createElement('a');
        const AlternativeCloseBtn = document.createElement('a');
        const AlternativeCloseIcon = document.createElement('i');
        const righside = document.createElement('div');
        const details = document.createElement('div');
        const secondRow = document.createElement('div');
        const priceBox = document.createElement('div');
        const price = document.createElement('p');
        const alternativePriceBox = document.createElement('div');
        const PricePerItem = document.createElement('p');
        const alternativePrice = document.createElement('p');
        const quantityBox = document.createElement('div');
        const quantity = document.createElement('p');
        const alternativeQuantityBox = document.createElement('div');
        const minus = document.createElement('a');
        const quantityInput = document.createElement('input');
        const plus = document.createElement('a');        
        const totalPriceBox = document.createElement('div');
        const totalPrice = document.createElement('p');        
        const alternativeTotalPriceBox = document.createElement('div');
        const totalPriceTitle = document.createElement('p');
        const alternativeTotalPrice = document.createElement('p');
        const CloseBox = document.createElement('div');
        const closeBtn = document.createElement('a');
        const closeIcon = document.createElement('i');

        $(productItem).addClass('product-cart__item');
        $(firstRow).addClass('row');
        $(firstRow).addClass('align-items-center');
        $(leftside).addClass('col-12');
        $(leftside).addClass('col-md-5');
        $(main).addClass('main-box');
        $(main).addClass('justify-content-between');
        $(main).addClass('justify-content-md-start');
        $(imageBox).addClass('main-box__image');
        $(imageAnchor).addClass('btn');
        $(image).attr('width','75');
        $(image).attr('height','75');
        $(image).attr('src',element.path);
        $(productName).addClass('main-box__text');
        $(productName).addClass('mx-3');
        $(nameAnchor).addClass('btn');
        $(nameAnchor).addClass('main-box__title');
        $(nameAnchor).addClass('mx-3');
        $(AlternativeCloseBtn).addClass('btn');
        $(AlternativeCloseBtn).addClass('close-alternative');
        $(AlternativeCloseBtn).addClass('d-md-none');
        $(AlternativeCloseIcon).addClass('fas');
        $(AlternativeCloseIcon).addClass('fa-times');
        $(righside).addClass('col-12');
        $(righside).addClass('col-md-7');
        $(details).addClass('details');
        $(secondRow).addClass('row');
        $(priceBox).addClass('col-12');
        $(priceBox).addClass('col-md-3');
        $(priceBox).addClass('d-md-flex');
        $(priceBox).addClass('justify-content-center');
        $(priceBox).addClass('align-items-center');
        $(price).addClass('price');
        $(price).addClass('d-none');
        $(price).addClass('d-md-block');
        $(price).addClass('mb-0');
        $(price).addClass('text-center');
        $(price).addClass('fw-bold');
        $(price).addClass('justify-content-center');
        $(alternativePriceBox).addClass('price-alternative');
        $(alternativePriceBox).addClass('d-flex');
        $(alternativePriceBox).addClass('justify-content-between');
        $(alternativePriceBox).addClass('d-md-none');
        $(alternativePriceBox).addClass('align-items-center');
        $(PricePerItem).addClass('text-muted');
        $(alternativePrice).addClass('fw-bold');
        $(quantityBox).addClass('col-12');
        $(quantityBox).addClass('col-md-4');
        $(quantityBox).addClass('d-flex');
        $(quantityBox).addClass('py-3');
        $(quantityBox).addClass('d-md-block');
        $(quantityBox).addClass('justify-content-between');
        $(quantity).addClass('text-muted');
        $(quantity).addClass('d-md-none');
        $(quantity).addClass('py-2');
        $(quantity).addClass('mb-0');
        $(alternativeQuantityBox).addClass('counter');
        $(alternativeQuantityBox).addClass('d-flex');
        $(minus).addClass('btn');
        $(quantityInput).addClass('form-control');
        $(quantityInput).addClass('text-center');
        $(quantityInput).addClass('bg-dark');
        $(quantityInput).addClass('text-light');
        $(quantityInput).attr('type','text');
        $(quantityInput).attr('disabled','true');
        $(plus).addClass('btn');
        $(plus).addClass('pe-0');
        $(totalPriceBox).addClass('col-12');
        $(totalPriceBox).addClass('col-md-3');     
        $(totalPriceBox).addClass('d-md-flex');
        $(totalPriceBox).addClass('justify-content-center');
        $(totalPriceBox).addClass('align-items-center');
        $(totalPrice).addClass('total-price');
        $(totalPrice).addClass('d-none');
        $(totalPrice).addClass('d-md-block');
        $(totalPrice).addClass('mb-0');
        $(totalPrice).addClass('text-center');
        $(totalPrice).addClass('fw-bold');   
        $(alternativeTotalPriceBox).addClass('total-price-alternative');
        $(alternativeTotalPriceBox).addClass('d-flex');
        $(alternativeTotalPriceBox).addClass('align-items-center');
        $(alternativeTotalPriceBox).addClass('justify-content-between');
        $(alternativeTotalPriceBox).addClass('d-md-none');
        $(totalPriceTitle).addClass('text-muted');
        $(alternativeTotalPrice).addClass('fw-bold');
        $(CloseBox).addClass('col-2');
        $(CloseBox).addClass('d-none');
        $(CloseBox).addClass('d-md-block');  
        $(closeBtn).addClass('close');
        $(closeBtn).addClass('btn');
        $(closeBtn).addClass('py-4');
        $(closeIcon).addClass('fas');
        $(closeIcon).addClass('fa-times');

        nameAnchor.innerHTML = element.name;
        price.innerHTML = `$${element.price}`;
        PricePerItem.innerHTML = 'Price per item'
        alternativePrice.innerHTML = `$${element.price}`;
        quantity.innerHTML = 'Quantity';
        quantityInput.value = element.quantity;
        minus.innerHTML = '-';
        plus.innerHTML = '+';
        totalPriceTitle.innerHTML = 'Total price'
        alternativeTotalPrice.innerHTML = `$${element.price * element.quantity}`;
        totalPrice.innerHTML = `$${element.price * element.quantity}`;

        $(closeIcon).appendTo(closeBtn);
        $(closeBtn).appendTo(CloseBox);

        $(totalPriceTitle).appendTo(alternativeTotalPriceBox);
        $(alternativeTotalPrice).appendTo(alternativeTotalPriceBox);
       
        $(totalPrice).appendTo(totalPriceBox);
        $(alternativeTotalPriceBox).appendTo(totalPriceBox);
        
        
        $(minus).appendTo(alternativeQuantityBox);
        $(quantityInput).appendTo(alternativeQuantityBox);
        $(plus).appendTo(alternativeQuantityBox);        
        $(quantity).appendTo(quantityBox);
        $(alternativeQuantityBox).appendTo(quantityBox);
        $(PricePerItem).appendTo(alternativePriceBox);
        $(alternativePrice).appendTo(alternativePriceBox);
        $(alternativePriceBox).appendTo(priceBox);
        $(price).appendTo(priceBox);
        $(priceBox).appendTo(secondRow);
        $(quantityBox).appendTo(secondRow);
        $(totalPriceBox).appendTo(secondRow);
        $(CloseBox).appendTo(secondRow);
        $(secondRow).appendTo(details);
        $(details).appendTo(righside);

        $(AlternativeCloseIcon).appendTo(AlternativeCloseBtn);
        $(nameAnchor).appendTo(productName);
        $(image).appendTo(imageAnchor);
        $(imageAnchor).appendTo(imageBox);
        $(imageBox).appendTo(main);
        $(productName).appendTo(main);
        $(AlternativeCloseBtn).appendTo(main);
        $(main).appendTo(leftside);
        $(leftside).appendTo(firstRow);
        $(righside).appendTo(firstRow);
        $(firstRow).appendTo(productItem);

        $(minus).on('click',()=>{
           
            if (parseInt(quantityInput.value)>0)  
            {
                quantityInput.value = parseInt(quantityInput.value)-1;
                totalPrice.innerText = `$${parseFloat(totalPrice.innerText.replace("$", "")) - parseFloat(price.innerText.replace("$", ""))}`;
                alternativeTotalPrice.innerText = `$${parseFloat(totalPrice.innerText.replace("$", "")) - parseFloat(price.innerText.replace("$", ""))}`;
            }
        });
        $(plus).on('click',()=>{
           
            if (parseInt(quantityInput.value)<25)  
            {
                quantityInput.value = parseInt(quantityInput.value)+1;
                totalPrice.innerText = `$${parseFloat(totalPrice.innerText.replace("$", "")) + parseFloat(price.innerText.replace("$", ""))}`;
                alternativeTotalPrice.innerText = `$${parseFloat(totalPrice.innerText.replace("$", "")) + parseFloat(price.innerText.replace("$", ""))}`;
            }
        });
        $(closeBtn).on('click',()=>{
            quantityInput.value = 0;
            totalPrice.innerText = `$0`;
            alternativeTotalPrice.innerText = `$0`;
        });
        $(AlternativeCloseBtn).on('click',()=>{
            quantityInput.value = 0;
            totalPrice.innerText = `$0`;
            alternativeTotalPrice.innerText = `$0`;
        });
        

        $('#update').on('click',()=>{
            if (quantityInput.value==0) {
                products.splice(index,1);
            } 
            products = products.map((el) => {

                if (el.id == element.id)  el.quantity = parseInt(quantityInput.value); 
                return el;  
        });

        localStorage.setItem('product',JSON.stringify(products));
        document.location.reload();
        });

        $('.product-cart').append(productItem);
        
        
    }); 
    
   
});