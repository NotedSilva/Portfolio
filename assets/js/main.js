/*=============== Mostrar menu ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*=============== condição para mostrar ===============*/
if (navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
/*=============== condição para esconder ===============*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== Transição do menu no responsivo ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // cada vez que clicarmos em algum link do nav__link vai ser removido o show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')                             
}
window.addEventListener('scroll', shadowHeader)

/*=============== EMAIL JS ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/