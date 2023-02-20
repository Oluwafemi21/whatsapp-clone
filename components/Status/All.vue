<template>
    <section
        class="chats bg-transparent col-span-3 rounded-tl-lg border-black/25 border border-r-0 px-2 py-2"
    >
        <header class="flex flex-col justify-between gap-3 mb-5 px-2">
            <div class="flex items-center justify-between">
                <h3 class="text-xl font-medium text-white">Status</h3>
            </div>
        </header>

        <section class="h-screen overflow-y-scroll">
            <ul class="flex flex-col gap-2">
                <li v-for="chat in chats" :key="chat.id">
                    <ChatsChatCard :chat="chat" />
                </li>
            </ul>
        </section>
    </section>
</template>

<script setup>
const currentTab = useState("active-component");

const showArchivedChats = () => {
    currentTab.value = "ChatsArchived";
};

const chats = [
    {
        id: 1,
        name: "Mum Mtn",
        time: "1:43 PM",
        message: "Next week",
        status: "unarchived",
        messageCount: 1,
    },
    {
        id: 2,
        name: "Mr Marv",
        time: "10:33 AM",
        message: "No issues",
        status: "unarchived",
        messageCount: 2,
    },

    {
        id: 3,
        name: "Mr Marv",
        time: "10:33 AM",
        message: "No issues",
        status: "unarchived",
        messageCount: 0,
    },

    {
        id: 4,
        name: "Moses",
        time: "10:33 AM",
        message: "No issues",
        status: "unarchived",
        messageCount: 2,
    },
    {
        id: 5,
        name: "Simon",
        time: "10:33 AM",
        message: "No issues",
        status: "unarchived",
        messageCount: 3,
    },
    {
        id: 6,
        name: "Peter",
        time: "10:33 AM",
        message: "No issues",
        status: "unarchived",
        messageCount: 0,
    },
    {
        id: 7,
        name: "David",
        time: "10:33 AM",
        message: "No issues",
        status: "unarchived",
        messageCount: 0,
    },
    {
        id: 8,
        name: "Daniel",
        time: "10:33 AM",
        message: "No issues",
        status: "unarchived",
        messageCount: 0,
    },
    {
        id: 9,
        name: "Moses",
        time: "10:33 AM",
        message: "No issues",
        status: "unarchived",
        messageCount: 0,
    },
    {
        id: 10,
        name: "Developer's Community",
        time: "10:33 AM",
        message: "No issues",
        status: "unarchived",
        messageCount: 0,
    },
    {
        id: 11,
        name: "Family",
        time: "10:33 AM",
        message: "Big: Helloooo",
        status: "unarchived",
        messageCount: 0,
    },
];
</script>

<style></style>
