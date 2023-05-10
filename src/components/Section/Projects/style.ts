import styled from "styled-components";

export const ProjectSection = styled.section`
    height: 100%;
`

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
    text-align: center;
    padding: 60px 0px;
    width: 100%;

    > h1 {
    margin: auto;
    max-width: 300px;
    border-radius: 6px; 
    text-align: center;
    box-shadow: 0px 1px 5px ${({theme}) => theme.boxShadow}; 
    }
`;

export const ProjectContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px;

    @media(max-width: 1000px){
        justify-content: center;
    }
`;

export const Project01 = styled.div`
    width: 200px;
    height: 300px;
    background-color: ${ ({theme}) => theme.backgroundLight};
    border-radius: 15px;
    padding: 15px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    box-shadow: 0px 1px 5px ${({theme}) => theme.boxShadow};

    > h3 {
    width: 100%;
    text-align: center;
    margin: 10px 0;
    padding: 4px;
    border-radius: 6px;
    box-shadow: 0px 1px 5px ${({theme}) => theme.boxShadow};
    }
    > img {
    width: 100%;
    height: 50%;
    margin: 10px 0;
    }

    > p {
    text-align: center;
    margin: 10px 0;
    }
`;

export const Project02 = styled.div`
    width: 200px;
    height: 300px;
    background-color: ${ ({theme}) => theme.backgroundLight};
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 1px 5px ${({theme}) => theme.boxShadow};

    > h1 {
    padding: 5px;
    border-radius: 10px;
    box-shadow: 0px 1px 5px ${({theme}) => theme.boxShadow};
    color: ${ ({theme}) => theme.text};
    }

    @media(max-width: 1000px){
        display: none;
    }
`;

export const Project03 = styled.div`
    width: 200px;
    height: 300px;
    background-color: ${ ({theme}) => theme.backgroundLight};
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 1px 5px ${({theme}) => theme.boxShadow};

    > h1 {
    padding: 5px;
    border-radius: 10px;
    box-shadow: 0px 1px 5px ${({theme}) => theme.boxShadow};
    color: ${ ({theme}) => theme.text};
    }

    @media(max-width: 1000px){
        display: none;
    }
`;