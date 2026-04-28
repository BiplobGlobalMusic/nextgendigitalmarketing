/* script.js - All JavaScript for Biplob Hosein Portfolio */

// ============================================
// THREE.JS 3D BACKGROUND
// ============================================

(function() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas-bg'), alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    const geometry = new THREE.TorusKnotGeometry(1.2, 0.35, 180, 24, 3, 4);
    const material = new THREE.MeshStandardMaterial({ 
        color: 0x00ffc3, 
        emissive: 0x004466, 
        roughness: 0.3, 
        metalness: 0.7 
    });
    const knot = new THREE.Mesh(geometry, material);
    scene.add(knot);
    
    const ambientLight = new THREE.AmbientLight(0x404060);
    scene.add(ambientLight);
    
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(2, 3, 4);
    scene.add(dirLight);
    
    const backLight = new THREE.PointLight(0x00b8ff, 0.5);
    backLight.position.set(-1, 1, -2);
    scene.add(backLight);
    
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 1500;
    const starPositions = new Float32Array(starCount * 3);
    
    for (let i = 0; i < starCount; i++) {
        starPositions[i * 3] = (Math.random() - 0.5) * 200;
        starPositions[i * 3 + 1] = (Math.random() - 0.5) * 100;
        starPositions[i * 3 + 2] = (Math.random() - 0.5) * 80 - 40;
    }
    
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({ color: 0xaaffff, size: 0.2 });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);
    
    camera.position.z = 4.5;
    camera.position.y = 1;
    
    function animate() {
        requestAnimationFrame(animate);
        knot.rotation.x += 0.008;
        knot.rotation.y += 0.012;
        stars.rotation.y += 0.0005;
        stars.rotation.x += 0.0003;
        renderer.render(scene, camera);
    }
    
    animate();
    
    window.addEventListener('resize', function() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
})();


// ============================================
// REVIEW DATA FROM DIFFERENT COUNTRIES
// ============================================

const reviews = [
    {
        flag: "🇺🇸",
        name: "John Smith",
        country: "United States",
        rating: "★★★★★",
        text: "Amazing work! The team delivered exactly what I needed. Very professional and creative. Will definitely work with them again!"
    },
    {
        flag: "🇩🇪",
        name: "Sophie Müller",
        country: "Germany",
        rating: "★★★★★",
        text: "Excellent quality and fast delivery. The design is modern and user-friendly. Highly recommended!"
    },
    {
        flag: "🇯🇵",
        name: "Yuki Tanaka",
        country: "Japan",
        rating: "★★★★★",
        text: "Very professional work. Attention to detail is impressive. Great communication throughout."
    },
    {
        flag: "🇧🇷",
        name: "Carlos Silva",
        country: "Brazil",
        rating: "★★★★☆",
        text: "Great job! The website is beautiful and responsive. Just a few minor adjustments needed but overall excellent!"
    },
    {
        flag: "🇮🇳",
        name: "Priya Patel",
        country: "India",
        rating: "★★★★★",
        text: "Outstanding work! Very creative and innovative. The animations and design are top-notch."
    },
    {
        flag: "🇬🇧",
        name: "James Wilson",
        country: "United Kingdom",
        rating: "★★★★★",
        text: "Superb quality! Delivered before deadline. Will hire again for future projects."
    },
    {
        flag: "🇨🇦",
        name: "Emily Brown",
        country: "Canada",
        rating: "★★★★★",
        text: "Absolutely fantastic experience! The team understood my requirements perfectly and delivered beyond expectations."
    },
    {
        flag: "🇦🇺",
        name: "Michael Lee",
        country: "Australia",
        rating: "★★★★★",
        text: "One of the best freelancers I've worked with. Professional, timely, and high-quality work. 10/10!"
    },
    {
        flag: "🇫🇷",
        name: "Claire Martin",
        country: "France",
        rating: "★★★★★",
        text: "Excellent communication and outstanding design work. Very happy with the final result!"
    }
];


// ============================================
// DEMO WORKS DATA
// ============================================

const demos = [
    {
        icon: "🎨",
        title: "E-commerce Website",
        description: "Complete online store with cart system, payment gateway, and product management.",
        tech: ["HTML5", "CSS3", "JavaScript", "React"],
        link: "#"
    },
    {
        icon: "📱",
        title: "Weather App",
        description: "Real-time weather application with 7-day forecast and location detection.",
        tech: ["HTML5", "CSS3", "JavaScript", "API"],
        link: "#"
    },
    {
        icon: "💼",
        title: "Portfolio Dashboard",
        description: "Modern portfolio template with animations, dark mode, and responsive design.",
        tech: ["HTML5", "CSS3", "JavaScript", "GSAP"],
        link: "#"
    },
    {
        icon: "📊",
        title: "Task Manager",
        description: "Productivity app with drag-drop features, deadlines, and progress tracking.",
        tech: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
        link: "#"
    },
    {
        icon: "🎮",
        title: "Memory Game",
        description: "Interactive memory card game with scoring system and multiple levels.",
        tech: ["HTML5", "CSS3", "JavaScript", "DOM"],
        link: "#"
    },
    {
        icon: "📝",
        title: "Blog Platform",
        description: "Full blog system with comments, likes, and admin panel features.",
        tech: ["HTML5", "CSS3", "JavaScript", "Node.js"],
        link: "#"
    }
];


// ============================================
// LOAD DEMOS INTO CONTAINER
// ============================================

function loadDemos() {
    const container = document.getElementById('demoContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    demos.forEach((demo, index) => {
        const card = document.createElement('div');
        card.className = 'demo-card';
        card.style.animationDelay = `${index * 0.1}s`;
        
        const techTags = demo.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
        
        card.innerHTML = `
            <div class="demo-image">
                ${demo.icon}
            </div>
            <div class="demo-content">
                <div class="demo-title">${demo.title}</div>
                <div class="demo-description">${demo.description}</div>
                <div class="demo-tech">${techTags}</div>
                <a href="${demo.link}" class="demo-link">View Demo →</a>
            </div>
        `;
        container.appendChild(card);
    });
}


// ============================================
// LOAD REVIEWS INTO SLIDER
// ============================================

function loadReviewsIntoSlider() {
    const slider = document.getElementById('testimonialSlider');
    if (!slider) return;
    
    slider.innerHTML = '';
    
    reviews.forEach((review, index) => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <div class="country-flag">${review.flag}</div>
            <div class="rating">${review.rating}</div>
            <div class="review-text">"${review.text}"</div>
            <div class="client-name">${review.name}</div>
            <div class="country-name">${review.country}</div>
        `;
        slider.appendChild(card);
    });
}


// ============================================
// TESTIMONIAL SLIDER WITH SIDE NAVIGATION
// ============================================

(function() {
    let currentIndex = 0;
    let autoInterval;
    let cardsPerView = 3;
    
    function initSlider() {
        loadReviewsIntoSlider();
        updateCardsPerView();
        setupEventListeners();
        resetAutoSlide();
    }
    
    function getSlider() {
        return document.getElementById('testimonialSlider');
    }
    
    function getCards() {
        return Array.from(document.querySelectorAll('.testimonial-card'));
    }
    
    function updateCardsPerView() {
        if (window.innerWidth <= 700) {
            cardsPerView = 1;
        } else if (window.innerWidth <= 1000) {
            cardsPerView = 2;
        } else {
            cardsPerView = 3;
        }
        updateSliderPosition();
        createDots();
    }
    
    function getMaxIndex() {
        const totalCards = getCards().length;
        return Math.max(0, totalCards - cardsPerView);
    }
    
    function updateSliderPosition() {
        const slider = getSlider();
        if (!slider) return;
        
        const maxIndex = getMaxIndex();
        if (currentIndex > maxIndex) {
            currentIndex = maxIndex;
        }
        const translatePercent = (currentIndex * (100 / cardsPerView));
        slider.style.transform = `translateX(-${translatePercent}%)`;
        updateActiveDot();
    }
    
    function createDots() {
        const dotsContainer = document.getElementById('sliderDots');
        if (!dotsContainer) return;
        
        const dotCount = getMaxIndex() + 1;
        dotsContainer.innerHTML = '';
        
        for (let i = 0; i < dotCount; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === currentIndex) dot.classList.add('active');
            dot.addEventListener('click', function() {
                currentIndex = i;
                updateSliderPosition();
                resetAutoSlide();
            });
            dotsContainer.appendChild(dot);
        }
    }
    
    function updateActiveDot() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, idx) => {
            if (idx === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    function nextSlide() {
        const maxIndex = getMaxIndex();
        if (currentIndex < maxIndex) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSliderPosition();
    }
    
    function prevSlide() {
        const maxIndex = getMaxIndex();
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = maxIndex;
        }
        updateSliderPosition();
    }
    
    function resetAutoSlide() {
        if (autoInterval) clearInterval(autoInterval);
        autoInterval = setInterval(function() {
            nextSlide();
        }, 5000);
    }
    
    function setupEventListeners() {
        const prevBtn = document.getElementById('testPrevBtn');
        const nextBtn = document.getElementById('testNextBtn');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                prevSlide();
                resetAutoSlide();
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                nextSlide();
                resetAutoSlide();
            });
        }
        
        window.addEventListener('resize', function() {
            updateCardsPerView();
            resetAutoSlide();
        });
    }
    
    // Wait for DOM to load before initializing
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSlider);
    } else {
        initSlider();
    }
})();


// ============================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ============================================

(function() {
    const navLinks = document.querySelectorAll('.nav-links a, .btn-glow, .btn-primary[href="#contact"]');
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const hash = this.getAttribute('href');
            if (hash && hash !== '#' && hash.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(hash);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
})();


// ============================================
// CONTACT FORM SUBMIT HANDLER
// ============================================

(function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! Biplob will get back to you within 24 hours.');
            contactForm.reset();
        });
    }
})();


// ============================================
// LOAD DEMOS ON PAGE LOAD
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    loadDemos();
    console.log('🎉 Website loaded with animations!');
});