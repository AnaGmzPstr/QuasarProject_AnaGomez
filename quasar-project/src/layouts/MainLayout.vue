<template>
  <q-layout view="hHh Lpr fF">
    <!-- Header -->
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Mi Aplicación Quasar
        </q-toolbar-title>

        <!-- Navegación (Menú) -->
        <q-btn flat to="/" label="Página 1" />
        <q-btn flat to="/page2" label="Página 2" />
        <q-btn flat to="/page3" label="Página 3" />
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
