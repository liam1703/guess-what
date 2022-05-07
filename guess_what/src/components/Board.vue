<template>
  <div class="mt-20">
    <div
      class="flex justify-center w-full mb-4"
      v-for="(item, index) in finalGuesses"
      :key="index"
    >
      <div
        class="border-2 border-green-300 p-2 w-16 h-16 mr-2"
        v-for="(letters, id) in currentGuess"
        :key="id"
      >
        {{ finalGuesses[index][id] }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Board",
  data() {
    return {
      // finalGuesses: ["", "", "", "", "", ""],
      // currentGuess: [[], [], [], [], []],
    };
  },
};
</script>
