// Ajoute un écouteur d'événements sur le défilement
window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    // Si la page est défilée de plus de 50px
    navbar.classList.add("scrolled"); // Ajoute la classe scrolled
  } else {
    navbar.classList.remove("scrolled"); // Supprime la classe scrolled
  }
});

// Sélectionner tous les liens de la navbar
const navLinks = document.querySelectorAll(".navbar .liNav a");

// Ajouter un événement de clic pour chaque lien
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    // Empêche le comportement par défaut du lien (saut instantané)
    e.preventDefault();

    // Sélectionne la section cible à partir de l'attribut href
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    // Calculer la position de la section cible
    const targetPosition = targetSection.offsetTop;

    // Fait défiler la page en douceur vers la section cible mais arrête à 100px au-dessus
    window.scrollTo({
      top: targetPosition - 100, // Ajuster la position de 100px plus haut
      behavior: "smooth", // Défilement fluide
    });
  });
});

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73)) {
    e.preventDefault();
    alert("L'accès à la console développeur est désactivé.");
  }
});
