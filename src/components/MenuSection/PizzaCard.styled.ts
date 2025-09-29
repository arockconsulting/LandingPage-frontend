```typescript
import styled from 'styled-components';

/**
 * Interface for the PizzaCard styled component props.
 */
interface PizzaCardProps {
  /**
   * Determines if the pizza card is highlighted.
   */
  highlighted?: boolean;
}

/**
 * Styled component for the Pizza Card.
 *
 * This component displays a pizza image and its price.
 */
export const PizzaCard = styled.div<PizzaCardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 0.5rem;
  width: 200px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  background-color: ${(props) => (props.highlighted ? '#f0f0f0' : 'white')};

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #555;
  }
`;
```