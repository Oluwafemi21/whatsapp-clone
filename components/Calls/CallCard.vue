<template>
  <NuxtLink
    :to="{
      name: 'calls-index-user-id',
      params: {
        user: call.name,
        id: call.id,
      },
    }"
    class="hover:bg-gray-200 focus:bg-gray-200 dark:focus:bg-neutral-800 dark:hover:bg-neutral-800 flex space-x-3 w-full rounded-md py-2.5 px-3"
  >
    <BaseAvatar />
    <div class="w-full flex flex-col gap-2">
      <div class="flex items-center justify-between dark:text-white">
        <p class="font-medium text-xs">{{ call.name }}</p>
        <span class="text-xs dark:text-neutral-400 text-neutral-500">{{
          call.time
        }}</span>
      </div>
      <div class="flex items-center gap-2">
        <Icon
          v-if="call.status === 'missed'"
          class="text-red-600"
          :name="
            call.type === 'phone'
              ? 'uil:missed-call'
              : 'material-symbols:missed-video-call-outline'
          "
        />
        <Icon
          v-else
          class="dark:text-white"
          :name="
            call.type === 'phone'
              ? 'ph:phone-light'
              : 'majesticons:video-camera-line'
          "
        />
        <span
          class="text-xs capitalize"
          :class="{
            'text-red-600': call.status === 'missed',
            'dark:text-white': call.status !== 'missed',
          }"
          >{{ call.status }}
          {{ call.callCount > 0 ? `(${call.callCount})` : null }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  call: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});
</script>

<style></style>
