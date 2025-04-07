import { ref } from 'vue';
//import DummyProducts from '../assets/dummyProducts.json';

export function useProducts() {
  const products = ref([]);

  const fetchProducts = async () => {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      products.value = JSON.parse(savedProducts);
    } else {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      //const data = DummyProducts;
      products.value = data;
      localStorage.setItem('products', JSON.stringify(data));
    }
  };

  const fetchProduct = async (id) => {
    let products = [];

    const savedProducts = localStorage.getItem('products');

    if (savedProducts) {
      products = JSON.parse(savedProducts);
    } else {
      const res = await fetch('https://fakestoreapi.com/products');
      const products = await res.json();
      //const products = DummyProducts;
      localStorage.setItem('products', JSON.stringify(products));
    }
    return products.find(p => p.id === Number(id));
  };

  const createProduct = async (product) => {
    if (!products.value.length) {
      await fetchProducts();
    }

    const newId = products.value.length
      ? Math.max(...products.value.map(p => p.id)) + 1
      : 1;

    const newProduct = { ...product, id: newId };

    products.value.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products.value));

    return newProduct;
  };

  const updateProduct = async (id, updatedFields) => {
    id = Number(id);
  
    const savedProducts = localStorage.getItem('products');
    let productsArray = savedProducts ? JSON.parse(savedProducts) : [];
  
    const index = productsArray.findIndex(p => p.id === id);
  
    if (index !== -1) {
      const updatedProduct = {
        ...productsArray[index],
        ...updatedFields,
        id
      };
  
      productsArray[index] = updatedProduct;
      localStorage.setItem('products', JSON.stringify(productsArray));
  
      products.value = productsArray;
  
      return updatedProduct;
    }
  
    return null;
  };
  
  

  const deleteProduct = async (id) => {
    products.value = products.value.filter(p => p.id !== id);
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
