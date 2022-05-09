<template>
  <div class="bg-gray-800 w-screen h-screen">
    <TopNav />
    <div class="h-1/2">
      <Board :guesses="guesses" />
    </div>
    <Keyboard @letterGuessed="handleGuess" />
  </div>
</template>

<script>
import TopNav from "../components/TopNav.vue";
import Board from "../components/Board.vue";
import Keyboard from "../components/Keyboard.vue";
export default {
  name: "Game",
  components: {
    TopNav,
    Board,
    Keyboard,
  },
  data() {
    return {
      guesses: {
        first: [],
        second: [],
        third: [],
        fourth: [],
        fifth: [],
        sixth: [],
      },
      LetterGuess: "",
      numberOfWordsGuessed: 0,
    };
  },
  methods: {
    handleGuess(letter) {
      if (letter == "DEL") {
        this.guesses.first.pop();
      } else {
        if (this.guesses.first.length > 4) {
          return;
        }
        this.guesses.first.push(letter);
      }
    },
  },
};
</script>
