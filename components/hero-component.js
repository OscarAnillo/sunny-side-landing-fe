import { useEffect } from "react"
import { gsap } from "gsap"

export default function HeroComponent(){

    useEffect(() => {
        gsap.from('.bg-hero', {opacity: 0, duration: .5})
        gsap.to('.bg-hero', {opacity: 1, duration: .5})
        gsap.from('.hero-title', {y: 50, duration: 1, ease: 'elastic'})
        gsap.to('.hero-title', {y: 0, duration: 1, ease: 'elastic'})
    }, []);

    return (
        <div className="bg-hero">
            <div className="hero-title">
                <h1>We are creatives</h1>
                <img src="/images/icon-arrow-down.svg" alt="" />
            </div>
            
        </div>
    )
}