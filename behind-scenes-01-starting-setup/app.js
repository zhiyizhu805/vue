const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');

//1)define template differently
//2)use ref to access DOM elements instead of event object,this will
//  not listen to every key stroke but only when button is clicked
const app2 = Vue.createApp({
  template: `
  <h2>How Vue Works?</h2>
  <input type="text" ref="userText">
  <button @click="setText">Set Text</button>
  <p>{{ message }}</p>
  `,
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
   setText(){
      this.message = this.$refs.userText.value;
   }
  },
});

app2.mount('#app2');
