const menu = document.querySelector('.hamburger');
const slider = document.querySelector('.slide');
let sliderSection = document.querySelectorAll('.slider-section');
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector('.slider-btn-left')
const btnRight = document.querySelector('.slider-btn-right')
let menuOpen = false;

menu.addEventListener('click', () => {
if (!menuOpen) {
    menu.classList.add('Open');
    menuOpen=true;
}
else{
    menu.classList.remove('Open');
    menuOpen=false;
}
});

slider.insertAdjacentElement("afterbegin",sliderSectionLast);

let next = ()=>{
    let sliderSectionFirst = document.querySelectorAll('.slider-section')[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "All .5s ease-in-out";
    setTimeout(()=>{
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend",sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    },500)
}
let prev = ()=>{
    let sliderSection = document.querySelectorAll('.slider-section');
let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "All .5s ease-in-out";
    setTimeout(()=>{
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
        slider.style.marginLeft = "-100%";
    },500)
}
btnRight.addEventListener("click",()=>{
    next();
})
btnLeft.addEventListener("click",()=>{
    prev();
})

setInterval(()=>{
    next();
},5000);