```tsx
import React from 'react';
import styles from './PizzaCard.module.css';

/**
 * Interface para as propriedades do componente PizzaCard.
 */
interface PizzaCardProps {
  /**
   * URL da imagem da pizza.
   */
  imageUrl: string;
  /**
   * Nome da pizza.
   */
  name: string;
  /**
   * Descrição da pizza.
   */
  description: string;
  /**
   * Preço da pizza.
   */
  price: number;
}

/**
 * Componente para exibir um card de pizza com imagem e preço.
 * @param {PizzaCardProps} props - As propriedades do componente.
 * @returns {JSX.Element} Um elemento JSX representando o card da pizza.
 */
const PizzaCard: React.FC<PizzaCardProps> = ({ imageUrl, name, description, price }) => {
  return (
    <div className={styles.pizzaCard}>
      <img src={imageUrl} alt={name} className={styles.pizzaImage} />
      <div className={styles.pizzaDetails}>
        <h3 className={styles.pizzaName}>{name}</h3>
        <p className={styles.pizzaDescription}>{description}</p>
        <div className={styles.pizzaPrice}>
          R$ {price.toFixed(2)}
        </div>
        <button className={styles.addToCartButton} aria-label={`Adicionar ${name} ao carrinho`}>
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default PizzaCard;
```