<template>
    <div>
        <button
            @click="onClick"
            class="peer relative hover:bg-gray-200 focus:bg-gray-200 focus-within:bg-gray-200 dark:hover:bg-neutral-700/75 dark:focus:bg-neutral-700/75 dark:focus-within:bg-neutral-700/75 flex items-center gap-4 w-full justify-between rounded-md text-left px-3 py-1 dark:text-white"
        >
            <div class="flex items-center gap-3">
                <Icon :name="icon" class="flex-shrink-0 h-5 w-5" />
                <span class="text-sm">{{ title }}</span>
            </div>
            <Icon v-if="nested" name="ph:caret-right" />
        </button>
        <slot name="nested" />
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
    },
    nested: {
        type: Boolean,
        default: false,
    },
    onClick: {
        type: Function,
        required: true,
    },
});

const showDropdown = ref(false);
</script>

<style></style>
