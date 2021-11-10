import styled, { css } from 'styled-components';
import {shade} from 'polished';

interface IFormProps {
    hasError: boolean;
}


export const Title = styled.h1 `
    font-size: 30px;
    color: #0000CD;
    max-width: 700px;
    line-height: 40px;
    margin-top: 10px;
`

export const Form = styled.form<IFormProps> `
    margin-top: 40px;
    max-width: 800px;

    display: flex;

    input {
        flex: 1;
        height: 45px;
        padding: 0 24px;
        border: 2px solid #FFF;
        border-radius: 5px 0px 0px 5px;
        color: #3a3a3a;
        border-right: 0;

        ${(props) => props.hasError && css`
            border-color: #c53030;
        `}
    }

    &::placeholder {
        color: #a8a8a3 ;
    }

    button {
        width: 160px;
        background-color: #04d361;
        border-radius: 0px 5px 5px 0px;
        border: 0;
        color: #FFF;
        font-weight: bold;

        transition: background-color 0.2s;

        &:hover {
            background-color: ${shade(0.2,'#04d361')};
        }
    }
      
`
export const Repos = styled.div `
    margin-top: 15px;
    max-width: 800px;

    a {
        background: #FFF5EE;
        border-radius: 5px;
        width: 100%;
        padding: 5px;

        display: flex;
        align-items: center;
        transition: background-color 0.2s;

        &:hover {
            transform: translateX(6px);
            background: #FFFAF0;
        }

        & + a {
            margin-top: 16px;
        } 

        img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }

        div {
            margin: 10px;
            flex: 1;

            strong {
                font-size: 24px;
                color: blue;
            }

            p {
                color: red;
                font-size: 15px;
                margin-top: 5px;
            }
        }

        svg {
                margin-left: auto;
                color: green;
            }
    }
`
export const Error = styled.span `
    display: block;
    color: #c53030;
    margin-top: 8px;
    font-weight: bold;
`
