document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Scroll Fade-In Animation ---
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });

    // --- 2. Advanced Multi-Carousel Logic ---
    // This finds every carousel on the page and sets them up individually
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach((carousel) => {
        const slides = carousel.querySelectorAll('.carousel-slide');
        const prevBtn = carousel.querySelector('.prev-btn');
        const nextBtn = carousel.querySelector('.next-btn');
        
        if (slides.length > 0 && prevBtn && nextBtn) {
            let currentSlideIndex = 0;

            function showSlide(index) {
                slides.forEach((slide) => {
                    slide.classList.remove('active');
                });
                slides[index].classList.add('active');
            }

            nextBtn.addEventListener('click', () => {
                currentSlideIndex++;
                if (currentSlideIndex >= slides.length) {
                    currentSlideIndex = 0; 
                }
                showSlide(currentSlideIndex);
            });

            prevBtn.addEventListener('click', () => {
                currentSlideIndex--;
                if (currentSlideIndex < 0) {
                    currentSlideIndex = slides.length - 1; 
                }
                showSlide(currentSlideIndex);
            });
        }
    });
});