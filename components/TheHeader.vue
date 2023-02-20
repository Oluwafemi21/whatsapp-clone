<script setup lang="ts"></script>

<template>
    <header
        class="fixed top-0 flex w-full items-center justify-between bg-black/90 px-3 h-10 overflow-hidden"
    >
        <Icon name="logos:whatsapp" class="w-20" />
        <div class="flex gap-2">
            <div class="hover:bg-blue-500 py-3 px-4 grid place-content-center">
                <div class="border-t-2 border-white w-3"></div>
            </div>
            <div class="hover:bg-blue-500 p-3">
                <Icon name="bx:copy" class="text-white text-sm h-7 w-5" />
            </div>
            <div class="hover:bg-red-600 p-3">
                <Icon
                    name="heroicons:x-mark-20-solid"
                    class="text-white text-sm h-7 w-5"
                />
            </div>
        </div>
    </header>
</template>

<style></style>
