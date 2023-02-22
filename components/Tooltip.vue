<template>
    <div
        v-bind="$attrs"
        class="invisible group-hover:visible -top-9 transition duration-150 ease-in absolute left-0 min-w-full bg-neutral-800 text-white rounded-md border border-black/40 p-2 shadow-md flex flex-col"
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
