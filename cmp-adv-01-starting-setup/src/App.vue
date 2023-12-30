<template>
  <div>
    <!--you can use self-closing tags for components without content -->
    <the-header></the-header>
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <!-- way1) using v-if to conditionally render components -->
    <!-- <manage-goals v-if="selectedComponent==='manage-goals'"></manage-goals>
    <active-goals v-if="selectedComponent==='active-goals'"></active-goals> -->
    <!-- way2) instead of using v-if to conditionally render components, you can use the component tag and bind the is attribute to a data property that holds the name of the component you want to render -->

    <!-- keep-alive is a built-in component that allows you to keep the component in the DOM even if it's not rendered, so that the component state is preserved -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>

    <!-- <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info> -->
    <!--3) adding a template, using v-slot:default or #default to specify where to put the slot content .if you use the template tag, you can add more than one slot .
             You can also directly include the #default="slotProps" in the component tag if you only have one slot-->
    <!--4) slotProps is the data from the child component(the name is up to you),the value you get from slotProp this varibale will always be an object where all the props you defined in the child component slot tag are merged in you can then use the data in the template -->
    <!-- <course-goals >
      <template #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps.dummy }}</p>
      </template>
    </course-goals>
    <course-goals #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps.dummy }}</p>
    </course-goals> -->
    <!-- <TheHeader/> -->
    <!-- <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    /> -->
    <!-- <badge-list/> -->
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
// import UserInfo from "./components/UserInfo.vue";
// import BadgeList from "./components/BadgeList.vue";
// import CourseGoals from "./components/CourseGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";
import ActiveGoals from "./components/ActiveGoals.vue";

export default {
  //local components registration:
  components: {
    // 'the-header': TheHeader,
    // 'user-info': UserInfo,
    TheHeader, //TheHeader: TheHeader,
    // UserInfo, //UserInfo: UserInfo,
    // BadgeList,
    // CourseGoals,
    ManageGoals,
    ActiveGoals,
  },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
      selectedComponent: "active-goals",
    };
  },
  methods: {
    setSelectedComponent(component) {
      this.selectedComponent = component;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
