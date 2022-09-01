import Head from 'next/head';
import NavBar from '../components/navBar-component';
import HeroComponent from '../components/hero-component';
import Transform from '../components/transform';
import Product from '../components/product';
import Testimonials from '../components/testimonials';
import Images from '../components/images-component';
import Footer from '../components/footer';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      
        <NavBar />
        <HeroComponent />

      <main>
         <Transform /> 
         <Product />
         <Testimonials />
         <Images />
      </main>    
        <Footer />
    </div>
  )
}