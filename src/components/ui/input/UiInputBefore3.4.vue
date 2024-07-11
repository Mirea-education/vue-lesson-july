<script setup lang="ts">
import type { InputTypeHTMLAttribute } from 'vue'

interface InputProps {
  // v < 3.4 || без отдельно подключенного макроса defineModel
  modelValue?: string | number

  placeholder?: string
  type?: InputTypeHTMLAttribute
}

withDefaults(defineProps<InputProps>(), {
  modelValue: '',
  placeholder: 'название',
  type: 'text',
})

// v < 3.4 || без отдельно подключенного макроса defineModel
const emit = defineEmits(['update:modelValue'])
// onInput в том числе
</script>

<template>
  <input
    :value="modelValue"
    :placeholder="placeholder"
    :type="type"
    :class="$style.input_1"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  >
</template>

<style module>
/* тут пример на модульных стилях */

.input_1 {
  display: flex;
  width: 100%;
  border: 1px solid blue;
  border-radius: 6px;
  background-color: transparent;
  padding: 8px 12px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}

.input_1::placeholder {
  color: rgb(173, 171, 171);
}

.input_1:focus {
  outline: none;
}
</style>
