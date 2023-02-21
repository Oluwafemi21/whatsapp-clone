<template>
    <NuxtLink
        :to="{
            name: 'status-user-id',
            params: {
                user: status.name,
                id: status.id,
            },
        }"
        class="hover:bg-neutral-800 flex space-x-3 w-full rounded-md py-2.5 px-3"
        :class="active ? 'bg-neutral-800' : null"
    >
        <div
            class="bg-neutral-700 h-12 w-12 grid place-content-center rounded-full flex-shrink-0"
        >
            <Icon
                name="mingcute:user-3-fill"
                class="w-6 h-6 text-neutral-500"
            />
        </div>
        <div class="w-full">
            <div class="flex flex-col gap-2 text-white">
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
