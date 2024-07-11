<script setup lang="ts">
import type { InputTypeHTMLAttribute } from 'vue'

interface InputProps {
  placeholder?: string
  type?: InputTypeHTMLAttribute
}

withDefaults(defineProps<InputProps>(), {
  placeholder: 'описание',
  type: 'text',
})
// v3.4 и выше
const model = defineModel<string | number>()
</script>

<template>
  <input v-model="model" :placeholder="placeholder" :type="type" :class="$style.input_2">
</template>

<style module>
/* тут пример на модульных стилях */

.input_2 {
  display: flex;
  width: 100%;
  padding: 8px 12px;
  border: 1px solid red;
  border-radius: 6px;
  background-color: transparent;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}
.input_2::placeholder {
  color: rgb(173, 171, 171);
}
.input_2:focus {
  outline: none;
}
</style>
