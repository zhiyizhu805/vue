<template>
  <section>
    <base-card>
      <h2>How was you learning experience?</h2>
      <form @submit.prevent="submitSurvey">
        <div class="form-control">
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" v-model.trim="enteredName" />
        </div>
        <h3>My learning experience was ...</h3>
        <div class="form-control">
          <input
            type="radio"
            id="rating-poor"
            value="poor"
            name="rating"
            v-model="chosenRating"
          />
          <label for="rating-poor">Poor</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            id="rating-average"
            value="average"
            name="rating"
            v-model="chosenRating"
          />
          <label for="rating-average">Average</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            id="rating-great"
            value="great"
            name="rating"
            v-model="chosenRating"
          />
          <label for="rating-great">Great</label>
        </div>
        <p v-if="invalidInput">
          One or more input fields are invalid. Please check your provided data.
        </p>
        <!-- step(5.4) show an error message if the request fails -->
        <p v-if="error">{{ error }}</p>
        <div>
          <base-button>Submit</base-button>
        </div>
      </form>
    </base-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      enteredName: '',
      chosenRating: null,
      invalidInput: false,
      // step(5.1) add a property to store an error message for sending data
      error: null,
    };
  },
  // emits: ['survey-submit'],
  methods: {
    submitSurvey() {
      if (this.enteredName === '' || !this.chosenRating) {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;
      // (5.2)set error to null before sending data
      this.error = null;
      // this.$emit('survey-submit', {
      //   userName: this.enteredName,
      //   rating: this.chosenRating,
      // });

      //Sending data
      //step 1: add fetch api to send a request to firebase.You can choose any identifier, and Firebase will use it to create a database entry and store our data under that identifier. Append the 'surveys' identifier at the end, as required by Firebase, and then add '.json'.
      // method: 'PUT' // method: 'PATCH' // method: 'DELETE' // method: 'GET' // method: 'POST'
      //step 2: by default,this is a GET request,so we need to add a second argument to configure the request.the second argument is an javascript object where we can configure the request.
      //step 3: we need to add a header to the request,so we can tell firebase that we are sending json data.
      //step 4: we need to add a body to the request,so we can send the data to firebase.  The value you tried to emit in the past.
      //use josn.stringify to convert the object to a json string.
      fetch(
        'https://vue-http-demo-74044-default-rtdb.firebaseio.com/surveys.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.enteredName,
            rating: this.chosenRating,
          }),
        }
      )
        .then((response) => {
          //step(6) add a response.ok check to check is there any server side error
          if (!response.ok) {
            throw new Error('Sending survey failed!');
          }
        })
        .catch((error) => {
          //step(5.3) add an error handler
          this.error = error.message;
        });

      this.enteredName = '';
      this.chosenRating = null;
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

input[type='text'] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}
</style>
