<script lang="ts" setup></script>

<template>
    <aside
        class="sidebar fixed flex flex-col left-0 top-10 h-full w-12 bg-black/90 py-3"
    >
        <ul class="px-1 pt-1 flex flex-col flex-[0.8] gap-2">
            <li
                class="flex items-center justify-center h-9 bg-gray-800/40 relative rounded before:block before:absolute before:h-5 before:w-1 before:bg-green-600 before:left-0 before:rounded"
                title="Chats"
            >
                <Icon
                    name="fluent:chat-20-regular"
                    class="w-5 h-5 text-white"
                />
            </li>
            <li
                class="flex items-center justify-center h-9 hover:bg-gray-800/40 rounded"
                title="Calls"
            >
                <Icon name="ph:phone-light" class="w-5 h-5 text-white" />
            </li>
            <li
                class="flex items-center justify-center h-9 hover:bg-gray-800/40 relative rounded"
                title="Status"
            >
                <Icon
                    name="icon-park-outline:loading"
                    class="w-5 h-5 text-white"
                />
            </li>
        </ul>
        <div class="bottom-nav flex-[0.2]">
            <ul class="px-1 pt-1 flex flex-col gap-2">
                <li
                    class="flex items-center justify-center h-9 hover:bg-gray-800/40 relative rounded"
                    title="Settings"
                >
                    <Icon
                        name="heroicons:cog-8-tooth"
                        class="w-6 h-6 text-white"
                    />
                </li>
                <li
                    class="flex items-center justify-center h-9 hover:bg-gray-800/40 relative rounded"
                    title="Profile"
                >
                    <Icon
                        name="heroicons:user-circle"
                        class="w-6 h-6 text-white"
                    />
                </li>
            </ul>
        </div>
    </aside>
</template>

<style scoped></style>
