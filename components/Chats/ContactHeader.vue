<template>
    <header
        class="absolute top-0 w-full flex items-center border-b bg-neutral-50 dark:border-black/25 dark:bg-neutral-800"
    >
        <button class="flex items-center gap-4 p-3 w-full group">
            <Avatar size="small" class="group-hover:opacity-60" />
            <div class="space-y-0.5">
                <span
                    class="block text-black dark:text-white text-sm font-medium"
                    >{{ contact }}
                </span>
                <span class="block text-black dark:text-white text-sm text-left"
                    >online</span
                >
            </div>
        </button>
        <div class="flex items-center gap-3 h-5">
            <div class="flex">
                <button
                    class="group flex items-center justify-center px-4 py-3 hover:bg-gray-200 dark:hover:bg-neutral-700/50 relative rounded"
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
                    class="group flex items-center justify-center px-4 py-3 hover:bg-gray-200 dark:hover:bg-neutral-700/50 relative rounded"
                >
                    <Icon
                        name="ph:phone-light"
                        class="w-5 h-5 text-black dark:text-white"
                    />
                    <Tooltip
                        text="Audio Call"
                        class="min-w-max right-0 left-auto"
                    />
                </button>
            </div>

            <div
                class="px-3 relative before:content-[''] before:w-[1px] before:absolute before:bg-neutral-600 before:h-5 before:-ml-3 before:mt-3"
            >
                <button
                    class="group flex items-center justify-center px-4 py-3 hover:bg-gray-200 dark:hover:bg-neutral-700/50 relative rounded"
                >
                    <Icon
                        name="quill:search"
                        class="w-5 h-5 text-black dark:text-white"
                    />
                    <Tooltip
                        text="Search Within Chat (Ctrl+Shift+F)"
                        class="min-w-max right-0 left-auto"
                    />
                </button>
            </div>
        </div>
    </header>
</template>

<script setup>
defineProps({
    contact: {
        type: String,
        required: true,
        default: "",
    },
});
</script>

<style></style>
