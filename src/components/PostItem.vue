<script setup lang="ts">
import { UiCard } from '@/components/ui'

defineProps<{
  posts: Post[]
}>()
</script>

<template>
  <UiCard v-for="post in posts" :key="post.id">
    <template #title>
      <h4 style="max-width: 420px;">
        {{ post.title }}
      </h4>
    </template>
    <template #description>
      <p>{{ post.body }}</p>
    </template>
    <div class="id">
      {{ post.id }}
    </div>
  </UiCard>
</template>

<style scoped>
.id{
  position: absolute;
  right: 8px;
  top: 8px;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(203, 203, 203);
}
</style>
