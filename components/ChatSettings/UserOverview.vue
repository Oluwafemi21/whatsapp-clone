<template>
  <section class="p-4">
    <BaseAvatar size="large" />

    <h3 class="text-xl font-medium dark:text-white my-4">
      {{ $route.params.user }}
    </h3>
    <div class="mb-2 border-b dark:border-neutral-600 pb-4 space-y-3">
      <div class="space-y-1 text-sm">
        <p class="text-neutral-400">About</p>
        <p class="dark:text-white">Hi</p>
      </div>
      <div class="space-y-1 text-sm">
        <p class="text-neutral-400">Phone Number</p>
        <p class="dark:text-white">+234 809 555 6534</p>
      </div>
      <div class="space-y-2 text-sm">
        <p class="text-neutral-400">Disappearing Messages</p>
        <div class="flex gap-2">
          <span class="dark:text-white">7 days</span>
        </div>
      </div>
      <div class="space-y-1 text-sm">
        <p class="text-neutral-400">Mute notifications</p>
        <select
          name="personal_chat_notifications"
          class="dark:bg-neutral-800 dark:text-white text-sm shadow rounded-md"
        >
          <option>Mute</option>
          <option>For 8 Hours</option>
          <option>For 1 week</option>
          <option>Always</option>
        </select>
      </div>
      <div class="space-y-1 text-sm">
        <p class="text-neutral-600 dark:text-neutral-300 text-sm">
          Notification tone
        </p>
        <div class="flex items-center gap-2">
          <button
            class="py-1.5 px-2 rounded dark:text-white dark:bg-neutral-700/90 border dark:border-neutral-700 grid place-content-center border-transparent shadow"
          >
            <Icon
              name="material-symbols:play-arrow-outline-rounded"
              class="w-6 h-6 dark:text-white"
            />
          </button>
          <select
            id="id"
            name="theme"
            class="dark:bg-neutral-700/90 border-none py-2.5 dark:bg-blend-color-dodge shadow dark:text-white text-sm rounded-md w-32"
          >
            <option>Default</option>
            <option v-for="i in 10" :key="i">Alert {{ i }}</option>
          </select>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-2 pt-3">
      <button
        class="py-1.5 px-2 text-sm text-black rounded shadow-sm dark:text-white dark:bg-neutral-700/90 border border-gray-300 dark:border-none"
        @click="toggleModal('block')"
      >
        Block
      </button>
      <button
        class="py-1.5 px-2 text-sm rounded text-red-500 dark:bg-neutral-700/90 shadow-sm border border-gray-300 dark:border-none"
        @click="toggleModal('report_and_block')"
      >
        Report contact
      </button>
    </div>
    <BaseModal v-if="modals.block" @close="toggleModal('block')">
      <template #header>
        <p class="text-sm text-black dark:text-white">
          Are you sure you want to block {{ $route.params.id }}?
        </p>
      </template>
      <template #body>
        <div class="flex items-center gap-3">
          <button
            class="px-3 py-1.5 dark:text-black text-sm bg-emerald-700 rounded min-w-[100px]"
          >
            Block
          </button>
          <button
            class="flex-1 px-3 py-1.5 text-sm dark:text-white rounded bg-white border border-gray-200 text-black dark:border-none dark:bg-neutral-800 min-w-[100px]"
          >
            Report and block
          </button>
          <button
            class="px-3 py-1.5 text-sm dark:text-white rounded bg-white border border-gray-200 text-black dark:border-none dark:bg-neutral-800 min-w-[100px]"
            @click.stop="toggleModal('block')"
          >
            Cancel
          </button>
        </div>
      </template>
    </BaseModal>
    <BaseModal
      v-if="modals.report_and_block"
      @close="toggleModal('report_and_block')"
    >
      <template #header>
        <p class="text-sm text-black dark:text-white">
          Report spam and block {{ $route.params.id }}? If you report and block,
          this chat's history will also be deleted.
        </p>
      </template>
      <template #body>
        <div class="grid grid-cols-2 gap-3">
          <button
            class="px-3 py-1.5 dark:text-black text-sm bg-emerald-700 rounded min-w-[100px]"
          >
            Report and block
          </button>

          <button
            class="px-3 py-1.5 text-sm dark:text-white rounded bg-white border border-gray-200 text-black dark:border-neutral-700 dark:bg-neutral-800 min-w-[100px]"
            @click.stop="toggleModal('report_and_block')"
          >
            Cancel
          </button>
        </div>
      </template>
    </BaseModal>
  </section>
</template>

<script setup>
const modals = reactive({
  block: false,
  report_and_block: false,
});
const toggleModal = (modal) => {
  modals[modal] = !modals[modal];
};

// when opening one modal
// close another
// each modal has a dialogue box if error or on success
</script>
