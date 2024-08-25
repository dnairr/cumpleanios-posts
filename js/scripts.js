document.addEventListener("DOMContentLoaded", function() {
    // Función para cargar el contenido de un archivo de texto en un elemento <p>
    function loadTextFile(elementId, filePath) {
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error al cargar el archivo: " + filePath);
                }
                return response.text();
            })
            .then(data => {
                document.getElementById(elementId).textContent = data;
            })
            .catch(error => {
                console.error("Error al cargar el archivo de texto:", error);
                document.getElementById(elementId).textContent = "No se pudo cargar el mensaje.";
            });
    }

    // Cargar el contenido en cada <p>
    loadTextFile("mensaje-daniel", "./posts/Daniel_Vargas/mensaje.txt");
    loadTextFile("mensaje-javi", "./posts/Javi_S_/mensaje.txt");
    loadTextFile("mensaje-maxi", "./posts/Maxi_/mensaje.txt");
    loadTextFile("mensaje-pame", "./posts/Pame_/mensaje.txt");
    loadTextFile("mensaje-papa", "./posts/Papá/mensaje.txt");
    loadTextFile("mensaje-tia-jessica", "./posts/Tía_Jessica_/mensaje.txt");
    loadTextFile("mensaje-mati", "./posts/Bexcel/mensaje.txt");
    loadTextFile("mensaje-feña", "./posts/Fernanda/mensaje.txt");
    loadTextFile("mensaje-lalo", "./posts/Lalo/mensaje.txt");
    loadTextFile("mensaje-mama", "./posts/Mamá_/mensaje.txt");
    loadTextFile("mensaje-mona_grande", "./posts/Mona_Grande/mensaje.txt");
    loadTextFile("mensaje-amarito", "./posts/Amarito/mensaje.txt");
    loadTextFile("mensaje-branndon", "./posts/Branndon/mensaje.txt");
});


// Añade esto a tu archivo scripts.js
let confettiLaunched = false;

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= documentHeight && !confettiLaunched) {
        confettiLaunched = true; // Evitar lanzar confeti múltiples veces
        confetti({
            particleCount: 300,
            spread: 100,
            origin: { y: 1 } // Asegura que el confeti salga desde abajo
        });
    }
});

// Obtener todos los posts
const posts = document.querySelectorAll('.post');

// Configurar el Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Si el post entra en la vista, añadir la clase 'fade-in'
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target); // Dejar de observar una vez que se ha animado
        }
    });
}, {
    threshold: 0.2 // Umbral de visibilidad (20% del post visible para activarse)
});

// Observar cada post
posts.forEach(post => {
    observer.observe(post);
});

