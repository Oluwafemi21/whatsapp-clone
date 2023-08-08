<template>
    <section
        class="w-full h-screen grid place-content-center justify-items-center"
    >
        <section
            class="flex flex-col items-center gap-5 bg-white shadow-lg p-4 rounded-lg border max-w-sm w-screen"
        >
            <h1 class="text-2xl font-medium">Login To Whatsapp</h1>
            <p class="">To get started, login with your google account.</p>
            <button
                @click="login"
                class="bg-green-700 text-lg grid h-10 text-center place-content-center text-white w-full rounded-sm font-medium hover:bg-green-800"
            >
                <p v-if="!loggingIn">Login</p>
                <Icon
                    v-else
                    name="svg-spinners:270-ring-with-bg"
                    class="w-6 h-6"
                />
            </button>

            <p class="border-t border-gray-400 w-full pt-3 text-center text-sm">
                Don't have an account?
                <NuxtLink to="/auth/signup" class="underline text-green-400"
                    >Create one here.</NuxtLink
                >
            </p>
        </section>
    </section>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const loggingIn = ref(false);
const supabase = useSupabaseClient();
// get the url from the runtimeConfig in the nuxt.config.ts file
const url = config.public.frontendUrl;

async function login() {
    loggingIn.value = true;
    await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            redirectTo: `${url}/auth/confirm`,
        },
    });
}
</script>

<style></style>
