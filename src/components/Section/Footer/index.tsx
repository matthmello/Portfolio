import Image from 'next/image'
import Form from '../../Form'
import { Contact, 
         FormContainer, 
         Container, 
         PageFooter, 
         SocialLeft, 
         Title, 
         ContactContainer, 
         SocialIconsBox } from './style'
import SocialIcons from '../../SocialIcons'

export default function Footer(){
    return(
        <Contact id='footer'>
            <Container>
                <Title data-aos="fade-in">
                    <h1>Contact</h1>
                </Title>   
                <ContactContainer data-aos="fade-in">
                    <SocialLeft>  
                        <div>
                            <h1>
                                Follow My Social Medias: 
                            </h1>  
                            <SocialIconsBox>
                                <SocialIcons/>
                            </SocialIconsBox>   
                       
                        </div>
                        <Image
                            src="/contact-image.png"
                            width={160}
                            height={160}
                            alt=""
                        />
                        <div>
                            <h2>Contact me by email: </h2>
                            <h2>matheus_lpo@hotmail.com</h2>
                        </div>
                    </SocialLeft>
                    <FormContainer>
                        <Form/>
                    </FormContainer>
                </ContactContainer>   
            </Container>
            <PageFooter>
                &copy; 2023 Matheus Melo | All rights reserved.
            </PageFooter>
        </Contact>
    )
}