<template>
  <svg
    class="transition-colors duration-300 in-out 034-sword-icon"
    :width="width"
    :height="height"
    viewBox="0 0 511.989 511.989"
    :aria-labelledby="034-sword"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- eslint-disable -->
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m167.248 318.532-10.595-10.595c-31.208-31.208-81.807-31.208-113.015 0-31.208 31.208-31.208 81.807 0 113.015l77.698 77.698c7.802 7.802 20.452 7.802 28.254 0s7.802-20.452 0-28.254l-77.698-77.698c-15.604-15.604-15.604-40.903 0-56.508 15.604-15.604 40.903-15.604 56.508 0l10.595 10.595c-7.802-7.802-7.802-20.452 0-28.254 7.802-7.801 20.451-7.801 28.253.001z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: '034-sword',
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
