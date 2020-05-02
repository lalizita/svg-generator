<template>
  <svg
    class="transition-colors duration-300 in-out 004-sphinx-icon"
    :width="width"
    :height="height"
    viewBox="0 0 512 512"
    :aria-labelledby="004-sphinx"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- eslint-disable -->
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m364.5 466c0-21.263 17.237-38.5 38.5-38.5h-60c-21.263 0-38.5 17.237-38.5 38.5 0 21.263 17.237 38.5 38.5 38.5h60c-21.263 0-38.5-17.237-38.5-38.5z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: '004-sphinx',
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
