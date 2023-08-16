<template>
  <aside
    class="sidebar fixed flex flex-col justify-between left-0 bottom-0 top-10 h-full w-12 bg-gray-100 dark:bg-black/90 py-3"
  >
    <ul class="pt-1 flex flex-col gap-2 mb-3">
      <li v-for="link in links" :key="link.name" class="relative px-1">
        <NuxtLink
          :to="link.route"
          class="flex items-center justify-center h-9 hover:bg-gray-200 dark:hover:bg-neutral-800/40 focus:outline-none focus:bg-gray-200 dark:focus:bg-neutral-800/40 relative rounded group"
        >
          <ClientOnly>
            <Icon
              :name="link.icon"
              class="w-5 h-5 dark:text-white text-neutral-800"
            />
          </ClientOnly>

          <BaseTooltip :text="link.name" class="-top-9" />
        </NuxtLink>
      </li>
    </ul>
    <div class="bottom-nav mt-auto sticky bottom-4">
      <div class="px-1 pt-1 flex flex-col gap-2">
        <NuxtLink
          :to="{
            path: `/chat`,
            query: { filter: 'archived' },
          }"
          class="flex items-center justify-center h-9 hover:bg-gray-200 dark:hover:bg-neutral-800/40 focus:outline-none focus:bg-gray-200 dark:focus:bg-neutral-800/40 relative rounded group"
        >
          <span
            class="absolute top-0 right-0 grid place-content-center bg-emerald-600 text-black h-4 w-4 font-bold rounded-full text-[10px]"
            >72</span
          >
          <ClientOnly>
            <Icon
              name="heroicons:archive-box"
              class="w-6 h-6 dark:text-white text-neutral-800"
            />
          </ClientOnly>

          <BaseTooltip text="Archived Chats" class="-top-9 w-[100px]" />
        </NuxtLink>

        <button
          class="flex items-center justify-center h-9 hover:bg-gray-200 dark:hover:bg-neutral-800/40 group relative rounded focus:outline-none focus:bg-gray-200 dark:focus:bg-neutral-800/40"
          @click="openModal('general')"
        >
          <BaseTooltip text="Settings" class="-top-9" />
          <ClientOnly>
            <Icon
              name="heroicons:cog-8-tooth"
              class="w-6 h-6 dark:text-white text-neutral-800"
            />
          </ClientOnly>
        </button>
        <button
          class="flex items-center justify-center h-9 hover:bg-gray-200 dark:hover:bg-neutral-800/40 group relative rounded focus:outline-none focus:bg-gray-200 dark:focus:bg-neutral-800/40"
          @click="openModal('profile')"
        >
          <BaseTooltip text="Profile" class="-top-9" />
          <ClientOnly>
            <Icon
              name="ph:user-circle-duotone"
              class="w-6 h-6 dark:text-white text-neutral-800"
            />
          </ClientOnly>
        </button>
      </div>
    </div>
    <Teleport to="body">
      <SettingsModal
        v-if="showModal"
        position="bottom-left"
        @close="closeModal"
      >
        <template #sidebar>
          <SettingsSidebarNav />
        </template>
        <template #view>
          <KeepAlive>
            <component :is="showTab"></component>
          </KeepAlive>
        </template>
      </SettingsModal>
    </Teleport>
  </aside>
</template>

<script setup>
const showModal = ref(false);

const currentTabOpened = useState("settings", () => {
  return "general";
});

const openModal = (tab) => {
  currentTabOpened.value = tab;
  showModal.value = true;
};

const closeModal = () => {
  currentTabOpened.value = "general";
  showModal.value = false;
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

//  components
const general = resolveComponent("SettingsGeneralTab");
const chats = resolveComponent("SettingsChatsTab");
const account = resolveComponent("SettingsAccountTab");
const notifications = resolveComponent("SettingsNotificationsTab");
const storage = resolveComponent("SettingsStorageTab");
const shortcuts = resolveComponent("SettingsShortcutsTab");
const profile = resolveComponent("SettingsProfileTab");
const help = resolveComponent("SettingsHelpTab");

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

<style scoped>
.router-link-active,
.router-link-exact-active {
  @apply bg-gray-200 dark:bg-neutral-800/40 before:block before:absolute before:h-4 before:w-[3px] before:bg-emerald-700 before:left-0 before:rounded;
}
</style>
