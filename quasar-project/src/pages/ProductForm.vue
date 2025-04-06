<template>
  <q-page>
    <BtnReturn />
    <q-form @submit.prevent="handleSubmit">
      <q-input v-model="product.title" label="Título" filled />
      <q-input v-model.number="product.price" label="Precio" filled type="number" />
      <q-input v-model="product.image" label="Imagen URL" filled />
      <q-select v-model="product.category" :options="categories" label="Categoría" filled />
      <q-input v-model="product.description" label="Descripción" filled type="textarea" />
      <q-btn label="Guardar" type="submit" color="primary" />
    </q-form>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Dialog } from 'quasar';
import { useProducts } from '../composables/useProducts';
import BtnReturn from '../components/BtnReturn.vue';

const { fetchProduct, createProduct, updateProduct } = useProducts();
const route = useRoute();
const router = useRouter();
const product = ref({ title: '', description: '', price: '', image: '', category: '' });
const categories = ['electronics', 'jewelery', "men's clothing", "women's clothing"];

if (route.params.id) {
  fetchProduct(route.params.id).then((data) => (product.value = data));
}

const handleSubmit = async () => {
  const { title, price, image, category, description } = product.value;
  if (!title || !price || !image || !category || !description) {
    Dialog.create({
      title: 'Incomplete Form',
      message: 'Please fill in all fields before saving.',
      ok: 'OK'
    });
    return;
  }

  if (route.params.id) {
    await updateProduct(Number(route.params.id), product.value);
  } else {
    await createProduct(product.value);
  }

  router.push('/');
};
</script>

<style scoped>
.q-form {
  max-width: 400px;
  margin: 16px auto;
  padding: 16px;
}
.q-btn {
  margin-top: 16px;
}
.q-input {
  margin-bottom: 16px;
}
.q-select {
  margin-bottom: 16px;
}

</style>