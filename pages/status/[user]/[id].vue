<template>
    <section class="min-h-screen grid place-content-center">
        <p>User - {{ $route.params.user }}</p>
        <p>Id - {{ $route.params.id }}</p>

        <button
            class="peer text-white bg-neutral-800 border border-neutral-200 rounded-md py-2 px-3 min-w-[200px] flex items-center justify-between"
        >
            <div class="flex items-center gap-2">
                <Icon name="eva:color-palette-outline" class="shrink-0" />
                <span class="text-sm">System Default</span>
            </div>
            <Icon name="ph:caret-down" />
        </button>
    </section>
</template>

<script setup></script>

<style></style>
