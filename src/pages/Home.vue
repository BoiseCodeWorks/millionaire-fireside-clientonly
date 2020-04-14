<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <question-component />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import QuestionComponent from "@/components/QuestionComponent.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
    QuestionComponent
  },
  mounted() {
    this.$store.dispatch("getQuestions");
  }
};
</script>
