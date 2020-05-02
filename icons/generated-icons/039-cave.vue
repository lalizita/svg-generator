<template>
  <svg
    class="transition-colors duration-300 in-out 039-cave-icon"
    :width="width"
    :height="height"
    viewBox="0 0 512 512"
    :aria-labelledby="039-cave"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- eslint-disable -->
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m426.694 504.5-28.026-164.332c-1.197-7.018-6.034-12.87-12.7-15.367l-34.392-12.882c-5.206-1.95-9.365-5.978-11.48-11.119l-32.677-79.411c-3.085-7.496-10.389-12.389-18.495-12.389h-52.376c-8.483 0-16.044 5.352-18.863 13.353l-59.616 169.182c-1.825 5.178-5.697 9.378-10.71 11.616l-33.905 15.136c-5.72 2.554-9.913 7.64-11.329 13.742l-16.818 72.471z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: '039-cave',
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
