
document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navi');
  
    burger.addEventListener('click', () => {
      nav.classList.toggle('active'); 
      burger.classList.toggle('active'); 
    });
  });
  