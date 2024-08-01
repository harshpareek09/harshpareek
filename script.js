// script.js
document.addEventListener('DOMContentLoaded', () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('nav ul li a');
  
      navLinks.forEach(link => {
          link.addEventListener('click', (e) => {
              e.preventDefault();
              const targetId = link.getAttribute('href').substring(1);
              const targetSection = document.getElementById(targetId);
  
              window.scrollTo({
                  top: targetSection.offsetTop,
                  behavior: 'smooth'
              });
          });
      });
  });
  