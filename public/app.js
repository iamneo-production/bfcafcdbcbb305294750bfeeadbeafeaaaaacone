function calc(){
const amount = document.getElementById("amountInput").value;

if(amount<1000){
    document.getElementById("discountedAmount").innerHTML = "Discounted Amount: $"+ amount;
  
}
else if(amount>1000 && amount<5000){
    let discount = 5
    let x = amount-amount*(discount/100)
    document.getElementById("discountedAmount").innerHTML = "Discounted Amount: $"+ x;
    console.log(x)

}
else if(amount>5001 && amount<7500){
    let discount = 10
    var x = amount-amount*(discount/100)
    document.getElementById("discountedAmount").innerHTML = "Discounted Amount: $"+ x;
    document.getElementById("discountedAmount").style.color = "green"
    

}
else if(amount>7500){
    let discount = 15
    var x = amount-amount*(discount/100)
    document.getElementById("discountedAmount").innerHTML = "Discounted Amount: $"+ x;
    document.getElementById("discountedAmount").style.color = "green"
    document.getElementById("discountedAmount").style.fontWeight = "bold"

}

}