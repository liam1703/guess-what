<template>
  <div class="flex justify-center">
    <div class="">
      <div class="flex mb-2 mt-12">
        <div
          class="p-4 mr-2 cursor-pointer"
          v-for="(letter, index) in firstRowKeys"
          :key="index"
          @click="clickOfLetter(letter)"
          :class="keyClass(letter)"
        >
          {{ letter }}
        </div>
      </div>
      <div class="flex mb-2 ml-8">
        <div
          class="p-4 s mr-2 cursor-pointer"
          v-for="(letter, index) in secondRowKeys"
          :key="index"
          :class="keyClass(letter)"
          @click="clickOfLetter(letter)"
        >
          {{ letter }}
        </div>
      </div>
      <div class="flex">
        <div
          class="p-4 mr-2 cursor-pointer"
          v-for="(letter, index) in thirdRowKeys"
          :key="index"
          :class="keyClass(letter)"
          @click="clickOfLetter(letter)"
        >
          {{ letter }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Keyboard",
  emits: ["letterGuessed"],
  props: ["guessedLetters"],
  data() {
    return {
      firstRowKeys: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
      secondRowKeys: ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
      thirdRowKeys: ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DEL"],
      guess: "",
      validLetterKeyStroke: [
        "Q",
        "W",
        "E",
        "R",
        "T",
        "Y",
        "U",
        "I",
        "O",
        "P",
        "A",
        "S",
        "D",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "Z",
        "X",
        "C",
        "V",
        "B",
        "N",
        "M",
      ],
    };
  },
  created() {
    window.addEventListener("keydown", (e) => {
      if (this.validLetterKeyStroke.includes(e.key.toUpperCase())) {
        this.$emit("letterGuessed", e.key.toUpperCase());
      }
      if (e.key.toUpperCase() == "BACKSPACE") {
        this.$emit("letterGuessed", "DEL");
      }

      if (e.key.toUpperCase() == "ENTER") {
        this.$emit("letterGuessed", "ENTER");
      }
    });
  },
  methods: {
    clickOfLetter(letter) {
      this.$emit("letterGuessed", letter);
    },
    keyClass(key) {
      if (this.guessedLetters.includes(key)) {
        return `bg-gray-600`;
      } else {
        return `bg-gray-200`;
      }
    },
  },
};
</script>
