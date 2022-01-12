<template>
  <div>
    <b-tabs card>
          <b-tab title="Resumo" active @click="resume()">
           <div>
            <b-jumbotron>
              <b-container class="bv-example-row">
                <b-row class="text-left">
                  <b-col cols="4">
                      <div>
                        <b-card
                          :title="user.login"
                          :img-src="user.avatar_url"
                          img-alt="Image"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          text-variant="dark"
                        >
                          <a :href="user.html_url" target="_blank" text-variant="dark">Visitar perfil</a>
                        </b-card>
                      </div>
                  </b-col>

                  <b-col cols="8">
                      <hr>
                      <div class="mt-4">
                          <h3 class="text-black">Resumo perfil de: {{user.login}}</h3>
                          <h3 class="text-black">Repositorios privados: {{user.owned_private_repos}}</h3>
                          <h3 class="text-black">Repositorios publicos: {{user.public_repos}}</h3>
                          <h3 class="text-black">Seguidores: {{user.followers}}</h3>
                          <h3 class="text-black">segue: {{user.following}}</h3>
                      </div>
                      <hr>
                  </b-col>

                </b-row>
              </b-container>
            

              <hr class="my-4">
            </b-jumbotron>
          </div>

          </b-tab>
          <b-tab  @click="redirectRepo()">
             <template #title>
                <b-spinner type="grow" v-if="repoIsLoading" small></b-spinner>Repositorios
              </template>
       
            <nuxt-child></nuxt-child>
          </b-tab>
          <b-tab @click="redirectStarred()">
              <template #title>
                <b-spinner type="grow" v-if="starredIsLoading" small ></b-spinner>Favoritos
              </template>
            <nuxt-child></nuxt-child>
          </b-tab>
        </b-tabs>
  </div>

</template>

<script>
import {mapState} from 'vuex';

  export default {
    middleware: ['load-user-and-repos'],
    async fetch({params, store}) {
      await store.dispatch('users/getUserByName', params.name);
    },
    computed: {
      ...mapState('users', ['user', 'repos', 'repoIsLoading', 'starredIsLoading']) 
    },
    methods:{
      redirectRepo(){
        this.$router.push('/user/'+this.$route.params.name+'/user-repo')
      },
      redirectStarred(){
        this.$router.push('/user/'+this.$route.params.name+'/user-starred')
      },
      resume(){
        this.$router.push('/user/'+this.$route.params.name)
      }
    }
  
  }
</script>

<style lang="scss" scoped>
</style>