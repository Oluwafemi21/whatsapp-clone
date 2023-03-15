<template>
    <section class="p-4">
        <h3 class="text-xl dark:text-white font-medium">Media</h3>
        <div class="grid grid-cols-3 gap-3 mt-6">
            <div
                v-for="({ image }, index) in selectImages"
                :key="index"
                class="relative image h-[5.5rem]"
            >
                <input
                    type="checkbox"
                    :name="`Image ${i + 1}`"
                    :id="`Image ${i + 1}`"
                    class="absolute top-0.5 z-10 h-5 w-5 right-0.5 focus:outline-none focus:outline-offset-0 focus:ring-transparent focus:ring-0 focus:ring-offset-0 bg-black border-neutral-700 border-2 peer"
                    :class="{
                        'checked:bg-green-700': selectImages[index].selected,
                    }"
                    @change="selectImage(index)"
                />
                <img
                    :src="image"
                    alt=""
                    class="object-cover hover:opacity-80 w-full z-20 rounded-md peer-checked:border-2 peer-checked:border-green-700"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
const media = [
    {
        image: "https://picsum.photos/100",
    },
    {
        image: "https://picsum.photos/100",
    },
    {
        image: "https://picsum.photos/100",
    },
    {
        image: "https://picsum.photos/88",
    },
];

const selectImages = computed(() => {
    return media.map((image) => {
        return {
            ...image,
            selected: false,
        };
    });
});

const selectImage = (index) => {
    selectImages.value[index].selected = !selectImages.value[index].selected;
};
</script>

<style scoped>
.check {
    display: none;
}
.image:hover .check {
    display: block;
    animation: slide-in 200ms ease-in-out forwards;
}

.image .check:checked {
    display: block;
    animation: none;
}

@keyframes slide-in {
    0% {
        transform: translateX(0.25rem);
        opacity: 0;
        visibility: hidden;
    }
    75% {
        visibility: visible;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}
</style>
