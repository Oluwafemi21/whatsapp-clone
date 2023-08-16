<template>
  <section class="flex flex-col gap-3 p-4">
    <!-- <img
            src="https://via.placeholder.com/150/0000FF/808080?text=Digital.com"
            class="rounded-full w-24 h-24 object-cover"
            alt="Profile Image"
        /> -->
    <BaseAvatar size="large" />
    <div class="flex items-center justify-between">
      <p class="dark:text-white font-medium text-xl">~fex</p>
      <button
        class="hover:bg-neutral-200 dark:hover:bg-neutral-700 p-2 flex items-center justify-center rounded"
      >
        <Icon name="clarity:edit-line" class="w-4 h-4 dark:text-white" />
      </button>
    </div>

    <div>
      <p class="text-neutral-400 text-sm">About</p>
      <div class="flex items-center justify-between">
        <p class="dark:text-white text-sm">Available</p>
        <button
          class="hover:bg-neutral-200 dark:hover:bg-neutral-700 p-2 flex items-center justify-center rounded"
        >
          <Icon name="clarity:edit-line" class="w-4 h-4 dark:text-white" />
        </button>
      </div>
    </div>
    <div>
      <p class="text-neutral-400 text-sm">Phone Number</p>
      <p class="dark:text-white text-sm">+234 809 555 6534</p>
    </div>
  </section>
</template>

<script setup></script>
