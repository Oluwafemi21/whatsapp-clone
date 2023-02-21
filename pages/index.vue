<template>
    <div
        class="h-screen grid gap-5 place-content-center justify-items-center w-full"
    >
        <Icon name="logos:whatsapp-icon" class="w-20 h-20" />
        <h2 class="text-white text-lg">Whatsapp Clone 1.0</h2>
        <p class="text-white text-sm">
            This is a clone of the Whatsapp web app. It is built with
            <NuxtLink
                to="https://nuxt.com/"
                target="_blank"
                class="text-green-500 font-medium hover:underline"
                >Nuxt 3</NuxtLink
            >
            and
            <NuxtLink
                href="https://tailwindcss.com/"
                target="_blank"
                class="text-green-500 font-medium hover:underline"
                >Tailwind CSS</NuxtLink
            >.
        </p>
        <div class="flex items-center gap-5">
            <NuxtLink
                to="/chat"
                class="bg-green-600 text-white px-5 py-2 rounded-full font-medium hover:bg-green-500"
                >Get Started</NuxtLink
            >
            <NuxtLink
                to="/"
                class="bg-neutral-900 text-white px-5 py-2 rounded-full hover:bg-neutral-800 ring-2 ring-neutral-700"
                >View on Github</NuxtLink
            >
        </div>
    </div>
</template>

<script setup></script>
<style scoped></style>
