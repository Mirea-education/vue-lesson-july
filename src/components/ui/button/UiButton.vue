<script setup lang="ts">
type ButtonVariant = 'default' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

withDefaults(
  defineProps<{
    variant?: ButtonVariant
    size?: ButtonSize
  }>(),
  {
    variant: 'default',
    size: 'md',
  },
)

// // v3.4 defineSlots
defineSlots<{
  default: () => any
}>()
</script>

<template>
  <button class="btn" :class="[variant, size]">
    <slot />

    <!--
      здесь возможно использовать несколько слотов:
      <slot name="icon-left" />
      <slot />
      <slot name="icon-right" />
    -->
  </button>
</template>

<style scoped>
.btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  opacity: 1;
  white-space: nowrap;
  transition: all 0.2s ease-in;
  cursor: pointer;
}

.default {
  background-color: rgb(19, 172, 103);
  color: white;
  box-shadow:
    0 1px 3px 0 rgb(0 0 0 / 0.1),
    0 1px 2px -1px rgb(0 0 0 / 0.1);
  border: 1px solid rgb(19, 172, 103);
}
.default:hover {
  opacity: 0.9;
}
.default:disabled {
  opacity: 0.5;
}

.outline {
  border: 1px solid rgb(19, 172, 103);
  color: rgb(19, 172, 103);
  background-color: white;
}
.outline:hover {
  background-color: rgb(239, 239, 239);
}
.outline:disabled {
  opacity: 0.5;
}

.md {
  padding: 8px 16px;
}

.lg {
  padding: 10px 18px;
}

.sm {
  padding: 6px 12px;
}
</style>
