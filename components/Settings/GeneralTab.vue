<template>
  <section class="flex flex-col gap-4 p-4">
    <h3 class="text-xl dark:text-white font-medium">General</h3>
    <div>
      <h4 class="dark:text-white text-lg">Login</h4>
      <div class="flex items-center justify-between mt-1">
        <p class="text-neutral-500 text-sm">Start Whatsapp at login</p>
        <div class="flex items-center gap-4">
          <ToggleButton v-model:checked="showWhatsappAtLogin" />
        </div>
      </div>
    </div>
    <div>
      <h4 class="dark:text-white text-lg">Theme</h4>
      <p class="text-neutral-500 text-sm mt-1">App color theme</p>
      <select
        id="theme"
        v-model="$colorMode.preference"
        name="theme"
        class="dark:bg-neutral-700/90 dark:text-white text-sm shadow border-neutral-300 dark:border-none rounded-md mt-1 w-2/3"
      >
        <option value="system">System default</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
    <div>
      <h4 class="dark:text-white text-lg">Typing</h4>
      <p class="text-sm text-neutral-500">
        Change typing settings for
        <span class="font-bold">autocorrect</span> and
        <span class="font-bold">misspelt higlight</span> from
        <span
          class="text-emerald-6s00 underline cursor-pointer hover:text-white"
          >Windows Settings</span
        >
      </p>
    </div>

    <div class="border-t border-neutral-600 pt-4">
      <button
        class="py-1.5 px-2.5 text-sm rounded dark:text-white dark:bg-neutral-700/90 border dark:border-neutral-700 border-neutral-300 shadow-sm"
        @click="logout"
      >
        Log out
      </button>
      <p class="text-neutral-500 mt-3 text-sm">
        Your chat history will be cleared when you log out
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();
const router = useRouter();

const showWhatsappAtLogin = ref(false);

async function logout() {
  await supabase.auth.signOut().then(() => {
    router.push("/auth/login");
  });
}
</script>
