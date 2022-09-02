import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);


export default function Product(){

    useEffect(() => {
        gsap.from(".product-bg-graphic, .product-bg-photo", {
          y: "200",
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".product",
            toggleActions: "restart none reverse reset"
          }
        });
      }, []);

    return (
        <div className="product">
            <div className="product-bg-graphic">
                <div>
                    <h1>Graphic Design</h1>
                    <p>Great design makes you memorable. We deliver artwork that underscore your brand message and captures potential client's attention.</p>
                </div>
            </div>
            <div className="product-bg-photo">
                <div>
                    <h1>Photography</h1>
                    <p>Great design makes you memorable. We deliver artwork that underscore your brand message and captures potential client's attention.</p>
                </div>
            </div>
        </div>
    )
}