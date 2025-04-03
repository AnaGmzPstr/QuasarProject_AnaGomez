<template>
  <q-page>
    <q-btn icon="home" label="Return" @click="$router.push('/')" />


    <q-card>
      <q-img :src="product.image" />
      <q-card-section>
        <div class="text-h6">{{ product.title }}</div>
        <div class="text-subtitle1">{{ product.category }}</div>
        <div class="text-body1">{{ product.description }}</div>
        <div class="text-h6 text-primary">{{ product.price }} €</div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useProducts } from '../composables/useProducts';

const { fetchProduct } = useProducts();
const route = useRoute();
const product = ref({});

fetchProduct(route.params.id).then((data) => (product.value = data));
</script>

<style scoped>
.q-card {
  max-width: 400px;
  margin: auto;
}
.q-img {
  max-width: 100%;
  height: auto;
}
.q-card-section {
  padding: 16px;
}
.text-h6 {
  font-size: 1.5rem;
}

</style>