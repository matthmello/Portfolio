import styled from "styled-components";

export const HomeLeft = styled.div `
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    > a {
    width: 22%;
    min-width: 160px;
    max-width: 160px;
    text-align: center;
    margin: 10px;
    padding: 8px;
    color: ${ ({theme}) => theme.text};
    border: 2px solid ${ ({theme}) => theme.text};
    border-radius: 6px;
    font-weight: bold;
    box-shadow: 0px 0px 2px 0px;
    transition: 0.5s;
    }

    > a:hover {
    color: ${ ({theme}) => theme.primary};
    border: 2px solid ${ ({theme}) => theme.primary};
    box-shadow: 0px 0px 10px 0px;
    }

    @media (max-width: 1000px) {
        width: 100%;
    }

    @media (max-width: 600px) {
        max-width: 300px;
    }
`; 

export const TypeWriterBox = styled.div`
    margin: 6px;
`;

export const SocialIconsBox = styled.div`
    min-width: 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px;

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
    }
`;

export const HomeRight= styled.div `
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center; 

    > img {
        border-radius: 50%;
    }

    @media (max-width: 1000px) {
        display: none;
    }
`;