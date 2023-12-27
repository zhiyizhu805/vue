const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      inputName: '',
      confirmName: ''
    };
  },
  methods: {
    add(num){
      this.counter = this.counter + num;
    },
    reduce(num){
      this.counter = this.counter - num;
    },
    setName(event,lastName){
      this.inputName = event.target.value + ' ' + lastName;
      console.log(event.target.value);
    },
    submitForm(event){
      //event.preventDefault();
      alert('Submitted!');
    },
    confirmInput(){
      this.confirmName = this.inputName;
    },
  }
});

app.mount('#events');
