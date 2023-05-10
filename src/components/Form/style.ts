import styled from "styled-components";

export const ContactForm = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;  
    padding: 10px;

    > input {
    all: unset;
    width: 100%;
    height: 10%;
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 10px;
    background-color: #1d1d1d;
    color: ${ ({theme}) => theme.text};
    box-sizing: border-box;
    }
    
    > textarea {
    outline: none;   
    border: none;
    font-size: 14px;
    height: 50%;
    width: 100%;
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 10px;
    background-color: #1d1d1d;
    color: ${ ({theme}) => theme.text};
    box-sizing: border-box;
    resize: none;
    }

    > button {
    all: unset;
    width: 100%;
    height: 10%;
    text-align: center;
    border-radius: 10px;
    color: ${ ({theme}) => theme.text};
    font-weight: bold;
    font-size: 16px;
    background-color: ${ ({theme}) => theme.secondary};
    cursor: pointer;   
    }

    > button:active {
        background-color: ${ ({theme}) => theme.boxShadow};
    }
`;