import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/nattu-adnan-unsplash.jpg';

export const GlobalStyle = createGlobalStyle`
   html {
    height: 100%;
  }
  body {
    background-image: linear-gradient(to right, red, yellow);
    height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > {
    color: #fff;
  }
  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    font-family: Fascinate Inline;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
    border-radius: 10px;
  }
  .start, .next {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    z-index: 1000;
  }
  .start {
    max-width: 200px;
  }
`;