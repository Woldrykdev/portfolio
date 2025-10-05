import { useEffect, useState } from 'react';

export const SmoothScroll = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Función para scroll suave con transición
    const smoothScrollWithTransition = (targetId) => {
      const target = document.getElementById(targetId);
      if (target) {
        // Activar transición
        setIsTransitioning(true);
        document.body.style.pointerEvents = 'none';
        
        // Pequeña animación de fade
        document.body.style.opacity = '0.7';
        
        setTimeout(() => {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Restaurar después del scroll
          setTimeout(() => {
            document.body.style.opacity = '1';
            document.body.style.pointerEvents = 'auto';
            setIsTransitioning(false);
          }, 800);
        }, 150);
      }
    };

    // Manejar clicks en enlaces de navegación
    const handleNavClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        smoothScrollWithTransition(targetId);
      }
    };

    // Añadir event listeners a todos los enlaces que empiecen con #
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavClick);
    });

    // Añadir estilos de transición al body
    document.body.style.transition = 'opacity 0.3s ease';

    // Cleanup
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavClick);
      });
      document.body.style.transition = '';
      document.body.style.opacity = '';
      document.body.style.pointerEvents = '';
    };
  }, []);

  return null; // Este componente no renderiza nada
};
