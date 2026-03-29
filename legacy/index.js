// Legacy Archive JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.archive-container');
    const backLink = document.querySelector('.back-link');
    
    // Анимация появления
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    container.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    setTimeout(() => {
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
    
    // Анимация кнопки назад
    if (backLink) {
        backLink.style.opacity = '0';
        backLink.style.transform = 'translateY(10px)';
        backLink.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        
        setTimeout(() => {
            backLink.style.opacity = '1';
            backLink.style.transform = 'translateY(0)';
        }, 300);
    }
});
