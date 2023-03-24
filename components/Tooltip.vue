<template>
    <div
        v-bind="$attrs"
        class="z-30 hidden group-hover:flex group-hover:opacity-100 duration-150 delay-1000 opacity-0 transition-opacity ease-in absolute left-0 min-w-fit bg-gray-200 dark:bg-neutral-800 dark:text-white rounded-md border border-neutral-400/50 dark:border-black/40 p-2 shadow-md flex-col"
    >
        <span class="block text-xs">{{ text }}</span>
        <span v-if="multiline" class="block text-xs">{{ text2 }}</span>
    </div>
</template>

<script setup>
defineProps({
    text: {
        type: String,
        required: true,
        default: "",
    },
    multiline: {
        type: Boolean,
        default: false,
    },
    text2: {
        type: String,
        default: "",
    },
});
</script>

<style></style>
