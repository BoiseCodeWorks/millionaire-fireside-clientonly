<template>
  <div class="QuestionComponent col-4">
    <div class="card text-center">
      <div class="card-header">{{questionProp.Time}} Seconds</div>
      <div class="card-body">
        <h5 class="card-title">{{questionProp.Points}} Points</h5>
        <p class="card-text">{{questionProp.Description}}</p>
        <button class="btn btn-primary">Option1</button>
        <button class="btn btn-secondary">Option2</button>
        <button class="btn btn-info">Option3</button>
        <button class="btn btn-success">Option4</button>
      </div>
      <div class="card-footer text-muted">2 days ago</div>
    </div>
  </div>
</template>


<script>
export default {
  name: "QuestionComponent",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
  props: ["questionProp"]
};
</script>


<style scoped>
</style>