<template>
  <q-page>
    <q-input v-model="search" placeholder="Find product" filled/>
    <q-select v-model="selectedCategory" :options="categories" label="Filter by category" filled />
    <q-btn label="Add product" icon="add" @click="$router.push('/product/edit')" color="primary" />
    <q-btn label="Reset products" color="negative" icon="delete" @click="reset"/>
    <q-list>
      <q-item v-for="product in filteredProducts" :key="product.id" clickable>
        <q-item-section avatar>
          <q-img :src="product.image" style="width: 50px; height: 50px;" />
        </q-item-section>
        <q-item-section @click="$router.push(`/product/${product.id}`)">
          <q-item-label>{{ product.title }}</q-item-label>
          <q-item-label caption>{{ product.price }} €</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn icon="edit" @click="$router.push(`/product/edit/${product.id}`)" color="primary" flat />
          <q-btn icon="delete" @click="deleteProduct(product.id)" color="negative" flat />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useProducts } from '../composables/useProducts';

const { products, fetchProducts, deleteProduct } = useProducts();
fetchProducts();

const search = ref('');
const selectedCategory = ref(null);
const categories = ['electronics', 'jewelery', "men's clothing", "women's clothing"];

const filteredProducts = computed(() =>
  products.value.filter((prod) =>
    (selectedCategory.value ? prod.category === selectedCategory.value : true) &&
    prod.title.toLowerCase().includes(search.value.toLowerCase())
  )
);
const reset = () =>{
  localStorage.removeItem('products');
  fetchProducts();
}
</script>
<style scoped>
.q-list {
  max-width: 600px;
  margin: auto;
}
.q-item {
  margin: 10px 0;
}
.q-item-section {
  display: flex;
  align-items: center;
}
.q-item-label {
  font-size: 1.2rem;
}


</style>