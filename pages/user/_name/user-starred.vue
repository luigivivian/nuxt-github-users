<template>
  <div>
    <h1>Repositorios favoritos {{user.login}} </h1>
    <div v-for="r in starreds" :key="r.id">
      <a :href="r.html_url" target="_blank">{{r.name}}</a>
    </div>
  </div>
</template>

<script>

  import {mapState} from 'vuex';
  export default {
    name: 'UserStarred',
    layout: 'default',
    async fetch({params, store, from}) {
       const isInitialPageLoad = !from;
       if(isInitialPageLoad){ // esquema pre loading, cacheado 
          await store.dispatch('users/getUserByName', params.name);
          await store.dispatch('users/getStarredRepos', params.name);
       }
        await store.dispatch('users/getStarredRepos', params.name); // aqui carrega em todo load

    },
     head: {
      title: 'User starreds',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Repositorios usuario'
        }
      ],
    },
    computed: {
      ...mapState('users', ['user', 'starreds'])
    },

  }
</script>

<style lang="scss" scoped>
</style>