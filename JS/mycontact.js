// Efecto de destello adicional en los iconos
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.position = 'absolute';
        sparkle.style.top = '50%';
        sparkle.style.left = '50%';
        sparkle.style.width = '150px';
        sparkle.style.height = '150px';
        sparkle.style.background = 'radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 70%)';
        sparkle.style.borderRadius = '50%';
        sparkle.style.transform = 'translate(-50%, -50%)';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.animation = 'fade-out 0.8s ease-out forwards';
        item.appendChild(sparkle);

        // Eliminar el destello después de la animación
        sparkle.addEventListener('animationend', () => {
            sparkle.remove();
        });
    });
});

// Añadir el efecto de muchas líneas de neón horizontales
const neonBackground = document.createElement('div');
neonBackground.className = 'neon-background';
document.body.appendChild(neonBackground);

// Generar muchas líneas de neón con diferentes colores y propiedades
const colors = ['#FF00FF', '#00FFFF', '#FF4500', '#32CD32', '#1E90FF', '#FFD700'];
for (let i = 0; i < 100; i++) {
    const line = document.createElement('div');
    line.className = 'neon-line';
    line.style.top = `${Math.random() * 100}vh`; // Posición vertical aleatoria
    line.style.background = colors[Math.floor(Math.random() * colors.length)]; // Color aleatorio
    line.style.animationDelay = `${Math.random() * 2}s`; // Retraso aleatorio
    line.style.animationDuration = `${1 + Math.random() * 4}s`; // Duración aleatoria
    neonBackground.appendChild(line);
}

// Animación CSS para destello y líneas
const style = document.createElement('style');
style.textContent = `
    @keyframes fade-out {
        0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(1.5);
        }
    }

    @keyframes move-line {
        0% {
            transform: translateX(-100vw);
        }
        100% {
            transform: translateX(100vw);
        }
    }
`;
document.head.appendChild(style);
