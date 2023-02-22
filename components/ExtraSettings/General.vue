<template>
    <section class="flex flex-col gap-4">
        <h3 class="text-xl text-white font-medium">General</h3>
        <div>
            <h4 class="text-white text-lg">Login</h4>
            <div class="flex items-center justify-between mt-1">
                <p class="text-neutral-500 text-sm">Start Whatsapp at login</p>
                <div class="flex items-center gap-2">
                    <Icon name="ic:outline-toggle-off" class="w-5 text-white" />
                    <span class="text-sm text-white">Off</span>
                </div>
            </div>
        </div>
        <div>
            <h4 class="text-white text-lg">Theme</h4>
            <p class="text-neutral-500 text-sm mt-1">App color theme</p>
            <select
                name="theme"
                id="id"
                class="bg-transparent text-white text-sm rounded-md mt-1 w-2/3"
            >
                <option value="system">System default</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
        </div>
        <div>
            <h4 class="text-white text-lg">Typing</h4>
            <p class="text-sm text-neutral-500">
                Change typing settings for
                <span class="font-bold">autocorrect</span> and
                <span class="font-bold">misspelt higlight</span> from
                <span
                    class="text-green-800 underline cursor-pointer hover:text-white"
                    >Windows Settings</span
                >
            </p>
        </div>

        <div class="border-t border-neutral-600 pt-4">
            <button
                class="py-1 px-2 text-sm rounded text-white bg-neutral-700/90 border border-neutral-600"
            >
                Log out
            </button>
            <p class="text-neutral-500 mt-1 text-sm">
                Your chat history will be cleared when you log out
            </p>
        </div>
    </section>
</template>

<script setup></script>
