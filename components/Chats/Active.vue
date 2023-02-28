<template>
    <section
        class="chats bg-neutral-800/50 col-span-3 rounded-tl-lg border-black/25 border border-r-0 px-2 py-2"
    >
        <KeepAlive>
            <component :is="sharedState"></component>
        </KeepAlive>
    </section>
</template>

<script>
import { ref } from "vue";
import ChatsUnarchived from "@/components/Chats/Unarchived.vue";
import ChatsArchived from "@/components/Chats/Archived.vue";

export default {
    components: {
        ChatsUnarchived,
        ChatsArchived,
    },
    setup() {
        const sharedState = useState("active-component", () => {
            return "ChatsUnarchived";
        });

        return {
            sharedState,
        };
    },
};
</script>
