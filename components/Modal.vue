<template>
    <Teleport to="body">
        <div
            class="absolute overflow-y-scroll scroll-p-0 bottom-2 left-2 w-[500px] h-[75%]"
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
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const modal = ref(null);
const open = useState("modal-opened");

// functions
onClickOutside(modal, () => {
    open.value = false;
});

defineEmits("close");
</script>
