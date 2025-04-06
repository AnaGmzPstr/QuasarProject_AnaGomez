<template>
  <q-page>
    <ReturnBtn />
    <div class="q-pa-md row items-start q-gutter-md">

      <q-card class="my-card" flat bordered>
        <div class="row no-wrap">
          <div class="column items-start" style="width: 40%;">

            <q-img :src="product.image" class="q-pa-sm">
              <div class="absolute-bottom text-h6">{{ product.title }}</div>
            </q-img>
          </div>

          <q-card-section class="column justify-between" style="width: 60%;">
            <div class="text-subtitle1">{{ product.category }}</div>
            <div class="text-body1 q-mt-sm">{{ product.description }}</div>
            <div class="text-h6 text-main q-mt-sm">{{ product.price }} €</div>

            <div class="text-body2 q-mt-sm">
              <q-icon v-for="i in 5" :key="i" name="star" color="yellow" />
              <span class="text-caption">({{ product.rating?.rate }})</span>
            </div>

            <q-btn label="Edit" color="main" @click="$router.push(`/product/edit/${product.id}`)" class="q-mt-md" />
          </q-card-section>

        </div>
      </q-card>
    </div>
  </q-page>
</template>


<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useProducts } from '../composables/useProducts';
import ReturnBtn from '../components/BtnReturn.vue';

const { fetchProduct } = useProducts();
const route = useRoute();
const product = ref({});

fetchProduct(route.params.id).then((data) => (product.value = data));

</script>

<style scoped>
.q-card {
  width: 600px;
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