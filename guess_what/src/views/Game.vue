<template>
  <div class="bg-gray-800 w-screen h-screen">
    <TopNav />
    <div class="h-1/2">
      <Board />
      Your latest guess was..... {{ guess }}
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
      guess: "",
    };
  },
  methods: {
    handleGuess(letter) {
      this.guess = letter;
    },
  },
};
</script>
