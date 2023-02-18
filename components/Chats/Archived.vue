<template>
    <header class="flex flex-col justify-between gap-3 mb-5 px-2">
        <div class="flex items-center gap-4">
            <button
                class="hover:bg-neutral-800 p-3 rounded-md"
                @click="showUnarchivedChats"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 text-white"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                </svg>
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
        <ul class="flex flex-col gap-2">
            <li v-for="chat in chats" :key="chat.id">
                <NuxtLink
                    :to="{
                        name: 'chat-user-id',
                        params: {
                            user: chat.name,
                            id: chat.id,
                        },
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
                            <span
                                class="text-sm"
                                :class="{
                                    'text-green-500': chat.messageCount > 0,
                                    'text-gray-500': !chat.messageCount,
                                }"
                                >{{ chat.time }}</span
                            >
                        </div>
                        <div class="flex items-center justify-between gap-2">
                            <p class="text-gray-500 text-sm">
                                {{ chat.message }}
                            </p>

                            <div class="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-4 h-4 text-white"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"
                                    />
                                </svg>
                                <span
                                    class="text-white text-xs bg-neutral-700 p-1 rounded-md"
                                    >{{ chat.status }}</span
                                >
                                <span
                                    v-if="chat.messageCount > 0"
                                    class="text-[11px] bg-green-600 h-4 w-4 rounded-full font-medium grid place-content-center"
                                    >{{ chat.messageCount }}</span
                                >
                            </div>
                        </div>
                    </div>
                </NuxtLink>
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
