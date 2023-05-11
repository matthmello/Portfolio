import { Container,  
         Project01,
         Project02, 
         Project03, 
         ProjectContent, 
         ProjectSection, 
         Title } from "./style"
import Image from "next/image"

export default function Projects(){

    return(
        <ProjectSection id="projects">
            <Container>
                <Title data-aos="fade-in">
                    <h1>Projects</h1>
                </Title>
                <ProjectContent data-aos="zoom-in">
                    <Project01>
                            <Image 
                                src="/portfolio-image.png"
                                width={200}
                                height={150}
                                alt="portfolio-image"
                            />
                            <h3>Portfolio</h3>
                            <p>Created to show my projects and skills</p>
                    </Project01>

                    <Project02>
                        <h1>Coming Soon</h1>
                    </Project02>

                    <Project03>
                        <h1>Coming Soon</h1>
                    </Project03>
                </ProjectContent>
            </Container>
        </ProjectSection>
    )
}