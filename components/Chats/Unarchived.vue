<template>
    <header class="flex flex-col justify-between gap-3 mb-5 px-2">
        <div class="flex items-center justify-between">
            <h3 class="text-xl font-medium text-white">Chats</h3>
            <div class="tools">
                <ul class="flex">
                    <li
                        class="flex items-center justify-center px-4 py-2 hover:bg-gray-800/40 relative rounded"
                        title="New Chat(Ctrl+N) \nNew Group(Ctrl+Shift+N)"
                    >
                        <svg
                            class="fill-white"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z"
                            ></path>
                            <path
                                d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z"
                            ></path>
                        </svg>
                    </li>
                    <li
                        class="flex items-center justify-center px-4 py-2 hover:bg-gray-800/40 relative rounded"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="w-6 h-6 text-white"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </li>
                </ul>
            </div>
        </div>
        <div class="search-box w-full relative">
            <input
                type="text"
                class="text-sm w-full pr-8 h-9 bg-neutral-800 rounded-md text-white border-neutral-800 border-b-2 border-b-white focus:outline-none focus:border-neutral-600 focus:ring-transparent focus:placeholder:text-gray-500 focus:bg-black/40 focus:border-b-green-600 placeholder:text-white"
                placeholder="Search or start a new chat"
                title="Ctrl+F"
            />
            <svg
                class="absolute top-2.5 right-2 w-4 h-4 rotate-90 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
            </svg>
        </div>
    </header>

    <section class="h-screen overflow-y-scroll">
        <button
            class="hover:bg-neutral-800 w-full flex items-center py-2.5 rounded-md pl-6 gap-6 mb-1"
            @click="showArchivedChats"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-white flex-shrink-0"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
            </svg>

            <div
                class="flex flex-1 items-center justify-between font-medium pr-3"
            >
                <p class="text-white">Archived</p>
                <span class="text-sm text-green-600">71</span>
            </div>
        </button>
        <ul class="flex flex-col gap-2">
            <li v-for="chat in chats" :key="chat.id">
                <NuxtLink
                    :to="{
                        name: 'chat-user-id',
                        params: { user: chat.name, id: chat.id },
                    }"
                    class="hover:bg-neutral-800 flex space-x-3 w-full rounded-md py-2.5 px-3"
                >
                    <div
                        class="bg-neutral-700 h-12 w-12 grid place-content-center rounded-full flex-shrink-0"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="w-7 h-7 text-neutral-500"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </div>
                    <div class="w-full">
                        <div
                            class="flex items-center justify-between text-white"
                        >
                            <p class="font-medium">{{ chat.name }}</p>
                            <span class="text-sm">{{ chat.time }}</span>
                        </div>
                        <div class="flex items-center justify-between gap-2">
                            <p class="text-gray-500 text-sm">
                                {{ chat.message }}
                            </p>
                        </div>
                    </div>
                </NuxtLink>
            </li>
        </ul>
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
