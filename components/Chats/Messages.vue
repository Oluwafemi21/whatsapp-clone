<template>
    <div
        class="flex-1 overflow-y-auto h-full px-3 py-2 chat-section"
        :class="{
            'grid place-content-center': !messages.length,
        }"
        ref="chat_section"
    >
        <div v-if="!messages.length">
            <ChatsNoMessage />
        </div>
        <template v-else>
            <section class="text-white space-y-1 relative">
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
                <button
                    @click="goToBottom"
                    class="fixed py-2 px-3 rounded-lg bottom-24 right-5 z-50 text-black dark:text-white bg-gray-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 shadow-md"
                >
                    <Icon name="fluent:arrow-down-28-regular" class="h-6 w-6" />
                </button>
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

const bottom = ref(0);
const chat_section = ref();

// const scrollToBottom = (event) => {
// get the height of the section
// bottom.value = event.target.scrollHeight;
// console.log(event.target.scrollTop);
// };

const goToBottom = () => {
    chat_section.value.scrollTop = chat_section.value.scrollHeight;
};

onMounted(() => {
    goToBottom();
});

const heightOfSection = computed(() => {
    return chat_section.value.scrollHeight;
});
</script>

<style scoped>
.chat-section {
    scroll-behavior: smooth;
}
</style>
