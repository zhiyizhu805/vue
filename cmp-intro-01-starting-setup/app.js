const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "1",
          name: "Manuel Lorenz",
          phone: "1234567890",
          email: "manuelLorenz@example.com",
        },
        {
          id: "2",
          name: "Julie Jones",
          phone: "1234567890",
          email: "julie@example.com",
        },
      ],
    };
  },
});

// A component is like a custom HTML tag.
// The vue component is essentially a vue app which belongs to the vue main app.
// 1) The first argument is the name of the component.Always use kebab-case for the name of the component.Which prevents the name from conflicting with existing HTML tags.
// 2) The second argument is an config object that defines the component.(just like the config object in the Vue.createApp() method)
app.component("friend-contact", {
    //the main vue app mounts to the element with the id of app have the template in the index.html file. However, the component does not have a template in the index.html file. Instead, the component should have a template in the config object.
    template: `        
        <li>
          <h2>{{friend.name}}</h2>
          <button @click="toggleDetails">Show Details</button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong>{{friend.email}}</li>
          </ul>
        </li>`,
    data() {
        return {
            detailsAreVisible: false,
            friend:{
                id: "1",
                name: "Manuel Lorenz",
                phone: "1234567890",
                email: "manuelLorenz@example.com",
              },
        };
    },
    methods: {
        toggleDetails() {
          this.detailsAreVisible = !this.detailsAreVisible;
        },
      },
});

app.mount("#app");
