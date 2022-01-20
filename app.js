const slider = document.querySelector('.slider-slike');
const sliderSlika = document.querySelectorAll('.slider-slike img')


//buttons

const lijevoTipka = document.querySelector('#lijevo');
const desnoTipka = document.querySelector('#desno');

//Brojač

let counter = 1;
const size = sliderSlika[0].clientWidth;

slider.style.transform = 'translateX(' + (-size*counter) +'px)';

//Button listeners

desnoTipka.addEventListener('click' ,()=>{
    if (counter >= sliderSlika.length -1) return;
    slider.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slider.style.transform = 'translateX(' + (-size*counter) +'px)';
});

lijevoTipka.addEventListener('click' ,()=>{
    if (counter <= 0) return;
    slider.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slider.style.transform = 'translateX(' + (-size*counter) +'px)';
});

slider.addEventListener('transitionend', ()=>{
    if (sliderSlika[counter].id==='zadnja'){
        slider.style.transition = "none";
        counter = sliderSlika.length - 2 ;
        slider.style.transform = 'translateX(' + (-size*counter) +'px)';
    }
    if (sliderSlika[counter].id==='prva'){
        slider.style.transition = "none";
        counter = sliderSlika.length - counter ;
        slider.style.transform = 'translateX(' + (-size*counter) +'px)';
    }
});