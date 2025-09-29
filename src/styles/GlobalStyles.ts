```typescript
// src/styles/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

/**
 * Interface para o tema global.
 */
export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    accent: string;
  };
  fonts: {
    main: string;
    secondary: string;
  };
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

/**
 * Tema padrão da aplicação.
 */
export const defaultTheme: Theme = {
  colors: {
    primary: '#E31B23',
    secondary: '#222',
    background: '#fff',
    text: '#333',
    accent: '#f90',
  },
  fonts: {
    main: 'Arial, sans-serif',
    secondary: 'Helvetica, sans-serif',
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
};

/**
 * Estilos globais aplicados à aplicação.
 */
const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${props => props.theme.fonts.main};
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    line-height: 1.5;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
```