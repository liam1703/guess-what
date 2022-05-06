<template>
  <div class="flex">
    <div class="p-4 bg-green-300 mr-2">a</div>
    <div class="p-4 bg-green-300 mr-2"></div>
    <div class="p-4 bg-green-300 mr-2">a</div>
    <div class="p-4 bg-green-300 mr-2">a</div>
    <div class="p-4 bg-green-300 mr-2">a</div>
    <div class="p-4 bg-green-300 mr-2">a</div>
    <div class="p-4 bg-green-300 mr-2">a</div>
    <div class="p-4 bg-green-300 mr-2">a</div>
    <div class="p-4 bg-green-300 mr-2">a</div>
    <div class="p-4 bg-green-300 mr-2">a</div>
  </div>
</template>
<script>
export default {
  name: "Keyboard",
  data() {
    return {
      firstRowKeys: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
      secondRowKeys: ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
      thirdRowKeys: ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DELETE"],
    };
  },
};
</script>
