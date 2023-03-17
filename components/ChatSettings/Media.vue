<template>
    <section class="relative">
        <h3
            class="sticky top-0 bg-neutral-800 z-30 text-xl dark:text-white font-medium p-4"
        >
            Media
        </h3>
        <div class="px-4 pb-4">
            <div class="grid grid-cols-3 gap-3">
                <div
                    v-for="({ id, image }, index) in imageState"
                    :key="index"
                    class="relative image h-[5.5rem]"
                >
                    <input
                        type="checkbox"
                        :name="id"
                        :value="id"
                        :id="id"
                        class="check cursor-pointer absolute top-0.5 z-10 h-5 w-5 right-0.5 focus:outline-none focus:outline-offset-0 focus:ring-transparent focus:ring-0 focus:ring-offset-0 bg-neutral-900 border-neutral-700 border-2 checked:text-green-700 checked:block peer"
                        :class="{
                            hidden: !imageState[index].checkBoxVisible,
                        }"
                        :checked="imageState[index].selected"
                        @change="selectImage(index)"
                        v-model="selected"
                    />

                    <img
                        :src="image"
                        alt="Image not found"
                        class="object-cover brightness-90 hover:brightness-100 w-full z-20 rounded-md peer-checked:border-2 peer-checked:border-green-700 peer-checked:brightness-100"
                    />
                </div>
            </div>
        </div>
        <transition name="slide-left" mode="in-out">
            <div
                class="sticky bottom-0 w-full bg-neutral-900/60 z-30 backdrop-blur-xl flex"
                v-if="showActions"
            >
                <button
                    class="flex items-center gap-2 dark:text-white text-xs px-2 py-2.5 hover:bg-neutral-400 dark:hover:bg-neutral-700/90 rounded-md"
                >
                    <Icon name="fluent:delete-24-regular" class="h-5 w-5" />
                    <span>Delete</span>
                </button>
                <button
                    class="flex items-center gap-2 dark:text-white text-xs px-2 py-2.5 hover:bg-neutral-400 dark:hover:bg-neutral-700/90 rounded-md"
                >
                    <Icon name="akar-icons:arrow-forward" class="h-5 w-5" />
                    <span>Forward</span>
                </button>
                <button
                    v-if="!allImagesSelected"
                    @click="selectAll"
                    class="flex items-center gap-2 dark:text-white text-xs px-2 py-2.5 hover:bg-neutral-400 dark:hover:bg-neutral-700/90 rounded-md ml-auto"
                >
                    <Icon name="fluent-mdl2:select-all" class="h-5 w-5" />
                    <!-- <Icon name="fluent-mdl2:clear-selection" class="h-5 w-5" /> -->
                    <span> Select all</span>
                </button>
                <button
                    v-else
                    @click="selectAll"
                    class="flex items-center gap-2 dark:text-white text-xs px-2 py-2.5 hover:bg-neutral-400 dark:hover:bg-neutral-700/90 rounded-md ml-auto"
                >
                    <Icon name="fluent-mdl2:clear-selection" class="h-5 w-5" />
                    <span>Clear selection</span>
                </button>
            </div>
        </transition>
    </section>
</template>

<script setup>
const showActions = ref(false);
const allImagesSelected = ref(false);
const selected = ref([]);
const media = ref([
    {
        id: "21er2",
        image: "https://picsum.photos/100",
    },
    {
        id: "21fr2",
        image: "https://picsum.photos/100",
    },
    {
        id: "21gr2",
        image: "https://picsum.photos/100",
    },
    {
        id: "21er3",
        image: "https://picsum.photos/100",
    },
    {
        id: "21er5",
        image: "https://picsum.photos/100",
    },
    {
        id: "21ee2",
        image: "https://picsum.photos/100",
    },
    {
        id: "21ew2",
        image: "https://picsum.photos/100",
    },
    {
        id: "21wr2",
        image: "https://picsum.photos/100",
    },
    {
        id: "25er2",
        image: "https://picsum.photos/100",
    },
    {
        id: "21er9",
        image: "https://picsum.photos/100",
    },
]);

// computed property not updating
// const imageState = computed(() => {
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

    if (
        imageState.value.some((image) => image.selected) ||
        !imageState.value.some((image) => image.selected)
    ) {
        imageState.value.map(
            (item) => (item.checkBoxVisible = !item.checkBoxVisible)
        );
        showActions.value = !showActions.value;
    }
};

const selectAll = () => {
    if (selected.value.length === imageState.value.length) {
        selected.value = [];
        allImagesSelected.value = false;
        showActions.value = false;
        imageState.value = imageState.value.map((image) => {
            return {
                ...image,
                selected: false,
                checkBoxVisible: false,
            };
        });
    } else {
        selected.value = imageState.value.map((image) => image.id);
        allImagesSelected.value = true;
        imageState.value = imageState.value.map((image) => {
            return {
                ...image,
                selected: true,
                checkBoxVisible: true,
            };
        });
    }
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
