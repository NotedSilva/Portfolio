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
            case 'pt-br':
                nav__link1.textContent = 'Home';
                nav__link2.textContent = 'Sobre Mim';
                nav__link3.textContent = 'Projetos';
                nav__link4.textContent = 'Contato';

                home__description.innerHTML = '<b>Full Stack</b>, com conhecimento em desenvolvimento web e design, ofereço os melhores projetos resultando em trabalhos de qualidade.';
                home__scrolltext.textContent = 'Rolar para baixo';

                section__titleabout.textContent = 'Sobre Mim.';
                about__description.innerHTML = 'Apaixonado por criar <b>Páginas Web</b> com <b>UI/UX Interface de usuário</b>, tenho anos de experiência e muitos clientes estão satisfeitos com os projetos realizados.';
                about__list.innerHTML = '<b>Minhas habilidades são:</b> HTML, CSS, JavaScript, React, Git e GitHub, Bootstrap, Flutter e Figma.';
                button__contato.innerHTML = '<i class="ri-send-plane-line"></i> Contate-me';

                section__titleservico.textContent = 'Serviços.';
                services__title1.textContent = 'Designer Web';
                services__description1.textContent = 'Designs bonitos e elegantes com interfaces intuitivas, eficientes e agradáveis ​​de usar para o usuário.';
                services__title2.textContent = 'Desenvolvimento';
                services__description2.textContent = 'Desenvolvimento web personalizado, adaptado às suas especificações, projetado para fornecer uma experiência de usuário impecável.';
                services__title3.textContent = 'Aplicativo Móvel';
                services__description3.textContent = 'Projete e transforme projetos de sites em aplicativos móveis para fornecer uma experiência de usuário perfeita.';

                section__titleprojeto.textContent = 'Projetos.';
                projects__subtitle1.textContent = 'Website';
                projects__title1.textContent = 'App';
                projects__description1.textContent = "Projeto que você realiza na concepção e estrutura do layout, apresentando o desenho a pedido do cliente.";
                projects__link1.innerHTML = '<i class="ri-github-line"></i>  Visualizar';
                projects__link2.innerHTML = ' <i class="ri-dribbble-line"></i> Deploy';
                projects__subtitle2.textContent = 'App';
                projects__title2.textContent = 'Quiz App';
                projects__description2.textContent = "Projeto que você realiza na concepção e estrutura do layout, apresentando o desenho a pedido do cliente.";
                projects__link3.innerHTML = '<i class="ri-github-line"></i>  Visualizar';
                projects__link4.innerHTML = ' <i class="ri-dribbble-line"></i> Deploy';
                projects__subtitle3.textContent = 'Website';
                projects__title3.textContent = 'Manicure Site';
                projects__description3.textContent = "Projeto que você realiza na concepção e estrutura do layout, apresentando o desenho a pedido do cliente.";
                projects__link5.innerHTML = '<i class="ri-github-line"></i>  Visualizar';
                projects__link6.innerHTML = '<i class="ri-dribbble-line"></i> Deploy';
                projects__subtitle4.textContent = 'App';
                projects__title4.textContent = 'IMC App';
                projects__description4.innerHTML = "Projeto que você realiza na concepção e estrutura do layout, apresentando o desenho a pedido do cliente.";
                projects__link7.innerHTML = '<i class="ri-github-line"></i>  Visualizar';
                projects__link8.innerHTML = '<i class="ri-dribbble-line"></i> Deploy';

                section__titlecontato.textContent = 'Contate-me.';
                contact__descriptioncontato.textContent = "Lerei todos os e-mails. Envie-me qualquer mensagem que entrarei em contato com você.";
                contact__descriptioncontato2.innerHTML = " Preciso do seu <b>Nome</b> e <b>Endereço de email</b>, mas você não receberá nada além da sua resposta.";
                contact__title.textContent = 'Me Mande Uma Mensagem!';
                contact__label1.innerHTML = '<input type="text" name="user_name" class="contact__input" id="name" required placeholder="Primeiro Nome"><label for="name" class="contact__label">Primeiro Nome</label>';
                contact__label2.innerHTML = '<input type="email" name="user_email" class="contact__input" id="email" required placeholder="Endereço de Email"><label for="email" class="contact__label">Endereço de Email</label>';
                contact__label3.innerHTML = '<input type="text" name="user_subject" class="contact__input" id="subject" required placeholder="Assunto"><label for="subject" class="contact__label">Assunto</label>';
                contact__label4.innerHTML = '<textarea name="user_message" id="message" class="contact__input" required placeholder="Mensagem"></textarea><label for="message" class="contact__label">Mensagem</label>';
                contact__button2.innerHTML = '<i class="ri-send-plane-line"></i> Enviar Mensagem';
                contact__social1.textContent = 'Ou';
                contact__social2.textContent = 'Escreva-me nas minhas redes sociais';

                footer__link1.textContent = 'Sobre Mim';
                footer__link2.textContent = 'Serviços';
                footer__link3.textContent = 'Projetos';
                footer__copy.innerHTML = '&#169; Todos os direitos reservados por <a href="https://github.com/NotedSilva" target="_blank">NotedSilva.</a>';
                break


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
                projects__link2.innerHTML = ' <i class="ri-dribbble-line"></i> Deploy';
                projects__subtitle2.textContent = 'App';
                projects__title2.textContent = 'Quiz App';
                projects__description2.textContent = "Project that you carry out in the design and structure of the layout, showing the design at the client's request.";
                projects__link3.innerHTML = '<i class="ri-github-line"></i>  View';
                projects__link4.innerHTML = ' <i class="ri-dribbble-line"></i> Deploy';
                projects__subtitle3.textContent = 'Website';
                projects__title3.textContent = 'Manicure Site';
                projects__description3.textContent = "Project that you carry out in the design and structure of the layout, showing the design at the client's request.";
                projects__link5.innerHTML = '<i class="ri-github-line"></i>  View';
                projects__link6.innerHTML = '<i class="ri-dribbble-line"></i> Deploy';
                projects__subtitle4.textContent = 'App';
                projects__title4.textContent = 'IMC App';
                projects__description4.innerHTML = "Project that you carry out in the design and structure of the layout, showing the design at the client's request.";
                projects__link7.innerHTML = '<i class="ri-github-line"></i>  View';
                projects__link8.innerHTML = '<i class="ri-dribbble-line"></i> Deploy';

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
                    nav__link1.textContent = 'Hogar';
                nav__link2.textContent = 'Sobre Mi';
                nav__link3.textContent = 'Proyectos';
                nav__link4.textContent = 'Contacto';

                home__description.innerHTML = '<b>Full Stack</b>, Con conocimientos en desarrollo y diseño web, ofrezco los mejores proyectos resultando en un trabajo de calidad.';
                home__scrolltext.textContent = 'Desplácese hacia abajo';

                section__titleabout.textContent = 'Sobre Mi.';
                about__description.innerHTML = 'Apasionado por crear <b>Páginas web</b> con <b>Interfaz de usuario UI/UX</b>, Tengo años de experiencia y muchos clientes están contentos con los proyectos realizados.';
                about__list.innerHTML = '<b>Mis habilidades son:</b> HTML, CSS, JavaScript, React, Git & GitHub, Bootstrap, Flutter & Figma.';
                button__contato.innerHTML = '<i class="ri-send-plane-line"></i> Contáctame';

                section__titleservico.textContent = 'Servicios.';
                services__title1.textContent = 'Diseño web';
                services__description1.textContent = 'Hermosos y elegantes diseños con interfaces intuitivas, eficientes y agradables de usar para el usuario.';
                services__title2.textContent = 'Desarrollo';
                services__description2.textContent = 'Desarrollo web personalizado adaptado a sus especificaciones, diseñado para brindar una experiencia de usuario impecable.';
                services__title3.textContent = 'Aplicación movil';
                services__description3.textContent = 'Diseñe y transforme proyectos de sitios web en aplicaciones móviles para brindar una experiencia de usuario perfecta.';

                section__titleprojeto.textContent = 'Proyectos.';
                projects__subtitle1.textContent = 'Website';
                projects__title1.textContent = 'App';
                projects__description1.textContent = "Proyecto que realizas en el diseño y estructura del trazado, mostrando el diseño a petición del cliente.";
                projects__link1.innerHTML = '<i class="ri-github-line"></i>  Vista';
                projects__link2.innerHTML = ' <i class="ri-dribbble-line"></i> Deploy';
                projects__subtitle2.textContent = 'App';
                projects__title2.textContent = 'Quiz App';
                projects__description2.textContent = "Proyecto que realizas en el diseño y estructura del trazado, mostrando el diseño a petición del cliente.";
                projects__link3.innerHTML = '<i class="ri-github-line"></i>  Vista';
                projects__link4.innerHTML = ' <i class="ri-dribbble-line"></i> Deploy';
                projects__subtitle3.textContent = 'Website';
                projects__title3.textContent = 'Manicure Site';
                projects__description3.textContent = "Proyecto que realizas en el diseño y estructura del trazado, mostrando el diseño a petición del cliente.";
                projects__link5.innerHTML = '<i class="ri-github-line"></i>  Vista';
                projects__link6.innerHTML = '<i class="ri-dribbble-line"></i> Deploy';
                projects__subtitle4.textContent = 'App';
                projects__title4.textContent = 'IMC App';
                projects__description4.innerHTML = "Proyecto que realizas en el diseño y estructura del trazado, mostrando el diseño a petición del cliente.";
                projects__link7.innerHTML = '<i class="ri-github-line"></i>  Vista';
                projects__link8.innerHTML = '<i class="ri-dribbble-line"></i> Deploy';

                section__titlecontato.textContent = 'Contáctame.';
                contact__descriptioncontato.textContent = "Leeré todos los correos electrónicos. Envíame cualquier mensaje y me pondré en contacto contigo.";
                contact__descriptioncontato2.innerHTML = "necesito el tuyo <b>Nombre</b> y <b>Dirección de correo electrónico</b>, pero no recibirás nada más que tu respuesta.";
                contact__title.textContent = 'Envíeme un mensaje';
                contact__label1.innerHTML = '<input type="text" name="user_name" class="contact__input" id="name" required placeholder="Nombre de pila"><label for="name" class="contact__label">Nombre de pila</label>';
                contact__label2.innerHTML = '<input type="email" name="user_email" class="contact__input" id="email" required placeholder="Correo electrónico"><label for="email" class="contact__label">Correo electrónico</label>';
                contact__label3.innerHTML = '<input type="text" name="user_subject" class="contact__input" id="subject" required placeholder="sujeto"><label for="subject" class="contact__label">sujeto</label>';
                contact__label4.innerHTML = '<textarea name="user_message" id="message" class="contact__input" required placeholder="mensaje"></textarea><label for="message" class="contact__label">mensaje</label>';
                contact__button2.innerHTML = '<i class="ri-send-plane-line"></i> Enviar mensaje';
                contact__social1.textContent = 'O';
                contact__social2.textContent = 'Escríbeme a mis redes sociales';

                footer__link1.textContent = 'Sobre Mi';
                footer__link2.textContent = 'Servicios';
                footer__link3.textContent = 'Proyectos';
                footer__copy.innerHTML = '&#169; Todos los derechos reservados por <a href="https://github.com/NotedSilva" target="_blank">NotedSilva.</a>';
                break
        }
    }
});