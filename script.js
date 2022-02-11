function initScrollMenu() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
  linksInternos.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });
}

function initAnimacaoScroll() {
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.js-scroll');
    const windowSize = window.innerHeight * 0.8;
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionVisible = sectionTop - windowSize < 0;
      if (sectionVisible) {
        section.classList.add('ativo');
      } else section.classList.remove('ativo');
    });
  });
}

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
});

window.onload = (initScrollMenu(), initAnimacaoScroll());
