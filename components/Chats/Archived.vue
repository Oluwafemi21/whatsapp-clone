<template>
    <header class="flex flex-col justify-between gap-3 mb-5 px-2">
        <div class="flex items-center gap-4">
            <button
                class="hover:bg-neutral-800 py-2 px-3 rounded-md"
                @click="showUnarchivedChats"
            >
                <Icon name="heroicons:arrow-left" class="w-4 h-4 text-white" />
            </button>
            <h3 class="text-xl font-medium text-white">Archived</h3>
        </div>
        <div class="search-box w-full relative">
            <input
                type="text"
                class="text-sm w-full pr-8 h-9 bg-neutral-800 rounded-md text-white border-neutral-800 border-b-2 border-b-white focus:outline-none focus:border-neutral-600 focus:ring-transparent focus:placeholder:text-gray-500 focus:bg-black/40 focus:border-b-green-600 placeholder:text-white"
                placeholder="Search archived chats"
                title="Ctrl+F"
            />
            <Icon
                name="quill:search"
                class="absolute top-2.5 right-2 w-4 h-4 text-white"
            />
        </div>
    </header>
    <section class="h-screen overflow-y-scroll">
        <ul class="flex flex-col gap-2">
            <li v-for="chat in chats" :key="chat.id">
                <ChatsChatCard :chat="chat" />
            </li>
        </ul>
    </section>
</template>

<script setup>
const currentTab = useState("active-component");

const showUnarchivedChats = () => {
    currentTab.value = "ChatsUnarchived";
};

const chats = [
    {
        id: 1,
        name: "Mum Mtn",
        time: "1:43 PM",
        message: "Next week",
        status: "archived",
        messageCount: 1,
    },
    {
        id: 2,
        name: "Mr Marv",
        time: "10:33 AM",
        message: "No issues",
        status: "archived",
        messageCount: 2,
    },

    {
        id: 3,
        name: "Mr Marv",
        time: "10:33 AM",
        message: "No issues",
        status: "archived",
        messageCount: 0,
    },

    {
        id: 4,
        name: "Moses",
        time: "10:33 AM",
        message: "No issues",
        status: "archived",
        messageCount: 2,
    },
    {
        id: 5,
        name: "Simon",
        time: "10:33 AM",
        message: "No issues",
        status: "archived",
        messageCount: 3,
    },
    {
        id: 6,
        name: "Peter",
        time: "10:33 AM",
        message: "No issues",
        status: "archived",
        messageCount: 0,
    },
    {
        id: 7,
        name: "David",
        time: "10:33 AM",
        message: "No issues",
        status: "archived",
        messageCount: 0,
    },
    {
        id: 8,
        name: "Daniel",
        time: "10:33 AM",
        message: "No issues",
        status: "archived",
        messageCount: 0,
    },
    {
        id: 9,
        name: "Moses",
        time: "10:33 AM",
        message: "No issues",
        status: "archived",
        messageCount: 0,
    },
    {
        id: 10,
        name: "Developer's Community",
        time: "10:33 AM",
        message: "No issues",
        status: "archived",
        messageCount: 0,
    },
    {
        id: 11,
        name: "Family",
        time: "10:33 AM",
        message: "Big: Helloooo",
        status: "archived",
        messageCount: 0,
    },
];
</script>

<style></style>
