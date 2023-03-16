<template>
    <section class="p-4">
        <h3 class="text-xl dark:text-white font-medium">Media</h3>
        <div class="grid grid-cols-3 gap-3 mt-6">
            <div
                v-for="({ image }, index) in imageState"
                :key="index"
                class="relative image h-[5.5rem]"
            >
                <input
                    type="checkbox"
                    :name="`Image ${index + 1}`"
                    :id="`Image ${index + 1}`"
                    class="check absolute top-0.5 z-10 h-5 w-5 right-0.5 focus:outline-none focus:outline-offset-0 focus:ring-transparent focus:ring-0 focus:ring-offset-0 bg-black border-neutral-700 border-2 checked:text-green-700 checked:block peer"
                    :class="{
                        hidden: !imageState[index].checkBoxVisible,
                    }"
                    @change="selectImage(index)"
                />

                <img
                    :src="image"
                    alt="Image not found"
                    class="object-cover hover:opacity-80 w-full z-20 rounded-md peer-checked:border-2 peer-checked:border-green-700"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
const media = ref([
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
        image: "https://picsum.photos/100",
    },
]);

// computed property not updating
// const selectImages = computed(() => {
//     return media.value.map((image) => {
//         return {
//             ...image,
//             selected: false,
//         };
//     });
// });

const imageState = useState("images", () => {
    return media.value.map((image) => {
        return {
            ...image,
            selected: false,
            checkBoxVisible: false,
        };
    });
});

const selectImage = (index) => {
    imageState.value[index].selected = !imageState.value[index].selected;

    if (imageState.value.some((image) => image.selected)) {
        imageState.value.map((item) => (item.checkBoxVisible = true));
    }

    if (!imageState.value.some((image) => image.selected)) {
        imageState.value.map((item) => (item.checkBoxVisible = false));
    }
    console.log(imageState.value);
};
</script>

<style scoped>
.image:hover .check {
    display: block;
    animation: slide-in 200ms ease-in-out forwards;
}

.image .check:checked {
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
