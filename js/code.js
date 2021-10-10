setTimeout(
    function(){
        let sesion1 = document.querySelector(".sesion1");
        sesion1.style.background = "none";
        sesion1.style.transition = "all 1s";
        
    },800
);


let sun = document.querySelector(".bxs-sun");
let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
window.addEventListener("scroll",()=>{
    let value = window.scrollY;
    sun.style.top =  - value + "px";
    img1.style.marginRight = - value + "px";
    img2.style.marginLeft = - value + "px";
})