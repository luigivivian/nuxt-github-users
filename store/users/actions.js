const gitHeader =  {
  auth: {
    username: "ab5ad1019ec3d979ccc6",
    password: "aad8c5e58d67c14a6ca8b51974eaa184f8b72e0c"
  }
};

export default {

  
    async getUserByName({ commit}, payload){
      const user = await this.$axios.$get(`https://api.github.com/users/${payload}`, gitHeader);
      commit('SET_USER', user);
    },

    async getRepos({commit}, payload){
      commit('SET_REPO_IS_LOADING', true);
      const repos = await this.$axios.$get(`https://api.github.com/users/${payload}/repos`, gitHeader);
      const getLangPromisses = [];
      for(const r of repos){
        // request buscando langs de cada repo
        getLangPromisses.push(
          this.$axios.$get(r.languages_url, gitHeader)
        );
      }
      const getLangs = await Promise.all(getLangPromisses);
      getLangs.forEach((elem, index) => {
        repos[index].langs = Object.keys(elem);;
      });
      commit('SET_REPOS', repos);
      commit('SET_REPO_IS_LOADING', false);
  },


    async getStarredRepos({ commit}, payload){
      commit('SET_STARRED_IS_LOADING', true);
      const starreds = await this.$axios.$get(`https://api.github.com/users/${payload}/starred`, gitHeader);
      const getLangPromisses = [];
      for(const r of starreds){
        // request buscando langs de cada repo
        getLangPromisses.push(
          this.$axios.$get(r.languages_url, gitHeader)
        );
      }
      const getLangs = await Promise.all(getLangPromisses);
      getLangs.forEach((elem, index) => {
        starreds[index].langs = Object.keys(elem);;
      });
      commit('SET_STARRED_IS_LOADING', false);
      commit('SET_STARREDS', starreds);
    },


    
  }