<template>
  <section
    class="chats bg-white/50 dark:bg-neutral-800/50 col-span-3 rounded-tl-lg border-black/25 border border-r-0 pl-2 pr-1 py-2"
  >
    <component :is="activeChat" />
  </section>
</template>

<script setup lang="ts">
const $route = useRoute();
const ChatsUnarchived = defineAsyncComponent(
  () => import("./UnarchivedChats.vue"),
);
const ChatsArchived = defineAsyncComponent(() => import("./ArchivedChats.vue"));

const activeChat = computed(() => {
  return $route.path.includes("/chat") ? ChatsUnarchived : ChatsArchived;
});
</script>
