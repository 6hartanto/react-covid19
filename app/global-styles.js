import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: #f9f9f9;
    margin: 0 2%;
    font-family: lato;
  }

  .header {
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .titleContainer {
    display: flex;
    flex-direction: row;
  }

  .title1 {
    color: #ce5959;
    font-weight: 800;
    padding-right: 30px;
  }

  .title2 {
    color: #525252;
    font-weight: 300;
  }

`;

export default GlobalStyle;
