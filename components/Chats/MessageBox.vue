<template>
    <div class="relative min-w-fit">
        <p>{{ message.text }}</p>
        <div class="absolute bottom-0 right-0 flex gap-1 text-xs">
            <span>{{ message.time }}</span>
            <span>{{ message.read ? "read" : "unread" }}</span>
        </div>
    </div>
</template>

<script setup>
defineProps({
    message: {
        type: Object,
        required: true,
    },
});
</script>

<style></style>
