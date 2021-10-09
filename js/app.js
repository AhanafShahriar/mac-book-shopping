document.getElementById('memory-16gb').addEventListener('click', function(){    
    productCost('memory', 180);
    totalCost();

})
document.getElementById('memory-8gb').addEventListener('click', function(){    
    productCost('memory', 0);
    totalCost();
})
document.getElementById('storage-256gb').addEventListener('click', function(){    
    productCost('storage', 0);
    totalCost();
})
document.getElementById('storage-512gb').addEventListener('click', function(){    
    productCost('storage', 100);
    totalCost();
})
document.getElementById('storage-1tb').addEventListener('click', function(){    
    productCost('storage', 180);
    totalCost();
})
document.getElementById('free-delivery').addEventListener('click', function(){    
    productCost('delivery', 0);
    totalCost();
})
document.getElementById('charged-delivery').addEventListener('click', function(){    
    productCost('delivery', 20);
    totalCost();
})


function productCost(product, unitPrice){
    const memoryCost = document.getElementById(product +'-cost');
    memoryCost.innerText = unitPrice;
    return unitPrice;
}
function totalCost(){
    const memoryPrice  = parseFloat(document.getElementById('memory-cost').innerText);
    const storagePrice  = parseFloat(document.getElementById('storage-cost').innerText);
    const deliveryPrice  = parseFloat(document.getElementById('delivery-cost').innerText);
    const totalCost = document.getElementById('total-price');
    totalCost.innerText = memoryPrice + storagePrice + deliveryPrice + 1299;
    const footerTotalDisplay = document.getElementById('footer-total');
    footerTotalDisplay.innerText = totalCost.innerText;
}
document.getElementById('promocode-submit').addEventListener('click', function(){
    const promoInput =  document.getElementById('promo-input');
    const totalCost = document.getElementById('total-price');
    const footerTotalDisplay = document.getElementById('footer-total');
    if(promoInput.value == 'stevekaku')
    {
        totalCost.innerText =parseFloat(totalCost.innerText)-(parseFloat(totalCost.innerText) * 20) / 100;
        footerTotalDisplay.innerText = totalCost.innerText;
    }
    promoInput.value = '';

})