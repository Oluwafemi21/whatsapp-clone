<template>
    <div
        class="invisible group-hover:visible -top-9 transition duration-150 ease-in absolute left-0 min-w-full text-center bg-neutral-800 text-white rounded-md border border-black/40 p-2 shadow-md"
    >
        <span class="block text-xs">{{ text }}</span>
    </div>
</template>

<script setup>
defineProps({
    text: {
        type: String,
        required: true,
        default: "",
    },
});
</script>

<style></style>
