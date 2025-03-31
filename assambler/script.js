let change_theme = document.querySelector('.change-theme');
change_theme.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.querySelector('header').classList.toggle('dark-header');
    document.querySelector('footer').classList.toggle('dark-footer');
    document.querySelector('form').classList.toggle('dark-form');
    if (document.body.classList.contains('dark')) {
        change_theme.innerText = '🌙';
    }
    else {
        change_theme.innerText = '☀️';
    }
});