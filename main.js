
const menuIcon = document.querySelector(".navbar_menu-icon")
const navList = document.querySelector("ul");
menuIcon.addEventListener('click', () => {
                menuIcon.classList.toggle("active");
                navList.classList.toggle("active")

})


