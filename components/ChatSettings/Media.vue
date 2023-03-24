<template>
    <section class="relative h-full">
        <h3
            class="sticky top-0 bg-white text-black dark:bg-neutral-800 z-30 text-xl dark:text-white font-medium p-4"
        >
            Media
        </h3>
        <div class="px-4 pb-4" v-if="media.length">
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
                        class="check cursor-pointer absolute top-0.5 z-10 h-5 w-5 right-0.5 focus:outline-none focus:outline-offset-0 focus:ring-transparent focus:ring-0 focus:ring-offset-0 bg-white dark:bg-neutral-800 border-neutral-500 border-2 checked:text-emerald-700 checked:block peer"
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
                        class="object-cover brightness-70 hover:brightness-100 w-full z-20 rounded-md peer-checked:border-2 peer-checked:border-emerald-700 peer-checked:brightness-100"
                    />
                </div>
            </div>
        </div>
        <div class="grid place-content-center h-[400px]" v-else>
            <p class="text-sm font-light">No Media to display</p>
        </div>
        <transition name="slide-left" mode="in-out">
            <div
                class="sticky bottom-0 w-full bg-neutral-200/60 dark:bg-neutral-900/60 z-30 backdrop-blur-xl flex"
                v-if="showActions"
            >
                <button
                    @click="isModalVisible = true"
                    class="flex items-center gap-2 dark:text-white text-xs px-2 py-2.5 hover:bg-neutral-300 dark:hover:bg-neutral-700/90 rounded-md"
                >
                    <Icon name="fluent:delete-24-regular" class="h-5 w-5" />
                    <span>Delete</span>
                </button>
                <button
                    class="flex items-center gap-2 dark:text-white text-xs px-2 py-2.5 hover:bg-neutral-300 dark:hover:bg-neutral-700/90 rounded-md"
                >
                    <Icon name="akar-icons:arrow-forward" class="h-5 w-5" />
                    <span>Forward</span>
                </button>
                <button
                    v-if="!allImagesSelected"
                    @click="selectAll"
                    class="flex items-center gap-2 dark:text-white text-xs px-2 py-2.5 hover:bg-neutral-300 dark:hover:bg-neutral-700/90 rounded-md ml-auto"
                >
                    <Icon name="fluent-mdl2:select-all" class="h-5 w-5" />
                    <span> Select all</span>
                </button>
                <button
                    v-else
                    @click="selectAll"
                    class="flex items-center gap-2 dark:text-white text-xs px-2 py-2.5 hover:bg-neutral-300 dark:hover:bg-neutral-700/90 rounded-md ml-auto"
                >
                    <Icon name="fluent-mdl2:clear-selection" class="h-5 w-5" />
                    <span>Clear selection</span>
                </button>
            </div>
        </transition>
        <Modal v-if="isModalVisible">
            <template #header>
                <p class="text-sm text-black dark:text-white">
                    Are you sure you want to delete this
                    {{ selected.length }}
                    {{ selected.length > 1 ? "messages" : "message" }} ?
                </p>
            </template>
            <template #body>
                <div class="grid grid-cols-2 gap-3">
                    <button
                        class="px-3 py-1.5 dark:text-black text-sm bg-emerald-600 rounded min-w-[100px]"
                    >
                        Delete
                    </button>

                    <button
                        @click.stop="isModalVisible = false"
                        class="px-3 py-1.5 text-sm dark:text-white rounded bg-white border border-gray-200 text-black dark:bg-neutral-800 min-w-[100px]"
                    >
                        Cancel
                    </button>
                </div>
            </template>
        </Modal>
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
        id: "21fr9",
        image: "https://picsum.photos/100",
    },
    {
        id: "21ep9",
        image: "https://picsum.photos/100",
    },
    {
        id: "20er9",
        image: "https://picsum.photos/100",
    },
    {
        id: "21er7",
        image: "https://picsum.photos/100",
    },
]);
const isModalVisible = ref(false);

// functions
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
        showActions.value = true;
    }

    if (!imageState.value.some((image) => image.selected)) {
        imageState.value.map((item) => (item.checkBoxVisible = false));
        showActions.value = false;
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

const toggleModal = () => {
    isModalVisible.value = !isModalVisible.value;
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
