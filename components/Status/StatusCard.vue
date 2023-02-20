<template>
    <NuxtLink
        :to="{
            name: 'chat-index-user-id',
            params: {
                user: chat.name,
                id: chat.id,
            },
        }"
        class="hover:bg-neutral-800 flex space-x-3 w-full rounded-md py-2.5 px-3"
    >
        <div
            class="bg-neutral-700 h-12 w-12 grid place-content-center rounded-full flex-shrink-0"
        >
            <Icon
                name="mingcute:user-3-fill"
                class="w-6 h-6 text-neutral-500"
            />
        </div>
        <div class="w-full flex flex-col gap-2">
            <div class="flex items-center justify-between text-white">
                <p class="font-medium text-xs">{{ chat.name }}</p>
                <span
                    class="text-xs"
                    :class="{
                        'text-green-500': chat.messageCount > 0,
                        'text-gray-500': !chat.messageCount,
                    }"
                    >{{ chat.time }}</span
                >
            </div>
            <div class="flex items-center justify-between gap-2">
                <p class="text-gray-500 text-xs">
                    {{ chat.message }}
                </p>

                <div class="flex items-center gap-2">
                    <Icon
                        v-if="chat.status === 'archived'"
                        name="heroicons:speaker-x-mark"
                        class="w-4 h-4 text-white"
                    />

                    <span
                        v-if="chat.status === 'archived'"
                        class="text-white text-xs bg-neutral-700 p-1 rounded-md"
                        >{{ chat.status }}</span
                    >
                    <span
                        v-if="chat.messageCount > 0"
                        class="text-[11px] bg-green-600 h-4 w-4 rounded-full font-medium grid place-content-center"
                        >{{ chat.messageCount }}</span
                    >
                </div>
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
});
</script>

<style></style>
