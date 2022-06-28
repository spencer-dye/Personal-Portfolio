  let mobileMenu = document.getElementById("mobileMenu")
  let mobileNav = document.getElementById("mobileNav")
  let nav = document.getElementById('nav')
  let mLine1 = document.getElementById('mLine1')
  let mLine2 = document.getElementById('mLine2')
  let mLine3 = document.getElementById('mLine3')
  let menuStatus = false

  mobileMenu.addEventListener('click', menuClose)

  function menuClose() {
    if(menuStatus === false) {
      mobileNav.classList.remove('menu-hide')
      nav.classList.add('menu-open')
      mLine1.classList.add('m-line-1-active')
      mLine2.classList.add('m-line-2-active')
      mLine3.classList.add('m-line-3-active')
      menuStatus = true
    } else {
      mobileNav.classList.add('menu-hide')
      nav.classList.remove('menu-open')
      mLine1.classList.remove('m-line-1-active')
      mLine2.classList.remove('m-line-2-active')
      mLine3.classList.remove('m-line-3-active')
      menuStatus = false
    }
  }