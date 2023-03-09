<template>
    <Teleport to="body">
        <div
            class="absolute overflow-y-scroll scroll-p-0 w-[500px] h-[75%]"
            :class="position"
            ref="modal"
        >
            <div class="grid grid-cols-3 h-full">
                <slot name="sidebar" />
                <section
                    class="shadow-xl ml-[165px] w-full col-span-2 bg-gray-50 dark:bg-neutral-800 rounded-tr-md rounded-br-md border border-l-0 dark:border-none"
                >
                    <slot name="view" />
                </section>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
import { onClickOutside } from "@vueuse/core";

const props = defineProps({
    position: {
        type: String,
        default: "bottom-left",
    },
});

defineEmits("close");

const modal = ref(null);
const open = useState("modal-opened");
const activeTab = useState("tab-opened");

// functions
onClickOutside(modal, () => {
    open.value = false;
    activeTab.value = "";
});

// positions for modal
const positions = {
    "bottom-right": "bottom-2 right-2",
    "bottom-left": "bottom-2 left-2",
    "top-right": "top-2 right-2",
    "top-left": "top-2 left-2",
};

const position = computed(() => {
    return positions[props.position];
});
</script>
