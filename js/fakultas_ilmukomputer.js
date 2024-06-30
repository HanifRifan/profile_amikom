document.addEventListener('DOMContentLoaded', function() {
    const imagesContainer = document.querySelector('.gallery .images');

    imagesContainer.addEventListener('mouseover', () => {
        imagesContainer.style.animationPlayState = 'paused';
    });

    imagesContainer.addEventListener('mouseleave', () => {
        imagesContainer.style.animationPlayState = 'running';
    });
});