// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "@nuxtjs/tailwindcss",
        "nuxt-icon",
        "@vueuse/nuxt",
        "@nuxtjs/supabase",
        "@pinia/nuxt",
        "@nuxtjs/color-mode",
    ],
    css: ["@/assets/css/main.css"],
    app: {
        layoutTransition: { name: "layout", mode: "out-in" },
    },
    colorMode: {
        preference: "system", // default value of $colorMode.preference
        fallback: "light",
        classSuffix: "",
    },
    runtimeConfig: {
        public: {
            frontendUrl: process.env.NUXT_ENV_VERCEL_ENV,
        },
    },
});
