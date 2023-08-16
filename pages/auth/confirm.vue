<script setup lang="ts">
const user = useSupabaseUser();

watch(
  user,
  () => {
    if (user.value) {
      return navigateTo("/chat");
    }
  },
  { immediate: true },
);
</script>
<template>
  <section
    class="w-full h-screen grid place-content-center justify-items-center"
  >
    <p class="text-xl dark:text-white text-black">Waiting for login...</p>
  </section>
</template>
