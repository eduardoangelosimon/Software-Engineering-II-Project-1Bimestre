import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #e52e4d;
    --purple: #5429cc;
    --green: #33cc95;

    --purple-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --gray: #d9d9d9;
    --background: #f0f2f5;
    --shape: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-size: 16px (Desktop)
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  // REM = 1rem = font-size

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const Title = styled.h1`
  margin-top: 3rem;

  display: flex;
  justify-content: center;
`