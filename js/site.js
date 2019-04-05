const backdrop = document.querySelector('.backdrop'),
      toggle = document.querySelector('.toggle-button'),
      mobileNav = document.querySelector('.mobile-nav');

// handle event listeners
toggle.addEventListener('click', openNav);
backdrop.addEventListener('click', closeNav)

// close nav
function closeNav() {
  mobileNav.classList.remove('show');
  backdrop.classList.remove('show');
}

function openNav() {
  mobileNav.classList.add('show');
  backdrop.classList.add('show');
}



// window.addEventListener('scroll', () => {
//   let scrolled = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
//   console.log(scrolled)

//   if(scrolled == 0) {
//     alert('here')
//   }
// })
