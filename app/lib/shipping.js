// Tiered shipping by total cart weight (lbs), with speed options
const DEFAULT_WEIGHT = 2;

// Ground price per weight tier (cents)
const TIERS = [
  { maxLbs: 1,  amount: 899 },
  { maxLbs: 5,  amount: 1299 },
  { maxLbs: 20, amount: 1999 },
  { maxLbs: 50, amount: 3499 },
  { maxLbs: Infinity, amount: 5999 },
];

// Speed options: multiplier is applied to the ground tier price
const SPEEDS = [
  { display_name: 'Ground',    multiplier: 1.5,    estDays: [5, 7] },
  { display_name: '2-Day',     multiplier: 2.5, estDays: [2, 3] },
  { display_name: 'Overnight', multiplier: 3.5,  estDays: [1, 2] },
];

export function getCartWeight(items, products) {
  return items.reduce((total, it) => {
    const product = products.find((p) => p.id === Number(it.id));
    if (!product) return total;
    const qty = Math.max(1, parseInt(it.quantity, 10) || 1);
    return total + (product.weight || DEFAULT_WEIGHT) * qty;
  }, 0);
}

export function getShippingOptions(weightLbs) {
  const tier = TIERS.find((t) => weightLbs <= t.maxLbs);
  return SPEEDS.map((s) => ({
    display_name: s.display_name,
    amount: Math.round(tier.amount * s.multiplier),
    delivery_estimate: {
      minimum: { unit: 'business_day', value: s.estDays[0] },
      maximum: { unit: 'business_day', value: s.estDays[1] },
    },
  }));
}

// Ground rate — used by the cart page display
export function getShippingRate(weightLbs) {
  return getShippingOptions(weightLbs)[0];
}
