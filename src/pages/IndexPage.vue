<template>
  <q-page class="hero-region">
    <div class="app-container">
      <AppHeader />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import AppHeader from 'src/components/Partials/AppHeader.vue';

defineOptions({
  name: 'IndexPage',
});
</script>

<style lang="scss" scoped>
.hero-region {
  background-image: url('../assets/hero-bg.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
