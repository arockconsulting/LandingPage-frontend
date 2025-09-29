```typescript
// src/components/HeroSection/HeroSection.styled.ts
import styled from 'styled-components';

/**
 * HeroSectionContainer: A styled container for the HeroSection component.
 * It provides a full-width layout with a background image and styling for its content.
 */
export const HeroSectionContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background: url('/images/pizza-background.jpg') center/cover no-repeat;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
  }

  & > * {
    position: relative;
    z-index: 1; /* Ensure content is above the overlay */
  }
`;

/**
 * HeroTitle: A styled title for the HeroSection component.
 * It provides styling for the main title of the hero section.
 */
export const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

/**
 * HeroSubtitle: A styled subtitle for the HeroSection component.
 * It provides styling for the subtitle of the hero section.
 */
export const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
```