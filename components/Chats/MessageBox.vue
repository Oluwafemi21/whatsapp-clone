<template>
    <div
        class="relative flex gap-x-3 bg-[#d8fbd2] text-black dark:bg-emerald-700 dark:text-white px-2 rounded max-w-md w-fit before:absolute before:visible before:top-0 before:border-[10px] before:border-transparent before:border-t-[#d8fbd2] dark:before:border-t-emerald-700 before:rounded"
        :class="{
            'before:-right-2.5': message.userId === '12d34e' && index === 0,
            'before:-left-2.5': message.userId !== '12d34e' && index === 0,
        }"
        v-for="(text, index) in message.text_messages"
        :key="text.id"
    >
        <p class="text-sm py-2">{{ text.text }}</p>
        <div class="shrink-0 flex self-end items-end gap-1 mb-1 text-[11px]">
            <span>{{ text.time }}</span>
            <Icon
                v-show="message.userId === '12d34e'"
                name="quill:checkmark-double"
                class="h-4 w-4"
            />
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
