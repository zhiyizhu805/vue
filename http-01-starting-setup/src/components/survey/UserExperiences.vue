<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading...</p>
      <ul v-else-if="!isLoading && results && results.length != 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
      <!-- step(4.4) show an error message if the request fails -->
      <p v-else-if="!isLoding&&error">{{error}}</p>
      <!--  step(4.3) show a message if there are no stored experiences -->
      <p v-else-if="!isLoading && (!results || results.length === 0)">No stored experiences found.Start adding some!</p>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      // Step(3) show a loading text while the data is being fetched
      isLoading: false,
      // step(4.1) add a property to store an error message
      error: null,
    };
  },
  // Ste(2) fetch data from the server
  methods: {
    // {method: 'GET'} //the second argument is an object with a method property set to GET by default so we can omit it
    loadExperiences() {
      this.isLoading = true;
      //1. send http request
      //2. response.json() returns a promise too,so we can chain another then() block to handle the response data
      //3. we can(not mandatory) to transform the response data into an array of objects
      //4. assign the transformed data to the results property
      //5. use arrow function to make sure the this keyword is pointing to the vue instance object
      fetch(
        'https://vue-http-demo-74044-default-rtdb.firebaseio.com/surveys.json'
      )
        .then(function (response) {
          return response.json();
        })
        .then((data) => {
          //when we have the data,we can set the isLoading property to false
          this.isLoading = false;
          // console.log(data);
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }
          // pass the results to the data property
          // this keyword is not pointing to the vue instance object. so we need to use arrow function since arrow function does not have its own this keyword,instead it uses the this keyword of its closest parent scope.
          this.results = results;
        }).catch(error => {
          //step(4.2) catch any errors that might occur and set the error property
          this.isLoading = false;
          console.log(error);
          this.error = 'Fail to fetch data - please try again later.'
        });

      // fetch(
      //   'https://vue-http-demo-74044-default-rtdb.firebaseio.com/surveys.json'
      // )
      //   .then(function (response) {
      //     return response.json();
      //   })
      //   .then(function (data) {
      //     console.log(data);
      //     const results = [];
      //     for (const id in data) {
      //       results.push({
      //         id: id,
      //         name: data[id].name,
      //         rating: data[id].rating,
      //       });
      //     }
      //     // pass the results to the data property
      //     //❌ this keyword is not pointing to the vue instance object. so we need to use arrow function since arrow function does not have its own this keyword,instead it uses the this keyword of its closest parent scope.
      //     this.results = results;
      //   });
        
    },
  },
  //trigger the loadExperiences method when the component is mounted
  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
