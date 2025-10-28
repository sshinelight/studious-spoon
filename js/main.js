// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking a link
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Project Filtering
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else {
                    if (card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
});

// Testimonial Slider
const testimonialSlider = () => {
    const slides = document.querySelectorAll('.testimonial-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    
    // Hide all slides except the first one
    const hideAllSlides = () => {
        slides.forEach(slide => {
            slide.style.display = 'none';
        });
    };
    
    // Show the current slide
    const showSlide = (slideIndex) => {
        hideAllSlides();
        slides[slideIndex].style.display = 'block';
    };
    
    // Initialize the slider
    if (slides.length > 0) {
        hideAllSlides();
        showSlide(currentSlide);
        
        // Next button functionality
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            });
        }
        
        // Previous button functionality
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                showSlide(currentSlide);
            });
        }
        
        // Auto slide every 5 seconds
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 5000);
    }
};

// Contact Form Validation
const initContactForm = () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nameInput = document.getElementById('name');
            const phoneInput = document.getElementById('phone');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            // Basic validation
            let isValid = true;
            
            if (!nameInput.value.trim()) {
                highlightError(nameInput);
                isValid = false;
            } else {
                removeError(nameInput);
            }
            
            if (!phoneInput.value.trim()) {
                highlightError(phoneInput);
                isValid = false;
            } else {
                removeError(phoneInput);
            }
            
            if (!isValidEmail(emailInput.value)) {
                highlightError(emailInput);
                isValid = false;
            } else {
                removeError(emailInput);
            }
            
            if (!messageInput.value.trim()) {
                highlightError(messageInput);
                isValid = false;
            } else {
                removeError(messageInput);
            }
            
            if (isValid) {
                // In a real project, you would send the form data to the server here
                // For this demo, we'll just show a success message
                
                // Reset form
                contactForm.reset();
                
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = 'Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.';
                
                contactForm.appendChild(successMessage);
                
                // Remove success message after 4 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 4000);
            }
        });
    }
};

// Email validation helper
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Highlight invalid input
const highlightError = (input) => {
    input.style.borderColor = 'red';
};

// Remove highlight from valid input
const removeError = (input) => {
    input.style.borderColor = '#ddd';
};

// Google Maps initialization
function initMap() {
    const mapElement = document.getElementById('map');
    
    if (mapElement) {
        // Replace with your company's coordinates
        const companyLocation = { lat: 55.751244, lng: 37.618423 };
        
        const map = new google.maps.Map(mapElement, {
            center: companyLocation,
            zoom: 15,
            styles: [
                {
                    "featureType": "all",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "weight": "2.00"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#9c9c9c"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#444444"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 45
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#4d908e"
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                }
            ]
        });
        
        const marker = new google.maps.Marker({
            position: companyLocation,
            map: map,
            title: 'ДомСтрой',
            animation: google.maps.Animation.DROP
        });
        
        const infoWindow = new google.maps.InfoWindow({
            content: `
                <div class="map-info-window">
                    <h3>ДомСтрой</h3>
                    <p>г. Москва, ул. Строителей, д. 10, офис 205</p>
                    <p>Тел: +7 (495) 123-45-67</p>
                </div>
            `
        });
        
        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
    }
}

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.advantage-item, .service-card, .project-card, .process-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => {
        element.classList.add('fade-in-up');
        observer.observe(element);
    });
};

// Add animation styles
const addAnimationStyles = () => {
    const style = document.createElement('style');
    style.innerHTML = `
        .fade-in-up {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .fade-in-up.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        .success-message {
            background-color: #2c6e49;
            color: white;
            padding: 12px;
            border-radius: 4px;
            margin-top: 15px;
            text-align: center;
        }
    `;
    document.head.appendChild(style);
};

// Init all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    testimonialSlider();
    initContactForm();
    animateOnScroll();
    addAnimationStyles();
    
    // Add delay for loading animations
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 300);
}); 