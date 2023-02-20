<template>
    <NuxtLink
        :to="{
            name: 'call-index-user-id',
            params: {
                user: call.name,
                id: call.id,
            },
        }"
        class="hover:bg-neutral-800 flex space-x-3 w-full rounded-md py-2.5 px-3"
    >
        <div
            class="bg-neutral-700 h-12 w-12 grid place-content-center rounded-full flex-shrink-0"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-7 h-7 text-neutral-500"
            >
                <path
                    fill-rule="evenodd"
                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                    clip-rule="evenodd"
                />
            </svg>
        </div>
        <div class="w-full flex flex-col gap-2">
            <div class="flex items-center justify-between text-white">
                <p class="font-medium text-xs">{{ call.name }}</p>
                <span class="text-xs text-gray-500">{{ call.time }}</span>
            </div>
            <div class="flex items-center justify-between gap-2">
                <div class="flex items-center gap-2"></div>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup></script>

<style></style>
