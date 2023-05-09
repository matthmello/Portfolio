import styled from "styled-components";

export const AboutSection = styled.section`
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
    font-size: 22px;
    padding: 60px 0px;
    width: 100%;

    > h1 {
    max-width: 300px;
    margin: auto;
    text-align: center;
    box-shadow: 0px 1px 5px ${ ({theme}) => theme.primary};
    border-radius: 6px;
    background-color: ${ ({theme}) => theme.secondary};        
    }
`;

export const AboutContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const AboutText = styled.div`
    font-size: large;
    font-weight: bold;
    width: 50%;
    padding: 10px;

    @media(max-width: 850px) {
        width: 100%;
    }
`;

export const AboutImage = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 850px) {
        display: none;
    }
`;

export const SkillsText = styled.div`
    font-size: large;
    text-align: center;
    font-weight: bold;
    padding: 10px;
`;

export const SkillsIconsBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 30px;
    text-align: center;

    @media(max-width: 1000px) {
    margin: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    max-width: 900px;        
    }

    > div svg {
    width: 60px;
    height: 60px;
    border-radius: 6px;
    cursor: pointer;
    transition: .3s;

    @media(max-width: 1000px) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        float: left; 
        width: 100px;
        margin: 10px;
    }
    }

    > div svg:hover {
        background-color: ${ ({theme}) => theme.secondary};
    }

    > h3 {
    margin-top: 20px;
    text-align: center;
    }
`;