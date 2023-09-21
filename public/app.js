function calc(){
const amount = document.getElementById("amountInput").value;

if(amount<1000){
    document.getElementById("discountedAmount").value = "Discounted Amount: $"+ amount;
  
}
else if(amount>1000 && amount<5000){
    let discount = 5
    document.getElementById("discountedAmount").value = "Discounted Amount: $"+ amount-amount*(discount/100);

}
else if(amount>5001 && amount<7500){
    let discount = 10
    document.getElementById("discountedAmount").value = "Discounted Amount: $"+ amount-amount*(discount/100);
    document.getElementById("discountedAmount").style.color = "green"
    

}
else if(amount>7500){
    let discount = 15
    document.getElementById("discountedAmount").value = "Discounted Amount: $"+ amount-amount*(discount/100);
    document.getElementById("discountedAmount").style.color = "green"
    document.getElementById("discountedAmount").style = "bold"

}

}