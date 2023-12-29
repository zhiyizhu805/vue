<!--define the template for the component-->
<template>
  <section>
    <header><h1>My Friends</h1></header>
    <ul>
      <!--  in template, we should use kebab-case for the props-->
      <friend-contact
        v-for="friend in friends"
        :id="friend.id"
        @toggle-favorite="toggleFavorite"
        :key="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favorite="friend.isFavorite"
        @delete-contact="deleteContact"
      ></friend-contact>
    </ul>
    <section>
      <div>
        <button @click="toggleShowAddFrined">
          {{ showAddFriend ? "Clear" : "Add Friend" }}
        </button>
      </div>
      <!-- note4: in parent component, listen to the event emitted by the child component.Should not add the paramter(id) passed from child component in the event handler.The event handler will be called with the paramter automatically passed from the child component-->
      <new-friend @add-friend="addFriend" v-if="showAddFriend"></new-friend>
    </section>
  </section>
</template>

<!--provide configuration for the app we want to mount(in index.html)-->
<script>
import newFriend from "./components/newFriend.vue";
// if we store the object in a variable, we can only use it in the template.
// we use 'export default' to make it available outside of the file.
export default {
  components: { newFriend },
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@example.com",
          isFavorite: true,
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@example.com",
          isFavorite: false,
        },
      ],
      showAddFriend: false,
    };
  },
  methods: {
    toggleFavorite(id) {
      const friend = this.friends.find((friend) => friend.id === id);
      friend.isFavorite = !friend.isFavorite;
      // console.log(id)
    },
    toggleShowAddFrined() {
      this.showAddFriend = !this.showAddFriend;
    },
    addFriend(newFriend) {
      this.friends.push(newFriend);
      this.toggleShowAddFrined();
      // console.log(this.friends)
    },
    deleteContact(id) {
      //you can use either splice or filter method to delete an element from an array

      // const friendIndex = this.friends.findIndex((friend) => friend.id === id);
      // this.friends.splice(friendIndex, 1);

      //filter method will return a new array with required elements.friend.id !== id will return true or false, if it is true, the element will be added to the new array, otherwise, it will be ignored.
      this.friends = this.friends.filter((friend) => friend.id !== id);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}

section div {
  display: flex;
  justify-content: center;
}
</style>
