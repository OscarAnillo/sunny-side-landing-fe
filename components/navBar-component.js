import { useState } from 'react';
import Link from 'next/link';

export default function NavBar(){
    const [ showMenu, setShowMenu] = useState(false);

    const clickHandler = () => {
        setShowMenu(!showMenu);
    }

    return (
        <section className='section-nav'>
            <nav className='nav-row'>
                <div>
                    <img src="/images/logo.svg" alt="" />
                </div>
                <div className='desktop-nav'>
                    <ul>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/projects">Projects</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div onClick={clickHandler}>
                    <img src="/images/icon-hamburger.svg"alt ="" />
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