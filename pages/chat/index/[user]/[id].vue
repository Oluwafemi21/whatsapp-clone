<template>
    <section class="h-full w-full flex flex-col dark:text-white">
        <ChatsContactHeader :contact="`${$route.params.user}`" />

        <ChatsMessages :messages="messages" />

        <div
            class="flex items-center border-t border-black/25 bg-neutral-50 dark:bg-neutral-800 px-2 py-1 gap-4"
        >
            <div class="flex items-center">
                <button
                    class="group flex items-center justify-center px-4 py-3 hover:bg-gray-200 dark:hover:bg-neutral-700/50 relative rounded"
                >
                    <Icon
                        name="iconoir:emoji"
                        class="w-5 h-5 text-black dark:text-white"
                    />
                </button>
                <div class="relative">
                    <button
                        class="peer group flex items-center justify-center px-4 py-3 hover:bg-gray-200 dark:hover:bg-neutral-700/50 focus:bg-neutral-700/50 relative rounded"
                    >
                        <Icon
                            name="fluent:attach-16-regular"
                            class="w-5 h-5 text-black dark:text-white"
                        />
                    </button>
                    <FormDropdown>
                        <template #items>
                            <FormDropdownItem
                                title="Filter chats by"
                                icon="bi:filter"
                                :nested="true"
                            >
                                <template #nested>
                                    <FormDropdown>
                                        <template #items>
                                            <FormDropdownItem
                                                title="All chats"
                                                icon="ph:chat"
                                            />
                                            <FormDropdownItem
                                                title="Unread chats"
                                                icon="ph:chat"
                                            />
                                            <FormDropdownItem
                                                title="Starred chats"
                                                icon="ph:star"
                                            />
                                        </template>
                                    </FormDropdown>
                                </template>
                            </FormDropdownItem>
                            <FormDropdownItem
                                title="Starred messages"
                                icon="ph:star"
                            />
                        </template>
                    </FormDropdown>
                </div>
            </div>
            <textarea
                rows="1"
                class="resize-none dark:bg-neutral-800/50 hover:bg-gray-100 h-10 w-full dark:hover:bg-neutral-700/60 dark:focus:bg-transparent placeholder:text-neutral-500 placeholder:text-sm text-sm focus:outline-none focus:border-none focus:bg-transparent focus:ring-0 ring-0 border-none"
                placeholder="Type a message"
                v-model="textMessage"
            />
            <button
                v-if="textMessage"
                class="group flex items-center justify-center px-4 py-3 hover:bg-gray-200 dark:hover:bg-neutral-700/50 relative rounded"
            >
                <Icon
                    name="fluent:send-24-regular"
                    class="w-5 h-5 text-black dark:text-white"
                />
                <Tooltip
                    :text="textMessage"
                    class="min-w-max left-auto right-0 -top-9"
                />
            </button>
            <button
                v-else
                class="group flex items-center justify-center px-4 py-3 hover:bg-gray-200 dark:hover:bg-neutral-700/50 relative rounded"
            >
                <Icon
                    name="ant-design:audio-outlined"
                    class="w-5 h-5 text-black dark:text-white"
                />
            </button>
        </div>
    </section>
</template>

<script setup>
const route = useRoute();

const textMessage = ref("");
const messages = ref([
    {
        userId: "12d34e",
        read: false,
        text_messages: [
            {
                id: "2392094fhbdh",
                text: "Hey",
                time: "10:04am",
            },
        ],
    },
    {
        userId: "12d34f",
        read: false,
        text_messages: [
            {
                id: "2ffurfbf234ri",
                text: "Hello",
                time: "10:04am",
            },
        ],
    },
    {
        userId: "12d34e",
        read: false,
        text_messages: [
            {
                id: "2392094fhbdh",
                text: "Hey",
                time: "10:04am",
            },
            {
                id: "2r7gfnfewejw",
                text: "Hello",
                time: "10:04am",
            },
            {
                id: "2ruf8ofwlifw",
                text: "Reply me",
                time: "10:04am",
            },
        ],
    },
    {
        userId: "12d34f",
        read: false,
        text_messages: [
            {
                id: "2ffurfaf234ri",
                text: "Hey",
                time: "10:04am",
            },
            {
                id: "3eucsbicuwebu",
                text: "Hey",
                time: "10:05am",
            },
            {
                id: "64fwfbcfkwjskfu",
                text: "Hey",
                time: "10:06am",
            },
        ],
    },
    {
        userId: "12d34e",
        read: false,
        text_messages: [
            {
                id: "2392094fhbdh",
                text: "Hey baddie",
                time: "10:06pm",
            },
            {
                id: "2392094fhbdh",
                text: "Just got your text now",
                time: "10:06pm",
            },
            {
                id: "2392094fhbdh",
                text: "I was coding, I completely forgot I had a phone",
                time: "10:06pm",
            },
        ],
    },
    {
        userId: "12d34f",
        read: false,
        text_messages: [
            {
                id: "2ffurfaf234ri",
                text: "Hmmm, Femi",
                time: "10:07pm",
            },
            {
                id: "3eucsbicuwebu",
                text: "Okay no problem",
                time: "10:07pm",
            },
            {
                id: "64fwfbcfkwjskfu",
                text: "How are you??",
                time: "10:07pm",
            },
        ],
    },
    {
        userId: "12d34e",
        read: false,
        text_messages: [
            {
                id: "2392094fhbdh",
                text: "You don't believe me??",
                time: "10:08pm",
            },
            {
                id: "2392094fhbdh",
                text: "Why are women like this?",
                time: "10:08pm",
            },
            {
                id: "2392094fhbdh",
                text: "I'm good anyways, I was thinking about you while I was coding",
                time: "10:08pm",
            },
            {
                id: "2392094fhbdh",
                text: "That's why I am even online rn",
                time: "10:08pm",
            },
        ],
    },
]);

useHead({
    title: `Whatsapp Chat | ${route.params.user}`,
});
</script>

<style></style>
