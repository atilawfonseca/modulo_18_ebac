const btn = document.getElementById("menu_mobile");
const aba_lateral = document.getElementById("aba_lateral");
let status_aba = false;

btn.addEventListener('click', function(event){
    event.preventDefault; 
    
    if(status_aba){
        aba_lateral.style.right ="-900px";
        status_aba = false;
    }
    else {
        aba_lateral.style.right = "0px";
        status_aba = true;
    }
})
