import styled from "styled-components";

export const ProjectSection = styled.section`
    height: 100%;
`

export const Container = styled.div`
    margin: auto;
    height: 100%;
    max-width: 1000px;
    padding: 20px;
    color: #fff;
    word-spacing: 3px;
`;

export const Title = styled.div`
    font-size: 22px;
    text-align: center;
    padding: 60px 0px;
    width: 100%;

    > h1 {
    max-width: 300px;
    margin: auto;
    text-align: center;
    box-shadow: 0px 1px 5px #38B6FF;
    border-radius: 6px;
    background-color: #0f8cd5;
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
    background-color: #1d1d1d;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 1px 6px #ffffff;

    > h1 {
    padding: 5px;
    border-radius: 10px;
    background-color: #0f8cd5;
    box-shadow: 0px 1px 6px #96c3db;
    color: #fff;
    }
`;

export const Project02 = styled.div`
    width: 200px;
    height: 300px;
    background-color: #1d1d1d;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 1px 6px #ffffff;

    > h1 {
    padding: 5px;
    border-radius: 10px;
    background-color: #0f8cd5;
    box-shadow: 0px 1px 6px #96c3db;
    color: #fff;
    }

    @media(max-width: 1000px){
        display: none;
    }
`;

export const Project03 = styled.div`
    width: 200px;
    height: 300px;
    background-color: #1d1d1d;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 1px 6px #ffffff;

    > h1 {
    padding: 5px;
    border-radius: 10px;
    background-color: #0f8cd5;
    box-shadow: 0px 1px 6px #96c3db;
    color: #fff;
    }

    @media(max-width: 1000px){
        display: none;
    }
`;