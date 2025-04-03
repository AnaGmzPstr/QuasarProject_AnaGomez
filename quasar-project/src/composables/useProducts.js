import { ref } from 'vue';

export function useProducts() {
  const products = ref([]);

  const fetchProducts = async () => {
    const savedProducts = localStorage.getItem('products');
  
    if (savedProducts) {
      products.value = JSON.parse(savedProducts);
    } else {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      products.value = data;
      localStorage.setItem('products', JSON.stringify(data));
      console.log("Productos guardados en localStorage:", localStorage.getItem('products'));
    }
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
    const newProduct = await res.json();
    newProduct.id = products.value.length ? Math.max(...products.value.map(p => p.id)) + 1 : 1;
    products.value.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products.value));
    return newProduct;
  };

  const updateProduct = async (id, product) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
    const updatedProduct = await res.json();
    const index = products.value.findIndex((p) => p.id === id);
    if (index !== -1) {
      products.value[index] = updatedProduct;
      localStorage.setItem('products', JSON.stringify(products.value));
    }
    return updatedProduct;
  };

  const deleteProduct = async (id) => {
    await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: 'DELETE',
    });
    products.value = products.value.filter((p) => p.id !== id);
    localStorage.setItem('products', JSON.stringify(products.value));
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