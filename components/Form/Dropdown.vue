<template>
    <div
        v-bind="$attrs"
        class="peer absolute left-0 p-1 z-20 mt-2 min-w-max bg-gray-100 dark:bg-neutral-800 border dark:border-black/40 w-40 grid gap-1 rounded-md transition duration-200 ease-in shadow-md"
        ref="dropdown"
    >
        <slot name="items" />
    </div>
</template>

<script setup>
import { onClickOutside } from "@vueuse/core";

const dropdown = ref(null);
const emit = defineEmits(["close"]);
onClickOutside(dropdown, () => {
    emit("close");
});
</script>

<style></style>
