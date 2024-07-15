// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('ul li a');
// let song = document.getElementById('backgroundSong');
// let songControl = document.getElementById('songControl');
// let icon = songControl.querySelector("i");
//
// window.onscroll = () => {
//     let currentActiveLink = null; // Garder une trace du lien actif
//
//     sections.forEach(section => {
//         let top = window.scrollY;
//         let offset = section.offsetTop - 180;
//         let height = section.offsetHeight;
//         let id = section.getAttribute('id');
//
//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(link => {
//                 link.classList.remove('active');
//                 const icon = link.querySelector('.here');
//                 if (icon) {
//                     // Supprimer l'icône si elle est déjà présente
//                     icon.remove();
//                 }
//             });
//
//             // Récupérer le lien actif
//             const activeLink = document.querySelector("ul li a[href*=" + id + "]");
//             if (activeLink) {
//                 // Vérifier si l'icône est déjà ajoutée
//                 if (!activeLink.querySelector('.here')) {
//                     // Créer et ajouter l'icône
//                     const icon = document.createElement('i');
//                     icon.classList.add('here', 'bx', 'bx-chevrons-left', 'bx-fade-left');
//                     activeLink.appendChild(icon);
//                 }
//                 // Ajouter la classe 'active' au lien actif
//                 activeLink.classList.add('active');
//                 currentActiveLink = activeLink; // Mise à jour du lien actif
//             }
//         }
//     });
//
//     // Supprimer l'icône si le lien actif change
//     if (currentActiveLink) {
//         navLinks.forEach(link => {
//             if (link !== currentActiveLink) {
//                 const icon = link.querySelector('.here');
//                 if (icon) {
//                     icon.remove();
//                 }
//             }
//         });
//     }
// }
//
// songControl.onclick = function () {
//     if (song.paused) {
//         song.play();
//         songControl.textContent = "Stop the song";
//         songControl.innerHTML += "<i class='bx bx-volume-mute bx-sm pt-1' ></i>";
//     }else {
//         song.pause();
//         songControl.textContent = "Play the song";
//         songControl.innerHTML += "<i class='bx bx-volume-full  bx-sm pt-1' ></i>";
//     }
// }
//
// window.addEventListener('load',
//     function() {
//         songControl.innerHTML += "<i class='bx bx-volume-mute  bx-sm pt-1' ></i>";
//     }, false);
//
// document.body.classList.add('lock-scroll');

setTimeout(function() {
    var preloader = document.getElementById('preloader');
    preloader.style.animation = 'fadeOutUp 4s forwards';
    preloader.addEventListener('animationend', function() {
        document.body.classList.remove('lock-scroll');
    });
}, 2000);
