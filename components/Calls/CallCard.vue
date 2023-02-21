<template>
    <NuxtLink
        :to="{
            name: 'calls-user-id',
            params: {
                user: call.name,
                id: call.id,
            },
        }"
        class="hover:bg-neutral-800 flex space-x-3 w-full rounded-md py-2.5 px-3"
    >
        <div
            class="bg-neutral-700 h-12 w-12 grid place-content-center rounded-full flex-shrink-0"
        >
            <Icon
                name="mingcute:user-3-fill"
                class="w-6 h-6 text-neutral-500"
            />
        </div>
        <div class="w-full flex flex-col gap-2">
            <div class="flex items-center justify-between text-white">
                <p class="font-medium text-xs">{{ call.name }}</p>
                <span class="text-xs text-gray-500">{{ call.time }}</span>
            </div>
            <div class="flex items-center gap-2">
                <Icon
                    v-if="call.status === 'missed'"
                    class="text-red-400"
                    :name="
                        call.type === 'phone'
                            ? 'uil:missed-call'
                            : 'material-symbols:missed-video-call-outline'
                    "
                />
                <Icon
                    v-else
                    class="text-white"
                    :name="
                        call.type === 'phone'
                            ? 'ph:phone-light'
                            : 'majesticons:video-camera-line'
                    "
                />
                <span
                    class="text-xs capitalize"
                    :class="{
                        'text-red-400': call.status === 'missed',
                        'text-white': call.status !== 'missed',
                    }"
                    >{{ call.status }}
                    {{ call.callCount > 0 ? `(${call.callCount})` : null }}
                </span>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup>
defineProps({
    call: {
        type: Object,
        required: true,
        default: () => ({}),
    },
});
</script>

<style></style>
