<template>
    <div
        class="flex-1 overflow-y-auto h-full mt-20 px-3"
        :class="{
            'grid place-content-center': !messages.length,
        }"
    >
        <div v-if="!messages.length">
            <span class="bg-neutral-600 text-white rounded text-sm px-3 py-1"
                >Today</span
            >
        </div>
        <div v-else>
            <p>Welcome to your first texts</p>
            <ul class="text-white space-y-1">
                <li
                    v-for="message in messages"
                    :key="message.id"
                    class="bg-emerald-500 p-2 rounded"
                >
                  <ChatsMessageBox :message="message" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
defineProps({
    messages: {
        type: Array,
        required: true,
        default: () => [],
    },
});
</script>

<style></style>
