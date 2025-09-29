```typescript
import styled from 'styled-components';

/**
 * Footer container.
 */
export const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
  font-size: 0.8rem;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

/**
 * Copyright text.
 */
export const CopyrightText = styled.p`
  margin-bottom: 10px;
`;

/**
 * Social media links container.
 */
export const SocialMediaLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #f00;
    }
  }
`;
```