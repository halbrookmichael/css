const modal = document.querySelector('.modal'),
      plansBtn = document.querySelectorAll('.plan button'),
      closeBtn = document.querySelector('.modal__action--negative');
      
let i;

// handle event listeners
for(i = 0;i < plansBtn.length;i ++) {
  plansBtn[i].addEventListener('click', openModal);
}
backdrop.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);

// open modal
function openModal() {
  backdrop.classList.add('show');
  modal.classList.add('show');
}

// close modal
function closeModal() {
  backdrop.classList.remove('show');
  modal.classList.remove('show');
}