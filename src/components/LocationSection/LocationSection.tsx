```tsx
import React from 'react';
import styles from './LocationSection.module.css';

interface LocationSectionProps {
  /** The address of the pizzeria. */
  address: string;
  /** The Google Maps embed URL. */
  mapURL: string;
}

/**
 * LocationSection component to display the pizzeria address and a Google Maps embed.
 *
 * @param {LocationSectionProps} props - The component props.
 * @returns {JSX.Element} The LocationSection component.
 */
const LocationSection: React.FC<LocationSectionProps> = ({ address, mapURL }) => {
  return (
    <section className={styles.locationSection}>
      <div className={styles.locationInfo}>
        <h2>Our Location</h2>
        <p className={styles.address}>{address}</p>
      </div>
      <div className={styles.mapContainer}>
        <iframe
          src={mapURL}
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
          title="Pizzeria Location on Google Maps"
        ></iframe>
      </div>
    </section>
  );
};

export default LocationSection;
```