<script setup lang="ts">
import { TriangleAlert } from 'lucide-vue-next'
</script>

<template>
  <div class="device">
    <TriangleAlert
      class="icon"
      color="rgb(39 39 42)"
      :stroke-width="1"
    />
    <h2>
      Пример недоступен 🧐 на данном типе устройств
    </h2>
    <p>
      Пожалуйста, смотрите пример на других устройствах 🧑‍💻
    </p>
  </div>
</template>

<style scoped>
.device{
  display: flex;
  height: 100dvh;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.icon{
  width: 160px;
  height: 160px;
  margin-bottom: 2px;
  margin-top: -64px;
}
</style>
