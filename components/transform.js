import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);


export default function Transform(){

    useEffect(() => {
        gsap.from(".transform-desktop", {
            opacity: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: ".transform-desktop",
            toggleActions: "restart none complete reset"
          }
        });
        gsap.from(".stand-out", {
            duration: 1.5,
            opacity: 0,
            scrollTrigger: {
              trigger: ".stand-out",
              toggleActions: "restart none complete reset"
            }
          });
      }, []);

    return (
        <div className="transform">
            <div className="transform-desktop">
                <div>
                    <img src="/images/mobile/image-transform.jpg" alt="" />
                </div>
                <div>
                    <h1>Transform your brand</h1>
                    <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
                    <button>Learn More</button>
                </div>
            </div>
            <div className="stand-out">
                <div>
                    <img src="/images/mobile/image-stand-out.jpg" alt="" />
                </div>
            <div>
                <h1>Stand out to the right audience</h1>
                <p>Using a collaborative formula of designers, researchers, photographers, videographers and copywriters, we ll build and extend your brand in digital places.</p>
                <button>Learn More</button>
            </div>
            </div>
        </div>
    )
}