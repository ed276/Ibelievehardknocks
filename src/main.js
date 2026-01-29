import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Initialize Animations
const initAnimations = () => {
    // Hero reveal
    const tl = gsap.timeline()

    tl.to('.hero-title', {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.5
    })
        .to('.hero-subtitle', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.8')
        .to('.hero-silhouette', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.7')
        .to('.hero-cta', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.6')
        .to('.hero-location', {
            opacity: 1,
            duration: 1,
        }, '-=0.4')

    // Scroll animations for sections
    gsap.from('#about h3', {
        scrollTrigger: {
            trigger: '#about',
            start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out'
    })

    // Coach cards stagger
    gsap.from('.coach-card', {
        scrollTrigger: {
            trigger: '#about .grid',
            start: 'top 70%',
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: 'power4.out'
    })

    // Blending Header Effect
    ScrollTrigger.create({
        start: 'top top',
        onUpdate: (self) => {
            const navContainer = document.querySelector('.nav-container')
            const logos = document.querySelectorAll('.logo-img')
            if (self.scroll() > 50) {
                navContainer.classList.add('py-4')
                navContainer.classList.remove('py-8')
                logos.forEach(img => {
                    img.classList.add('h-20', 'md:h-24')
                    img.classList.remove('h-32', 'md:h-40')
                })
            } else {
                navContainer.classList.add('py-8')
                navContainer.classList.remove('py-4')
                logos.forEach(img => {
                    img.classList.add('h-32', 'md:h-40')
                    img.classList.remove('h-20', 'md:h-24')
                })
            }
        }
    })
}

window.addEventListener('load', initAnimations)

console.log('I Believe / Hardknocks - Blended Identity Active')
