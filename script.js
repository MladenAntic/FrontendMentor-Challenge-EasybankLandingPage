const navLinks = document.querySelectorAll(".nav-item a");
const hoverLines = document.querySelectorAll(".hover-line");
const socialIcons = document.querySelectorAll(".social-icon");
const socialIconsHover = document.querySelectorAll(".social-icon-hover");
const mobileOverlay = document.querySelector(".mobile-overlay");
const mobileNavigation = document.getElementById("mobile-navigation");
const toggleMenu = document.querySelector(".toggle-menu");

const closeMenu = document.createElement("img");
closeMenu.src = "images/icon-close.svg";
closeMenu.alt = "Icon Close";
closeMenu.style.pointerEvents = "all";
closeMenu.style.cursor = "pointer";

for (let i = 0; i < 5; i++) {
  navLinks[i].addEventListener("mouseover", () => {
    hoverLines[i].style.display = "block";
  });
  navLinks[i].addEventListener("mouseout", () => {
    hoverLines[i].style.display = "none";
  });

  socialIcons[i].addEventListener("mouseover", () => {
    socialIcons[i].style.display = "none";
    socialIconsHover[i].style.display = "inline-block";
  });
  socialIcons[i].addEventListener("mouseout", () => {
    socialIcons[i].style.display = "inline-block";
    socialIconsHover[i].style.display = "none";
  });
}

toggleMenu.addEventListener("click", () => {
  toggleMenu.replaceWith(closeMenu);
  mobileOverlay.style.display = "block";
  mobileNavigation.style.display = "block";
});

closeMenu.addEventListener("click", () => {
    closeMenu.replaceWith(toggleMenu);
    mobileOverlay.style.display = "none";
    mobileNavigation.style.display = "none";
  });

function hideMobileMenu() {
  if (window.innerWidth > 925) {
    mobileOverlay.style.display = "none";
    mobileNavigation.style.display = "none";
    closeMenu.replaceWith(toggleMenu)
  }
}

window.addEventListener('resize', hideMobileMenu)
