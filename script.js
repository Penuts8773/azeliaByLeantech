function toggleSubNav(element) {
    const subNav = element.nextElementSibling;

    if (subNav.style.display === "block") {
        subNav.style.display = "none";
    } else {
        subNav.style.display = "block";
    }
}
