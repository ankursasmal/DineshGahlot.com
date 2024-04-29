// for navbar section after a distance it will apppear (visible below hero section )

let hero_section = document.querySelector('.hero_section');
window.addEventListener('scroll', (e) => {

    let scrolled = window.scrollY;
 
    let hero_section_height = hero_section.scrollHeight;

 
    if (hero_section_height <= scrolled) {
        let nav_section = document.getElementById('ankur');
         nav_section.style.cssText = "display:block !important"
    }
    else {
        let nav_section = document.getElementById('ankur');


        nav_section.style.cssText = "display:none !important"

    }

})

// for two grid 1->text part and 2->carsole part dynamicaly slide number change

let arrow1 = document.getElementById('arrow1');
let arrow2 = document.getElementById('arrow2');


let slidenumber = 1;

arrow2.addEventListener('click', () => {
    let numberofSlide = document.getElementById('numberofSlide');
    if (slidenumber >= 1 && slidenumber < 3) {
        slidenumber += 1;
    }
    else if (slidenumber <= 3 && slidenumber >= 2) {
        slidenumber -= 1;

    }
    numberofSlide.innerText = ` 0${slidenumber}/03`
})
arrow1.addEventListener('click', () => {

    let numberofSlide = document.getElementById('numberofSlide');
    if (slidenumber >= 1 && slidenumber < 3) {
        slidenumber += 1;
    }
    else if (slidenumber <= 3 && slidenumber >= 2) {
        slidenumber -= 1;

    }

    numberofSlide.innerText = ` 0${slidenumber}/03`

})


//  end


// arrow12 && arrow 13
let arrow12 = document.getElementById('arrow12');
let arrow13 = document.getElementById('arrow13');



arrow13.addEventListener('click', () => {
    let numberofSlide = document.getElementById('numberofSlide');
    if (slidenumber >= 1 && slidenumber < 3) {
        slidenumber += 1;
    }
    else if (slidenumber <= 3 && slidenumber >= 2) {
        slidenumber -= 1;

    }
    numberofSlide.innerText = ` 0${slidenumber}/03`
})
arrow12.addEventListener('click', () => {

    let numberofSlide = document.getElementById('numberofSlide');
    if (slidenumber >= 1 && slidenumber < 3) {
        slidenumber += 1;
    }
    else if (slidenumber <= 3 && slidenumber >= 2) {
        slidenumber -= 1;

    }

    numberofSlide.innerText = ` 0${slidenumber}/03`

})



// for carsole small quentity grow part code and slider no dynamically change part
const button = document.getElementById("slide1");
let numbers = 1;
button.addEventListener('click', () => {
    let number_detect = document.getElementById("number_detect");

    let left = document.getElementById("leftSidemove");
    left.scrollLeft += 500;
    if (numbers >= 1 && numbers <= 4) {
        numbers += 1;
        number_detect.innerHTML = `<a style="margin: 0 4vw;"> 0${numbers}/05  </a>`;
    }


});


const button1 = document.getElementById("slide");

button1.addEventListener('click', () => {
    let left = document.getElementById("leftSidemove");
    let number_detect = document.getElementById("number_detect");

    if (numbers >= 2 && numbers <= 5) {
        numbers -= 1;
        number_detect.innerHTML = `<a style="margin: 0 4vw;"> 0${numbers} /05 </a>`;
    }
    left.scrollLeft -= 500;

});


// end







