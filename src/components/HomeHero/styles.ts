import styled from "styled-components";

export const HomeLeft = styled.div `
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    > h1 {
    margin-bottom: 4px;
    }

    > a {
    width: 22%;
    min-width: 160px;
    max-width: 160px;
    text-align: center;
    margin: 10px;
    padding: 8px;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 6px;
    font-weight: bold;
    box-shadow: 0px 0px 2px 0px;
    transition: 0.5s;
    }

    > a:hover {
    color: #38B6FF;
    border: 2px solid #38B6FF;
    box-shadow: 0px 0px 10px 0px;
    }

    @media (max-width: 1000px) {
        width: 100%;
    }

    @media (max-width: 600px) {
        max-width: 300px;
    }
`; 

export const HomeRight= styled.div `
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center; 

    > img {
        border-radius: 50%
    }

    @media (max-width: 1000px) {
        display: none;
    }
`;