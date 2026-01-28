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
            const nav = document.querySelector('#main-nav')
            if (self.scroll() > 50) {
                nav.classList.add('py-2', 'bg-hardknocks-black/95')
                nav.classList.remove('py-4', 'bg-hardknocks-black/80')
            } else {
                nav.classList.add('py-4', 'bg-hardknocks-black/80')
                nav.classList.remove('py-2', 'bg-hardknocks-black/95')
            }
        }
    })
}

window.addEventListener('load', initAnimations)

console.log('I Believe / Hardknocks - Blended Identity Active')
