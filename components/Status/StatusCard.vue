<template>
    <NuxtLink
        :to="{
            name: 'status-user-id',
            params: {
                user: status.name,
                id: status.id,
            },
        }"
        class="hover:bg-gray-200 focus:bg-gray-200 dark:hover:bg-neutral-800 flex space-x-3 w-full rounded-md py-2.5 px-3"
        :class="active ? ' dark:bg-neutral-800' : null"
    >
        <Avatar />
        <div class="w-full">
            <div class="flex flex-col gap-2 dark:text-white">
                <p class="font-medium text-xs">{{ status.name }}</p>
                <span class="text-gray-500 text-sm"
                    >Today, {{ status.time }}</span
                >
            </div>
        </div>
    </NuxtLink>
</template>

<script setup>
defineProps({
    status: {
        type: Object,
        required: true,
        default: () => ({}),
    },
    active: {
        type: Boolean,
        default: false,
    },
});
</script>

<style></style>
