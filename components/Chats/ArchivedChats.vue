<template>
  <header class="flex flex-col justify-between gap-3 mb-5 px-2">
    <h3 class="text-xl font-medium dark:text-white">Archived</h3>

    <FormBaseInput
      v-model="searchTerm"
      :placeholder="'Search archived chats'"
    />
  </header>
  <section class="h-screen overflow-y-scroll scroll-p-0">
    <ul class="flex flex-col gap-2">
      <li v-for="chat in chats" :key="chat.id">
        <ChatsChatCard
          :chat="chat"
          :chat-route="'chat'"
          :received-message="chat.recepient === 'user'"
        />
      </li>
    </ul>
  </section>
</template>

<script setup>
const searchTerm = ref("");

const chats = [
  {
    id: 1,
    name: "Mum Mtn",
    time: "1:43 PM",
    message: "Next week",
    status: "archived",
    messageCount: 100,
    recepient: "user",
  },
  {
    id: 2,
    name: "Mr Marv",
    time: "10:33 AM",
    message: "No issues",
    status: "archived",
    messageCount: 20,
    recepient: "user",
  },

  {
    id: 3,
    name: "Mr Marv",
    time: "10:33 AM",
    message: "No issues",
    status: "archived",
    messageCount: 1,
    recepient: "user",
  },

  {
    id: 4,
    name: "Moses",
    time: "10:33 AM",
    message: "No issues",
    status: "archived",
    messageCount: 2,
    recepient: "not-user",
  },
  {
    id: 5,
    name: "Simon",
    time: "10:33 AM",
    message: "No issues",
    status: "archived",
    messageCount: 3,
    recepient: "user",
  },
  {
    id: 6,
    name: "Peter",
    time: "10:33 AM",
    message: "No issues",
    status: "archived",
    messageCount: 0,
    recepient: "not-user",
  },
  {
    id: 7,
    name: "David",
    time: "10:33 AM",
    message: "No issues",
    status: "archived",
    messageCount: 0,
    recepient: "not-user",
  },
  {
    id: 8,
    name: "Daniel",
    time: "10:33 AM",
    message: "No issues",
    status: "archived",
    messageCount: 0,
    recepient: "not-user",
  },
  {
    id: 9,
    name: "Moses",
    time: "10:33 AM",
    message: "No issues",
    status: "archived",
    messageCount: 0,
    recepient: "not-user",
  },
  {
    id: 10,
    name: "Developer's Community",
    time: "10:33 AM",
    message: "No issues",
    status: "archived",
    messageCount: 0,
    recepient: "not-user",
  },
  {
    id: 11,
    name: "Family",
    time: "10:33 AM",
    message: "Big: Helloooo",
    status: "archived",
    messageCount: 0,
    recepient: "not-user",
  },
];
</script>

<style></style>
