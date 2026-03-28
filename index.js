const burger = document.querySelector('#burger');
const nav = document.querySelector('.nav-bar');

burger.addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('.nav-bar a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});
