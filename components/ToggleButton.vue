<template>
  <div class="flex items-center gap-3 flex-shrink-0">
    <label class="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        class="sr-only peer"
        :checked="isChecked"
        v-bind="$attrs"
        @change="onCheckedChange"
      />
      <div
        class="w-11 p-1 h-5 bg-transparent ring-2 ring-neutral-400 rounded-full peer after:absolute dark:after:bg-white after:bg-neutral-500 after:rounded-full after:h-3 after:w-3 after:transition-transform after:duration-300 after:ease-in-out peer-checked:after:translate-x-6 after:content-[''] dark:peer-checked:after:bg-black peer-checked:after:bg-white peer-checked:bg-emerald-600 peer-checked:ring-emerald-600"
      ></div>
    </label>
    <span class="text-sm dark:text-white capitalize">{{
      isChecked ? "on" : "off"
    }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  checked: {
    type: Boolean,
    default: false,
  },
});

const isChecked = ref(false);

const emit = defineEmits(["update"]);

const onCheckedChange = (e: Event) => {
  emit("update", (e.target as HTMLInputElement).checked);
  // set the checked value to the value of the checkbox
  isChecked.value = (e.target as HTMLInputElement).checked;
  // eslint-disable-next-line no-console
  console.log((e.target as HTMLInputElement).checked);
};
</script>

<style></style>
