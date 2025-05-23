import { HomeLeft, HomeRight, SocialIconsBox, TypeWriterBox } from "./styles";
import { BlueColor } from "../Header/styles";
import { useEffect } from 'react'
import Link from "next/link";
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import Aos from 'aos';
import 'aos/dist/aos.css';
import SocialIcons from "../SocialIcons";

export default function HomeHero(){

    useEffect(() => {
        Aos.init( {duration: 1500} )
    }, [] )

    return(
        <>
            <HomeLeft
                data-aos="fade-in"
                data-aos-offset="200"
                data-aos-delay="150"
                data-aos-duration="4500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
            >
                <h1>
                    Hi, I'm
                    <BlueColor> M</BlueColor>
                    atheus
                    <BlueColor> M</BlueColor>
                    elo
                </h1>

                <TypeWriterBox>
                    <h2>
                        <BlueColor>
                            <Typewriter
                                options={{
                                strings: [ "Web Developer" ],
                                autoStart: true,
                                loop: true,
                                }}
                            />
                        </BlueColor>
                    </h2>
                </TypeWriterBox>

                <SocialIconsBox>
                    <SocialIcons/>
                </SocialIconsBox>               

                <Link
                    href="#footer" 
                    scroll={false}
                >
                    Contact Me
                </Link>    
            </HomeLeft>

            <HomeRight 
                data-aos="fade-in"
                data-aos-offset="200"
                data-aos-delay="150"
                data-aos-duration="2500"
                data-aos-easing="ease-in-out"
                data-aos-once="false"
            >
                <Image 
                    src='/profile-pict.png'
                    width={460}
                    height={500}
                    alt='profile'
                    priority={true}
                />
            </HomeRight>
        </>
    )
}