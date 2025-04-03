import { ref } from 'vue';

export function useProducts() {
  const products = ref([]);

  const fetchProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    products.value = data;
  };

  const fetchProduct = async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    return data;
  };

  const createProduct = async (product) => {
    const res = await fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
    return await res.json();
  };

  const updateProduct = async (id, product) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
    return await res.json();
  };

  const deleteProduct = async (id) => {
    await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: 'DELETE',
    });
    products.value = products.value.filter((p) => p.id !== id);
  };

  return { 
    products, 
    fetchProducts, 
    fetchProduct, 
    createProduct, 
    updateProduct, 
    deleteProduct 
};
}