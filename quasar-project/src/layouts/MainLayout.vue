<template>
  <q-layout view="hHh Lpr fF">
    <!-- Header -->
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Fake Store
        </q-toolbar-title>

        <!-- Navegación (Menú) -->
        <q-btn flat to="/" label="Llista de productes" />
        <q-btn flat to="/product/:id" label="Detall" />
        <q-btn flat to="/product/edit/:id?" label="Editar o afegir producte" />
      </q-toolbar>
    </q-header>

    <!-- Main Page -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
// No se necesitan reacciones aquí, ya que no hay estado dinámico
</script>
