<template>
  <svg
    class="transition-colors duration-300 in-out 025-scorpion-icon"
    :width="width"
    :height="height"
    viewBox="0 0 512 512"
    :aria-labelledby="025-scorpion"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- eslint-disable -->
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m277.144 56.512c0 16.569 13.431 30 30 30 4.363 0 8.503-.939 12.243-2.613-4.685 10.463-15.181 17.757-27.387 17.757-16.569 0-30-13.431-30-30 0-12.206 7.294-22.702 17.757-27.387-1.675 3.74-2.613 7.88-2.613 12.243z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: '025-scorpion',
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
