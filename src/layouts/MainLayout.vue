<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
      <footer>THIS IS A FOOTER</footer>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MainLayout',
});
</script>
