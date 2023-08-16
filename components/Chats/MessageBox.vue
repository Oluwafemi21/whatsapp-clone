<template>
  <div
    v-for="(text, index) in message.text_messages"
    :key="text.id"
    class="relative flex gap-x-3 text-black dark:text-white px-2 rounded max-w-md w-fit before:absolute before:visible before:top-0 before:border-[10px] before:border-transparent before:rounded"
    :class="{
      'before:-right-2.5': message.userId === '12d34e' && index === 0,
      'before:-left-2.5': message.userId !== '12d34e' && index === 0,
      'dark:bg-emerald-700 bg-[#d8fbd2] before:border-t-[#d8fbd2] dark:before:border-t-emerald-700':
        message.userId === '12d34e',
      'bg-white dark:bg-neutral-800 before:border-t-white dark:before:border-t-neutral-800':
        message.userId !== '12d34e',
    }"
  >
    <p class="text-sm py-2">{{ text.text }}</p>
    <div class="shrink-0 flex self-end items-end gap-1 mb-1 text-[9px]">
      <div class="group">
        <span class="cursor-default dark:text-gray-300 text-neutral-500">{{
          text.time
        }}</span>
        <BaseTooltip :text="text.time" class="left-auto -top-5" />
      </div>
      <Icon
        v-show="message.userId === '12d34e'"
        name="quill:checkmark-double"
        class="h-4 w-4 dark:text-gray-300 text-neutral-500"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: Object,
    required: true,
  },
});
</script>

<style></style>
