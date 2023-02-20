<template>
    <div class="h-screen flex flex-col w-full overflow-hidden">
        <TheHeader />
        <Sidebar />
        <main
            class="grid grid-cols-10 auto-cols-min bg-black/90 flex-1 ml-12 mt-10"
        >
            <KeepAlive v-if="$route.path !== ''">
                <component
                    :is="
                        $route.path.includes('chat')
                            ? chat
                            : $route.path.includes('calls')
                            ? call
                            : status
                    "
                ></component>
            </KeepAlive>
            <section
                class="chat w-full bg-transparent col-span-7 border border-black/25"
            >
                <slot />
            </section>
        </main>
    </div>
</template>

<script setup>
const chat = resolveComponent("ChatsActive");
const call = resolveComponent("CallsAll");
const status = resolveComponent("StatusAll");
</script>

<style scoped></style>
