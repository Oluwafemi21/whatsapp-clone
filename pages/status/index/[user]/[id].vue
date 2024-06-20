<template>
  <section
    class="min-h-screen grid place-content-center text-black dark:text-white"
  >
    <p class="text-xl">Coming soon...</p>
    <button class="underline" @click="$router.back()">Go Back</button>
  </section>
</template>

<script setup>
const route = useRoute();
useHead({
  title: `Whatsapp Status | ${route.params.user}`,
});

definePageMeta({
  layout: "default",
});
</script>

<style></style>
