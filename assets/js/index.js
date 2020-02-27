//############ HEADER - START ############//
(function(){

let navbar = document.querySelector('.section-nav')
let hamburger = document.querySelector('.hamburger-div')
let sideDrawer = document.querySelector('.side-drawer')
let expand = document.querySelector('.expand-img')
let dropdown = document.querySelectorAll('.drop-down-list')[1]
let dropdownItem = document.querySelectorAll('.item-a')
let slides = document.querySelectorAll('.carousel-item')
let pagination = document.querySelectorAll('.pag')
let rightArrow = document.querySelector('.right-arrow')
let leftArrow = document.querySelector('.left-arrow')
let backgroundImg = document.querySelector('.header-carousel')


let scrollPosY = window.scrollY

function add_class_on_scroll() {
    navbar.classList.add('section-nav-scroll');
}

function remove_class_on_scroll() {
    navbar.classList.remove('section-nav-scroll');
}

window.addEventListener('scroll', function(){ 
    scrollPosY = window.scrollY;

    if(scrollPosY > 100){
        add_class_on_scroll();
    }
    else if(scrollPosY <= 10){
        remove_class_on_scroll();
    }
});

hamburger.addEventListener('click', function(){
    if(sideDrawer.className == 'side-drawer'){
        sideDrawer.classList.replace('side-drawer', 'side-drawer-clicked')
    }else{
        sideDrawer.classList.replace('side-drawer-clicked', 'side-drawer')
    }
})

expand.addEventListener('click', function(){
    if(dropdown.className == 'drop-down-list'){
        dropdown.className = 'drop-down-list-expand'
        dropdownItem.forEach(item => {
            item.classList.replace('item-a', 'item-a-expand')
        })
    }else{
        dropdown.className = 'drop-down-list'
        dropdownItem.forEach(item => {
            item.classList.replace('item-a-expand', 'item-a')
        })
    }
    expand.classList.toggle('expand-img-clicked')
})


let slideIndex = 1;
showSlides(slideIndex)

function plusSlides(n){
    showSlides(slideIndex += n)
}
function minusSlides(n){
    showSlides(slideIndex -= n)
}

function currentSlide(n){
    showSlides(slideIndex = n)
}

rightArrow.addEventListener('click', function(){
    slideIndex + 1
})
        
leftArrow.addEventListener('click', function(){
    slideIndex - 1
})
pagination.forEach((pag, index) => {
    pag.addEventListener('click', function(){
        currentSlide(index+1)
    })
})

rightArrow.addEventListener('click', function(){
    plusSlides(1)
})
leftArrow.addEventListener('click', function(){
    minusSlides(1)
})


function showSlides(n){
    let slides = document.querySelectorAll('.carousel-item')
    let pagination = document.querySelectorAll('.pag')
    let i;
    if(n > slides.length){
        slideIndex = 1
    }
    if(n < 1){
        slideIndex = slides.length
    }
    for(let i = 0; i < slides.length; i++){
        slides[i].classList.remove('carousel-active')
    }
    for(let i = 0; i < pagination.length; i++){
        pagination[i].classList.remove('pag-active')
    }
    slides[slideIndex-1].classList.add('carousel-active')
    pagination[slideIndex-1].classList.add('pag-active')
    backgroundImg.style.backgroundImage = `url('./assets/img/intro-carousel/${slideIndex}.jpg')`
}

setInterval(function(){
    slideIndex++
    showSlides(slideIndex)
}, 3000)
 
})()
//############## HEADER - END ###############//




//TESTIMONIALS SECTION SLIDER

const testimonialsArr  = document.querySelectorAll('.section-testimonials__testimonial')
const dotsWrapper      = document.querySelector('.dots__wrapper')
let counter = 0      

const handleSwitch     = (index) => {
    
    for(let i = 0; i < testimonialsArr.length; i++){
       
        if(testimonialsArr[i].classList.contains('active__slide')){
            testimonialsArr[i].classList.replace('active__slide','non-active__slide')
            testimonialsArr[index].classList.replace('non-active__slide','active__slide')
            dotsWrapper.children[i].classList.replace('dot-active','dot')
            dotsWrapper.children[index].classList.replace('dot','dot-active')
            
        }

    }
    counter = index
}

testimonialsArr.forEach((testimonial,index) => {
    let dot = document.createElement('div')
    dot.classList.add('dot')
    dot.addEventListener('click',()=>handleSwitch(index))
    dotsWrapper.appendChild(dot)
})

dotsWrapper.children[0].classList.replace('dot','dot-active')


setInterval(()=>{
    if(counter === testimonialsArr.length-1){
                counter = 0
                
            }else{
                counter++
        
            }
    handleSwitch(counter)
},3000)
//TESTIMONIALS SECTION SLIDER


//ANIMATION
const sectionTeamDOM = document.querySelector('.section-team')
const teamMembersDOM = document.querySelectorAll('.team-member__container')
const sectionServicesDOM    = document.querySelector('.section-services')
const servicesDOM     = document.querySelectorAll('.section-services__service')
const aboutCardsDOM   = document.querySelectorAll('.section-about__cards__card')
const skill100DOM     = document.querySelector('.success-width-100')
const skill90DOM     = document.querySelector('.success-width-90')
const skill75DOM     = document.querySelector('.success-width-75')
const skill55DOM     = document.querySelector('.success-width-55')
const counterFacts    = document.querySelectorAll('.counter-up')
const numbers = [274, 421, 1346, 18];
const totalTime = 1500;
const elementsTime = numbers.map(num => {
    return (totalTime / num);
  });

  const portfolioCards = document.querySelectorAll('.section-portfolio__content-item')
const animationHandler2 = () => {

    let duration = .9
    let delay = .15
    if(checkHeight('section-team')){
        sectionTeamDOM.classList.add('slide-top')
       
        teamMembersDOM.forEach(memberDOM => {
            
            memberDOM.classList.add('slide-top')
            memberDOM.style.animationDuration =`${duration+=.17}s`
            memberDOM.style.animationDelay =`${delay+=.1}s`
        })
    }else if(checkHeight('section-skills__wrapper')){
        skill100DOM.classList.add('widthTo100')
        skill90DOM.classList.add('widthTo90')
        skill75DOM.classList.add('widthTo75')
        skill55DOM.classList.add('widthTo55')
    }

    
    else if(checkHeight('section-services')){
        sectionServicesDOM.classList.add('slide-top')
        servicesDOM.forEach(serviceDOM => {
            serviceDOM.classList.add('bounce-in-bottom')
        })

    }else if(checkHeight('section-about')){
        
        aboutCardsDOM.forEach(aboutCard => {
            aboutCard.classList.add('slide-top')
            aboutCard.style.animationDuration =`${duration+=.1}s`
            aboutCard.style.animationDelay =`${delay+=.2}s`
        })
    }else if(checkHeight('section-facts')){
        spinNumbers()
        // spinNumbers(numbers,counterFacts)
    }else if(checkHeight('section-portfolio')){
        skill100DOM.classList.add('widthTo100')
    }
    
}




const spinNumbers = (() => {
    let executed = false;
    return () => {
        if (!executed) {
            executed = true;
            // do something
            numbers.forEach((num, index) => {
                let element = counterFacts[index];
                let time = elementsTime[index];
                for (let i = 0; i <= num; i++) {
                  setTimeout(()=>{    
                        element.innerHTML = i;
                      }, i * time);
                }
              });
        }
    };
})();
//ANIMATION


//HELPING FUNCTION
const checkHeight = (sectionTitle) => {


    const sectionName = document.querySelector(`.${sectionTitle}`)
    const slideInAt = (window.scrollY + window.innerHeight) - sectionName.offsetHeight / 7
    const sectionBottom = sectionName.offsetTop  + sectionName.offsetHeight
    const isHalfShown = slideInAt > sectionName.offsetTop
    const isNotScrolledPast = window.scrollY < sectionBottom
    if(isHalfShown && isNotScrolledPast){
        return true

    }else{
       return false
    }
}

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
//HELPING FUNCTION


window.addEventListener('scroll',debounce(animationHandler2,10))


/*PORTFOLIO SECTION */

//buttons
const portfolioBtnsDOM = document.querySelectorAll('.section-portfolio__nav button')
const cardsWrapperDOM = document.querySelector('.section-portfolio__content-items')
const cardsDOM       = document.querySelectorAll('.section-portfolio__content-item')
const cardsArr       = Array.from(cardsDOM)
const handleCardChange = (e) => {
    const value = e.target.textContent.toLowerCase()
    switch(value){
        case 'all':{
            cardsDOM.forEach(card => {
                card.classList.replace('hidden-portf-card','section-portfolio__content-item')
                card.classList.remove('fade-in-fwd')
                card.classList.add('fade-in-left')
            })
            handleActvLinkDisplay('all')
            break;
        }
        case 'app':{
      
            handleActvLinkDisplay('app')
        handleSwitchCards('app')

            break;
        }
        case 'card':{
            handleActvLinkDisplay('card')
            handleSwitchCards('card')
            break;
        }
        case 'web' :{
           
            handleActvLinkDisplay('web')
            handleSwitchCards('web')
            break;
        }
    }
   

}   

const handleActvLinkDisplay = (condition) => {
    portfolioBtnsDOM.forEach(btn => {
        
        if(btn.textContent.toLowerCase() === condition){
            btn.classList.replace('section-portfolio__btn','btn-active-portf')
        }else{
            btn.classList.replace('btn-active-portf','section-portfolio__btn')
        }
    })
}

const handleSwitchCards = (condition) => {
    cardsDOM.forEach(card => {
          
        if(card.getAttribute('name') !== condition){
            card.classList.replace('section-portfolio__content-item','hidden-portf-card')
           
        }else{
            card.classList.replace('hidden-portf-card','section-portfolio__content-item')
            card.classList.remove('fade-in-left')
            card.classList.add('fade-in-fwd')
        }
    })
}

portfolioBtnsDOM.forEach(btn => {
    btn.addEventListener('click',handleCardChange)
})