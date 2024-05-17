<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
      <AppFooter />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import AppFooter from 'src/components/Partials/AppFooter.vue';
defineOptions({
  name: 'MainLayout',
});
</script>
