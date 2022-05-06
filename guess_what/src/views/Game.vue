<template>
  <div class="bg-gray-800 w-screen h-screen">
    <TopNav />
    <Board />
  </div>
</template>

<script>
import TopNav from "../components/TopNav.vue";
import Board from "../components/Board.vue";
export default {
  name: "Game",
  components: {
    TopNav,
    Board,
  },
};
</script>
