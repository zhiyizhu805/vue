<template>
  <form>
  <!-- step5.1: add class 'invalid' to the form-control div if the input is invalid. -->
    <div class="form-control" :class="{invalid: userNameValidity === 'invalid'}">
      <label for="user-name">Your Name</label>
      <!-- step2: add a v-model directive to the input element and bind it to the userName data property. -->
      <!-- step5: add a blur event listener to the input element using @blur and call the validateInput method when the blur event occurs. -->
      <input id="user-name" name="user-name" type="text"  @blur="validateInput" v-model.trim="userName"/>
      <p v-if="userNameValidity === 'invalid'">Please enter a valid name!</p>
    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <input id="age" name="age" type="number" />
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select id="referrer" name="referrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input id="interest-news" name="interest" type="checkbox"/>
        <label for="interest-news">News</label>
      </div>
      <div>
        <input id="interest-tutorials" name="interest" type="checkbox" />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input id="interest-nothing" name="interest" type="checkbox" />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input id="how-video" name="how" type="radio" />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input id="how-blogs" name="how" type="radio" />
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input id="how-other" name="how" type="radio" />
        <label for="how-other">Other</label>
      </div>
    </div>
    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>

<script>
export default {
  data(){
    return{
    // step1: add userName property and bind it to the input element using v-model.
     userName:"",
      // step3: add userNameValidity property and set it to "pending".
     userNameValidity:'pending'
    }
  },
  methods:{
    // step4: add validateInput method.Change the userNameValidity property  according to the input value.
    validateInput(){
      if(this.userName === ''){
        this.userNameValidity = 'invalid'
      }else{
        this.userNameValidity = 'valid'
      }
    }
  }
}
</script>


<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}

/*  step5.2: if the input is invalid, color the corresponding label and paragraph red. */
/*  .form-control.invalid selects elements with both classes, while .form-control .invalid selects elements with the "invalid" class that are descendants of elements with the "form-control" class. */
.form-control.invalid input {
  border-color:red
}

.form-control.invalid p{
  color:red
}

.form-control.invalid label{
  color:red
}
</style>