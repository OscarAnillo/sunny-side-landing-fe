import Head from 'next/head';
import HeroComponent from '../components/hero-component';
import NavBar from '../components/navBar-component';
import Transform from '../components/transform';


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
      </main>    
    </div>
  )
}
