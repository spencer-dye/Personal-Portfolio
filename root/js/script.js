  let mobileMenu = document.getElementById("mobileMenu")
  let mobileNav = document.getElementById("mobileNav")
  let nav = document.getElementById('nav')
  let menuStatus = false

  mobileMenu.addEventListener('click', menuClose)

  function menuClose() {
    if(menuStatus === false) {
      mobileNav.classList.remove('menu-hide')
      nav.classList.add('menu-open')
      menuStatus = true
    } else {
      mobileNav.classList.add('menu-hide')
      nav.classList.remove('menu-open')
      menuStatus = false
    }
  }