<template>
    <NuxtLink
        :to="{
            name: 'chat-index-user-id',
            params: {
                user: chat.name,
                id: chat.id,
            },
        }"
        class="hover:bg-gray-200 focus:bg-gray-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 focus:outline-none flex space-x-3 w-full rounded-md py-2.5 px-3"
    >
        <Avatar />
        <div class="w-full flex flex-col gap-2">
            <div class="flex items-center justify-between">
                <p class="font-medium text-xs dark:text-white">
                    {{ chat.name }}
                </p>
                <span
                    class="text-xs"
                    :class="{
                        'text-green-500': chat.recepient === 'user',
                        'dark:text-neutral-400 text-neutral-500':
                            chat.recepient === 'not-user',
                    }"
                    >{{ chat.time }}</span
                >
            </div>
            <div
                class="flex items-center gap-2"
                :class="{
                    'justify-between': receivedMessage,
                }"
            >
                <template v-if="!receivedMessage">
                    <Icon
                        name="quill:checkmark-double"
                        class="text-neutral-500 h-5 w-4"
                    />
                    <p class="text-neutral-500 text-sm">
                        {{ chat.message }}
                    </p>
                </template>
                <template v-else>
                    <p class="text-neutral-500 text-sm">
                        {{ chat.message }}
                    </p>
                    <div class="flex items-center gap-2">
                        <Icon
                            v-if="chat.status === 'archived'"
                            name="heroicons:speaker-x-mark"
                            class="w-4 h-4 dark:text-white"
                        />

                        <span
                            v-if="chat.status === 'archived'"
                            class="dark:text-white text-[11px] bg-neutral-300 dark:bg-neutral-700 py-0.5 px-1 rounded-md capitalize"
                            >{{ chat.status }}</span
                        >
                        <span
                            v-if="
                                chat.recepient === 'user' &&
                                chat.messageCount > 0
                            "
                            class="text-[11px] bg-green-600 h-4 w-4 rounded-full font-bold grid place-content-center text-white dark:text-black p-1"
                            >{{ chat.messageCount }}</span
                        >
                    </div>
                </template>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup>
defineProps({
    chat: {
        type: Object,
        required: true,
        default: () => ({}),
    },
    typing: {
        type: Boolean,
        default: false,
    },
    receivedMessage: {
        type: Boolean,
        default: false,
    },
});
</script>

<style></style>
