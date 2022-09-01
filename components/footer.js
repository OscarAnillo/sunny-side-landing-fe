import { GrFacebook, GrInstagram, GrTwitter, GrPinterest } from 'react-icons/gr'

export default function Footer(){
    return (
        <footer>
            <div>
                <h1>sunnyside</h1>
                <div className='footer-row'>
                    <p>About</p>
                    <p>Services</p>
                    <p>Projects</p>
                </div>
                <div className='socials'>
                    
                        <GrFacebook />
                        <GrInstagram />
                        <GrTwitter />
                        <GrPinterest />
                    
                </div>
            </div>
        </footer>
    )
}