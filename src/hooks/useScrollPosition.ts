```typescript
// src/hooks/useScrollPosition.ts

import { useState, useEffect } from 'react';

/**
 * Interface para definir o tipo de retorno do hook useScrollPosition.
 */
interface ScrollPosition {
  scrollX: number;
  scrollY: number;
}

/**
 * Hook React para rastrear a posição de rolagem da janela.
 *
 * @returns Um objeto contendo as posições de rolagem X e Y.
 */
const useScrollPosition = (): ScrollPosition => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    scrollX: 0,
    scrollY: 0,
  });

  useEffect(() => {
    /**
     * Função handler para atualizar a posição de rolagem.
     */
    const handleScroll = () => {
      setScrollPosition({
        scrollX: window.scrollX,
        scrollY: window.scrollY,
      });
    };

    // Adiciona o listener de evento de scroll quando o componente é montado.
    window.addEventListener('scroll', handleScroll);

    // Remove o listener de evento de scroll quando o componente é desmontado.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Dependência vazia para executar o efeito apenas na montagem e desmontagem.

  return scrollPosition;
};

export default useScrollPosition;
```