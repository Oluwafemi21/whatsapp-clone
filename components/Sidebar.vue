<script setup>
const links = [
    {
        name: "Chats",
        icon: "fluent:chat-20-regular",
        route: "/chat",
    },
    {
        name: "Calls",
        icon: "ph:phone-light",
        route: "/calls",
    },
    {
        name: "Status",
        icon: "icon-park-outline:loading",
        route: "/status",
    },
];
</script>

<template>
    <aside
        class="sidebar fixed flex flex-col left-0 top-10 h-full w-12 bg-black/90 py-3"
    >
        <ul class="px-1 pt-1 flex flex-col flex-[0.8] gap-2">
            <li v-for="link in links" :key="link.name" :title="link.name">
                <NuxtLink
                    :to="link.route"
                    class="flex items-center justify-center h-9 hover:bg-gray-800/40 relative rounded"
                    exact
                >
                    <ClientOnly>
                        <Icon :name="link.icon" class="w-5 h-5 text-white" />
                    </ClientOnly>
                </NuxtLink>
            </li>
        </ul>
        <div class="bottom-nav flex-[0.2]">
            <ul class="px-1 pt-1 flex flex-col gap-2">
                <li
                    class="flex items-center justify-center h-9 hover:bg-gray-800/40 relative rounded"
                    title="Settings"
                >
                    <ClientOnly>
                        <Icon
                            name="heroicons:cog-8-tooth"
                            class="w-6 h-6 text-white"
                        />
                    </ClientOnly>
                </li>
                <li
                    class="flex items-center justify-center h-9 hover:bg-gray-800/40 relative rounded"
                    title="Profile"
                >
                    <ClientOnly>
                        <Icon
                            name="heroicons:user-circle"
                            class="w-6 h-6 text-white"
                        />
                    </ClientOnly>
                </li>
            </ul>
        </div>
    </aside>
</template>

<style scoped>
.router-link-active {
    @apply bg-gray-800/40 before:block before:absolute before:h-4 before:w-[2px] before:bg-green-600 before:left-0 before:rounded;
}
</style>
