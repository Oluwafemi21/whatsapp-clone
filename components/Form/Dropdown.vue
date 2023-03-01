<template>
    <div
        class="peer opacity-0 peer-focus:opacity-100 peer-focus:z-30 peer-focus-within:opacity-100 absolute left-0 top-full -z-30 p-1 mt-2 min-w-max bg-neutral-800 border border-black/40 w-40 grid gap-1 rounded-md transition duration-200 ease-in"
        :class="positionStyle"
    >
        <slot name="items" />
    </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    position: {
        type: String,
        default: "bottom",
    },
});

const positionStyle = computed(() => {
    return {
        "peer-focus:-translate-y-0 peer-focus-within:-translate-y-0 -translate-y-4":
            props.position === "bottom",
        "peer-focus:translate-y-0 peer-focus-within:translate-y-0 translate-y-4":
            props.position === "top",
    };
});

const trigger = computed(() => {
    return {
        "peer-focus:opacity-100": true,
    };
});
</script>

<style></style>
