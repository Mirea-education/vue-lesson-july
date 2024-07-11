<script setup lang="ts">
defineSlots<{
  title: () => any
  description: () => any
  default: () => any
}>()
</script>

<template>
  <div class="card">
    <slot name="title" />
    <slot name="description" />
    <slot />
  </div>
</template>

<style scoped>
.card{
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-radius: 10px;
  background-color: white;
  border: 1px solid rgb(224, 224, 224);
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  padding: 10px;
  width: 100%;
}
</style>
