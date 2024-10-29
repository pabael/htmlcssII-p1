/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

document.addEventListener("DOMContentLoaded", function () {

  //Change the active
  const containers = document.querySelectorAll(".main-container, .history-container, .architecture-container, .curiosities-container, .virgen-container");
  const navLinks = document.querySelectorAll(".nav-link");

  function changeLinkState() {
    let scrollPosition = window.scrollY + 70;

    containers.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${section.id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  //Hidden the menu in the 'inicio'
  const navbar = document.querySelector('.navbar');
  const inicioSection = document.querySelector('#main');
  let lastScrollTop = 0;


  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    const inicioTop = inicioSection.offsetTop;
    const inicioHeight = inicioSection.clientHeight;

    if (window.innerWidth >= 992) {
      if (scrollTop < inicioTop + inicioHeight - navbarHeight) {
        navbar.classList.add("hidden");
      } else {
        navbar.classList.remove("hidden");
      }
    } else {
      navbar.classList.remove("hidden");
    }

    lastScrollTop = scrollTop;
  });

  window.addEventListener("scroll", changeLinkState);
  changeLinkState();

  //Menu start before the section

  function smoothScroll (e){
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    let navbarHeight = 0;

    if (window.innerWidth >= 992) {
      navbarHeight = document.querySelector('.navbar').offsetHeight;
    } else {
      navbarHeight = document.querySelector('.navbar button').offsetHeight;
      const navbar = document.getElementById("navbar");
      navbar.classList.toggle("show");
    }
    const targetPosition = targetElement.offsetTop - navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
  });

  const sectionsBtn = document.querySelectorAll(".btn .btn-primary");

  sectionsBtn.forEach(btn => {
    btn.addEventListener('click', smoothScroll);
  });

});

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const navbarToggler = document.querySelector(".navbar-toggler");

  navbarToggler.addEventListener("click", function () {
    navbar.classList.toggle("show");
  });
});