// Add JavaScript code here
document.addEventListener('DOMContentLoaded', function () {
    const btns = document.querySelectorAll('.select');
    
    btns.forEach((btn, index) => {
      btn.addEventListener('click', function () {
        const card = document.querySelectorAll('.card')[index];
        card.classList.toggle('selected');
        btn.classList.toggle('active');
      });
    });
  });