<template>
  <div class="modal-backdrop" @click="close">
    <div ref="modalBg" class="modal">
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
const emit = defineEmits(["close"]);

const modalBg = ref(null);

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
  background-color: rgba(245, 245, 245, 0.514);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
}

.dark .modal-backdrop {
  background-color: rgba(0, 0, 0, 0.5);
}

.modal {
  @apply border border-neutral-200 dark:border-neutral-500 rounded-lg text-white max-w-md w-full;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  @apply px-5 py-6 bg-white dark:bg-neutral-800 rounded-t-lg;
}

.modal-body {
  @apply p-5 bg-gray-100 dark:bg-neutral-900 rounded-b-lg;
}
</style>
