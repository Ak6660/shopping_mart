import { useState } from "react";

export default function useProducts() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchProducts(retry = 3) {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/products?skip=0&limit=0");
      const data = await res.json();
      setProducts(data.products);
      setLoading(false);
    } catch (err) {
      if (retry) {
        fetchProducts();
      }
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  return { fetchProducts, products, loading, error };
}
