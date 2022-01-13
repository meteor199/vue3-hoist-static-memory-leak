<template>
  <div>
    <div>{{ i }}</div>
    <button @click="handleChange('red')">red</button>
    <div class="text-style">HelloWorld</div>
    <div class="text-style">This is a Big Component</div>
  </div>
</template>
<script>
import { defineComponent, reactive } from "vue";

class BigData {
  constructor() {
    this.arr = new Array(1000000);
    this.arr.fill("*");
  }
}

export default defineComponent({
  props: {
    i: Number,
  },
  setup() {
    return {
      test: new BigData(),
      handleChange() {
      },
    };
  },
});
</script>
