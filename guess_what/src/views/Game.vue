<template>
  <div class="bg-gray-800 w-screen h-screen">
    <TopNav />
    <div class="h-1/2"><Board :guesses="guesses" :results="results" /></div>
    <Keyboard @letterGuessed="handleGuess" />
  </div>
</template>

<script>
import TopNav from "../components/TopNav.vue";
import Board from "../components/Board.vue";
import Keyboard from "../components/Keyboard.vue";
import getRandomWord from "../assets/words/fiveLetters";
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
      results: {
        first: [],
        second: [],
        third: [],
        fourth: [],
        fifth: [],
        sixth: [],
      },
      LetterGuess: "",
      numberOfWordsGuessed: 0,
      currentAnswer: "",
    };
  },
  created() {
    this.currentAnswer = getRandomWord().toLocaleUpperCase();
    console.log(this.currentAnswer);
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
            console.log(this.compareGuess(this.guesses[this.getGuessKey]));
            this.results[this.getGuessKey] = this.compareGuess(
              this.guesses[this.getGuessKey]
            );
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
    compareGuess(enteredGuess) {
      // 0 = not matches 1 = match wrong place 2 = match correct place
      const resultArray = [];
      for (let i = 0; i < enteredGuess.length; i++) {
        if (enteredGuess[i] == this.currentAnswer[i]) {
          resultArray.push(2);
        } else if (this.currentAnswer.includes(enteredGuess[i])) {
          resultArray.push(1);
        } else {
          resultArray.push(0);
        }
      }
      return resultArray;
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
