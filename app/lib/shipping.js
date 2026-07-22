// Tiered shipping by total cart weight (lbs)
const DEFAULT_WEIGHT = 2;

const TIERS = [
  { maxLbs: 20,  amount: 25,  label: "Standard Shipping" },
  { maxLbs: 20,  amount: 50, label: "Standard Shipping" },
  { maxLbs: 20,  amount: 100, label: "Standard Shipping" },
  { maxLbs: 100, amount: 50, label: "Standard Shipping" },
  { maxLbs: 100, amount: 100, label: "Standard Shipping" },
  { maxLbs: 100, amount: 200, label: "Standard Shipping" },
];

export function getCartWeight(items, products) {
  return items.reduce((total, it) => {
    const product = products.find((p) => p.id === Number(it.id));
    if (!product) return total;
    const qty = Math.max(1, parseInt(it.quantity, 10) || 1);
    return total + (product.weight || DEFAULT_WEIGHT) * qty;
  }, 0);
}

export function getShippingRate(weightLbs) {
  const tier = TIERS.find((t) => weightLbs <= t.maxLbs);
  return { amount: tier.amount, display_name: tier.label }; // amount in cents
}
