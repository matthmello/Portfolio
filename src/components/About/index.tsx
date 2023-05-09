import Image from "next/image"
import { AboutContent, AboutImage, AboutSection, AboutText, Container, SkillsText, Title } from "./style"

export default function About(){
    return(
        <AboutSection id="about">
            <Container>
                <Title data-aos="fade-in"><h1>About Me</h1></Title>               
                <AboutContent>
                    <AboutText data-aos="fade-in">
                        <p>My name is Matheus Melo, I was born in 1996, I have a degree in systems analysis and development.</p>
                        <br/>
                        <p>Since 2019 when I found out how systems, apps and web pages work, I fell in love and started 
                        studying non-stop, and here I am until today studying new technologies and always updating myself 
                        for the future!</p>
                    </AboutText>
                    <AboutImage data-aos="fade-right">
                        <Image 
                            src="/about-picture.png"
                            width={300}
                            height={300}
                            alt=""
                        />
                    </AboutImage>
                </AboutContent>

                <br/><hr/><br/>

                <Title data-aos="fade-in">
                    <h1>Skills</h1>
                </Title>
                <SkillsText data-aos="fade-in">
                    <p>Here is the list of technologies I learned since my first contact with programming:</p>
                </SkillsText>

                {/*Put Skills Here*/}
            </Container>
        </AboutSection>
    )
}