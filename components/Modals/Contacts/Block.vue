<template>
    <Modal>
        <template #header>
            <p class="text-sm">
                Are you sure you want to block {{ $route.params.user }}?
            </p>
        </template>
        <template #body>
            <div class="flex items-center gap-3">
                <button
                    class="px-3 py-1.5 dark:text-black text-sm bg-emerald-600 rounded min-w-[100px]"
                >
                    Block
                </button>
                <button
                    class="px-3 py-1.5 text-sm dark:text-white rounded bg-neutral-800 min-w-[100px]"
                >
                    Report and block
                </button>
                <button
                    class="px-3 py-1.5 text-sm dark:text-white rounded bg-neutral-800 min-w-[100px]"
                >
                    Cancel
                </button>
            </div>
        </template>
    </Modal>
</template>

<script setup></script>

<style></style>
