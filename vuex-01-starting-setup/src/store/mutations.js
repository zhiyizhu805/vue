export default{
    //(7.2) add a new mutation to change the login status
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  }