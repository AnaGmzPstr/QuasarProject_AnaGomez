<template>
    <q-page>
      <q-btn label="Obtener Imagen de Gatito" @click="fetchCatImage" color="primary" />
      
      <div v-if="catImage">
        <q-img class="img" :src="catImage" alt="Gatito" />
      </div>
      
      <q-spinner-dot v-if="loading" size="50px" color="primary" />
    </q-page>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  
  // Variables reactivas
  const catImage = ref(null); 
  const loading = ref(false);  
  
  // Función para obtener la imagen del gatito
  const fetchCatImage = async () => {
    loading.value = true;
  
    try {

      const response = await axios.get('https://api.thecatapi.com/v1/images/search');
  
      catImage.value = response.data[0].url;
    } catch (error) {
      console.error('Error al obtener la imagen del gato:', error);
    } finally {
      loading.value = false;
    }
  };
  </script>
  
  <style scoped>
  .img {
    height: 300px;
    width: 300px;
    }
  </style>
  