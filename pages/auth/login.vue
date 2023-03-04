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
                class="bg-green-600 text-lg grid h-10 text-center place-content-center text-white w-full rounded font-medium hover:bg-green-500"
            >
                <span v-if="!loggingIn">Login</span>
                <Icon
                    v-else
                    name="svg-spinners:270-ring-with-bg"
                    class="w-6 h-6"
                />
            </button>
        </section>
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

<style></style>
