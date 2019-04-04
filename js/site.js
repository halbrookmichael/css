const backdrop = document.querySelector('.backdrop'),
      modal = document.querySelector('.modal'),
      plansBtn = document.querySelectorAll('.plan button'),
      closeBtn = document.querySelector('.modal__action--negative');
      
let i;

// handle event listeners
for(i = 0;i < plansBtn.length;i ++) {
  plansBtn[i].addEventListener('click', openModal);
}
backdrop.addEventListener('click', close);
closeBtn.addEventListener('click', close);

// open modal
function openModal() {
  backdrop.style.display = 'block';
  modal.style.display = 'block';
}

// close modal
function close() {
  backdrop.style.display = 'none';
  modal.style.display = 'none';
}