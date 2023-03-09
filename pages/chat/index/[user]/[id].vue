<template>
    <section class="relative h-full w-full flex flex-col dark:text-white">
        <ChatsContactHeader :contact="`${$route.params.user}`" />
        <div class="flex-1 overflow-y-auto h-full px-5">
            <p>User - {{ $route.params.user }}</p>
            <p>Id - {{ $route.params.id }}</p>
            <Icon name="ant-design:audio-outlined" />
            <Icon name="ph:phone-light" />
        </div>
        <div
            class="sticky bottom-0 left-0 flex items-center border-t border-black/25 bg-neutral-50 dark:bg-neutral-800/50 px-2 py-1 gap-4"
        >
            <div class="flex items-center">
                <button
                    class="group flex items-center justify-center px-4 py-3 hover:bg-gray-200 dark:hover:bg-neutral-700/50 relative rounded"
                >
                    <Icon
                        name="iconoir:emoji"
                        class="w-5 h-5 text-black dark:text-white"
                    />
                </button>
                <button
                    class="group flex items-center justify-center px-4 py-3 hover:bg-gray-200 dark:hover:bg-neutral-700/50 relative rounded"
                >
                    <Icon
                        name="fluent:attach-16-regular"
                        class="w-5 h-5 text-black dark:text-white"
                    />
                </button>
            </div>
            <textarea
                rows="1"
                class="resize-none dark:bg-neutral-800/50 hover:bg-gray-100 h-10 w-full dark:hover:bg-neutral-700/60 dark:focus:bg-transparent placeholder:text-neutral-500 placeholder:text-sm text-sm focus:outline-none focus:border-none focus:bg-transparent focus:ring-0 ring-0 border-none"
                placeholder="Type a message"
                v-model="textMessage"
            />
            <button
                v-if="textMessage"
                class="group flex items-center justify-center px-4 py-3 hover:bg-gray-200 dark:hover:bg-neutral-700/50 relative rounded"
            >
                <Icon
                    name="fluent:send-24-regular"
                    class="w-5 h-5 text-black dark:text-white"
                />
                <Tooltip
                    :text="textMessage"
                    class="min-w-max left-auto right-0"
                />
            </button>
            <button
                v-else
                class="group flex items-center justify-center px-4 py-3 hover:bg-gray-200 dark:hover:bg-neutral-700/50 relative rounded"
            >
                <Icon
                    name="ant-design:audio-outlined"
                    class="w-5 h-5 text-black dark:text-white"
                />
            </button>
        </div>
    </section>
</template>

<script setup>
const route = useRoute();

const textMessage = ref("");

useHead({
    title: `Whatsapp Chat | ${route.params.user}`,
});
</script>

<style></style>
