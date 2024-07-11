<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import NotAvailable from './components/NotAvailable.vue'

const { width } = useWindowSize()
</script>

<template>
  <router-view v-if="width >= 768" />
  <NotAvailable v-else />
</template>
