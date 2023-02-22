<template>
    <section
        class="chats bg-transparent col-span-3 rounded-tl-lg border-black/25 border border-r-0 px-2 py-2"
    >
        <header class="flex flex-col justify-between gap-3 mb-1 px-2">
            <div class="flex items-center justify-between">
                <h3 class="text-xl font-medium text-white">Status</h3>
            </div>
        </header>

        <section class="h-screen overflow-y-scroll">
            <StatusCard :status="statuses[0]" :active="true" />
            <p
                class="pl-2 text-sm py-1 sticky top-0 text-neutral-400 border-none bg-[hsl(0,0%,10%)]"
            >
                Recent updates
            </p>
            <ul class="flex flex-col gap-2">
                <li
                    v-for="status in statuses.slice(1, statuses.length)"
                    :key="status.id"
                >
                    <StatusCard :status="status" />
                </li>
            </ul>
        </section>
    </section>
</template>

<script setup>
const currentTab = useState("active-component");

const statuses = [
    {
        id: 0,
        name: "My Status",
        time: "08:33 AM",
    },
    {
        id: 1,
        name: "Mum Mtn",
        time: "1:43 PM",
    },
    {
        id: 2,
        name: "Mr Marv",
        time: "12:43 PM",
    },

    {
        id: 3,
        name: "Mr Marv",
        time: "11:13 AM",
    },

    {
        id: 4,
        name: "Moses",
        time: "10:45 AM",
    },
    {
        id: 5,
        name: "Simon",
        time: "09:33 AM",
    },
    {
        id: 6,
        name: "Peter",
        time: "09:20 AM",
    },
    {
        id: 7,
        name: "David",
        time: "07:33 AM",
    },
    {
        id: 8,
        name: "Daniel",
        time: "06:33 AM",
    },
    {
        id: 9,
        name: "Moses",
        time: "1:33 AM",
    },
    {
        id: 10,
        name: "Developer's Community",
        time: "12:33 AM",
    },
    {
        id: 11,
        name: "Family",
        time: "12:00 AM",
    },
];
</script>

<style></style>
