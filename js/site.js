const backdrop = document.querySelector('.backdrop'),
      modal = document.querySelector('.modal'),
      plansBtn = document.querySelectorAll('.plan button'),
      closeBtn = document.querySelector('.modal__action--negative'),
      toggle = document.querySelector('.toggle-button'),
      mobileNav = document.querySelector('.mobile-nav');
      
let i;

// handle event listeners
for(i = 0;i < plansBtn.length;i ++) {
  plansBtn[i].addEventListener('click', openModal);
}
backdrop.addEventListener('click', close);
closeBtn.addEventListener('click', close);
toggle.addEventListener('click', openMobileNav);

// open modal
function openModal() {
  backdrop.classList.add('show');
  modal.classList.add('show');
}

// close modal
function close() {
  backdrop.classList.remove('show');
  modal.classList.remove('show');
  mobileNav.classList.remove('show');;
}

function openMobileNav() {
  mobileNav.classList.add('show');
  backdrop.classList.add('show');
}