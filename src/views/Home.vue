<script setup lang="ts">
import TopPart from '@/components/TopPart.vue'
import PostsList from '@/components/PostsList.vue'
</script>

<template>
  <div class="container">
    <TopPart />
    <PostsList />
  </div>
</template>

<style scoped>
.container{
  padding: 10px;
}
</style>
