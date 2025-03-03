<template>
    <div class="relative" @click="handleClickOutside">
        <div v-if="!selective" class="w-80 h-12 border-2 border-transparent rounded-lg shadow-lg cursor-pointer" :style="{ backgroundColor: localColor }" @click="togglePalette"></div>

        <div v-else class="flex flex-col gap-5">
            <label class="text-[#9090a3] text-lg">Choose a color:</label>
            <div class="flex gap-4">
                <div
                    v-for="color in selectiveColors"
                    :key="color"
                    class="w-8 h-8 rounded-full cursor-pointer transition-transform hover:scale-110"
                    :style="{ backgroundColor: color, border: color === localColor ? '2px solid white' : 'none' }"
                    @click="selectColor(color)"
                ></div>
            </div>
        </div>

        <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
        >
            <div v-if="showPalette && !selective" class="absolute z-10 mt-2 p-2 bg-[#172135] rounded-lg shadow-lg">
                <label>click here</label>
                <input type="color" v-model="localColor" @input="updateColor" class="w-full h-24 border-none" />
            </div>
        </transition>
    </div>
</template>

<script setup>
import { defineEmits, defineProps, onBeforeUnmount, onMounted, ref, watch } from 'vue';

const props = defineProps({
    modelValue: {
        type: String,
        default: '#FF5733'
    },
    selective: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['update:modelValue']);

const localColor = ref(props.modelValue);
const showPalette = ref(false);
const selectiveColors = ['#5865F2', '#4F545C', '#57F287', '#ED4245'];

watch(
    () => props.modelValue,
    (newValue) => {
        localColor.value = newValue;
    }
);

const updateColor = (event) => {
    localColor.value = event.target.value;
    emit('update:modelValue', localColor.value);
};

const selectColor = (color) => {
    localColor.value = color;
    emit('update:modelValue', color);
};

const togglePalette = () => {
    if (!props.selective) {
        showPalette.value = !showPalette.value;
    }
};

const handleClickOutside = (event) => {
    if (!props.selective) {
        const isClickInside = event.target.closest('.relative');
        if (!isClickInside) {
            showPalette.value = false;
        }
    }
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
input[type='color'] {
    cursor: pointer;
    border: none;
    padding: 0;
    width: 100%;
    height: 100%;
}
</style>
