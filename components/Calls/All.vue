<template>
    <section
        class="chats bg-white/50 dark:bg-neutral-800/50 col-span-3 rounded-tl-lg border-black/25 border border-r-0 px-2 py-2"
    >
        <header class="flex flex-col justify-between gap-3 mb-5 px-2">
            <h3 class="text-xl font-medium dark:text-white">Calls</h3>

            <FormBaseInput
                v-model="searchTerm"
                :placeholder="'Search or start a new call'"
            />
        </header>

        <section class="h-screen overflow-y-scroll">
            <ul class="flex flex-col gap-2">
                <li v-for="call in calls" :key="call.id">
                    <CallsCallCard :call="call" />
                </li>
            </ul>
        </section>
    </section>
</template>

<script setup>
const currentTab = useState("active-component");

const searchTerm = ref("");

const calls = [
    {
        id: 1,
        name: "Mum Mtn",
        time: "1:43 PM",
        status: "missed",
        callCount: 1,
        type: "phone",
    },
    {
        id: 2,
        name: "Mr Marv",
        time: "10:33 AM",

        status: "missed",
        callCount: 2,
        type: "video",
    },

    {
        id: 3,
        name: "Mr Marv",
        time: "10:33 AM",

        status: "missed",
        callCount: 0,
        type: "phone",
    },

    {
        id: 4,
        name: "Moses",
        time: "10:33 AM",
        status: "outgoing",
        callCount: 2,
        type: "phone",
    },
    {
        id: 5,
        name: "Simon",
        time: "10:33 AM",
        status: "missed",
        callCount: 3,
        type: "phone",
    },
    {
        id: 6,
        name: "Zikam",
        time: "10:33 AM",
        status: "incoming",
        callCount: 0,
        type: "phone",
    },
];
</script>

<style></style>
