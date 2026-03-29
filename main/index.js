// Анимация появления элементов при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.main-container');
    const links = document.querySelectorAll('.archive-link');
    
    // Анимация контейнера
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    container.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    setTimeout(() => {
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
    
    // Анимация ссылок с задержкой
    links.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateX(-20px)';
        link.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        
        setTimeout(() => {
            link.style.opacity = '1';
            link.style.transform = 'translateX(0)';
        }, 300 + (index * 150));
    });
    
    // Добавляем эффект ripple при клике
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
});

// Добавляем CSS анимацию ripple
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
