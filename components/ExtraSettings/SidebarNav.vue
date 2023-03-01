<template>
    <aside
        class="fixed h-[75%] w-[165px] flex flex-col justify-between bg-gray-100 dark:bg-neutral-800 dark:border-l-0 dark:border-t-0 border-x border-t dark:border-r-black/40 rounded-bl-md rounded-tl-md py-1 px-1"
    >
        <ul class="pt-1 flex flex-col gap-1 mb-3">
            <li v-for="tab in tabs" :key="tab.name" class="relative">
                <button
                    @click="changeTab(tab.name)"
                    class="w-full flex items-center gap-3 pl-3 h-9 hover:bg-neutral-200 dark:hover:bg-neutral-700/40 focus:outline-none dark:focus:bg-neutral-700/40 relative rounded"
                    :class="{ active: activeTab === tab.name }"
                >
                    <ClientOnly>
                        <Icon
                            :name="tab.icon"
                            class="w-5 h-5 dark:text-white"
                        />
                    </ClientOnly>
                    <span
                        class="capitalize font-normal text-sm dark:text-white"
                        >{{ tab.name }}</span
                    >
                </button>
            </li>
        </ul>
        <button
            @click="changeTab('profile')"
            class="w-full flex items-center gap-3 pl-3 h-9 hover:bg-neutral-200 dark:hover:bg-neutral-700/40 focus:outline-none focus:bg-neutral-700/40 relative rounded"
            :class="{ active: activeTab === 'profile' }"
        >
            <ClientOnly>
                <Icon
                    name="fluent:person-28-regular"
                    class="w-5 h-5 dark:text-white"
                />
            </ClientOnly>
            <span class="dark:text-white">Profile</span>
        </button>
    </aside>
</template>

<script setup>
import { ref } from "vue";
const activeTab = useState("tab-opened");
const changeTab = (tab) => {
    activeTab.value = tab;
};

const tabs = [
    {
        name: "general",
        icon: "material-symbols:computer-outline",
    },
    {
        name: "account",
        icon: "ph:key",
    },
    {
        name: "chats",
        icon: "humbleicons:chats",
    },
    {
        name: "notifications",
        icon: "system-uicons:bell",
    },
    {
        name: "storage",
        icon: "fluent:storage-20-regular",
    },
    {
        name: "shortcuts",
        icon: "material-symbols:keyboard-outline",
    },
    {
        name: "help",
        icon: "bi:arrow-up-circle",
    },
];
</script>

<style scoped>
.active {
    @apply bg-neutral-200 dark:bg-neutral-700/40 before:block before:absolute before:h-4 before:w-[3px] before:bg-green-600 before:left-0 before:rounded;
}
</style>
