<template>
  <section class="flex flex-col gap-3 p-4">
    <h3 class="text-xl dark:text-white font-medium">Help</h3>
    <div class="mt-1">
      <h4 class="dark:text-white text-lg">Whatsapp for Windows</h4>

      <p class="text-neutral-500 text-sm">Version 2.2304.6.0</p>
    </div>

    <div class="border-y border-neutral-600 py-4">
      <ul class="flex flex-col gap-2">
        <li v-for="(link, index) in links" :key="index">
          <NuxtLink
            to="/"
            class="capitalize text-emerald-500 underline py-1.5 px-3 text-sm hover:bg-neutral-200/50 dark:hover:bg-neutral-700/40 rounded"
            >{{ link }}</NuxtLink
          >
        </li>
      </ul>
    </div>
    <p class="text-neutral-500 text-sm">{{ year }} &copy; Whatsapp Inc.</p>
  </section>
</template>

<script setup>
const year = new Date().getFullYear();

const links = [
  "help center",
  "contact us",
  "licences",
  "terms and privacy policy",
];
</script>
