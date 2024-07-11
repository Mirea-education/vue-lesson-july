<script setup lang="ts">
import CreationBlock from '@/components/CreationBlock.vue'
import { UiButton } from '@/components/ui'
</script>

<template>
  <div class="top">
    <CreationBlock />
    <UiButton variant="outline" @click="$router.push('/about')">
      О материале
    </UiButton>
    <img class="img_before" src="/static/before.png">
    <img class="img_after" src="/static/after.png">
  </div>
</template>

<style scoped>
.top{
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.img_before{
  position: absolute;
  width: 150px;
  left: 80px;
  top: 40px;
}

.img_after{
  position: absolute;
  width: 200px;
  left: 340px;
  top: 40px;
}
</style>
