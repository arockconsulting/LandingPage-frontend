```tsx
import React from 'react';
import styles from './MenuSection.module.css';

/**
 * Interface for the PizzaCard component props.
 */
interface PizzaCardProps {
  /**
   * The URL of the pizza image.
   */
  imageUrl: string;
  /**
   * The name of the pizza.
   */
  name: string;
  /**
   * The price of the pizza.
   */
  price: number;
}

/**
 * PizzaCard Component: Displays a single pizza item with image, name, and price.
 */
const PizzaCard: React.FC<PizzaCardProps> = ({ imageUrl, name, price }) => {
  return (
    <div className={styles.pizzaCard}>
      <img src={imageUrl} alt={name} className={styles.pizzaImage} />
      <div className={styles.pizzaDetails}>
        <h3 className={styles.pizzaName}>{name}</h3>
        <p className={styles.pizzaPrice}>${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

/**
 * Interface for the MenuSection component props.
 */
interface MenuSectionProps {
  /**
   * An array of pizza objects, each containing imageUrl, name, and price.
   */
  pizzas: PizzaCardProps[];
  /**
   * The title of the menu section.
   */
  title: string;
}

/**
 * MenuSection Component: Displays a section of the menu with a title and a list of pizza cards.
 */
const MenuSection: React.FC<MenuSectionProps> = ({ pizzas, title }) => {
  return (
    <section className={styles.menuSection}>
      <h2 className={styles.menuTitle}>{title}</h2>
      <div className={styles.pizzaGrid}>
        {pizzas.map((pizza, index) => (
          <PizzaCard key={index} imageUrl={pizza.imageUrl} name={pizza.name} price={pizza.price} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
```
```css
/* src/components/MenuSection/MenuSection.module.css */

.menuSection {
  padding: 20px;
  margin-bottom: 30px;
}

.menuTitle {
  font-size: 2em;
  margin-bottom: 20px;
  text-align: center;
}

.pizzaGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
}

.pizzaCard {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
  background-color: #fff;
}

.pizzaCard:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.pizzaImage {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.pizzaDetails {
  padding: 15px;
}

.pizzaName {
  font-size: 1.2em;
  margin-bottom: 5px;
}

.pizzaPrice {
  font-size: 1em;
  color: #e44d26;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .pizzaGrid {
    grid-template-columns: 1fr; /* Single column on smaller screens */
  }
}
```