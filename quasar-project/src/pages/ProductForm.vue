<template>
  <q-page>
    <q-form @submit="handleSubmit">
      <q-input v-model="product.title" label="Título" filled />
      <q-input v-model.number="product.price" label="Precio" filled type="number" />
      <q-input v-model="product.image" label="Imagen URL" filled />
      <q-select v-model="product.category" :options="categories" label="Categoría" filled />
      <q-btn label="Guardar" type="submit" color="primary" />
    </q-form>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useProducts } from '../composables/useProducts';

const { fetchProduct, createProduct, updateProduct } = useProducts();
const route = useRoute();
const router = useRouter();
const product = ref({ title: '', price: 0, image: '', category: '' });
const categories = ['electronics', 'jewelery', "men's clothing", "women's clothing"];

if (route.params.id) {
  fetchProduct(route.params.id).then((data) => (product.value = data));
}

const handleSubmit = async () => {
  if (route.params.id) {
    await updateProduct(route.params.id, product.value);
  } else {
    await createProduct(product.value);
  }
  router.push('/');
};
</script>
<style scoped>
.q-form {
  max-width: 400px;
  margin: auto;
}
.q-input {
  margin-bottom: 16px;
}
.q-btn {
  margin-top: 16px;
}

</style>