import Head from "next/head";
import { HomeContainer } from "../styles/Home";
import HomeHero from "../components/HomeHero";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <Head>
                <title>Matheus Melo | Web Developer</title>
                <meta name="description" content="My Portfolio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>    

            <main id="home" className="container">
                <HomeHero/>
            </main>
            <About/>
            <Projects/>
            <Footer/>         
        </>
  );
}