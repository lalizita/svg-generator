<template>
  <svg
    class="transition-colors duration-300 in-out 030-mine-icon"
    :width="width"
    :height="height"
    viewBox="0 0 512 512"
    :aria-labelledby="030-mine"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- eslint-disable -->
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m336 195h-160c-11.046 0-20-8.954-20-20 0-11.046 8.954-20 20-20h160c11.046 0 20 8.954 20 20 0 11.046-8.954 20-20 20z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: '030-mine',
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
