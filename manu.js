const btnMenu = document.getElementById('btn-menu');
const menuLinks = document.getElementById('menu-links');

btnMenu.addEventListener('click', () => {
    menuLinks.classList.toggle('ativo');
});
// opcional: fecha o menu ao clicar em um link
document.querySelectorAll('#menu-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuLinks.classList.remove('ativo');
    });
});
