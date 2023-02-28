<template>
    <div
        class="bg-neutral-700 grid place-content-center rounded-full flex-shrink-0"
        :class="avatarSize"
    >
        <Icon
            name="fluent:person-28-filled"
            class="text-neutral-500"
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
