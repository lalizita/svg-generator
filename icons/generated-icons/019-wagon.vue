<template>
  <svg
    class="transition-colors duration-300 in-out 019-wagon-icon"
    :width="width"
    :height="height"
    viewBox="0 0 512 512"
    :aria-labelledby="019-wagon"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- eslint-disable -->
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m384.5 484.5c0-11.046 8.954-20 20-20-33.084 0-60-26.916-60-60s26.916-60 60-60c-11.046 0-20-8.954-20-20s8.954-20 20-20c-55.228 0-100 44.771-100 100s44.772 100 100 100c-11.046 0-20-8.954-20-20z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: '019-wagon',
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
