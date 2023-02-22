<template>
    <section class="flex flex-col gap-4 p-4">
        <h3 class="text-xl text-white font-medium">Chats</h3>
        <div>
            <h4 class="text-white text-lg">Chat history</h4>

            <div class="flex items-center mt-1 gap-3">
                <Icon
                    name="fluent:cloud-sync-16-regular"
                    class="h-4 w-4 text-white"
                />
                <p class="text-sm italic text-white">Synced from your phone</p>
            </div>
        </div>
        <div>
            <button
                class="py-1 px-2 text-sm rounded text-white bg-neutral-700/90 border border-neutral-600"
            >
                Archive all chats
            </button>
            <p class="text-neutral-500 mt-1 text-sm">
                You will still receive new messages from archived chats
            </p>
        </div>
        <div>
            <button
                class="py-1.5 px-2 text-sm rounded text-red-300 bg-neutral-700/90"
            >
                Clear all messages
            </button>
            <p class="text-neutral-500 mt-1 text-sm">
                Delete all messages from chats and groups
            </p>
        </div>
        <div>
            <button
                class="py-1.5 px-2 text-sm rounded text-red-300 bg-neutral-700/90"
            >
                Delete all chats
            </button>
            <p class="text-neutral-500 mt-1 text-sm">
                Delete all messages and clear the chats from your history
            </p>
        </div>
    </section>
</template>

<script setup></script>
