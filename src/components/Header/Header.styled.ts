```typescript
import styled from 'styled-components';

/**
 * Header container.
 */
export const HeaderContainer = styled.header`
  background-color: #f8f8f8;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

/**
 * Logo container.
 */
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

/**
 * Logo image.
 */
export const LogoImage = styled.img`
  height: 50px;

  @media (max-width: 768px) {
    height: 40px;
  }
`;

/**
 * Logo text.
 */
export const LogoText = styled.h1`
  margin-left: 1rem;
  font-size: 1.5rem;
  color: #e44d26; /* Example pizza color */

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-left: 0.5rem;
  }
`;

/**
 * Navigation container.
 */
export const NavContainer = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 2rem;

    @media (max-width: 768px) {
      gap: 1rem;
    }
  }

  li {
    a {
      text-decoration: none;
      color: #333;
      font-weight: 500;
      transition: color 0.3s ease;

      &:hover {
        color: #e44d26;
      }
    }
  }
`;
```