<template>
    <Teleport to="body">
        <div
            class="absolute overflow-y-scroll scroll-p-0 bottom-2 left-2 w-[500px] h-[75%]"
            ref="modal"
        >
            <div class="grid grid-cols-3 h-full">
                <ExtraSettingsSidebarNav />
                <section
                    class="shadow-xl ml-[165px] w-full col-span-2 bg-gray-50 dark:bg-neutral-800 rounded-tr-md rounded-br-md border border-l-0 dark:border-none"
                >
                    <KeepAlive>
                        <component :is="showTab"></component>
                    </KeepAlive>
                </section>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const modal = ref(null);
const open = useState("modal-opened");
const currentTabOpened = useState("tab-opened", () => {
    return "general";
});

// functions
onClickOutside(modal, () => {
    open.value = false;
    currentTabOpened.value = "general";
});
defineEmits("close");

//  components
const general = resolveComponent("ExtraSettingsGeneral");
const chats = resolveComponent("ExtraSettingsChats");
const account = resolveComponent("ExtraSettingsAccount");
const notifications = resolveComponent("ExtraSettingsNotifications");
const storage = resolveComponent("ExtraSettingsStorage");
const shortcuts = resolveComponent("ExtraSettingsShortcuts");
const profile = resolveComponent("ExtraSettingsProfile");
const help = resolveComponent("ExtraSettingsHelp");

const tabSettings = {
    general,
    chats,
    account,
    notifications,
    storage,
    shortcuts,
    profile,
    help,
};

// computed
const showTab = computed(() => {
    return tabSettings[currentTabOpened.value];
});
</script>
