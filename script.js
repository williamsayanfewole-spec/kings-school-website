/* ================= MOBILE MENU ================= */

const menuButton = document.getElementById("menuButton");
const navbar = document.getElementById("navbar");

if (menuButton && navbar) {

```
menuButton.addEventListener("click", function () {

    navbar.classList.toggle("active");

});
```

}

/* Close mobile menu when a navigation link is clicked */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {

```
link.addEventListener("click", function () {

    navbar.classList.remove("active");

});
```

});

/* ================= FOOTER YEAR ================= */

const yearElement = document.getElementById("year");

if (yearElement) {

```
yearElement.textContent = new Date().getFullYear();
```

}
