<template>
    <section class="p-4">
        <Avatar size="large" />

        <h3 class="text-xl font-medium dark:text-white my-4">
            {{ $route.params.user }}
        </h3>
        <div class="mb-2 border-b border-neutral-600 pb-4 space-y-3">
            <div class="space-y-1 text-sm">
                <p class="text-neutral-400">About</p>
                <p class="dark:text-white">Hi</p>
            </div>
            <div class="space-y-1 text-sm">
                <p class="text-neutral-400">Phone Number</p>
                <p class="dark:text-white">+234 809 555 6534</p>
            </div>
            <div class="space-y-2 text-sm">
                <p class="text-neutral-400">Disappearing Messages</p>
                <div class="flex gap-2">
                    <span class="dark:text-white">7 days</span>
                </div>
            </div>
            <div class="space-y-1 text-sm">
                <p class="text-neutral-400">Mute notifications</p>
                <select
                    name="personal_chat_notifications"
                    class="dark:bg-neutral-800 dark:text-white text-sm shadow rounded-md"
                >
                    <option>Mute</option>
                    <option>For 8 Hours</option>
                    <option>For 1 week</option>
                    <option>Always</option>
                </select>
            </div>
            <div class="">
                <p class="text-neutral-600 dark:text-neutral-300 text-sm">
                    Notification tone
                </p>
                <div class="flex items-center gap-2">
                    <button
                        class="p-1.5 rounded dark:text-white dark:bg-neutral-700/90 border dark:border-neutral-700 grid place-content-center border-neutral-300 shadow"
                    >
                        <Icon
                            name="material-symbols:play-arrow-outline-rounded"
                            class="w-6 h-6 text-neutral-500"
                        />
                    </button>
                    <select
                        name="theme"
                        id="id"
                        class="dark:bg-neutral-800 shadow dark:text-white text-sm rounded-md mt-1 w-32"
                    >
                        <option>Default</option>
                        <option v-for="i in 10" :key="i">Alert {{ i }}</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-2 gap-2 pt-3">
            <button
                class="py-1.5 px-2 text-sm rounded shadow-sm dark:text-white dark:bg-neutral-700/90"
            >
                Block
            </button>
            <button
                class="py-1.5 px-2 text-sm rounded text-rose-400 dark:bg-neutral-700/90 shadow-sm"
            >
                Report contact
            </button>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style></style>
