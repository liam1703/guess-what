import { ref } from "vue";

const gameGuess = ref([]);
// const guessWords = ref(0);

export default function playGame() {
  const currentGuess = [];
  function guessLetter(letter) {
    currentGuess.push(letter);
    gameGuess.value = currentGuess;
    console.log(gameGuess);
  }
  return {
    gameGuess,
    guessLetter,
  };
}
