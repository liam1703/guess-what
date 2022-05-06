<template>
  <div class="bg-gray-800 w-screen h-screen">
    <TopNav />
    <div class="h-1/2">
      <Board />
    </div>

    <Keyboard />
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
};
</script>
