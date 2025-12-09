

document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loaded');
    
    
    createFloatingElements();
    
    
    createShadowEffects();
    
    
    createBackToTopButton();
    
    
    createReadingProgressBar();
    
    
    setupScrollReveal();
    
    
    setupTextHoverEffects();
    
    
    addIconToHomeButton();
});

function createFloatingElements() {
    const container = document.querySelector('.contingut_text');
    
    for (let i = 0; i < 3; i++) {
        const element = document.createElement('div');
        element.classList.add('floating-element');
        container.appendChild(element);
    }
}

function createShadowEffects() {
    const body = document.body;
    
    for (let i = 0; i < 2; i++) {
        const shadow = document.createElement('div');
        shadow.classList.add('shadow-effect');
        body.appendChild(shadow);
    }
}

function createBackToTopButton() {
    const backButton = document.createElement('div');
    backButton.classList.add('back-to-top');
    backButton.innerHTML = '↑';
    backButton.title = 'Volver arriba';
    document.body.appendChild(backButton);
    
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backButton.classList.add('visible');
        } else {
            backButton.classList.remove('visible');
        }
    });
    
    
    backButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function createReadingProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    document.body.appendChild(progressBar);
    
    
    window.addEventListener('scroll', function() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        
        const progress = (scrolled / documentHeight) * 100;
        progressBar.style.width = `${progress}%`;
    });
}

function setupScrollReveal() {
    const paragraphs = document.querySelectorAll('p');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    paragraphs.forEach(p => observer.observe(p));
}

function setupTextHoverEffects() {
    const title = document.querySelector('h1');
    const paragraphs = document.querySelectorAll('p');
    const firstLetter = document.querySelector('.contingut_text p:first-of-type::first-letter');
    
    
    title.addEventListener('mouseenter', function() {
        this.style.animationDuration = '2s';
    });
    
    title.addEventListener('mouseleave', function() {
        this.style.animationDuration = '8s';
    });
    
    
    paragraphs.forEach(p => {
        p.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.01)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        p.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

function addIconToHomeButton() {
    
    const homeButton = document.querySelector('.home-button');
    
    
    if (homeButton) {
        const svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgIcon.setAttribute("width", "16");
        svgIcon.setAttribute("height", "16");
        svgIcon.setAttribute("viewBox", "0 0 16 16");
        svgIcon.setAttribute("fill", "currentColor");
        svgIcon.style.marginRight = "8px";
        
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", "M8 0L0 5.333V16h5.333V10.667h5.334V16H16V5.333z");
        
        svgIcon.appendChild(path);
        
        
        homeButton.insertBefore(svgIcon, homeButton.firstChild);
        
        
        if (!homeButton.querySelector('span')) {
            const textSpan = document.createElement('span');
            textSpan.textContent = homeButton.textContent;
            homeButton.textContent = '';
            homeButton.appendChild(svgIcon);
            homeButton.appendChild(textSpan);
        }
    }
}