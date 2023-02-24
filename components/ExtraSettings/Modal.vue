<template>
    <Teleport to="body">
        <div
            class="absolute overflow-y-scroll bottom-2 left-2 w-[500px] h-[75%]"
            ref="modal"
        >
            <div class="grid grid-cols-3 h-full">
                <ExtraSettingsSidebarNav />
                <section
                    class="ml-[165px] w-full col-span-2 bg-neutral-800 rounded-tr-md rounded-br-md"
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

// computed
const showTab = computed(() => {
    switch (currentTabOpened.value) {
        case "general":
            return general;
        case "chats":
            return chats;
        case "account":
            return account;
        case "notifications":
            return notifications;
        case "storage":
            return storage;
        case "shortcuts":
            return shortcuts;
        case "profile":
            return profile;
        case "help":
            return help;
        default:
            return general;
    }
});
</script>
