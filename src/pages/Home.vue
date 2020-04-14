<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-1">
        <img alt="Vue logo" src="../assets/logo.png" />
      </div>
      <div class="col-1">
        <img alt="Vue logo" src="../assets/logo.png" />
      </div>
      <div class="col-10 align-self-center">
        <HelloWorld msg="elcome to Who Wants To Be A Millionaire" />
      </div>
    </div>
    <div class="row">
      <create-component />
      <question-component
        v-for="question in questions"
        :key="question._id"
        :questionProp="question"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import QuestionComponent from "@/components/QuestionComponent.vue";
import CreateComponent from "@/components/CreateComponent.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    QuestionComponent,
    CreateComponent
  },
  mounted() {
    this.$store.dispatch("getQuestions");
  },
  computed: {
    questions() {
      return this.$store.state.questions;
    }
  }
};
</script>
