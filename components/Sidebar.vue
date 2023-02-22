<template>
    <aside
        class="sidebar fixed flex flex-col justify-between left-0 top-10 h-full w-12 bg-black/90 py-3"
    >
        <ul class="pt-1 flex flex-col gap-2 mb-3">
            <li v-for="link in links" :key="link.name" class="relative px-1">
                <NuxtLink
                    :to="link.route"
                    class="flex items-center justify-center h-9 hover:bg-neutral-800/40 focus:outline-none focus:bg-neutral-800/40 relative rounded group"
                    exact
                >
                    <ClientOnly>
                        <Icon :name="link.icon" class="w-5 h-5 text-white" />
                    </ClientOnly>
                    <Tooltip :text="link.name" />
                </NuxtLink>
            </li>
        </ul>
        <div class="bottom-nav mt-auto sticky bottom-4">
            <div class="px-1 pt-1 flex flex-col gap-2">
                <button
                    @click="openModal('general')"
                    class="flex items-center justify-center h-9 hover:bg-gray-800/40 group relative rounded focus:outline-none focus:bg-gray-800/40"
                >
                    <Tooltip text="Settings" />
                    <ClientOnly>
                        <Icon
                            name="heroicons:cog-8-tooth"
                            class="w-6 h-6 text-white"
                        />
                    </ClientOnly>
                </button>
                <button
                    @click="openModal('profile')"
                    class="flex items-center justify-center h-9 hover:bg-gray-800/40 group relative rounded focus:outline-none focus:bg-gray-800/40"
                >
                    <Tooltip text="Profile" />
                    <ClientOnly>
                        <Icon
                            name="heroicons:user-circle"
                            class="w-6 h-6 text-white"
                        />
                    </ClientOnly>
                </button>

                <ExtraSettingsModal v-if="showModal" />
            </div>
        </div>
    </aside>
</template>

<script setup>
const showModal = useState("modal-opened", () => {
    return false;
});

const activeTab = useState("tab-opened");

const openModal = (tab) => {
    activeTab.value = tab;
    showModal.value = true;
};

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

<style scoped>
.router-link-active {
    @apply bg-neutral-800/40 before:block before:absolute before:h-4 before:w-[3px] before:bg-green-600 before:left-0 before:rounded;
}
</style>
