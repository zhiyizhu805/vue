const app = Vue.createApp({
  //always named data as vue will look for it
  data() {
    //always returns an object
    return {
      courseGoal: "Finish the course and learn Vue!",
      courseGoalHTML: "<h2>Finish the course and learn Vue!</h2>",
      courseGoalA: "Finish the course and learn Vue!",
      courseGoalB: "Master Vue and build amazing apps!",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    // outputGoal: function() {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        // this is the object returned by data()
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  }
});

app.mount("#user-goal");
