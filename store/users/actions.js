
export default {

  
    async getUserByName({ commit}, payload){
      const response = await this.$axios.$get(`https://api.github.com/users/${payload}`,
      {
        
        }
      );
      const user = response;

      commit('SET_USER', user);
    },

    async getRepos({commit}, payload){
      const response = await this.$axios.$get(`https://api.github.com/users/${payload}/repos`,
      {
        
        }
      );
      const repos = response;
      commit('SET_REPOS', repos);
  },


    async getStarredRepos({ commit}, payload){
      const response = await this.$axios.$get(`https://api.github.com/users/${payload}/starred`,
      {
         
        }
      );
      const starreds = response;

      commit('SET_STARREDS', starreds);
    },
    
  };
