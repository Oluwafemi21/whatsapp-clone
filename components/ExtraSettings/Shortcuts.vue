<template>
    <section class="flex flex-col gap-4 p-4 overflow-y-scroll h-full">
        <h3 class="text-xl text-white font-medium">Shortcuts</h3>

        <h4 class="text-white text-lg">Keyboard shortcuts</h4>

        <ul class="flex flex-col gap-2.5">
            <li
                v-for="(shortcut, index) in shortcuts"
                :key="index"
                class="flex items-center justify-between"
            >
                <p class="text-white text-sm">{{ shortcut.name }}</p>
                <div class="flex gap-2">
                    <div
                        class="min-w-[40px] rounded text-center border border-neutral-500 py-1.5 text-white text-sm"
                        v-for="(step, index) in shortcut.instructions"
                        :key="index"
                    >
                        {{ step }}
                    </div>
                </div>
            </li>
        </ul>
        <div>
            <h4 class="text-white text-lg">Quick emojis</h4>
            <p class="text-neutral-500 my-2">
                When typing a message, use the colon symbol to quickly search
                for and access Emojis in-line.
            </p>

            <ul class="my-3 space-y-3">
                <li class="flex items-center justify-between">
                    <p class="text-white text-sm">Cat</p>
                    <div class="flex items-center gap-3">
                        <div
                            class="py-1 min-w-[40px] text-center text-white border border-neutral-500 rounded"
                        >
                            :
                        </div>
                        <Icon
                            name="material-symbols:arrow-right-alt"
                            class="text-white w-7 h-7"
                        />
                        <div
                            class="py-1 min-w-[40px] text-center text-white border border-neutral-500 rounded"
                        >
                            :cat
                        </div>
                        <Icon name="ph:equals" class="text-white w-7 h-7" />
                        <div
                            class="py-1 min-w-[40px] text-center text-white border border-neutral-500 rounded"
                        >
                            &#128568;
                        </div>
                    </div>
                </li>
                <li class="flex items-center justify-between">
                    <p class="text-white text-sm">Hat</p>
                    <div class="flex items-center gap-3">
                        <div
                            class="py-1 min-w-[40px] text-center text-white border border-neutral-500 rounded"
                        >
                            :
                        </div>
                        <Icon
                            name="material-symbols:arrow-right-alt"
                            class="text-white w-7 h-7"
                        />
                        <div
                            class="py-1 min-w-[40px] text-center text-white border border-neutral-500 rounded"
                        >
                            :hat
                        </div>
                        <Icon name="ph:equals" class="text-white w-7 h-7" />
                        <div
                            class="py-1 min-w-[40px] text-center text-white border border-neutral-500 rounded"
                        >
                            &#127913;
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
const shortcuts = [
    {
        name: "New chat",
        instructions: ["Ctrl", "N"],
    },
    {
        name: "Close chat",
        instructions: ["Ctrl", "W"],
    },
    {
        name: "Close chat",
        instructions: ["Ctrl", "F4"],
    },
    {
        name: "Close application",
        instructions: ["Alt", "F4"],
    },
    {
        name: "New group",
        instructions: ["Ctrl", "Shift", "N"],
    },
    {
        name: "Search",
        instructions: ["Ctrl", "F"],
    },
    {
        name: "Search in chat",
        instructions: ["Ctrl", "Shift", "F"],
    },
    {
        name: "Settings",
        instructions: ["Ctrl", "P"],
    },
    {
        name: "Toggle mute",
        instructions: ["Ctrl", "Shift", "M"],
    },
    {
        name: "Toggle read",
        instructions: ["Ctrl", "Shift", "U"],
    },
    {
        name: "Emoji panel",
        instructions: ["Ctrl", "Shift", "E"],
    },
    {
        name: "Gif panel",
        instructions: ["Ctrl", "Shift", "G"],
    },
    {
        name: "Previous chat",
        instructions: ["Ctrl", "Shift", "["],
    },
    {
        name: "Next chat",
        instructions: ["Ctrl", "Shift", "]"],
    },
    {
        name: "Previous chat",
        instructions: ["Ctrl", "Shift", "Tab"],
    },
    {
        name: "Next chat",
        instructions: ["Ctrl", "Tab"],
    },
    {
        name: "Open chat",
        instructions: ["Ctrl", "1..9"],
    },
];
</script>
