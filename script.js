/************************* toggle Icon navbar **************************/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/************************* scroll section active list **************************/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                let activeLink = document.querySelector('header nav a[href*="' + id + '"]');
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            });
        }
    });

    /************************* sticky navbar **************************/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /************************* remove toggle icon and navbar **************************/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { orgin: 'top' });
ScrollReveal().reveal('.home-img, .skill-content, .project-box, .contact form', { orgin: 'buttom' });
ScrollReveal().reveal('.home-contact h1, .about-content, .arts', { orgin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content,', { orgin: 'right' });

const typed = new Typed('.multiple-text', {
    strings: ['a Jr. Web Developer', ' an Artist','a Frontend Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});
