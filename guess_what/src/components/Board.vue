<template>
  <div class="mt-20">
    <div
      class="flex justify-center w-full mb-4"
      v-for="index in 6"
      :key="index"
    >
      <div class="border-2 border-green-300 p-2 w-16 h-16 mr-2"></div>
      <div class="border-2 border-green-300 p-2 w-16 h-16 mr-2"></div>
      <div class="border-2 border-green-300 p-2 w-16 h-16 mr-2"></div>
      <div class="border-2 border-green-300 p-2 w-16 h-16 mr-2"></div>
      <div class="border-2 border-green-300 p-2 w-16 h-16 mr-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Board",
};
</script>
