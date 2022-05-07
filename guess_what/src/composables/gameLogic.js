import { ref } from "vue";

const gameGuess = ref([[], [], [], [], [], []]);
const guessWords = ref(0);

export default function playGame() {
  function guessLetter(letter) {
    gameGuess[guessWords].push(letter);
  }
  return {
    gameGuess,
    guessLetter,
  };
}
