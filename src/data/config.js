// src/data/config.js
export const shippingConfig = {
  vatRate: 0.175, // Barbados VAT is 17.5%
  localHandlingFee: 25.0, // Fixed fee in USD/GBP equivalent
  margin: 0.15, // 15% margin

  // Rate bands per kg (Simplified examples)
  rates: {
    USA: [
      { maxWeight: 2, price: 15 },
      { maxWeight: 5, price: 30 },
      { maxWeight: 10, price: 50 },
      { maxWeight: 999, price: 100 },
    ],
    UK: [
      { maxWeight: 2, price: 20 },
      { maxWeight: 5, price: 45 },
      { maxWeight: 10, price: 70 },
      { maxWeight: 999, price: 150 },
    ],
  },

  // Duty rates by category
  categories: [
    { name: "Electronics", duty: 0.2 },
    { name: "Clothing", duty: 0.2 },
    { name: "Auto Parts", duty: 0.35 },
    { name: "Household", duty: 0.15 },
    { name: "Cosmetics", duty: 0.2 },
    { name: "Other", duty: 0.2 },
  ],
};
