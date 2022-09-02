import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Images(){

    useEffect(() => {
        gsap.from(".desk-img", {
          stagger: 0.2,
          y: 100,
          duration: 1,
          opacity: 0,
          ease: "bounce",
          scrollTrigger: {
            trigger: "#section-images",
            toggleActions: "restart none reverse reset"
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