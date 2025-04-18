const menuToggle=document.querySelector('#menu-toggle');
const menulist=document.querySelector('.menu-list');
menuToggle.addEventListener('click',  ()=>{
    menulist.classList.toggle('active');
});
document.body.style.userSelect = "none";

document.addEventListener('keydown', function(e) {
    
    if (e.key === "F12") {
        e.preventDefault();
    }

    if (e.ctrlKey && e.shiftKey && e.key === "I") {
        e.preventDefault();
    }
});

document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey && e.key === 'c') || 
        (e.ctrlKey && e.key === 'x') || 
        (e.ctrlKey && e.key === 'u')) {
        e.preventDefault();
    }
});
//scrollrevall//
ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400,
});
ScrollReveal().reveal('.content', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.about-content', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.about-image', { delay: 600, origin: 'bottom' });
ScrollReveal().reveal('.social-link-list', { delay: 500, origin: 'bottom' ,interval: 200 });
ScrollReveal().reveal('.menu-box', { delay: 700, origin: 'bottom' });
ScrollReveal().reveal('.gallary-image-box', { delay: 700, origin: 'bottom' });
ScrollReveal().reveal('.team', { delay: 700, origin: 'bottom' });
ScrollReveal().reveal('.contact-image', { delay: 700, origin: 'bottom' });
ScrollReveal().reveal('form', { delay: 700, origin: 'left' });



