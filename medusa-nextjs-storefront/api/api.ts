const MEDUSA_API_URL = process.env.NEXT_PUBLIC_MEDUSA_API_URL;

export async function fetchProducts() {
  const res = await fetch(`${MEDUSA_API_URL}/store/products`);
  if (!res.ok) throw new Error('Failed to fetch products');
  const data = await res.json();
  return data.products;
}