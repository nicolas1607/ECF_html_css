const toggleMenu = document.querySelector('.navigation button');
const menu = document.querySelector('.navigation ul');

toggleMenu.addEventListener('click', function () {
  const open = JSON.parse(toggleMenu.getAttribute('aria-expanded'));
  toggleMenu.setAttribute('aria-expanded', open);
  menu.hidden = !menu.hidden;
  menu.position
  menu.style.display = "flex";

  if (menu.hidden) {
    menu.querySelector('a').focus();
    menu.style.display = "none";
  }
});