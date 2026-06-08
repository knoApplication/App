// ======================================
// CONFIGURACIÓN
// ======================================

// URL de descarga
const downloadURL =
"https://drive.google.com/drive/folders/193GSKUGdGS_8M5L92dz0yyfjBurQxIZu?usp=drive_link";


// ======================================
// BOTÓN DESCARGAR
// ======================================

const downloadButton =
document.getElementById("downloadBtn");

if(downloadButton){

    downloadButton.addEventListener("click", () => {

        window.open(downloadURL, "_blank");

    });

}


// ======================================
// EFECTO APARICIÓN AL HACER SCROLL
// ======================================

const observer =
new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document
.querySelectorAll(".feature, .card")
.forEach((element) => {

    observer.observe(element);

});


// ======================================
// EFECTO PARALLAX EN EL TELÉFONO
// ======================================

const phone =
document.querySelector(".phone");

document.addEventListener("mousemove", (e) => {

    if(!phone) return;

    const x =
    (window.innerWidth / 2 - e.clientX) / 35;

    const y =
    (window.innerHeight / 2 - e.clientY) / 35;

    phone.style.transform =
    `rotateY(${x}deg) rotateX(${-y}deg)`;

});


// ======================================
// RESTAURAR POSICIÓN
// ======================================

document.addEventListener("mouseleave", () => {

    if(!phone) return;

    phone.style.transform =
    "rotateY(0deg) rotateX(0deg)";

});


// ======================================
// ANIMACIÓN DE TEXTO
// ======================================

const title =
document.querySelector(".text h1");

if(title){

    title.animate(
    [
        {
            opacity:0,
            transform:"translateY(30px)"
        },
        {
            opacity:1,
            transform:"translateY(0px)"
        }
    ],
    {
        duration:1200,
        fill:"forwards"
    });

}