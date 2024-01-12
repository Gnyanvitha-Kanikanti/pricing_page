const toggler=document.querySelector(".toggler");
const starterPrice=document.getElementById("starter-price");
const proPrice=document.getElementById("pro-price");
let sPrice=19;
let pPrice=99;
toggler.addEventListener("change",()=>{
    if(toggler.checked){
        starterPrice.innerHTML='200 <span> dollors </span>';
        proPrice.innerHTML='1000 <span> dollors </span>';
    }
    else{
        starterPrice.innerHTML='19 <span> dollors </span>';
        proPrice.innerHTML='99 <span> dollors </span>';
    }
})
function torupee(){
    if(toggler.checked){
        starterPrice.innerHTML='16612 <span> rupees </span>';
        proPrice.innerHTML='83060 <span> rupees </span>';
    }
    else{
        starterPrice.innerHTML='1578 <span> rupees </span>';
        proPrice.innerHTML='8222 <span> rupees </span>';
    }
    toggler.addEventListener("change",()=>{
        if(toggler.checked){
            starterPrice.innerHTML='16612 <span> rupees </span>';
            proPrice.innerHTML='83060 <span> rupees </span>';
        }
        else{
            starterPrice.innerHTML='1578 <span> rupees </span>';
            proPrice.innerHTML='8222 <span> rupees </span>';
        }
    })
}
function topound(){
    if(toggler.checked){
        starterPrice.innerHTML='156 <span> pounds </span>';
        proPrice.innerHTML='784 <span> pounds </span>';
    }
    else{
        starterPrice.innerHTML='15 <span> pounds </span>';
        proPrice.innerHTML='78 <span> pounds </span>';
    }
    toggler.addEventListener("change",()=>{
        if(toggler.checked){
            starterPrice.innerHTML='156 <span> pounds </span>';
            proPrice.innerHTML='784 <span> pounds </span>';
        }
        else{
            starterPrice.innerHTML='15 <span> pounds </span>';
            proPrice.innerHTML='78 <span> pounds </span>';
        }
    })
}
function toeuro(){
    if(toggler.checked){
        starterPrice.innerHTML='182 <span> euros </span>';
        proPrice.innerHTML='911 <span> euros </span>';
    }
    else{
        starterPrice.innerHTML='17 <span> euros </span>';
        proPrice.innerHTML='90 <span> euros </span>';
    }
    toggler.addEventListener("change",()=>{
        if(toggler.checked){
            starterPrice.innerHTML='182 <span> euros </span>';
            proPrice.innerHTML='911 <span> euros </span>';
        }
        else{
            starterPrice.innerHTML='17 <span> euros </span>';
            proPrice.innerHTML='90 <span> euros </span>';
        }
    })
}