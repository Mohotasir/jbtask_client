import { useState, useEffect } from 'react';
import useAxios from './useAxios';

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const axios = useAxios()
  useEffect(() => {
    axios
      .get("/allProducts")
      .then((res) => {
        setProducts(res.data);
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching total products:", error);
        setError(error);
        setLoading(false);
      });
  }, [axios, products]);

  return { products, loading, error };
}
