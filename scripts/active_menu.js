document.addEventListener("DOMContentLoaded", ()=> {
    var currentPage = window.location.href;

    var menuItems = document.querySelectorAll('.header-nav ul li a');

    menuItems.forEach(function (item) {
        if (item && item.href === currentPage) {
            item.classList.add('active');
        }
    });
});
