```typescript
// src/styles/theme.ts
import { createGlobalStyle, DefaultTheme } from 'styled-components';

/**
 * Interface defining the structure of our theme object.
 */
export interface ThemeProps {
  colors: {
    primary: string;
    secondary: string;
    text: string;
    background: string;
    accent: string;
  };
  fonts: {
    main: string;
    secondary: string;
  };
  fontSizes: {
    small: string;
    medium: string;
    large: string;
    xlarge: string;
  };
  spacing: {
    small: string;
    medium: string;
    large: string;
    xlarge: string;
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    laptop: string;
    desktop: string;
  };
}

/**
 * Default theme object.
 */
export const defaultTheme: DefaultTheme = {
  colors: {
    primary: '#FF4500', // Tomato color
    secondary: '#333',    // Dark gray
    text: '#000',       // Black
    background: '#f8f8ff', // GhostWhite
    accent: '#FFD700',   // Gold
  },
  fonts: {
    main: 'Arial, sans-serif',
    secondary: 'Georgia, serif',
  },
  fontSizes: {
    small: '12px',
    medium: '16px',
    large: '20px',
    xlarge: '24px',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
    xlarge: '32px',
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    laptop: '992px',
    desktop: '1200px',
  },
};

/**
 * Global styles using Styled Components.
 */
export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${defaultTheme.fonts.main};
    background-color: ${defaultTheme.colors.background};
    color: ${defaultTheme.colors.text};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${defaultTheme.fonts.secondary};
    color: ${defaultTheme.colors.primary};
  }

  a {
    text-decoration: none;
    color: ${defaultTheme.colors.accent};

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    background-color: ${defaultTheme.colors.primary};
    color: white;
    border: none;
    padding: ${defaultTheme.spacing.medium};
    cursor: pointer;
    border-radius: 5px;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export default defaultTheme;
```