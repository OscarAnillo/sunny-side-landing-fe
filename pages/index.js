import Head from 'next/head'
import HeroComponent from '../components/hero-component'
import NavBar from '../components/navBar-component'


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
        <h1>Home Page</h1>
  
    </div>
  )
}
