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
    </aside>
</template>

<script setup>
const activeTab = useState("tab-opened");
const changeTab = (tab) => {
    activeTab.value = tab;
};

const tabs = [
    {
        name: "overview",
        icon: "fluent:info-20-regular",
    },
    {
        name: "media",
        icon: "fluent-mdl2:media",
    },
    {
        name: "files",
        icon: "ph:file",
    },
    {
        name: "links",
        icon: "ph:link-simple-horizontal",
    },
    {
        name: "encryption",
        icon: "material-symbols:lock-outline",
    },
    {
        name: "groups",
        icon: "heroicons:users",
    },
];
</script>

<style scoped>
.active {
    @apply bg-neutral-200 dark:bg-neutral-700/40 before:block before:absolute before:h-4 before:w-[3px] before:bg-emerald-700 before:left-0 before:rounded;
}
</style>
