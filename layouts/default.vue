<template>
    <div class="h-screen flex flex-col w-full overflow-hidden">
        <TheHeader />
        <Sidebar />
        <main
            class="grid grid-cols-10 auto-cols-min bg-black/90 flex-1 ml-12 mt-10"
        >
            <ChatsActive />
            <!-- <KeepAlive>
            <component :is="currentRoute"></component>
            </KeepAlive> -->
            <section
                class="chat w-full bg-transparent col-span-7 border border-black/25"
            >
                <NuxtPage />
            </section>
        </main>
    </div>
</template>

<script setup>
// const yolo = resolveComponent('Yolo')
// const bob = resolveComponent('Bob')
</script>

<style scoped></style>
