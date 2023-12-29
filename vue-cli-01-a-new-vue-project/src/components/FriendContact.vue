<template>
  <li>
    <h2>{{ name }}{{ friendIsFavorite === true ? "(Favorite)" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
        <button @click="toggleFavorite">
      Toggle Favorite
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
//in the script area ,export a default object which will be the default configuration for the component
export default {
  //props should use camelCase for Javascript to recognize them
  //validating props
  // syntax1: define prop without type
  // props: ["name", "phoneNumber", "emailAddress"],
  props: {
    // syntax2: define prop with type
    // name:String,

    // syntax3: define prop with type and required
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    // isFavorite: {
    //   type: String,
    //   required: false,
    //   //you can have a function here to generate a default value
    //   default: '0',
    //   //you can  add a validator function to validate the prop
    //   validator: function (value) {
    //     return value === '0' || value === '1';
    //   },
    // },
    // instead of using a string, we can use a boolean
    // use v-bind to pass non-string value to the prop:
    // (please be aware that the value of the prop will be a string so the boolean value will be converted to a string)
    // if we got a prop that need a JavaScript value other than a string, we should use v-bind in the template(parent component) to bind the value to a JavaScript value.
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      detailsAreVisible: false,
      friendIsFavorite : this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.friendIsFavorite = !this.friendIsFavorite;
      console.log(this.friendIsFavorite)
    },
  },
};
</script>
