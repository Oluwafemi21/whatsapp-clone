<template>
    <div
        class="flex-1 overflow-y-auto h-full px-3 py-2 chat-section"
        :class="{
            'grid place-content-center': !messages.length,
        }"
        ref="chat_section"
        @scroll="getScrollPosition"
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
                    ref="scrollToBottomButton"
                    @click="scrollToBottom"
                    class="fixed py-2 px-3 rounded-lg bottom-24 right-5 z-50 text-black dark:text-white bg-gray-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 shadow-md"
                >
                    <Icon name="fluent:arrow-down-28-regular" class="h-6 w-6" />
                </button>
            </section>
        </template>
    </div>
</template>

<script setup lang="ts">
interface Props {
    messages: {
        userId: string;
        read: boolean;
        text_messages: {
            id: string;
            text: string;
            time: string;
        }[];
    }[];
}

const { messages } = defineProps<Props>();

const chat_section = ref<HTMLDivElement>();
const scrollToBottomButton = ref<HTMLButtonElement>();
let scrollPosition: number | undefined = 0;

const getScrollPosition = () => {
    scrollPosition = chat_section.value?.scrollTop;
    chat_section.value!.scrollHeight - chat_section.value!.clientHeight !=
    scrollPosition
        ? (scrollToBottomButton.value!.style.display = "block")
        : (scrollToBottomButton.value!.style.display = "none");
};

const scrollToBottom = () => {
    chat_section.value?.scrollTo({
        top: chat_section.value?.scrollHeight,
        behavior: "smooth",
    });
};

onMounted(() => {
    scrollToBottom();
});
</script>

<style scoped>
.chat-section {
    scroll-behavior: smooth;
}
</style>
