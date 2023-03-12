<template>
    <div
        class="h-screen grid gap-5 place-content-center text-center justify-items-center w-full"
    >
        <Icon name="logos:whatsapp-icon" class="w-20 h-20" />
        <h2 class="dark:text-white text-lg font-medium">Whatsapp Clone</h2>
        <p class="dark:text-white text-sm">
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
                to="/auth/signup"
                class="bg-green-600 ring-1 ring-green-600 hover:ring-green-500 text-white px-5 py-2 rounded-full font-medium hover:bg-green-500"
                >Get Started</NuxtLink
            >
            <NuxtLink
                to="/"
                class="dark:bg-neutral-800 dark:text-white font-medium px-5 py-2 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-700 ring-1 ring-gray-400 dark:ring-gray-500"
                >View on Github</NuxtLink
            >
        </div>
    </div>
</template>

<script setup></script>
<style scoped></style>
