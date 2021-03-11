import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body,
  html,
  #__next{
    height: 100%;
  }

  button,
  body,
  textarea,
  input {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }

  html {
    font-size: 62.5%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  /* @media (max-width: 1000px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  } */

`
