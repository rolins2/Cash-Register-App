const  chkbtn = document.querySelector("#checkButton");
const billamount = document.querySelector("#amoun");
const cashgiven = document.querySelector("#cashGiven");
var invtext = document.querySelector("#invalidtext");



chkbtn.addEventListener("click", function billHandler(){
    invtext.style.display = "none";

    if(billamount.value > 0)
    {
        console.log("bill amount is " + billamount.value);
        console.log("cash given is "+cashgiven.value);

        if(billamount.value  < cashgiven.value)
        {
            console.log("5 smaller than 6 ");
        }else {
            console.log("6 is greater than 5 ");
            inverror("Please provide more money");
        }

       
    }
    else{
        console.log("Invalid value ")
        inverror("Invalid bill amount")
    }
})


function inverror(msg)
{
    invtext.style.display = "block";

    invtext.innerText = msg;

}