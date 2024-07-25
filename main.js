
document.addEventListener('DOMContentLoaded', (event) => {
    const menuButton = document.getElementById('menuButton');
    const mainNav = document.getElementById('mainNav');

    menuButton.addEventListener('click', () => {
        if (mainNav.classList.contains('hidden')) {
            mainNav.classList.remove('hidden');
            mainNav.classList.add('visible');
        } else {
            mainNav.classList.remove('visible');
            mainNav.classList.add('hidden');
        }
    });
});
