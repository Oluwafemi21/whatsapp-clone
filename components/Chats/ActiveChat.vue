<template>
  <section
    class="chats bg-white/50 dark:bg-neutral-800/50 col-span-3 rounded-tl-lg border-black/25 border border-r-0 pl-2 pr-1 py-2"
  >
    <component :is="activeChat" />
  </section>
</template>

<script setup lang="ts">
const $route = useRoute();
const queryParam = computed(() => $route.query.filter);

const chatTypes = {
  unarchived: resolveComponent("ChatsUnarchivedChats"),
  archived: resolveComponent("ChatsArchivedChats"),
  starred: resolveComponent("ChatsStarredChat"),
};

const activeChat = shallowRef();
const setActiveChat = () => {
  activeChat.value = queryParam.value
    ? chatTypes[queryParam.value as keyof typeof chatTypes]
    : chatTypes.unarchived;
};

watch($route, () => {
  setActiveChat();
});

onMounted(() => {
  setActiveChat();
});
</script>
