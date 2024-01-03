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

/*=============== Configuração do email ===============*/
const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    // serviceID - templateID - #form - publicKey

    emailjs.sendForm('service_l7vw5xj','template_p8bdukx','#contact-form','eD8NZyXKotJdvKhOn')
    .then(() =>{
        // Mostrar mensagem enviada
        contactMessage.textContent = 'Mensagem enviada com sucesso ✅'

        // Remover mensagem após cinco segundos
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)

        // Limpar os campos
        contactForm.reset()

    }, () =>{
        // Mostrar mensagem de erro
        contactMessage.textContent = 'Mensagem não enviada (erro de serviço) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)

/*=============== Mostrar rolagem para cima ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // quando a rolagem for maior que 350 de altura na página, adicione essa condição
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== Link das Seções de Rolagem ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
              
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}

/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/