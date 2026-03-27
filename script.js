const textBuscar = document.getElementById("buscar");
const textoHero = document.getElementById("text-hero");
const boxHero = document.getElementById("text-container-hero");
const subMenu = document.querySelector(".menu-container-2");
const explorarBtn = document.getElementById("explorar-btn");
const listMenu = document.querySelectorAll("#list-menu a, #list-menu-2 a");

// 🎮 EFECTO DE TIPEO - Animación de escritura
function efectoTipeo(elemento, texto, velocidad = 50) {
    elemento.textContent = "";
    let indice = 0;

    const intervalo = setInterval(() => {
        if (indice < texto.length) {
            elemento.textContent += texto[indice];
            indice++;
        } else {
            clearInterval(intervalo);
        }
    }, velocidad);
}

// 📝 FUNCIÓN DE BÚSQUEDA MEJORADA
function cambiarTexto() {
    const usuarioTexto = textBuscar.value;

    if (usuarioTexto.trim() === "") return;

    subMenu.style.display = "none";
    efectoTipeo(textoHero, usuarioTexto, 30);
    textBuscar.value = "";

    boxHero.style.backgroundColor = "#ad11ad5d";
    boxHero.style.transform = "scale(1.05)";

    setTimeout(() => {
        boxHero.style.transform = "scale(1)";
    }, 300);
}

// ⌨️ ENTER PARA BUSCAR
textBuscar.addEventListener("keypress", (e) => {
    if (e.key === "Enter") cambiarTexto();
});

// 🎯 EFECTOS EN BOTÓN EXPLORAR
explorarBtn.addEventListener("click", () => {
    crearConfeti();
    explorarBtn.style.transform = "scale(0.95)";
    setTimeout(() => {
        explorarBtn.style.transform = "scale(1)";
    }, 100);
});

// ✨ CONFETI AL HACER CLICK
function crearConfeti() {
    const colores = ["#08d9d6", "#ff006e", "#ffbe0b", "#8338ec"];

    for (let i = 0; i < 20; i++) {
        const confeti = document.createElement("div");
        confeti.style.position = "fixed";
        confeti.style.width = "10px";
        confeti.style.height = "10px";
        confeti.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
        confeti.style.left = Math.random() * 100 + "%";
        confeti.style.top = "-10px";
        confeti.style.borderRadius = "50%";
        confeti.style.pointerEvents = "none";
        confeti.style.zIndex = "9999";

        document.body.appendChild(confeti);

        let posY = 0;
        let velocidad = Math.random() * 3 + 2;

        const caida = setInterval(() => {
            posY += velocidad;
            confeti.style.top = posY + "px";

            if (posY > window.innerHeight) {
                clearInterval(caida);
                confeti.remove();
            }
        }, 20);
    }
}

// 🌈 EFECTO EN ENLACES DEL MENÚ
listMenu.forEach(enlace => {
    enlace.addEventListener("mouseenter", () => {
        enlace.style.color = "#ff006e";
        enlace.style.textShadow = "0 0 10px #ff006e";
        enlace.style.transition = "all 0.3s ease";
    });

    enlace.addEventListener("mouseleave", () => {
        enlace.style.color = getComputedStyle(enlace).color;
        enlace.style.textShadow = "none";
    });
});

// 🔊 EASTER EGG - Toca 5 veces el logo para sorpresa
let clicksLogo = 0;
const logo = document.getElementById("logo");

logo.addEventListener("click", () => {
    clicksLogo++;
    logo.style.transform = `rotate(${clicksLogo * 10}deg)`;

    if (clicksLogo === 5) {
        logo.textContent = "🎮 TECH SYSTEM 🎮";
        logo.style.color = "#ff006e";
        setTimeout(() => {
            logo.textContent = "TechSystem";
            logo.style.color = "#08d9d6";
            clicksLogo = 0;
        }, 1000);
    }
});
