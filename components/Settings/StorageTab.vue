<template>
  <section class="flex flex-col gap-4 p-4">
    <h3 class="text-xl dark:text-white font-medium">Storage</h3>
    <div>
      <h4 class="dark:text-white text-lg">Automatic Downloads</h4>
      <p class="text-neutral-500 text-sm mt-2">
        Choose which media will be automatically downloaded from the messages
        you receive
      </p>
    </div>
    <div
      v-for="(media, index) in medias"
      :key="index"
      class="flex items-center gap-2"
    >
      <input
        :id="media"
        type="checkbox"
        class="w-5 h-5 rounded bg-neutral-800 text-green-500 focus:outline-none focus:ring-offset-0 focus:ring-transparent"
        checked
      />
      <label :for="media" class="capitalize dark:text-white select-none">{{
        media
      }}</label>
    </div>
  </section>
</template>

<script setup>
const medias = ["photos", "audio", "videos", "documents"];
</script>
