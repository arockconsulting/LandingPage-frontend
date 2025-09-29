```typescript
import React from 'react';
import styles from './HeroSection.module.css';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

/**
 * HeroSection Component: Displays the main title, subtitle, and background image for the hero section.
 *
 * @param {HeroSectionProps} props - The props object containing the title, subtitle, and background image URL.
 * @returns {JSX.Element} - The HeroSection component.
 */
const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <section
      className={styles.heroSection}
      style={{ backgroundImage: `url(${backgroundImage})` }}
      aria-label="Hero Section"
    >
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroSubtitle}>{subtitle}</p>
      </div>
    </section>
  );
};

export default HeroSection;
```