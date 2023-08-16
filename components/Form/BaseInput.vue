<template>
  <div class="flex flex-col relative">
    <div class="search-box w-full relative">
      <input
        type="text"
        class="text-sm w-full pr-8 h-9 rounded-md focus:border-b-1.5 dark:border-b-1.5 text-neutral-500 placeholder:text-neutral-500 border-neutral-300 border-b-neutral-500 bg-white dark:bg-neutral-700/60 hover:bg-neutral-100 focus:outline-none focus:bg-white focus:border-neutral-300 dark:text-white dark:border-neutral-800 dark:border-b-white dark:focus:border-neutral-600 focus:ring-transparent focus:placeholder:text-gray-500 focus:border-b-2 dark:focus:bg-black/40 focus:border-b-emerald-600 dark:focus:border-b-green-600 dark:placeholder:text-white"
        :placeholder="placeholder"
        title="Ctrl+F"
        :value="modelValue"
        v-bind="$attrs"
        @input="search((e.target as HTMLInputElement).value)"
      />
      <template v-if="showSearchButton">
        <Icon
          v-if="!modelValue.length"
          name="quill:search"
          class="absolute top-2.5 right-2 w-4 h-4 text-neutral-500 dark:text-white"
        />
        <button
          v-else
          class="absolute top-1.5 grid place-content-center right-2 p-1 hover:dark:bg-neutral-700 rounded hover:bg-neutral-300 text-neutral-500 dark:text-white"
          @click="search('')"
        >
          <Icon name="ic:outline-close" class="w-4 h-4" />
        </button>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  placeholder: {
    type: String,
    default: "Search",
  },
  modelValue: {
    type: String,
    default: "",
  },
  showIcon: {
    type: Boolean,
    default: false,
  },
  showSearchButton: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const search = (value: string) => {
  emit("update:modelValue", value);
};
</script>
