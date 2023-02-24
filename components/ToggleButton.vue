<template>
    <div class="flex items-center gap-3 flex-shrink-0">
        <label class="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                class="sr-only peer"
                :checked="checked"
                @change="$emit('update:checked', $event.target.checked)"
                v-bind="$attrs"
            />
            <div
                class="w-11 p-1 h-5 bg-transparent ring-2 ring-neutral-400 rounded-full peer after:absolute after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-transform after:duration-300 after:ease-in-out peer-checked:after:translate-x-6 after:content-[''] peer-checked:after:bg-black peer-checked:bg-emerald-600 peer-checked:ring-emerald-600"
            ></div>
        </label>
        <span class="text-sm text-white capitalize">{{
            checked ? "on" : "off"
        }}</span>
    </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
    checked: {
        type: Boolean,
        default: false,
    },
});
</script>

<style></style>
