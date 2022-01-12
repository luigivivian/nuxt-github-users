<template>
<div class="container">
    <div v-for="r in starreds" :key="r.id">
      <div class="container"> 
        <div>
          <b-card
            class="mb-2"
          >
           <a :href="r.html_url" target="_blank">
             <b-card-title>
              <h3><a :href="r.html_url" target="_blank">{{r.name}}</a></h3>
             </b-card-title>
     
            <b-card-text>
              {{r.description}}
            </b-card-text>

            <div class="row ml-1">
              <b-badge v-for="lang in r.langs" :key="lang" variant="success" class="ml-1">{{lang}}</b-badge>
            </div>
            </a>
          </b-card>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

  import {mapState} from 'vuex';
  export default {
    name: 'UserStarred',
    layout: 'default',
    async fetch({params, store, from}) {
    //    const isInitialPageLoad = !from;
    //    if(isInitialPageLoad){ // esquema pre loading, cacheado 
    //       await store.dispatch('users/getStarredRepos', params.name);
    //    }
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