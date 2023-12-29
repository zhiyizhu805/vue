<template>
<div class="container">
  <div>
    <h1>{{ users.length ? "Active Users" : "" }}</h1>
    <ul>
      <active-user
        v-for="user in users"
        :key="user.name"
        :name="user.name"
        :age="user.age"
      ></active-user>
    </ul>
  </div>
  <user-data @add-user-data="addUserData" class="userdata_section"/>
</div>
</template>
<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    addUserData(name, age) {
      const userData = {
        name: name,
        age: age,
      };
      this.users.push(userData);
      console.log(this.users);
    },
  },
};
</script>

<style>
.container{
    max-width: 40rem;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5rem;
}

form{
    display:flex;
    flex-direction: column;
    gap: 1rem;
}

form div {
    display: grid;
    grid-template-columns: 1fr 2fr;
}

.userdata_section{
    background-color: #e4e4e7;
    padding:2rem 3em 3rem;
    border-radius: 3rem;
}

input{
    border: none;
    border-radius: 0.5rem;
    padding: 0.2rem;
    font-size: 1.2rem;
}

button{
    border: none;
    border-radius: 0.3rem;
    padding: 0.2rem;
    font-size: 1.2rem;
    background-color: #db2777;
    cursor: pointer;
    border-radius: 2rem;

}

</style>
