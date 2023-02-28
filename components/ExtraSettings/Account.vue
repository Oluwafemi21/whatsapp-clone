<template>
    <section
        class="flex flex-col gap-4 overflow-y-scroll h-full p-4 scroll-p-0"
    >
        <h3 class="text-xl text-white font-medium">Account</h3>
        <div>
            <h4 class="text-white text-lg">Blocked contacts</h4>
            <div class="flex items-center mt-2 gap-3 max-w-[185px]">
                <Icon
                    name="system-uicons:phone-portrait"
                    class="h-8 w-8 text-white"
                />
                <p class="text-sm italic text-white">
                    Managed on your phone 14 blocked contacts
                </p>
            </div>
        </div>
        <div>
            <h4 class="text-white text-lg">Privacy</h4>
            <div class="flex items-center justify-between mt-3">
                <p class="text-sm text-neutral-400">Last seen and online</p>
                <p class="text-sm text-neutral-400">Nobody</p>
            </div>
            <p class="text-xs my-3 text-neutral-400">
                If you don't share your Last Seen, you won't be able to see
                other people's Last Seen.
            </p>
            <div class="flex flex-col gap-4">
                <div class="flex items-center justify-between">
                    <p class="text-sm text-neutral-400">Profile photo</p>
                    <p class="text-sm text-neutral-400">Everyone</p>
                </div>
                <div class="flex items-center justify-between">
                    <p class="text-sm text-neutral-400">About</p>
                    <p class="text-sm text-neutral-400">My contacts</p>
                </div>
                <div class="flex items-center justify-between">
                    <p class="text-sm text-neutral-400">Add to groups</p>
                    <p class="text-sm text-neutral-400">My contacts</p>
                </div>
                <div class="flex items-center justify-between">
                    <p class="text-sm text-neutral-400">Read receipts</p>
                    <p class="text-sm text-neutral-400">Off</p>
                </div>
            </div>
            <p class="text-xs mt-1 text-neutral-400">
                Read receipts are always sent for group chats
            </p>
        </div>

        <div class="border-t flex flex-col gap-1.5 border-neutral-600 pt-4">
            <h4 class="text-white text-lg">Security</h4>
            <p class="text-sm text-neutral-500">
                Messagess and calls in end-to-end encrypted chats stay between
                you and the people you choose. Not even Whatsapp can read or
                listen to them.
                <span
                    class="text-emerald-500 underline cursor-pointer hover:text-white"
                    >Learn More</span
                >
            </p>
            <div class="flex items-center justify-between gap-4">
                <p class="text-neutral-500 text-sm">
                    Show security notifications on this computer
                </p>
                <div class="flex items-center gap-4">
                    <ToggleButton v-model:checked="showSecurityNotifications" />
                </div>
            </div>
            <p class="text-xs text-neutral-500">
                Get notified when your security code changes for a contact's
                phone. If you have multiple devices, this setting must be
                enabled on each device where you want to get notifications.
                <span
                    class="text-emerald-500 underline cursor-pointer hover:text-white"
                    >Learn More</span
                >
            </p>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";

const showSecurityNotifications = ref(false);
</script>
