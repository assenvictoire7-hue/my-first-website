
// const navLinks = document.querySelectorAll('nav ul li a');

// navLinks.forEach(link => {
//   link.addEventListener('click', function(e) {
//     e.preventDefault();
//     const target = document.querySelector(this.getAttribute('href'));
//     target.scrollIntoView({ behavior: 'smooth', block: 'start' });
//   });
// });

// const aiCenter = document.querySelector('.center-ai');
// const rings = document.querySelectorAll('.ring');

// document.addEventListener('mousemove', (e) => {
//   const x = (e.clientX / window.innerWidth - 0.5) * 20;
//   const y = (e.clientY / window.innerHeight - 0.5) * 20;

  
//   aiCenter.style.transform = `translate(${x}px, ${y}px)`;

//   rings.forEach((ring, index) => {
//     const rotation = (e.clientX + e.clientY) / (50 + index * 20);
//     ring.style.transform = `rotate(${rotation}deg)`;
//   });
// });

// const sections = document.querySelectorAll('section');

// window.addEventListener('scroll', () => {
//   sections.forEach(section => {
//     const top = section.getBoundingClientRect().top;
//     const windowHeight = window.innerHeight;
//     if(top < windowHeight - 100) {
//       section.style.opacity = 1;
//       section.style.transform = 'translateY(0)';
//       section.style.transition = 'all 0.8s ease-out';
//     } else {
//       section.style.opacity = 0;
//       section.style.transform = 'translateY(40px)';
//     }
//   });
// });

// sections.forEach(section => {
//   section.style.opacity = 0;
//   section.style.transform = 'translateY(40px)';
// });

// const ctaButton = document.querySelector('.btn');

// ctaButton.addEventListener('mouseenter', () => {
//   ctaButton.style.transform = 'scale(1.05)';
// });

// ctaButton.addEventListener('mouseleave', () => {
//   ctaButton.style.transform = 'scale(1)';
// });

// ctaButton.addEventListener('click', () => {
//   alert('Thank you for joining AgriSHEild AI!');
// });

// const form = document.querySelector('form');

// form.addEventListener('submit', function(e) {
//   const name = form.querySelector('input[type="text"]').value.trim();
//   const email = form.querySelector('input[type="email"]').value.trim();
//   const message = form.querySelector('textarea').value.trim();

//   if(!name || !email.includes('@') || !message) {
//     e.preventDefault();
//     alert('Please fill out all fields correctly before submitting!');
//   } else {
//     alert('Thank you for your message. We will get back to you soon!');
//   }
// });