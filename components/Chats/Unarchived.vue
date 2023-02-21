<template>
    <header class="flex flex-col justify-between gap-3 mb-5 px-2">
        <div class="flex items-center justify-between">
            <h3 class="text-xl font-medium text-white">Chats</h3>

            <div class="tools">
                <ul class="flex">
                    <li
                        class="flex items-center justify-center px-4 py-2 hover:bg-gray-800/40 relative rounded"
                        :title="'New Chat(Ctrl+N) New Group(Ctrl+Shift+N)'"
                    >
                        <Icon name="lucide:edit" class="text-white" />
                    </li>
                    <li
                        class="flex items-center justify-center px-3 py-2 hover:bg-gray-800/40 relative rounded"
                    >
                        <Icon
                            name="heroicons:ellipsis-horizontal-20-solid"
                            class="w-6 h-6 text-white"
                        />
                    </li>
                </ul>
            </div>
        </div>

        <FormBaseInput
            v-model="searchTerm"
            :placeholder="'Search or start a new chat'"
        />
    </header>

    <section class="h-screen overflow-y-scroll">
        <button
            class="hover:bg-neutral-800 w-full flex items-center py-2.5 rounded-md pl-6 gap-6 mb-1"
            @click="showArchivedChats"
        >
            <Icon
                name="heroicons:archive-box"
                class="text-lg text-white flex-shrink-0"
            />

            <div
                class="flex flex-1 items-center justify-between font-medium pr-3"
            >
                <p class="text-white text-sm">Archived</p>
                <span class="text-xs text-green-600">71</span>
            </div>
        </button>
        <ul class="flex flex-col gap-2">
            <li v-for="chat in chats" :key="chat.id">
                <ChatsChatCard :chat="chat" />
            </li>
        </ul>
    </section>
</template>

<script setup>
import { ref } from "vue";
const currentTab = useState("active-component");

const showArchivedChats = () => {
    currentTab.value = "ChatsArchived";
};

const searchTerm = ref("");

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
