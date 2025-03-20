<template>
    <q-page>
      <q-btn label="Obtener Imagen de Gatito" @click="fetchCatImage" color="primary" />
      
      <!-- Imagen del gatito -->
      <div v-if="catImage">
        <q-img :src="catImage" alt="Gatito" />
      </div>
      
      <!-- Mensaje de carga -->
      <q-spinner-dot v-if="loading" size="50px" color="primary" />
    </q-page>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  
  // Variables reactivas
  const catImage = ref(null);  // Guardará la URL de la imagen del gatito
  const loading = ref(false);  // Controla el estado de carga
  
  // Función para obtener la imagen del gatito
  const fetchCatImage = async () => {
    loading.value = true; // Activar el spinner de carga
  
    try {
      // Realizamos la petición a la API
      const response = await axios.get('https://api.thecatapi.com/v1/images/search');
  
      // Asignamos la URL de la imagen obtenida
      catImage.value = response.data[0].url;
    } catch (error) {
      console.error('Error al obtener la imagen del gato:', error);
    } finally {
      loading.value = false; // Desactivamos el spinner de carga
    }
  };
  </script>
  
  <style scoped>
  /* Puedes agregar estilos si es necesario */
  </style>
  