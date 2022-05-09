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
      // this conditional could deffo be simpler
      if (letter == "DEL") {
        this.guesses[this.getGuessKey].pop();
      } else {
        if (this.guesses[this.getGuessKey].length > 4) {
          if (letter == "ENTER") {
            console.log("handle guess");
            this.numberOfWordsGuessed++;
          } else {
            return;
          }
        }
        if (letter == "ENTER") {
          return;
        }
        this.guesses[this.getGuessKey].push(letter);
      }
    },
  },
  computed: {
    getGuessKey() {
      switch (this.numberOfWordsGuessed) {
        case 0:
          return "first";
        case 1:
          return "second";
        case 2:
          return "third";
        case 3:
          return "fourth";
        case 4:
          return "fifth";
        case 5:
          return "sixth";
        default:
          return "err";
      }
    },
  },
};
</script>
