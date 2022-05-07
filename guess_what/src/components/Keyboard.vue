<template>
  <div class="flex justify-center">
    <div class="">
      <div class="flex mb-2 mt-12">
        <div
          class="p-4 bg-green-300 mr-2 cursor-pointer"
          v-for="(letter, index) in firstRowKeys"
          :key="index"
          @click="clickOfLetter(letter)"
        >
          {{ letter }}
        </div>
      </div>
      <div class="flex mb-2 ml-8">
        <div
          class="p-4 bg-green-300 mr-2 cursor-pointer"
          v-for="(letter, index) in secondRowKeys"
          :key="index"
          @click="clickOfLetter(letter)"
        >
          {{ letter }}
        </div>
      </div>
      <div class="flex">
        <div
          class="p-4 bg-green-300 mr-2 cursor-pointer"
          v-for="(letter, index) in thirdRowKeys"
          :key="index"
          @click="clickOfLetter(letter)"
        >
          {{ letter }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import playGame from "../composables/gameLogic";
export default {
  name: "Keyboard",
  emits: ["letterGuessed"],
  setup() {
    const { gameGuess, guessLetter } = playGame();
    return {
      gameGuess,
      guessLetter,
    };
  },
  data() {
    return {
      firstRowKeys: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
      secondRowKeys: ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
      thirdRowKeys: ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DEL"],
      guess: "",
    };
  },
  methods: {
    clickOfLetter(letter) {
      this.guessLetter(letter);
      this.$emit("letterGuessed", letter);
    },
  },
};
</script>
