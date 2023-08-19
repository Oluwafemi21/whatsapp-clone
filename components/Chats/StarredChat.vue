<template>
  <header class="flex flex-col justify-between gap-3 mb-5 px-2">
    <h3 class="text-xl font-medium dark:text-white">Starred messages</h3>
    <FormBaseInput v-model="searchTerm" :placeholder="'Search'" />
  </header>
  <section class="flex items-center justify-center">
    <p class="dark:text-white text-2xl mt-48">No starred messages found.</p>
  </section>
</template>

<script setup lang="ts">
const searchTerm = ref("");
</script>
