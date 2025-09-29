```typescript
import styled from 'styled-components';

/**
 * Interface para as propriedades do componente LocationSection.
 */
interface LocationSectionProps {
  address: string;
  googleMapsEmbedUrl: string;
}

/**
 * Container principal da seção de localização.
 */
export const LocationSectionContainer = styled.section`
  padding: 2rem;
  background-color: #f9f9f9;
  text-align: center;
`;

/**
 * Título da seção de localização.
 */
export const LocationSectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
`;

/**
 * Container do endereço da pizzaria.
 */
export const AddressContainer = styled.div`
  margin-bottom: 1.5rem;
`;

/**
 * Parágrafo que exibe o endereço.
 */
export const AddressParagraph = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

/**
 * Container do iframe do Google Maps.
 */
export const GoogleMapsContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

/**
 * Estilização do iframe do Google Maps.
 */
export const GoogleMapsIframe = styled.iframe`
  width: 100%;
  height: 400px;
  border: 0;
  @media (max-width: 768px) {
    height: 300px;
  }
`;
```