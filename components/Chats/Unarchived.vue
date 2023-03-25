<template>
    <header class="flex flex-col justify-between gap-3 mb-5 px-2">
        <div class="flex items-center justify-between">
            <h3 class="text-xl font-medium dark:text-white">Chats</h3>

            <div class="tools">
                <ul class="flex">
                    <li
                        class="group flex items-center justify-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800/40 relative rounded"
                    >
                        <Icon name="lucide:edit" class="dark:text-white" />
                        <Tooltip
                            text="New Chat(Ctrl+N)"
                            :multiline="true"
                            text2="New Group(Ctrl+Shift+N)"
                            class="w-40 left-auto right-2 -top-9"
                        />
                    </li>
                    <li class="relative">
                        <button
                            @click="showDropdown = !showDropdown"
                            class="peer flex items-center justify-center px-3 py-2 hover:bg-gray-100/50 dark:hover:bg-neutral-800/40 relative rounded"
                            :class="{
                                'ring-1 bg-gray-100 ring-neutral-300 dark:bg-neutral-800/40 dark:ring-neutral-900':
                                    showDropdown,
                            }"
                        >
                            <Icon
                                name="heroicons:ellipsis-horizontal-20-solid"
                                class="w-6 h-6 dark:text-white"
                            />
                        </button>
                        <Transition name="dropdownBottom">
                            <FormDropdown
                                v-if="showDropdown"
                                @close="hideDropdown"
                            >
                                <template #items>
                                    <FormDropdownItem
                                        title="Filter chats by"
                                        icon="bi:filter"
                                        :nested="true"
                                        :onClick="showNestedDropdown"
                                    >
                                        <template #nested v-if="nestedDropdown">
                                            <FormDropdown
                                                class="left-full top-0 mt-auto"
                                            >
                                                <template #items>
                                                    <FormDropdownItem
                                                        title="Unread"
                                                        icon="mdi:message-badge-outline"
                                                        :onClick="
                                                            showUnreadChat
                                                        "
                                                    />
                                                    <FormDropdownItem
                                                        title="Contacts"
                                                        icon="fluent:person-20-regular"
                                                        :onClick="showContacts"
                                                    />
                                                    <FormDropdownItem
                                                        title="Non-contacts"
                                                        icon="fluent:person-prohibited-20-regular"
                                                        :onClick="
                                                            showNonContacts
                                                        "
                                                    />
                                                    <FormDropdownItem
                                                        title="Groups"
                                                        icon="fluent:people-20-regular"
                                                        :onClick="showGroups"
                                                    />
                                                </template>
                                            </FormDropdown>
                                        </template>
                                    </FormDropdownItem>
                                    <FormDropdownItem
                                        title="Starred messages"
                                        icon="ph:star"
                                        :onClick="showStarred"
                                    />
                                </template>
                            </FormDropdown>
                        </Transition>
                    </li>
                </ul>
            </div>
        </div>

        <FormBaseInput
            v-model="searchTerm"
            :placeholder="'Search or start a new chat'"
        />
    </header>

    <section
        class="h-screen overflow-y-scroll scroll-p-0 snap-mandatory snap-y"
    >
        <button
            class="hover:bg-gray-100 dark:hover:bg-neutral-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-neutral-800 w-full flex items-center py-2.5 rounded-md pl-6 gap-6 mb-1"
            @click="showArchivedChats"
        >
            <Icon
                name="heroicons:archive-box"
                class="text-lg dark:text-white flex-shrink-0"
            />

            <div
                class="flex flex-1 items-center justify-between font-medium pr-3"
            >
                <p class="dark:text-white text-sm">Archived</p>
                <span
                    class="text-xs font-bold text-green-500 dark:text-emerald-600"
                    >71</span
                >
            </div>
        </button>
        <Transition name="slide-top" mode="out-in">
            <ul class="flex flex-col gap-2">
                <li v-for="chat in chats" :key="chat.id">
                    <ChatsChatCard
                        :chat="chat"
                        :receivedMessage="chat.recepient === 'user'"
                    />
                </li>
            </ul>
        </Transition>
    </section>
</template>

<script setup>
const currentTab = useState("active-component");

// dropdown functions
const hideDropdown = () => {
    showDropdown.value = false;
    nestedDropdown.value = false;
};
const showNestedDropdown = () => {
    console.log("display nested dropdown");
    nestedDropdown.value = !nestedDropdown.value;
};

const showStarred = () => {
    console.log("display all starred messages");
};

const showUnreadChat = () => {
    console.log("display all unread chats");
};

const showContacts = () => {
    console.log("display all contacts");
};

const showNonContacts = () => {
    console.log("display all non contacts");
};

const showGroups = () => {
    console.log("display all groups");
};

const showArchivedChats = () => {
    currentTab.value = "ChatsArchived";
};

const showDropdown = ref(false);
const nestedDropdown = ref(false);

const searchTerm = ref("");

const chats = [
    {
        id: 1,
        name: "Mum Mtn",
        time: "1:43 PM",
        message: "Next week",
        status: "unarchived",
        messageCount: 1,
        recepient: "user",
    },
    {
        id: 2,
        name: "Cynthia",
        time: "10:33 AM",
        message: "No issues",
        status: "unarchived",
        messageCount: 2,
        recepient: "user",
    },

    {
        id: 3,
        name: "Jessica",
        time: "10:33 AM",
        message: "No issues",
        status: "unarchived",
        messageCount: 0,
        recepient: "not-user",
    },

    {
        id: 4,
        name: "Moses",
        time: "10:33 AM",
        message: "No issues",
        status: "unarchived",
        messageCount: 2,
        recepient: "user",
    },
    {
        id: 5,
        name: "Simon",
        time: "10:33 AM",
        message: "No issues",
        status: "unarchived",
        messageCount: 3,
        recepient: "user",
    },
    {
        id: 6,
        name: "Peter",
        time: "10:33 AM",
        message: "No issues",
        status: "unarchived",
        messageCount: 0,
        recepient: "not-user",
    },
    {
        id: 7,
        name: "David",
        time: "10:33 AM",
        message: "No issues",
        status: "unarchived",
        messageCount: 0,
        recepient: "not-user",
    },
    {
        id: 8,
        name: "Daniel",
        time: "10:33 AM",
        message: "No issues",
        status: "unarchived",
        messageCount: 0,
        recepient: "not-user",
    },
    {
        id: 9,
        name: "Moses",
        time: "10:33 AM",
        message: "No issues",
        status: "unarchived",
        messageCount: 0,
        recepient: "not-user",
    },
    {
        id: 10,
        name: "Developer's Community",
        time: "10:33 AM",
        message: "No issues",
        status: "unarchived",
        messageCount: 0,
        recepient: "not-user",
    },
    {
        id: 11,
        name: "Family",
        time: "10:33 AM",
        message: "Big: Helloooo",
        status: "unarchived",
        messageCount: 0,
        recepient: "not-user",
    },
];
</script>
