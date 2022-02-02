window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.promo__menu'),
    menuItem = document.querySelectorAll('.promo__item'),
    hamburger = document.querySelector('.promo__burger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('promo__burger_active');
        menu.classList.toggle('promo__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('promo__burger_active');
            menu.classList.toggle('promo__menu_active');
        })
    });
})