import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;  //para os lados
    
    // Link - a-Ancora
    a { 
        display: flex;
        align-items: center;
        text-decoration: none;
        color: green;
        transition: color 0.2s;

        &:hover {
            color: #666666;
        }

        svg {
            margin-right: 4px;
        }
    }
`

export const RepoInfo = styled.section`
    margin-top: 80px;

    header {
        display: flex;
        align-items: center;

        img {
            width: 80px;
            height: 80px;
            border-radius: 50px;
        }

        div {
            margin-left: 24px;

            strong {
                font-size: 26px;
                color: green;
            }

            p {
                font-size: 22px;
                color: brown;
            }
        }


    }

    ul {
        display: flex;
        list-style: none;
        margin-top: 40px;

        li {
            & + li {  // da se  gunda li
                margin-left: 80px;
            }
        }

        strong {
            display: block;
            font-size: 26px;
            color: blue
        }

        span {
            display: bloc;
            margin-top: 4px;
            color: red
        }

    }

`
export const Issues = styled.div `
    margin-top: 40px;

    a {
        background: white;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: flex;
        text-decoration: none;
        align-items: center;
        transition: transform 0.2s;

        &:hover {
            transform: translateX(6px);
        }

        & + a {
            margin-top: 6px;
        }

        div {
            margin: 0 16px;
            flex: 1;

            strong {
                font-size: 18px;
                color: red;
            }

            p {
                font-size: 14px;
                color: blue;
            }
        }

        svg {
            margin-left: auto;
            color: green
        }
    }
`