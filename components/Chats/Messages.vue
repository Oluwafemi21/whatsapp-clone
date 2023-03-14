<template>
    <div
        class="flex-1 overflow-y-auto h-full mt-20 pb-1 px-3"
        :class="{
            'grid place-content-center': !messages.length,
        }"
    >
        <div v-if="!messages.length">
            <ChatsNoMessage />
        </div>
        <template v-else>
            <section class="text-white">
                <div
                    v-for="(message, index) in messages"
                    :key="index"
                    class="space-y-1 flex flex-col w-full"
                    :class="{
                        'items-end': message.userId === '12d34e',
                    }"
                >
                    <ChatsMessageBox :message="message" />
                </div>
            </section>
        </template>
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
