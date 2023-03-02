<template>
    <div
        class="h-full flex flex-col items-center justify-center text-center relative w-full pb-12"
    >
        <div
            class="flex-1 grid place-content-center justify-items-center gap-1"
        >
            <p class="text-neutral-500">
                Click on a contact to view their status updates
            </p>
        </div>
        <footer
            class="flex items-center justify-center text-center text-neutral-500 gap-2"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-3 h-3"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
            </svg>

            <p class="text-sm">Status updates are end-to-end encrypted</p>
        </footer>
    </div>
</template>
<script setup>
definePageMeta({
    layout: "custom",
});
</script>
