import { createGlobalStyle } from 'styled-components';
import imgBackGround from '../assets/background.svg';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html {
          @media (max-width: 1080px) {
              font-size: 93.75%;
          }
          @media (max-width: 720) {
              font-size: 87.5%;
          }
      }

      body{
          background: #F0F0F5 no-repeat 50% top;
          background-image: url(${imgBackGround}); 
          background-size: 45%;
          --wekit-font-smoothing: antialiased;
      }

      body, input, textarea, select, button {
        font: 400 1rem "Roboto",sans-serif;
          }


      #root {
        max-width: 900px;
        margin: 0 auto;
        padding: 2.5rem 1.25rem;   // 1 rem -> 15px
      }

      button {
          cursor: pointer;
      }

      a {
          color: inherit;
          text-decoration: none;
      }

`