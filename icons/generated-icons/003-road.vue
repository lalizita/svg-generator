<template>
  <svg
    class="transition-colors duration-300 in-out 003-road-icon"
    :width="width"
    :height="height"
    viewBox="0 0 512 512"
    :aria-labelledby="003-road"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- eslint-disable -->
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m239.783 390.999-3.783 113.501h40l-3.783-113.501c-.292-8.746-7.466-15.685-16.217-15.685-8.751 0-15.925 6.939-16.217 15.685z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: '003-road',
  props: {
    iconName: {
      type: String,
      default: 'box',
    },
    width: {
      type: [Number, String],
      default: 24,
    },
    height: {
      type: [Number, String],
      default: 24,
    },
    color: {
      type: String,
      default: '#000000',
    },
  },
};
</script>
