<template>
  <div class="holder">
    <img src="~/assets/svg/polygon.svg" alt="polygon" :class="position" />
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Popover {
  position: 'left' | 'center' | 'right';
}
defineProps<Popover>();
</script>

<style scoped lang="scss">
.holder {
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  position: relative;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 1);

  img {
    position: absolute;
    bottom: -10px;

    &.left {
      left: 10px;
    }
  }
}
</style>
