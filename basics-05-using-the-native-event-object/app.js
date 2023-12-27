const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullName:'',
      lastName: '',
    };
  },
  //The difference between watch property and computed property is that
  //if you just want to calculate a value based on other data properties 
  //and then output,you should use computed property. 
  //If you want to run some logic when
  //a data property changes, you should use watch property.

  //watch property is used to watch the change of the data property.
  //Inside watch property, we can define a bunch of functions, and each
  //function will be executed when the data property changes.
  watch: {
    //whenever name changes, this function will be executed.
    //we dont return anything in watch property.We run logic inside the function.
    //watch propety auto pass the new value and old value to the function.
    name(value){
      if (value === '') {
        this.fullName = '';
      } else {
        this.fullName = value + ' ' + 'Zhu';
      }
    },
    lastName(value){
      if (value === '') {
        this.fullName = '';
      } else {
        this.fullName = this.name + ' ' + value;
      }
    }
  },
  //its better to use computed property instead of methods to output value.
  //computed property is the third important property in Vue which 
  //actually is a function but we use it like a property.Using
  //computed property can improve performance since it will only be
  //executed when the dependency changes.
  computed: {
    // fullName() {
    //   console.log('test...')
    //   if (this.name === ''|| this.lastName === '') {
    //     return '';
    //   } else {
    //     return this.name + ' ' + this.lastName;
    //   }
    // }
  },
  //only use methods if you need to re-execute the function when the page changed.
  //Or more often, when you need to bind events to the methods(you cannot bind events
  // to computed propeties).
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetValue() {
      this.name = '';
    },
    // outputFullName() {
    //   console.log('test...')
    //   if (this.name === '') {
    //     return '';
    //   }
    //   return this.name + ' ' + 'Zhu';
    // }
  },

});

app.mount('#events');
