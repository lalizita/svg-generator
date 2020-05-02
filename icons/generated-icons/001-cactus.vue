<template>
  <svg
    class="transition-colors duration-300 in-out 001-cactus-icon"
    :width="width"
    :height="height"
    viewBox="0 0 512 512"
    :aria-labelledby="001-cactus"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- eslint-disable -->
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m301 504.5h-90v-414.574c0-23.431 18.995-42.426 42.426-42.426h5.147c23.432 0 42.427 18.995 42.427 42.426z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: '001-cactus',
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
