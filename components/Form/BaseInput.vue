<template>
    <div class="flex flex-col relative">
        <div class="search-box w-full relative">
            <input
                type="text"
                class="text-sm w-full pr-8 h-9 rounded-md border-b-2 text-neutral-500 placeholder:text-neutral-500 border-neutral-300 border-b-neutral-500 bg-gray-50 focus:outline-none focus:bg-white focus:border-neutral-300 dark:bg-neutral-800 dark:text-white dark:border-neutral-800 dark:border-b-white dark:focus:border-neutral-600 focus:ring-transparent focus:placeholder:text-gray-500 dark:focus:bg-black/40 focus:border-b-green-600 dark:placeholder:text-white"
                :placeholder="placeholder"
                title="Ctrl+F"
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
                v-bind="$attrs"
            />
            <Icon
                name="quill:search"
                class="absolute top-2.5 right-2 w-4 h-4 text-neutral-500 dark:text-white"
            />
        </div>
    </div>
</template>

<script setup>
defineProps({
    placeholder: {
        type: String,
    },
    modelValue: {
        type: String,
        default: "",
    },
    showIcon: {
        type: Boolean,
        default: false,
    },
});
</script>
