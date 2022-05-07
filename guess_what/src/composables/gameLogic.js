import { ref, computed } from "vue";

const gameGuess = ref([[], [], [], [], [], []]);

export default function playGame() {
  return {
    gameGuess,
  };
}
