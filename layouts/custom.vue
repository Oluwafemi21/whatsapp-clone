<template>
    <div class="h-screen flex flex-col w-full overflow-hidden">
        <TheHeader />
        <Sidebar />
        <main
            class="grid grid-cols-10 bg-gray-100 dark:bg-black/90 flex-1 ml-12 mt-10"
        >
            <component
                v-if="$route.path !== ''"
                :is="
                    $route.path.includes('chat')
                        ? chat
                        : $route.path.includes('calls')
                        ? call
                        : status
                "
            ></component>

            <section
                class="chat h-[calc(100vh_-_2.5rem)] w-full col-span-7 border-x border-t border-black/25"
            >
                <slot />
            </section>
        </main>
    </div>
</template>

<script setup>
import { useDark } from "@vueuse/core";

const chat = resolveComponent("ChatsActive");
const call = resolveComponent("CallsAll");
const status = resolveComponent("StatusAll");

const dark = useDark();
</script>
