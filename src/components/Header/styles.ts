import styled from "styled-components";

export const Header = styled.header `
    width: 100%;
    height: 60px;
    background-color: ${({theme}) => theme.background};
    position: fixed;
    box-shadow: 0px 1px 5px ${({theme}) => theme.boxShadow};
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
    color: ${ ({theme}) => theme.text};
    width: 240px;
    min-width: 240px;
    border-right: 1px solid white;  
    }
`;

export const BlueColor = styled.span `
    color: ${ ({theme}) => theme.primary};
`;

export const NavBar = styled.nav `
    display: flex;
    align-items: center;

    > a {
    color: ${ ({theme}) => theme.text};
    margin: 10px;
    font-size: 18px;
    font-weight: bold;
    transition: 0.3s;  
    }

    > a:hover {
    color: ${ ({theme}) => theme.primary};  
    }

    @media(max-width: 1000px) {
        display: none;
    }
`;

export const MenuButton = styled.div`

    display: none;

    > svg {
    color: ${ ({theme}) => theme.text};
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: 0.3s;
    }

    > svg:hover {
    color: ${ ({theme}) => theme.primary};
    }

    @media(max-width: 1000px) {
    display: block;
}
`;

export const SideBar = styled.div `
    position: fixed;
    background-color: ${ ({theme}) => theme.background}; 
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
    color: ${ ({theme}) => theme.text};
    border-bottom: 1px solid ${ ({theme}) => theme.primary};
    transition: 0.3s;
    text-align: center;
    margin: 10px;
    }

    > a h1:hover {
        color: ${ ({theme}) => theme.primary};
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

export const SocialIconsBox = styled.div`
    min-width: 160px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 60px;

    > a svg {
    cursor: pointer;
    background-color: ${({theme }) => theme.text};
    border-radius: 8px;
    width: 30px;
    height: 30px;  
    max-width: 50px;
    transition: 0.3s;
    display: flex;
    }

    > a svg:hover {
    background-color: ${({theme }) => theme.primary};  
    transform: scale(1.1);
    }
`;

