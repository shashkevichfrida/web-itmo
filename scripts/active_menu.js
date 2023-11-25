document.addEventListener("DOMContentLoaded", function () {
    var currentPage = window.location.href;

    var menuItems = document.querySelectorAll('.header-nav ul li');

    menuItems.forEach(function (item) {
        var link = item.querySelector('a');
        if (link && link.href === currentPage) {
            item.classList.add('active');
        }
    });
});