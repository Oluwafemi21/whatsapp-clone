<template>
    <section class="relative h-full p-4">
        <h3
            class="sticky top-0 bg-neutral-800 z-30 text-xl dark:text-white font-medium mb-6"
        >
            Groups in common (0)
        </h3>
        <FormBaseInput v-model="searchTerm" :placeholder="'Search'" />
    </section>
</template>

<script setup>
const searchTerm = ref("");
</script>

<style></style>
