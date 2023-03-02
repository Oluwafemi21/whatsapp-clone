<template>
    <div
        class="bg-neutral-300 dark:bg-neutral-700 grid place-content-center rounded-full flex-shrink-0 border border-neutral-600/10"
        :class="avatarSize"
    >
        <Icon
            name="fluent:person-28-filled"
            class="dark:text-neutral-500 text-neutral-400"
            :class="{
                'w-5 h-5': size === 'small',
                'w-6 h-6': size === 'normal',
                'w-10 h-10': size === 'large',
            }"
        />
    </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
    size: {
        type: String,
        default: "normal",
    },
});

const avatarSize = computed(() => {
    if (props.size === "small") {
        return "h-10 w-10";
    } else if (props.size === "large") {
        return "h-24 w-24";
    } else {
        return "h-12 w-12";
    }
});
</script>

<style></style>
