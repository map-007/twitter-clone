<template>
  <nuxt-link
    to="#"
    class="flex items-center text-black p-2 px-3 w-min rounded-full hover:bg-gray-200 dark:hover:bg-dim-200 dark:text-white"
    :class="defaultTransition"
  >
    <div class="w-6 h-6 text-dark">
      <slot name="icon" />
    </div>
    <div class="hidden xl:block ml-4 text-sm" :class="textClasses">
      <slot name="name" />
    </div>
  </nuxt-link>
</template>
<script setup>
const { defaultTransition } = useTailwindConfig();

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});

const textClasses = computed(() =>
  props.active ? "font-semibold" : "font-normal"
);
</script>