<template>
  <div class="mt-20">
    <div
      class="flex justify-center w-full mb-4"
      v-for="(item, index) in finalGuesses"
      :key="index"
    >
      <div
        class="border-2 border-green-300 p-2 w-16 h-16 mr-2"
        v-for="(letters, id) in currentGuess"
        :key="id"
      >
        {{ gameGuess[index][id] }}
      </div>
    </div>
  </div>
</template>

<script>
import playGame from "../composables/gameLogic";
export default {
  name: "Board",
  setup() {
    const { gameGuess, guessLetter } = playGame();
    return {
      gameGuess,
      guessLetter,
    };
  },
  data() {
    return {
      finalGuesses: ["", "", "", "", "", ""],
      currentGuess: [[], [], [], [], []],
    };
  },
  created() {
    console.log(this.gameGuess);
  },
};
</script>
