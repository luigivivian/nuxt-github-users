const authToken = "token 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";

export default {

  
    async getUserByName({ commit}, payload){
      const response = await this.$axios.$get(`https://api.github.com/users/${payload}`,
      {
          headers: {
            'Authorization': `${authToken}`
          }
        }
      );
      const user = response;

      commit('SET_USER', user);
    },

    async getRepos({commit}, payload){
      const response = await this.$axios.$get(`https://api.github.com/users/${payload}/repos`,
      {
          headers: {
            'Authorization': `${authToken}`
          }
        }
      );
      const repos = response;
      commit('SET_REPOS', repos);
  },


    async getStarredRepos({ commit}, payload){
      const response = await this.$axios.$get(`https://api.github.com/users/${payload}/starred`,
      {
          headers: {
            'Authorization': `${authToken}`
          }
        }
      );
      const starreds = response;

      commit('SET_STARREDS', starreds);
    },
    
  };
