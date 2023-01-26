const refs = {
  header: document.querySelector('.header'),
};

const handleScroll = () => {
  const { header } = refs;

  const mob = window.matchMedia('(max-width: 768px)');

  if (mob.matches) {
    header.classList.toggle('fixed', window.scrollY > 120);
  } else {
    header.classList.toggle('fixed', window.scrollY > 70);
  }
};

window.addEventListener('scroll', handleScroll);