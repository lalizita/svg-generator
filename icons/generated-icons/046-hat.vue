<template>
  <svg
    class="transition-colors duration-300 in-out 046-hat-icon"
    :width="width"
    :height="height"
    viewBox="0 0 512 512"
    :aria-labelledby="046-hat"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- eslint-disable -->
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m286 325.891c-41.421 0-75-33.579-75-75 0-12.996 3.308-25.218 9.125-35.875-23.31 12.721-39.125 37.45-39.125 65.875 0 41.421 33.579 75 75 75 28.425 0 53.154-15.815 65.876-39.125-10.658 5.817-22.88 9.125-35.876 9.125z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: '046-hat',
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
