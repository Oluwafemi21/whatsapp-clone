<template>
    <section
        class="w-full h-screen grid place-content-center justify-items-center"
    >
        <div
            class="flex flex-col items-center gap-5 bg-white shadow-lg p-4 rounded-lg border max-w-sm w-screen"
        >
            <h1 class="text-2xl font-medium">SignUp To Whatsapp</h1>
            <p class="">To get started, signup with your google account.</p>
            <button
                @click="login"
                class="bg-green-600 text-lg grid h-10 text-center place-content-center text-white w-full rounded font-medium hover:bg-green-500"
            >
                <span v-if="!loggingIn">Create an account</span>
                <Icon
                    v-else
                    name="svg-spinners:270-ring-with-bg"
                    class="w-6 h-6"
                />
            </button>

            <p class="border-t border-gray-400 w-full pt-3 text-center text-sm">
                Already have an account?
                <NuxtLink to="/auth/login" class="underline text-green-400"
                    >Login.</NuxtLink
                >
            </p>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const loggingIn = ref(false);
const router = useRouter();
const login = () => {
    loggingIn.value = !loggingIn.value;
    setTimeout(() => {
        router.push("/chat");
    }, 1000);
};
</script>
