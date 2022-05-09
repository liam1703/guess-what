<template>
  <div class="mt-20">
    <div
      class="flex justify-center w-full mb-4"
      v-for="(item, index) in finalGuesses"
      :key="index"
    >
      <div
        class="border-2 border-green-300 w-16 h-16 mr-2 text-center flex justify-center items-center text-white text-3xl"
        v-for="(letters, id) in currentGuess"
        :key="id"
        :class="getAnswerClass(index, id)"
      >
        {{ getCorrectLetter(index, id) }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Board",
  props: ["guesses", "results"],
  data() {
    return {
      finalGuesses: ["", "", "", "", "", ""],
      currentGuess: [[], [], [], [], []],
    };
  },
  methods: {
    getCorrectLetter(row, ind) {
      let pre = "";
      switch (row) {
        case 0:
          pre = "first";
          break;
        case 1:
          pre = "second";
          break;
        case 2:
          pre = "third";
          break;
        case 3:
          pre = "fourth";
          break;
        case 4:
          pre = "fifth";
          break;
        case 5:
          pre = "sixth";
          break;
        default:
          pre = null;
      }
      return this.guesses[pre][ind];
    },
    getCorrectResult(row, ind) {
      let pre = "";
      switch (row) {
        case 0:
          pre = "first";
          break;
        case 1:
          pre = "second";
          break;
        case 2:
          pre = "third";
          break;
        case 3:
          pre = "fourth";
          break;
        case 4:
          pre = "fifth";
          break;
        case 5:
          pre = "sixth";
          break;
        default:
          pre = null;
      }
      return this.results[pre][ind];
    },

    getAnswerClass(row, ind) {
      const num = this.getCorrectResult(row, ind);
      if (num == 2) {
        return `bg-green-600`;
      } else if (num == 1) {
        return `bg-yellow-600`;
      } else if (num == 0) {
        return `bg-gray-600`;
      }
    },
  },
};
</script>
