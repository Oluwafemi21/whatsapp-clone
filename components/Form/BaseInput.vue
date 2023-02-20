<template>
    <div class="flex flex-col relative">
        <div class="search-box w-full relative">
            <input
                type="text"
                class="text-sm w-full pr-8 h-9 bg-neutral-800 rounded-md text-white border-neutral-800 border-b-2 border-b-white focus:outline-none focus:border-neutral-600 focus:ring-transparent focus:placeholder:text-gray-500 focus:bg-black/40 focus:border-b-green-600 placeholder:text-white"
                :placeholder="placeholder"
                title="Ctrl+F"
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
                v-bind="$attrs"
            />
            <Icon
                name="quill:search"
                class="absolute top-2.5 right-2 w-4 h-4 text-white"
            />
        </div>
    </div>
</template>

<script setup>
defineProps({
    placeholder: {
        type: String,
    },
    modelValue: {
        type: String,
        default: "",
    },
    showIcon: {
        type: Boolean,
        default: false,
    },
});

// instantiate the input
const input = ref(null);
const isPasswordShown = ref(false);

const showPassword = () => {
    // if the input type is password
    if (input.value.type === "password") {
        // change the input type to text
        input.value.type = "text";
        isPasswordShown.value = true;
    }
};

const hidePassword = () => {
    // if the input type is text
    if (input.value.type === "text") {
        // change the input type to password
        input.value.type = "password";
        isPasswordShown.value = false;
    }
};
</script>
