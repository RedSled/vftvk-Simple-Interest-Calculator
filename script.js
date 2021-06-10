function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var amount = parseInt(interest);
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit <p>"+principal+"</p>,\<br\>at an interest rate of <p>"+rate+"</p>%.\<br\>You will receive an amount of <p>"+amount+"</p>,\<br\>in the year <p>"+year+"</p>\<br\>" 
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}  

function checkamount(){
 var principcal = document.getElementById("principal").value;
 var positive = parseInt(principal) > 0;
 //check if principal value is 0 or negative
 if(!positive){
     alert("Enter a positive number");
    document.getElementById("principal").focus();
     return true;
 }
}
