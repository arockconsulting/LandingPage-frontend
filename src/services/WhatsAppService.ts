```typescript
// src/services/WhatsAppService.ts

/**
 * @fileoverview This file contains the WhatsAppService, which handles opening a WhatsApp chat with the pizzeria's number.
 * @module WhatsAppService
 */

/**
 * Opens a WhatsApp chat with the pizzeria's number.
 * @param {string} phoneNumber - The pizzeria's phone number, including the country code (e.g., "5511999999999").
 * @param {string} [message] - An optional pre-filled message to include in the chat.
 * @returns {void}
 */
const openWhatsAppChat = (phoneNumber: string, message?: string): void => {
  if (!phoneNumber) {
    console.error("Phone number is required to open WhatsApp chat.");
    return;
  }

  const formattedPhoneNumber = phoneNumber.replace(/[^0-9]/g, ""); // Remove non-numeric characters
  let whatsappURL = `https://wa.me/${formattedPhoneNumber}`;

  if (message) {
    const encodedMessage = encodeURIComponent(message);
    whatsappURL += `?text=${encodedMessage}`;
  }

  window.open(whatsappURL, "_blank");
};

export default openWhatsAppChat;
```