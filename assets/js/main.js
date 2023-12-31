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
window.addEventListener('scroll', scrollActive)

/*=============== Tema escuro ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Tópico selecionado anteriormente (se o usuário tiver selecionado)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Obtemos o tema atual que a interface possui validando a classe dark-theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// Validamos se o usuário escolheu um tema anteriormente
if (selectedTheme) {
    // Se a validação for cumprida, perguntamos qual foi o problema para saber se ativamos ou desativamos o dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

//Ativa/desativa o tema manualmente com o botão
themeButton.addEventListener('click', () =>{
    //Adiciona ou remove o tema escuro/ícone
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // Salvamos o tema e o ícone atual que o usuário escolheu
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== Animação do SCROLL REVEAL ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
   // reset: true // repetições da animação
})

sr.reveal(`.home__perfil, .about__image, .contact__mail`, {origin: 'right'})
sr.reveal(`.home__name, .home__info,
           .about__container .section__title-1, .about__info,
           .contact__social, .contact__data`, {origin: 'left'})
sr.reveal(`.services__card, .projects__card`, {interval: 100})

/*=============== DOWLOAD PDF ===============*/
function confirmDownload() {
    var choice = confirm("Deseja visualizar o currículo?");
    
    if (choice) {
        // Se o usuário escolher "OK", permita que o link siga o comportamento padrão e abra o PDF no navegador.
        return true;
    } else {
        // Se o usuário escolher "Cancelar", evite que o link siga o comportamento padrão (não faça nada).
        return false;
    }
}

/*=============== ALTERAÇÃO DE IDIOMA ===============*/
document.addEventListener('DOMContentLoaded', function(){
    const languageSelector = document.getElementById('languageSelector');

    languageSelector.addEventListener('change', function(){
        const selectedLanguage = languageSelector.value;
        changeLanguage(selectedLanguage);
    });

    // função para alterar o idioma
    function changeLanguage(language){
        switch(language){
            case 'en':
                nav__link1.textContent = 'Home';
                nav__link2.textContent = 'About Me';
                nav__link3.textContent = 'Projects';
                nav__link4.textContent = 'Contact';

                home__description.innerHTML = '<b>Full Stack</b>, with knowledge in web development and design, I offer the best projects resulting in quality work.';
                home__scrolltext.textContent = 'Scroll Down';

                section__titleabout.textContent = 'About Me.';
                about__description.innerHTML = 'Passionate about creating <b>Web Pages</b> with <b>UI/UX User Interface</b>, I have years of experience and many clients are happy with the projects carried out.';
                about__list.innerHTML = '<b>My Skills Are:</b> HTML, CSS, JavaScript, React, Git & GitHub, Bootstrap, Flutter & Figma.';
                button__contato.innerHTML = '<i class="ri-send-plane-line"></i> Contact Me';

                section__titleservico.textContent = 'Services.';
                services__title1.textContent = 'Web Design';
                services__description1.textContent = 'Beautiful and elegant designs with interfaces that are intuitive, efficient and pleasant  to use for the user.';
                services__title2.textContent = 'Development';
                services__description2.textContent = 'Custom web development tailored to your specifications, designed to provide a flawless user experience.';
                services__title3.textContent = 'Mobile App';
                services__description3.textContent = 'Design and transform website projects into mobile apps to provide a seamlessuser experience.';

                section__titleprojeto.textContent = 'Projects.';
                projects__subtitle1.textContent = 'Website';
                projects__title1.textContent = 'App';
                projects__description1.textContent = "Project that you carry out in the design and structure of the layout, showing the design at the client's request.";
                projects__link1.innerHTML = '<i class="ri-github-line"></i>  View';
                projects__link2.innerHTML = ' <i class="ri-dribbble-line"></i> View';
                projects__subtitle2.textContent = 'App';
                projects__title2.textContent = 'Quiz App';
                projects__description2.textContent = "Project that you carry out in the design and structure of the layout, showing the design at the client's request.";
                projects__link3.innerHTML = '<i class="ri-github-line"></i>  View';
                projects__link4.innerHTML = ' <i class="ri-dribbble-line"></i> View';
                projects__subtitle3.textContent = 'Website';
                projects__title3.textContent = 'Manicure Site';
                projects__description3.textContent = "Project that you carry out in the design and structure of the layout, showing the design at the client's request.";
                projects__link5.innerHTML = '<i class="ri-github-line"></i>  View';
                projects__link6.innerHTML = '<i class="ri-dribbble-line"></i> View';
                projects__subtitle4.textContent = 'App';
                projects__title4.textContent = 'IMC App';
                projects__description4.innerHTML = "Project that you carry out in the design and structure of the layout, showing the design at the client's request.";
                projects__link7.innerHTML = '<i class="ri-github-line"></i>  View';
                projects__link8.innerHTML = '<i class="ri-dribbble-line"></i> View';

                section__titlecontato.textContent = 'Contact Me.';
                contact__descriptioncontato.textContent = "I will read all emails. Send me any message you want and I'll get back to you.";
                contact__descriptioncontato2.innerHTML = "I need your <b>Name</b> and <b>Email Address</b>, but you won't receive anything other than your reply.";
                contact__title.textContent = 'Send Me A Message';
                contact__label1.innerHTML = '<input type="text" name="user_name" class="contact__input" id="name" required placeholder="First Name"><label for="name" class="contact__label">First Name</label>';
                contact__label2.innerHTML = '<input type="email" name="user_email" class="contact__input" id="email" required placeholder="Email Address"><label for="email" class="contact__label">Email Address</label>';
                contact__label3.innerHTML = '<input type="text" name="user_subject" class="contact__input" id="subject" required placeholder="Subject"><label for="subject" class="contact__label">Subject</label>';
                contact__label4.innerHTML = '<textarea name="user_message" id="message" class="contact__input" required placeholder="Message"></textarea><label for="message" class="contact__label">Message</label>';
                contact__button2.innerHTML = '<i class="ri-send-plane-line"></i> Send Message';
                contact__social1.textContent = 'Or';
                contact__social2.textContent = 'Write me on my social networks';

                footer__link1.textContent = 'About';
                footer__link2.textContent = 'Services';
                footer__link3.textContent = 'Projects';
                footer__copy.innerHTML = '&#169; All Rights Reserved By <a href="https://github.com/NotedSilva" target="_blank">NotedSilva.</a>';
                break

                case 'es':
                    nav__link1.textContent = 'Home';
                nav__link2.textContent = 'About Me';
                nav__link3.textContent = 'Projects';
                nav__link4.textContent = 'Contact';

                home__description.innerHTML = '<b>Full Stack</b>, with knowledge in web development and design, I offer the best projects resulting in quality work.';
                home__scrolltext.textContent = 'Scroll Down';

                section__titleabout.textContent = 'About Me.';
                about__description.innerHTML = 'Passionate about creating <b>Web Pages</b> with <b>UI/UX User Interface</b>, I have years of experience and many clients are happy with the projects carried out.';
                about__list.innerHTML = '<b>My Skills Are:</b> HTML, CSS, JavaScript, React, Git & GitHub, Bootstrap, Flutter & Figma.';
                button__contato.innerHTML = '<i class="ri-send-plane-line"></i> Contact Me';

                section__titleservico.textContent = 'Services.';
                services__title1.textContent = 'Web Design';
                services__description1.textContent = 'Beautiful and elegant designs with interfaces that are intuitive, efficient and pleasant  to use for the user.';
                services__title2.textContent = 'Development';
                services__description2.textContent = 'Custom web development tailored to your specifications, designed to provide a flawless user experience.';
                services__title3.textContent = 'Mobile App';
                services__description3.textContent = 'Design and transform website projects into mobile apps to provide a seamlessuser experience.';

                section__titleprojeto.textContent = 'Projects.';
                projects__subtitle1.textContent = 'Website';
                projects__title1.textContent = 'App';
                projects__description1.textContent = "Project that you carry out in the design and structure of the layout, showing the design at the client's request.";
                projects__link1.innerHTML = '<i class="ri-github-line"></i>  View';
                projects__link2.innerHTML = ' <i class="ri-dribbble-line"></i> View';
                projects__subtitle2.textContent = 'App';
                projects__title2.textContent = 'Quiz App';
                projects__description2.textContent = "Project that you carry out in the design and structure of the layout, showing the design at the client's request.";
                projects__link3.innerHTML = '<i class="ri-github-line"></i>  View';
                projects__link4.innerHTML = ' <i class="ri-dribbble-line"></i> View';
                projects__subtitle3.textContent = 'Website';
                projects__title3.textContent = 'Manicure Site';
                projects__description3.textContent = "Project that you carry out in the design and structure of the layout, showing the design at the client's request.";
                projects__link5.innerHTML = '<i class="ri-github-line"></i>  View';
                projects__link6.innerHTML = '<i class="ri-dribbble-line"></i> View';
                projects__subtitle4.textContent = 'App';
                projects__title4.textContent = 'IMC App';
                projects__description4.innerHTML = "Project that you carry out in the design and structure of the layout, showing the design at the client's request.";
                projects__link7.innerHTML = '<i class="ri-github-line"></i>  View';
                projects__link8.innerHTML = '<i class="ri-dribbble-line"></i> View';

                section__titlecontato.textContent = 'Contact Me.';
                contact__descriptioncontato.textContent = "I will read all emails. Send me any message you want and I'll get back to you.";
                contact__descriptioncontato2.innerHTML = "I need your <b>Name</b> and <b>Email Address</b>, but you won't receive anything other than your reply.";
                contact__title.textContent = 'Send Me A Message';
                contact__label1.innerHTML = '<input type="text" name="user_name" class="contact__input" id="name" required placeholder="First Name"><label for="name" class="contact__label">First Name</label>';
                contact__label2.innerHTML = '<input type="email" name="user_email" class="contact__input" id="email" required placeholder="Email Address"><label for="email" class="contact__label">Email Address</label>';
                contact__label3.innerHTML = '<input type="text" name="user_subject" class="contact__input" id="subject" required placeholder="Subject"><label for="subject" class="contact__label">Subject</label>';
                contact__label4.innerHTML = '<textarea name="user_message" id="message" class="contact__input" required placeholder="Message"></textarea><label for="message" class="contact__label">Message</label>';
                contact__button2.innerHTML = '<i class="ri-send-plane-line"></i> Send Message';
                contact__social1.textContent = 'Or';
                contact__social2.textContent = 'Write me on my social networks';

                footer__link1.textContent = 'About';
                footer__link2.textContent = 'Services';
                footer__link3.textContent = 'Projects';
                footer__copy.innerHTML = '&#169; All Rights Reserved By <a href="https://github.com/NotedSilva" target="_blank">NotedSilva.</a>';
                break
        }
    }
});