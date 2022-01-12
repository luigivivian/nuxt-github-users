<template>
  <div>
    <h1>Repositorios de {{user.login}} </h1>
    <div v-for="r in repos" :key="r.id">
      <a :href="r.html_url" target="_blank">{{r.name}}</a>
    </div>
  </div>
</template>

<script>

  import {mapState} from 'vuex';
  export default {
    name: 'UserRepo',
    layout: 'default',
     async fetch({params, store, from}) {
       const isInitialPageLoad = !from;
       if(isInitialPageLoad){
          await store.dispatch('users/getUserByName', params.name);
          await store.dispatch('users/getRepos', params.name);
       }
    },
     head: {
      title: 'User repos',
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
      ...mapState('users', ['user', 'repos'])
    },

  }
</script>

<style lang="scss" scoped>
</style>