<template>
    <section
        class="flex flex-col gap-4 p-4 h-full overflow-y-scroll scroll-p-0"
    >
        <h3 class="text-xl dark:text-white font-medium">Notifications</h3>
        <div class="mt-3">
            <p class="text-neutral-500 dark:text-neutral-300">
                When Whatsapp is closed
            </p>
            <div class="flex items-center justify-between gap-4">
                <p class="text-neutral-700 dark:text-neutral-400 text-sm">
                    Continue to show notifications when Whatsapp is not open
                </p>
                <div class="flex items-center gap-2">
                    <ToggleButton v-model:checked="showMessagesWhenNotOpen" />
                </div>
            </div>
        </div>
        <div class="border-y border-neutral-600 py-5 grid gap-10">
            <div class="flex items-center justify-between">
                <p class="text-neutral-600 dark:text-neutral-400">Messages</p>
                <div class="flex items-center gap-2">
                    <ToggleButton v-model:checked="showMessages" />
                </div>
            </div>
            <div class="flex items-center justify-between">
                <p class="text-neutral-600 dark:text-neutral-400">Calls</p>
                <div class="flex items-center gap-2">
                    <ToggleButton v-model:checked="showCalls" />
                </div>
            </div>
        </div>
        <div class="mt-3">
            <p class="text-neutral-600 dark:text-neutral-300">
                Message preview
            </p>
            <div class="flex items-center justify-between">
                <p class="text-neutral-600 dark:text-neutral-400 text-sm">
                    Show message preview text inside new message notifications
                </p>
                <div class="flex items-center gap-2">
                    <ToggleButton v-model:checked="showMessagePreview" />
                </div>
            </div>
        </div>

        <div class="border-t border-neutral-600 pt-4 grid gap-4">
            <h3 class="text-xl dark:text-white font-medium">
                Notification tones
            </h3>
            <div class="grid gap-3">
                <p class="text-neutral-600 dark:text-neutral-300 text-sm">
                    Messages
                </p>
                <div class="flex items-center gap-2">
                    <button
                        class="py-1.5 px-2 rounded dark:text-white dark:bg-neutral-700/90 border dark:border-neutral-700 grid place-content-center border-neutral-300 shadow"
                    >
                        <Icon
                            name="material-symbols:play-arrow-outline-rounded"
                            class="w-6 h-6 text-white"
                        />
                    </button>
                    <select
                        name="theme"
                        id="id"
                        class="py-2.5 dark:bg-neutral-700/90 dark:border-none border border-neutral-300 shadow dark:text-white text-sm rounded-md w-32"
                    >
                        <option>Default</option>
                        <option v-for="i in 10" :key="i">Alert {{ i }}</option>
                    </select>
                </div>
            </div>
            <div class="grid gap-3">
                <p class="text-neutral-600 dark:text-neutral-300 text-sm">
                    Groups
                </p>
                <div class="flex items-center gap-2">
                    <button
                        class="py-1.5 px-2 rounded dark:text-white dark:bg-neutral-700/90 border dark:border-neutral-700 grid place-content-center border-neutral-300 shadow"
                    >
                        <Icon
                            name="material-symbols:play-arrow-outline-rounded"
                            class="w-6 h-6 text-white"
                        />
                    </button>
                    <select
                        name="theme"
                        id="id"
                        class="py-2.5 dark:bg-neutral-700/90 dark:border-none border border-neutral-300 shadow dark:text-white text-sm rounded-md w-32"
                    >
                        <option>Default</option>
                        <option v-for="i in 10" :key="i">Alert {{ i }}</option>
                    </select>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";

const showCalls = ref(true);
const showMessagePreview = ref(true);
const showMessages = ref(true);
const showMessagesWhenNotOpen = ref(true);
</script>
