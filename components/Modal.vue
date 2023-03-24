<template>
    <div class="modal-backdrop" @click="close">
        <div class="modal" ref="modal_bg">
            <header class="modal-header">
                <slot name="header"> This is the default title! </slot>
            </header>

            <section class="modal-body">
                <slot name="body"> This is the default body! </slot>
            </section>
        </div>
    </div>
</template>

<script setup>
import { onClickOutside } from "@vueuse/core";

const emit = defineEmits(["close"]);

const modal_bg = ref(null);

// functions
// onClickOutside(modal_bg, () => {
//     emit("close");
// });

const close = () => {
    emit("close");
};
</script>

<style scoped>
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 50;
}

.modal {
    @apply border border-neutral-500 rounded-lg text-white max-w-lg;
}

.modal-header,
.modal-footer {
    padding: 15px;
    display: flex;
}

.modal-header {
    @apply px-5 py-6 bg-neutral-800 rounded-t-lg;
}

.modal-body {
    @apply p-5 bg-neutral-900 rounded-b-lg;
}
</style>
