import { useState, useEffect } from 'react';
import Link from 'next/link';
import {gsap} from 'gsap';

export default function NavBar(){
    const [showMenu, setShowMenu] = useState(false);

    const clickHandler = () => {
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        gsap.from('.menu', {x: -50, duration: 1})
        gsap.to('.menu', {x: 0, duration: 1})
        gsap.from('.sunny', {x: 50, duration: 1})
        gsap.to('.sunny', {x: 0, duration: 1})
        gsap.from('.desktop-nav', {x: -150, duration: 1})
        gsap.to('.desktop-nav', {x: 0, duration: 1})
    }, [])

    return (
        <section className='section-nav'>
            <nav className='nav-row'>
                <div>
                    <Link href='/'><img src="/images/logo.svg" alt="" className='sunny'/></Link>
                </div>
                <div className='desktop-nav'>
                    <ul>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/projects">Projects</Link></li>
                        <li className='contact'><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div onClick={clickHandler} className='menu'>
                    {!showMenu ? <img src="/images/icon-hamburger.svg"alt ="" /> : <img src="/images/icon-close-menu.svg" alt ="" className='close' />}
                </div>
                {showMenu && 
                <div className='mobile-nav'>
                <ul>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/projects">Projects</Link></li>
                        <div className='contact'>
                            <li><Link href="/contact">Contact</Link></li>
                        </div>
                    </ul>
                </div>
                }
            </nav>
        </section>
    )
}