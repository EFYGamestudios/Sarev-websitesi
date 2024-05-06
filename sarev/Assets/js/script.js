var slad = document.querySelectorAll(".slad-icerik>div");
var dugme = document.querySelectorAll(".slad-radio>div");
var sayac=0;
for (var i = 0; i < slad.length; i++) {
    slad[i].style.display = "none";
    dugme[i].style.background="white";
    var sol=document.getElementById("sol"+[i]);
    var sag=document.getElementById("sag"+[i]);
    sol.addEventListener("click", function() {
        solf()
    });
    sag.addEventListener("click", function() {
        sagf()
    });
}
dugme[0].style.background="none";
slad[0].style.display="block";

function solf() { 
    slad[sayac].style.display="none";
    dugme[sayac].style.background="white";
    if(sayac==0){
        sayac=slad.length;
    }   
    console.log(sayac);
    slad[sayac-1].style.display="block";
    dugme[sayac-1].style.background="none";
    sayac--;
}
function sagf(){
    slad[sayac].style.display="none";
    dugme[sayac].style.background="white";
    if(sayac==slad.length-1){
        sayac=-1;
    }  
    console.log(sayac);
    sayac++;
    slad[sayac].style.display="block";
    dugme[sayac].style.background="none";
    
}
    
    