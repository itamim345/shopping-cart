function quantityUpdate(product,isIncrease,price){
    const quantityField = document.getElementById(product+'-qty');
    const quantityInput = quantityField.value;
    const quantitInt = parseInt(quantityInput);
    if(isIncrease == true){
        let quantity = quantitInt + 1;
        quantityField.value = quantity;
    }else if(quantityInput>0){
        let quantity = quantitInt - 1;
        quantityField.value = quantity;
    }
    //update balance
    const priceField = document.getElementById(product+'-total');
    let priceText=priceField.innerText;
    const priceInt = parseInt(priceText);
    priceField.innerText= quantityField.value*price;
    //calculate total amount
    console.log(calculateTotal());
}

//get input values
function getInputValue(product){
    const qtyinputField = document.getElementById(product+'-qty');
    const qtyNumber = parseInt(qtyinputField.value);
    return qtyNumber;
}

//calculate total
function calculateTotal(){
   const phoneAmount =  getInputValue('phone')*1200;
   const caseAmount = getInputValue('case')*100;
   const subtotal = phoneAmount+caseAmount;
   const tax = subtotal*(10/100);
   const totalAmount = subtotal+tax;
   //update on HTM
   document.getElementById('subtotal').innerText = subtotal;
   document.getElementById('tax').innerText = tax;
   document.getElementById('total-amount').innerText = totalAmount;
}





document.getElementById('phone-plus').addEventListener('click', function(){
   quantityUpdate('phone',true,1200);
});
document.getElementById('phone-minus').addEventListener('click',function(){
   quantityUpdate('phone',false,1200)
})
document.getElementById('case-plus').addEventListener('click',function(){
    quantityUpdate('case',true,100);
})
document.getElementById('case-minus').addEventListener('click',function(){
    quantityUpdate('case',false,100)
})