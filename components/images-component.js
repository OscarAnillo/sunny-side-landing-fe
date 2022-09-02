import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Images(){

    useEffect(() => {
        gsap.from(".desk-img", {
          stagger: 0.3,
          y: 100,
          scale: 1.5,
          duration: 2,
          opacity: 0,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: "#section-images",
            toggleActions: "restart none none reset"
          }
        });
      }, []);

    return (
        <section id="section-images">
            <div className="images-row-mobile">
                <img src="/images/mobile/image-gallery-milkbottles.jpg" alt="" className="mobile-img" />
                <img src="/images/mobile/image-gallery-orange.jpg" alt="" className="mobile-img" />
                <img src="/images/mobile/image-gallery-cone.jpg" alt="" className="mobile-img" />
                <img src="/images/mobile/image-gallery-sugar-cubes.jpg" alt="" className="mobile-img" />
            </div>
            <div className="images-row-desktop">
                <img src="/images/desktop/image-gallery-milkbottles.jpg" alt="" className="desk-img" />
                <img src="/images/desktop/image-gallery-orange.jpg" alt="" className="desk-img" />
                <img src="/images/desktop/image-gallery-cone.jpg" alt="" className="desk-img" />
                <img src="/images/desktop/image-gallery-sugarcubes.jpg" alt="" className="desk-img" />
            </div>
        </section>
    )
}