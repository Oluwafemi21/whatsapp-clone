<template>
    <div
        class="absolute overflow-y-scroll scroll-p-0 w-[500px] h-[489px] z-40"
        :class="position"
        ref="settings_modal"
    >
        <div class="grid grid-cols-3 h-full">
            <slot name="sidebar" />
            <section
                class="shadow-xl h-full ml-[165px] w-full col-span-2 bg-gray-50 dark:bg-neutral-800 rounded-tr-md rounded-br-md border border-l-0 dark:border-none"
            >
                <slot name="view" />
            </section>
        </div>
    </div>
</template>

<script setup>
import { onClickOutside } from "@vueuse/core";

const props = defineProps({
    position: {
        type: String,
        default: "bottom-left",
    },
});

const emit = defineEmits(["close"]);

const settings_modal = ref(null);
onClickOutside(settings_modal, () => {
    emit("close");
});

// positions for modal
const positions = {
    "bottom-left": "left-2 bottom-2",
    "top-left": "top-2 left-2",
};

const position = computed(() => {
    return positions[props.position];
});
</script>

<style scoped>
.modal-fade-enter,
.modal-fade-leave-to {
    opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity 10s ease;
}
</style>
