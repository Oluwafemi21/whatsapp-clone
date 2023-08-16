<template>
  <div class="h-screen flex flex-col w-full overflow-hidden">
    <TheHeader />
    <BaseSidebar />
    <main
      class="grid grid-cols-10 bg-gray-100 dark:bg-black/90 flex-1 ml-12 mt-10"
    >
      <component
        :is="
          $route.path.includes('chat')
            ? chat
            : $route.path.includes('calls')
            ? call
            : status
        "
        v-if="$route.path !== ''"
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
const chat = resolveComponent("ChatsActive");
const call = resolveComponent("CallsAllCalls");
const status = resolveComponent("StatusAll");
</script>
