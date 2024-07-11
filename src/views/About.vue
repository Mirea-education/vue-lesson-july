<script setup lang="ts">
import { marked } from 'marked'
import { ChevronLeft } from 'lucide-vue-next'
import { useFetch } from '@vueuse/core'
import { computed } from 'vue'

const { data } = useFetch('/about.md')
const text = computed(() => {
  return data.value && marked.parse(data.value as string)
})
</script>

<template>
  <div class="container">
    <ChevronLeft :size="20" color="rgb(19, 172, 103)" class="icon" @click="$router.push('/')" />
    <div v-html="text" />
  </div>
</template>

<style scoped>
.container{
  padding: 20px;
}

.icon{
  cursor: pointer;
}
</style>
