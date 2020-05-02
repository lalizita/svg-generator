<template>
  <svg
    class="transition-colors duration-300 in-out 016-thermometer-icon"
    :width="width"
    :height="height"
    viewBox="0 0 512 512"
    :aria-labelledby="016-thermometer"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- eslint-disable -->
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m198 424c-60.654 0-110-49.346-110-110 0-19.953 5.341-38.681 14.667-54.833-32.946 19.024-55.167 54.632-55.167 95.333 0 60.654 49.346 110 110 110 40.701 0 76.309-22.221 95.333-55.167-16.152 9.326-34.88 14.667-54.833 14.667z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: '016-thermometer',
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
