<template>
    <section class="flex flex-col gap-4 p-4 h-full overflow-y-scroll">
        <h3 class="text-xl text-white font-medium">Notifications</h3>
        <div class="mt-3">
            <p class="text-neutral-300">When Whatsapp is closed</p>
            <div class="flex items-center justify-between">
                <p class="text-neutral-400 text-sm">
                    Continue to show notifications when Whatsapp is not open
                </p>
                <div class="flex items-center gap-2">
                    <Icon name="ic:outline-toggle-off" class="w-5 text-white" />
                    <span class="text-sm text-white">Off</span>
                </div>
            </div>
        </div>
        <div class="border-y border-neutral-600 py-5 grid gap-10">
            <div class="flex items-center justify-between">
                <p class="text-neutral-400">Messages</p>
                <div class="flex items-center gap-2">
                    <Icon name="ic:outline-toggle-off" class="w-5 text-white" />
                    <span class="text-sm text-white">Off</span>
                </div>
            </div>
            <div class="flex items-center justify-between">
                <p class="text-neutral-400">Calls</p>
                <div class="flex items-center gap-2">
                    <Icon name="ic:outline-toggle-off" class="w-5 text-white" />
                    <span class="text-sm text-white">Off</span>
                </div>
            </div>
        </div>
        <div class="mt-3">
            <p class="text-neutral-300">Message preview</p>
            <div class="flex items-center justify-between">
                <p class="text-neutral-400 text-sm">
                    Show message preview text inside new message notifications
                </p>
                <div class="flex items-center gap-2">
                    <Icon name="ic:outline-toggle-off" class="w-5 text-white" />
                    <span class="text-sm text-white">Off</span>
                </div>
            </div>
        </div>

        <div class="border-t border-neutral-600 pt-4 grid gap-4">
            <h3 class="text-xl text-white font-medium">Notification tones</h3>
            <div class="grid gap-3">
                <p class="text-neutral-300 text-sm">Messages</p>
                <div class="flex items-center gap-2">
                    <button
                        class="p-1.5 rounded text-white bg-neutral-700/90 border border-neutral-700 grid place-content-center"
                    >
                        <Icon
                            name="material-symbols:play-arrow-outline-rounded"
                            class="w-6 h-6"
                        />
                    </button>
                    <select
                        name="theme"
                        id="id"
                        class="bg-transparent text-white text-sm rounded-md mt-1 w-32"
                    >
                        <option>Default</option>
                        <option v-for="i in 10" :key="i">Alert {{ i }}</option>
                    </select>
                </div>
            </div>
            <div class="grid gap-3">
                <p class="text-neutral-300 text-sm">Groups</p>
                <div class="flex items-center gap-2">
                    <button
                        class="p-1.5 rounded text-white bg-neutral-700/90 border border-neutral-700 grid place-content-center"
                    >
                        <Icon
                            name="material-symbols:play-arrow-outline-rounded"
                            class="w-6 h-6"
                        />
                    </button>
                    <select
                        name="theme"
                        id="id"
                        class="bg-transparent text-white text-sm rounded-md mt-1 w-32"
                    >
                        <option>Default</option>
                        <option v-for="i in 10" :key="i">Alert {{ i }}</option>
                    </select>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup></script>
