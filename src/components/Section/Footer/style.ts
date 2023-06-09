import styled from "styled-components";

export const Contact = styled.footer`
    height: 100%;
`;

export const Container = styled.div`
    margin: auto;
    height: 100%;
    max-width: 1000px;
    padding: 20px;
    color: ${ ({theme}) => theme.text};
    word-spacing: 3px;
`;

export const Title = styled.div`
    font-size: 18px;
    text-align: center;
    padding: 60px 0px;

    > h1 {
    max-width: 300px;
    margin: auto;
    text-align: center;
    border-radius: 6px;
    box-shadow: 0px 1px 5px ${({theme}) => theme.boxShadow};   
    }
`;

export const ContactContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media(max-width: 900px){
        display: flex;
        flex-direction: column-reverse;
    }
`;

export const SocialLeft = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    text-align: center;
    float: left;

    > img {
    margin: 20px;
    }

    @media(max-width: 900px){
    margin: auto;
    width: 100%;
    max-width: 400px;
    margin-top: 20px;
    }

`;

export const SocialIconsBox = styled.div`
    min-width: 160px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 20px;

    > a svg {
    cursor: pointer;
    background-color: ${({theme }) => theme.text};
    border-radius: 8px;
    width: 40px;
    height: 40px;  
    max-width: 50px;
    transition: 0.3s;
    display: flex;
    }

    > a svg:hover {
    background-color: ${({theme }) => theme.primary};
    transform: scale(1.1);  
    }
`;


export const FormContainer = styled.div`
    width: 400px;
    height: 400px;
    background-color: ${ ({theme}) => theme.backgroundLight};
    border-radius: 10px;
    float: right; 

    @media(max-width: 900px){
        width: 100%;
        max-width: 400px;
        margin: auto;
    }
`

export const PageFooter = styled.div`
    padding: 20px;
    font-size: 18px;
    text-align: center;
    color: ${ ({theme}) => theme.text};
`;