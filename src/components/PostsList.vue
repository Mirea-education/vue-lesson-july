<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import PostItem from './PostItem.vue'
import { usePostStore } from '@/store/pinia.composition'

const cardStore = usePostStore()
const { posts } = storeToRefs(cardStore)

onMounted(async () => {
  await cardStore.getAllPosts()
})
</script>

<template>
  <div :class="$style.list">
    <!-- с v3.4 можно не писать :cards="cards", если у вас совпадает наименование пропа с наименованием переменной просто юзайте :cards  -->
    <!-- в данном случае так лучше не передовать и использовать v-for здесь и передать card внутрь но сделано так ради примера -->
    <PostItem :posts />
  </div>
</template>

<style module>
/* тут пример на модульных стилях */

.list{
  margin-top: 200px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
}
</style>
