<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="name">Name:</label>
      <!-- note5: the naming of the v-model should be the same as the data property -->
      <input type="text" id="name" v-model="enteredName" />
    </div>

    <div>
      <label for="phone">Phone:</label>
      <input type="text" id="phone" v-model="enteredPhone" />
    </div>

    <div>
      <label for="email">Email:</label>
      <input type="text" id="email" v-model="enteredEmail" />
    </div>
    
    <button type="submit" @click="addFriend">Add Friend</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  //note1:remember to add the event to the emits array
  emits: ["add-friend"],
  methods: {
    submitData() {
      // note2:we can use directive v-on:submit.prevent="" to prevent the default behavior of the form
      // event.preventDefault();
      if (!this.validateInput()) {
        alert("Please enter all fields");
        return;
      }
      const newFriend = {
        id: new Date().toISOString(),
        name: this.enteredName,
        phone: this.enteredPhone,
        email: this.enteredEmail,
        isFavorite: false,
      };
      //note3：emit an event to the parent component
      //      the naming should use kebab-case
      this.$emit("add-friend", newFriend);
    },
    validateInput() {
      if (
        this.enteredName.trim() === "" ||
        this.enteredPhone.trim() === "" ||
        this.enteredEmail.trim() === ""
      ) {
        return false;
      }
      return true;
    },
  },
};
</script>
