<template>
  <div class="flex mb-2 mt-12">
    <div
      class="p-4 bg-green-300 mr-2"
      v-for="(letter, index) in firstRowKeys"
      :key="index"
    >
      {{ letter }}
    </div>
  </div>
  <div class="flex mb-2">
    <div
      class="p-4 bg-green-300 mr-2"
      v-for="(letter, index) in secondRowKeys"
      :key="index"
    >
      {{ letter }}
    </div>
  </div>
  <div class="flex">
    <div
      class="p-4 bg-green-300 mr-2"
      v-for="(letter, index) in thirdRowKeys"
      :key="index"
    >
      {{ letter }}
    </div>
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
