<template>
    <header
        class="relative w-full flex items-center border-b bg-neutral-50 dark:border-black/25 dark:bg-neutral-800/50"
        ref="modalBtn"
    >
        <button
            @click="openModal"
            class="flex items-center gap-4 p-3 w-full group"
        >
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
                    class="group flex items-center justify-center px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-neutral-700/50 relative rounded"
                >
                    <Icon
                        name="bi:camera-video"
                        class="w-5 h-5 text-black dark:text-white"
                    />
                    <Tooltip
                        text="Video Call"
                        class="min-w-max right-0 left-auto -bottom-9"
                    />
                </button>
                <button
                    class="group flex items-center justify-center px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-neutral-700/50 relative rounded"
                >
                    <Icon
                        name="ph:phone-light"
                        class="w-5 h-5 text-black dark:text-white"
                    />
                    <Tooltip
                        text="Audio Call"
                        class="min-w-max right-0 left-auto -bottom-9"
                    />
                </button>
            </div>

            <div
                class="px-3 relative before:content-[''] before:w-[1px] before:absolute before:bg-neutral-600 before:h-5 before:-ml-3 before:mt-3"
            >
                <button
                    @click="showSearchDropdown = !showSearchDropdown"
                    class="group flex items-center justify-center px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-neutral-700/50 relative rounded"
                >
                    <Icon
                        name="quill:search"
                        class="w-5 h-5 text-black dark:text-white"
                    />
                    <Tooltip
                        text="Search Within Chat (Ctrl+Shift+F)"
                        class="min-w-max right-0 left-auto -bottom-9"
                    />
                </button>
                <FormDropdown
                    v-if="showSearchDropdown"
                    @close="hideDropdown"
                    class="left-auto right-2 top-10"
                >
                    <template #items>
                        <div class="flex gap-3 p-0.5">
                            <FormBaseInput
                                placeholder="Search within chat"
                                v-model="search"
                            />
                            <button
                                class="flex items-center justify-center hover:bg-neutral-700 rounded py-1 px-3 hover:disabled:bg-transparent"
                                :disabled="!search.length"
                            >
                                <Icon name="ph:caret-up-light" />
                            </button>
                            <button
                                class="flex items-center justify-center hover:bg-neutral-700 rounded py-1 px-3 hover:disabled:bg-transparent"
                                :disabled="!search.length"
                            >
                                <Icon name="ph:caret-down-thin" />
                            </button>
                            <button
                                @click="hideDropdown"
                                class="flex items-center justify-center hover:bg-neutral-700 rounded py-1 px-3 relative before:content-[''] before:w-[1px] before:absolute before:bg-neutral-600 before:h-5 before:-left-2.5 ml-2"
                            >
                                <Icon name="ic:outline-close" />
                            </button>
                        </div>
                    </template>
                </FormDropdown>
            </div>
        </div>
        <SettingsModal v-if="showModal" position="top-left" @close="closeModal">
            <template #sidebar>
                <ChatSettingsSidebarNav />
            </template>
            <template #view>
                <component :is="showTab"></component>
            </template>
        </SettingsModal>
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

const search = ref("");
const showModal = ref(false);
const showSearchDropdown = ref(false);

const currentTabOpened = useState("chat-settings", () => {
    return "overview";
});

// functions
const openModal = () => {
    currentTabOpened.value = "overview";
    showModal.value = true;
};
const closeModal = () => {
    showModal.value = false;
};

const hideDropdown = () => {
    showSearchDropdown.value = false;
    search.value = "";
};

//  components
const overview = resolveComponent("ChatSettingsOverview");
const files = resolveComponent("ChatSettingsFiles");
const media = resolveComponent("ChatSettingsMedia");
const links = resolveComponent("ChatSettingsLinks");
const encryption = resolveComponent("ChatSettingsEncryption");
const groups = resolveComponent("ChatSettingsGroups");

const tabSettings = {
    overview,
    files,
    media,
    links,
    encryption,
    groups,
};

// computed
const showTab = computed(() => {
    return tabSettings[currentTabOpened.value];
});
</script>

<style></style>
