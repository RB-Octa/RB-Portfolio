// toggle icon navbar 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// scroll section 
 let sections = document.querySelectorAll('section');
 let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => { 
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            // active navbar Links 
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active section for animation on scroll
            sec.classList.add('show-animation');
        }
        // if want to use animation that repeats on this scroll
        else {
            sec.classList.remove('show-animation');
        }
    });

    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll) 
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}


// scroll reveal 
ScrollReveal({
    reset: false,
    distance: '80px',
    duration: 1500,
    delay: 120
});

ScrollReveal().reveal('.home-content, .heading, .home', { delay: 200, origin: 'top' });
ScrollReveal().reveal('.text-animate, .skills .title', { delay: 400, origin: 'left' });
ScrollReveal().reveal('.home-content h1, .home-content p', { delay: 400, origin: 'right' });
ScrollReveal().reveal('.home-sci a, .about-content', { origin: 'bottom', interval: '400' });

ScrollReveal().reveal('.education-row, .content, .l', { origin: 'left', interval: 400 });


ScrollReveal().reveal('.l, .sidebar', { origin: 'left', interval: 300 });
ScrollReveal().reveal('.R', { origin: 'rigth', interval: 300 });


ScrollReveal().reveal('.skills-column, textarea, .contact .btn, .work', { origin: 'bottom', interval: 180 });



// read more 
const parentContainer = document.querySelector('.about-content');

parentContainer.addEventListener('click', event=> {

    const current = event.target;

    const isReadMoreBtn = current.className.includes('read-more-btn');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text');

    currentText.classList.toggle('read-more-text--show');

    current.textContent = current.textContent.includes('Read More') ?
    "Read Less..." : "Read More";
})


// email JS 
function sendMail() {
    var params = {
      fullname: document.getElementById("fullname").value,
      emailAdd: document.getElementById("emailAdd").value,
      mobile: document.getElementById("mobile").value,
      emailSub: document.getElementById("emailSub").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_a28726v";
    const templateID = "template_vhpyofa";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("fullname").value = "";
          document.getElementById("emailAdd").value = "";
          document.getElementById("mobile").value = "";
          document.getElementById("emailSub").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }


