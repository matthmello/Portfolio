import styled from "styled-components";

export const Header = styled.header `
    width: 100%;
    height: 60px;
    background-color: #080808;
    position: fixed;
    box-shadow: 0px 1px 5px rgba(56, 182, 255, 0.5);
    z-index: 2;
`;

export const Container = styled.div `
    margin: auto;
    height: 100%;
    padding: 10px;
    max-width: 1000px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > a {
    color: #fff;
    width: 240px;
    min-width: 240px;
    border-right: 1px solid white;  
    }
`;

export const BlueColor = styled.span `
    color: #38B6FF;
`;

export const NavBar = styled.nav `
    display: flex;
    align-items: center;

    > a {
    color: #fff;
    margin: 10px;
    font-size: 18px;
    font-weight: bold;
    transition: .3s;  
    }

    > a:hover {
    color: #38B6FF;    
    }

    @media(max-width: 1000px) {
        display: none;
    }
`;

export const MenuButton = styled.div`

    display: none;

    > svg {
    color: #fff;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: 0.3s;
    }

    > svg:hover {
    color: #38B6FF;
    }

    @media(max-width: 1000px) {
    display: block;
}
`;

export const SideBar = styled.div `
    position: fixed;
    background-color: #080808; 
    top: 60px;
    left: 0px;
    width: 100%;
    height: 100vh;
    min-height: 200px;
    padding: 5px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    opacity: 0.99;
    transition: all 0.3s;
    animation: sidebar 0.5s;

    > a h1 {
    color: #fff;
    border-bottom: 1px solid #38B6FF;
    transition: 0.3s;
    text-align: center;
    margin: 10px;
    }

    > a h1:hover {
        color: #38B6FF;
    }

    @media screen and (min-width: 1000px) {   
        display: none;       
    }

    @keyframes sidebar {
        0% {width: 10%;}
        100% {width: 100%;
        }
    }
`;

