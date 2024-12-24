<script lang="ts" setup>
const route = useRoute();
</script>
<template>
  <div>
    <h1>My App - {{ route.params }}</h1>
    <div style="display: flex; flex-direction: row; gap: 1rem;">
      <div v-for="(_, i) in Array.from({length: 3})">
        <NuxtLink :to="`/deck/${i}`">Deck {{ i }}</NuxtLink>
      </div>
    </div>
    <NuxtPage />
  </div>
</template>
