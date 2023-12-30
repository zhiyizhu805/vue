<template>
  <div>
    <!--you can use self-closing tags for components without content -->
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
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
import TheHeader from './components/TheHeader.vue';
import UserInfo from './components/UserInfo.vue';
import BadgeList from './components/BadgeList.vue';

export default {
  //local components registration:
  components: {
    // 'the-header': TheHeader,
    // 'user-info': UserInfo,
    TheHeader,  //TheHeader: TheHeader,
    UserInfo,   //UserInfo: UserInfo,
    BadgeList,

  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
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