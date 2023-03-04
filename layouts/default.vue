<template>
    <div class="h-screen flex flex-col w-full overflow-hidden">
        <TheHeader />
        <main class="bg-gray-100 dark:bg-black/90 flex-1 mt-10">
            <section class="chat w-full bg-transparent border border-black/25">
                <slot />
            </section>
        </main>
    </div>
</template>

<script setup>
import { useDark } from "@vueuse/core";

const dark = useDark({
    storageKey: "theme",
});
</script>

<style scoped></style>
