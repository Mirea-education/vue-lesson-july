<script setup lang="ts">
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { UiButton, UiInputAfter_3_4, UiInputBefore_3_4 } from '@/components/ui'
import { usePostStore } from '@/store/pinia.composition'

const title = ref('')
const description = ref('')

const postStore = usePostStore()

const onCreate = async () => {
  const newPost = {
    title: title.value,
    body: description.value,
    id: +uuidv4(),
    userId: +uuidv4(),
  }
  await postStore.createNewPost(newPost)
  title.value = ''
  description.value = ''
}
</script>

<template>
  <div class="creation_container">
    <UiButton @click="onCreate">
      Создать карточку
    </UiButton>
    <UiInputBefore_3_4 v-model="title" />
    <UiInputAfter_3_4 v-model="description" />
  </div>
</template>

<style scoped>
.creation_container {
  display: flex;
  gap: 10px;
  align-items: center;
  max-width: 600px;
}
</style>
