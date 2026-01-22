document.addEventListener('DOMContentLoaded', () => {
    // Navigation Logic
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('main section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);

            // Update Active Link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Show Target Section
            sections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.remove('hidden-section');
                    section.classList.add('active-section');
                } else {
                    section.classList.remove('active-section');
                    section.classList.add('hidden-section');
                }
            });
        });
    });

    // Typing Effect
    const typingElement = document.getElementById('typing-effect');
    const textToType = `Initializing connection...
Connected to hackea.me
> Whoami
  Mike. Estudiante de Redes y Seguridad Informática.
  
> Objective
  Documentar mi viaje en el mundo del Hacking Ético, 
  Administración de Sistemas y Redes.

> Status
  Working on: CCNA, Linux Hardening.
  Listening: /dev/null

_`;
    
    let charIndex = 0;
    const typeSpeed = 30; // ms per char

    function typeWriter() {
        if (charIndex < textToType.length) {
            typingElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, typeSpeed);
        }
    }

    // Start typing if on home page
    if (document.getElementById('home').classList.contains('active-section')) {
        setTimeout(typeWriter, 500);
    }

    // Uptime Counter
    const uptimeElement = document.getElementById('uptime');
    let seconds = 0;

    function formatTime(totalSeconds) {
        const h = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
        const m = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
        const s = (totalSeconds % 60).toString().padStart(2, '0');
        return `${h}:${m}:${s}`;
    }

    setInterval(() => {
        seconds++;
        uptimeElement.textContent = formatTime(seconds);
    }, 1000);
});
