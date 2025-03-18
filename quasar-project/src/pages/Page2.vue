<script setup>
    import { ref, onMounted } from 'vue'
    import axios from 'axios';

    const users = ref([]);
    const loading = ref(false);
    const error = ref(null);

    const fetchData = async () => {
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            users.value = response.data
        } catch (error) {
            error.value ='Error'
        } finally {
            loading.value = false;
        }
    }
    onMounted(fetchData);
</script>

<template>
    <q-page>
      <h1>Página 2</h1>

      <div v-if="loading">Cargando datos...</div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else>
        <h2>Usuarios:</h2>
        <ul>
            <li v-for="user in users" :key="user.id">
                {{ user.name }} - {{ user.email }}
            </li>
        </ul>
      </div>
    </q-page>
  </template>
  