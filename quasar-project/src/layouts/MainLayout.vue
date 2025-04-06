<template>
  <q-layout>
    <!-- Header -->
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Fake Store Management
        </q-toolbar-title>

        <!-- Navegación (Menú) -->
        <q-btn flat to="/" label="Product list" />
        <q-btn flat to="/product/edit/:id?" label="Add product" />
      </q-toolbar>
    </q-header>

    <!-- Main Page -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
