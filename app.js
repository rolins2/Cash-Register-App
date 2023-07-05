const  chkbtn = document.querySelector("#checkButton");
const billamount = document.querySelector("#amoun");
const cashgiven = document.querySelector("#cashGiven");
var invtext = document.querySelector("#invalidtext");
var arr = [2000,500,100,20,10,5,1];
const notes = document.querySelectorAll(".vals");
const checkBtn = document.querySelector("#ckh");
const sect = document.querySelector("#cashsec");

sect.style.display = "none";

checkBtn.addEventListener("click",function clickHandler(){
    if(billamount.value > 0){
        console.log("checking value")
        sect.style.display = "block";
        checkBtn.style.display = "none";


        chkbtn.addEventListener("click", function billHandler(){
            invtext.style.display = "none";
        
            if(billamount.value > 0)
            {
                console.log("bill amount is " + billamount.value);
                console.log("cash given is "+cashgiven.value);
        
                if(billamount.value  < cashgiven.value)
                {
                    console.log("5 smaller than 6 ");
                    var valtobereturned =   cashgiven.value - billamount.value ;
                    console.log(valtobereturned);
                    changeReturn(valtobereturned);
        
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
    }
   
})





function changeReturn(amt){
    for(var i=0;i< arr.length;i++)
    {
        var numofNotes = Math.trunc(amt/arr[i]);
        amt = amt % arr[i];
      notes[i].innerText = numofNotes;
    }

      

}


function inverror(msg)
{
    invtext.style.display = "block";

    invtext.innerText = msg;

}