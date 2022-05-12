<template>
  <div class="bg-gray-800 w-screen h-screen">
    <TopNav />
    <CompletedModal v-show="gameOver" />
    <div class="h-1/2">
      <Board :guesses="guesses" :results="results" />
    </div>
    <Keyboard @letterGuessed="handleGuess" :guessedLetters="guessedLetters" />
  </div>
</template>

<script>
import TopNav from "../components/TopNav.vue";
import Board from "../components/Board.vue";
import Keyboard from "../components/Keyboard.vue";
import getRandomWord from "../assets/words/fiveLetters";
import CompletedModal from "../components/CompletedModal.vue";
export default {
  name: "Game",
  components: {
    TopNav,
    Board,
    Keyboard,
    CompletedModal,
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
      guessedLetters: [],
      gameOver: false,
      gameWon: false,
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
            this.results[this.getGuessKey] = this.compareGuess(
              this.guesses[this.getGuessKey]
            );
            this.greyOutLetters();
            this.isCorrect(this.results[this.getGuessKey]);
            this.numberOfWordsGuessed++;
            if (this.numberOfWordsGuessed > 5) {
              this.gameOver = false;
            }
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
    greyOutLetters() {
      for (let i = 0; i < this.guesses[this.getGuessKey].length; i++) {
        this.guessedLetters.push(this.guesses[this.getGuessKey][i]);
      }
    },
    isCorrect(resultArr) {
      let correct = true;
      for (let i = 0; i < resultArr.length; i++) {
        if (resultArr[i] != 2) {
          correct = false;
        }
      }
      if (correct) {
        this.gameWon = true;
        this.gameOver = true;
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
