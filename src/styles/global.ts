import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px #EB6440;
  }

  body {
    background:  white;
    color: #4a4a4a; 
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Nunito, 'sans-serif';
  }
  
    /* width */
::-webkit-scrollbar {
  width: 10px;
  height: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f4f8fd;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #EB6440;
}
`
