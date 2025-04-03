<template>
  <q-page>
    <q-btn label="Volver" @click="$router.push('/')" />
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

</style>