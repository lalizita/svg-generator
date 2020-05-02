<template>
  <svg
    class="transition-colors duration-300 in-out 021-camel-icon"
    :width="width"
    :height="height"
    viewBox="0 0 512 512"
    :aria-labelledby="021-camel"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- eslint-disable -->
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m404.386 66.904c-5.46 0-9.886 4.426-9.886 9.886v136.854c0 25.621 38.306 27.078 39.852 1.504.098-1.62.148-3.253.148-4.898v-122.75h-10.341c-5.46 0-9.886-4.426-9.886-9.886v-.823c-.001-5.46-4.427-9.887-9.887-9.887z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: '021-camel',
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
