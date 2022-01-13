<template>
  <button @click="click">click</button>
  <HelloWorld :i="i" :key="i" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  methods: {
    click() {
      this.i++;
    },
  },
  data() {
    return {
      i: 0,
    };
  },
};
</script>
