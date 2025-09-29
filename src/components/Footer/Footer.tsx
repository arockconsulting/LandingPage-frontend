```typescript
// src/components/Footer/Footer.tsx
import React from 'react';
import styles from './Footer.module.css';

interface FooterProps {
  companyName: string;
  year: number;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
}

/**
 * Footer component displaying copyright information and social media links.
 *
 * @param {FooterProps} props - The props object containing company name, year, and social media links.
 * @returns {JSX.Element} The Footer component.
 */
const Footer: React.FC<FooterProps> = ({ companyName, year, socialLinks }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          &copy; {year} {companyName}. Todos os direitos reservados.
        </p>
        <div className={styles.socialLinks}>
          {socialLinks.facebook && (
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
          )}
          {socialLinks.twitter && (
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
          )}
          {socialLinks.instagram && (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

```css
/* src/components/Footer/Footer.module.css */
.footer {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.copyright {
  font-size: 14px;
  margin-bottom: 10px;
}

.socialLinks a {
  color: #fff;
  font-size: 20px;
  margin: 0 10px;
  text-decoration: none;
  transition: color 0.3s ease;
}

.socialLinks a:hover {
  color: #f00; /* Example hover color */
}

/* Responsive design */
@media (max-width: 768px) {
  .container {
    padding: 0 10px;
  }

  .copyright {
    font-size: 12px;
  }

  .socialLinks a {
    font-size: 18px;
    margin: 0 5px;
  }
}
```