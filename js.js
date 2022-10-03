// Links ficarem ativos e sublinhados

// const links = document.querySelectorAll('.header-menu a');

// function ativarLink(link) {
//     const url = location.href
//     const href = link.href

//     if (url.includes(href)){
//         link.classList.add('ativo');
//     }
// }

// links.forEach(ativarLink)

// Menu Hamburguer

const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type == "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

// Scroll Suave nos Links Internos

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('#nav a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

initScrollSuave();
