import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none; 
        scroll-behavior: smooth;
        transition: 0.3s;

        ::-webkit-scrollbar {
            width: 6px;
        } 
        ::-webkit-scrollbar-track {
            background: #3b3b3b;
        }
        ::-webkit-scrollbar-thumb {
            background: #039df6;
            border-radius: 5px;
        }  
        ::-webkit-scrollbar-thumb:hover {
            background: #38B6FF;
        }
    }


    body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    min-width: 300px;
    background: #080808;
    }
    
    .container{
        margin: auto;
        height: 100vh;
        max-width: 1000px;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        word-spacing: 3px;
        font-size: 22px;
}

`;