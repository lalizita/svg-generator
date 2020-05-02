<template>
  <svg
    class="transition-colors duration-300 in-out 041-amphora-icon"
    :width="width"
    :height="height"
    viewBox="0 0 512 512"
    :aria-labelledby="041-amphora"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- eslint-disable -->
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m206.401 177.099c0-27.393 22.206-49.599 49.599-49.599h-48.028c-.98 42.854-43.748 58.043-72.465 99.197h120.493c-27.393 0-49.599-22.206-49.599-49.598z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: '041-amphora',
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
