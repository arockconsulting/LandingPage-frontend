```tsx
import React from 'react';
import styles from './Header.module.css'; // CSS Modules
// import styled from 'styled-components'; // Styled Components - Uncomment if preferred

/**
 * Interface for the Header component props.
 */
interface HeaderProps {
  /**
   * The title or name of the pizzeria.
   */
  title: string;
  /**
   * An optional array of navigation links.
   */
  navLinks?: { text: string; href: string }[];
}

/**
 * Header Component for the Pizzeria landing page.
 * Displays the logo and navigation (if provided).
 *
 * @param {HeaderProps} props - The component props.
 * @returns {JSX.Element} The Header component.
 */
const Header: React.FC<HeaderProps> = ({ title, navLinks }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>{title}</h1>
      </div>

      {navLinks && navLinks.length > 0 && (
        <nav className={styles.nav}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.text}>
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
```