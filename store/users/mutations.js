export default {
    SET_USER (state, user) {
        state.user = user;
    },
    SET_REPOS (state, repos) {
        state.repos = repos;
    },
    SET_STARREDS (state, starreds) {
        state.starreds = starreds;
    },
    SET_MIDDLEWARE_VALUE(state, middlewareValue){
        state.middlewareValue = middlewareValue;
    }

  }
  