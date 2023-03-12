<template>
    <section
        class="min-h-screen bg-white/50 dark:bg-neutral-800/50 px-4 py-3 dark:text-white"
    >
        <h3 class="text-xl dark:text-white font-medium">Call info</h3>

        <section
            class="dark:bg-neutral-800 border rounded border-neutral-300 dark:border-neutral-900 mt-3 py-3 divide-y dark:divide-neutral-900 divide-neutral-300"
        >
            <div class="px-4 pb-3 flex items-center justify-between">
                <div class="flex items-center gap-3">
                    <Avatar size="small" />
                    <div class="text-sm">
                        <p class="font-medium">{{ $route.params.user }}</p>
                        <p>About goes here.</p>
                    </div>
                </div>
                <div class="flex items-center">
                    <button
                        class="group flex items-center justify-center px-3 py-4 hover:bg-gray-200/50 dark:hover:bg-neutral-700/50 relative rounded"
                    >
                        <Tooltip text="Messages" />

                        <Icon
                            class="w-5 h-5 text-black dark:text-white"
                            name="ph:chat-circle-text"
                        />
                    </button>
                    <button
                        class="group flex items-center justify-center px-3 py-4 hover:bg-gray-200/50 dark:hover:bg-neutral-700/50 relative rounded"
                    >
                        <Icon
                            name="bi:camera-video"
                            class="w-5 h-5 text-black dark:text-white"
                        />
                        <Tooltip
                            text="Video Call"
                            class="min-w-max right-0 left-auto"
                        />
                    </button>
                    <button
                        class="group flex items-center justify-center px-3 py-4 hover:bg-gray-200/50 dark:hover:bg-neutral-700/50 relative rounded"
                    >
                        <Tooltip
                            text="Audio Call"
                            class="min-w-max right-0 left-0"
                        />
                        <Icon
                            name="ph:phone-light"
                            class="w-5 h-5 text-black dark:text-white"
                        />
                    </button>
                </div>
            </div>
            <div class="px-4 pt-3 text-sm">
                <p class="mb-3 text-neutral-500">Today</p>
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <Icon name="uil:missed-call" class="dark:text-white" />
                        <p>Missed voice call at 10:33 AM</p>
                    </div>
                    <p>Unanswered</p>
                </div>
            </div>
        </section>
    </section>
</template>

<script setup>
const route = useRoute();
definePageMeta({
    layout: "custom",
});
useHead({
    title: `Whatsapp Call | ${route.params.user}`,
});
</script>

<style></style>
