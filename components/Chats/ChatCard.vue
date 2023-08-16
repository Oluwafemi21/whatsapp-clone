<template>
  <NuxtLink
    :to="`/${chatRoute}/${chat.id}`"
    class="hover:bg-neutral-100 focus:bg-neutral-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 focus:outline-none flex space-x-3 w-full rounded-md py-2.5 px-3"
  >
    <BaseAvatar />
    <div class="w-full flex flex-col gap-2">
      <div class="flex items-center justify-between">
        <p class="font-medium text-sm dark:text-white">
          {{ chat.name }}
        </p>
        <span
          class="text-xs"
          :class="{
            'text-green-500 dark:text-emerald-600 font-bold':
              chat.recepient === 'user',
            'dark:text-neutral-400 text-neutral-500':
              chat.recepient === 'not-user',
          }"
          >{{ chat.time }}</span
        >
      </div>
      <div
        class="flex items-center gap-2"
        :class="{
          'justify-between': receivedMessage,
        }"
      >
        <template v-if="!receivedMessage">
          <Icon
            name="quill:checkmark-double"
            class="text-neutral-500 h-5 w-4"
          />
          <p class="text-neutral-500 text-sm">
            {{ chat.message }}
          </p>
        </template>
        <template v-else>
          <p class="text-neutral-500 text-sm">
            {{ chat.message }}
          </p>
          <div class="flex items-center gap-2">
            <Icon
              v-if="chat.status === 'archived'"
              name="heroicons:speaker-x-mark"
              class="w-4 h-4 dark:text-white"
            />

            <span
              v-if="chat.status === 'archived'"
              class="dark:text-white text-[11px] bg-neutral-400/40 dark:bg-neutral-700 py-0.5 px-1 rounded-md capitalize font-medium text-neutral-800"
              >{{ chat.status }}</span
            >
            <div
              v-if="chat.recepient === 'user' && chat.messageCount > 0"
              class="text-[11px] bg-green-500 dark:bg-emerald-600 h-4 w-4 rounded-full font-bold grid place-content-center text-white dark:text-black"
              :class="{
                'min-w-[22px]': chat.messageCount > 9,
              }"
            >
              {{ chat.messageCount > 99 ? 99 + "+" : chat.messageCount }}
            </div>
          </div>
        </template>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  chat: {
    type: Object,
    required: true,
    default: () => ({}),
  },
  typing: {
    type: Boolean,
    default: false,
  },
  receivedMessage: {
    type: Boolean,
    default: false,
  },
  chatRoute: {
    type: String,
    required: true,
    default: "chat",
  },
});
</script>

<style scoped>
.router-link-active {
  @apply bg-neutral-200 dark:bg-neutral-800;
}
</style>
