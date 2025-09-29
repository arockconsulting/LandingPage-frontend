```typescript
import styled from 'styled-components';

/**
 * MenuSectionContainer styles the container for the entire menu section.
 * It handles layout and spacing.
 */
export const MenuSectionContainer = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;

  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

/**
 * MenuSectionTitle styles the title of the menu section.
 * It controls typography and alignment.
 */
export const MenuSectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #333;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

/**
 * PizzaList styles the list of pizza items.
 * It uses a grid layout for responsive display.
 */
export const PizzaList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px; /* Optional: Limit the maximum width */

  @media (min-width: 768px) {
    gap: 2rem;
  }
`;

/**
 * PizzaCardContainer styles the container for each individual pizza card.
 * It provides a consistent look and feel.
 */
export const PizzaCardContainer = styled.li`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

/**
 * PizzaImageWrapper styles the wrapper for the pizza image.
 * It ensures the image maintains its aspect ratio.
 */
export const PizzaImageWrapper = styled.div`
  width: 100%;
  height: 200px; /* Fixed height for consistent image display */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block; /* Prevents extra space below the image */
  }
`;

/**
 * PizzaDetails styles the container for the pizza details (name, price).
 * It provides padding and layout.
 */
export const PizzaDetails = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 120px; /* Fixed height for consistent detail display */
`;

/**
 * PizzaName styles the name of the pizza.
 * It controls typography.
 */
export const PizzaName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

/**
 * PizzaPrice styles the price of the pizza.
 * It controls typography and color.
 */
export const PizzaPrice = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
  color: #e44d26;
`;
```