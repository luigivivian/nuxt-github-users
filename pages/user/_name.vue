<template>
  <div>
    <div>
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Resumo" active @click="resume()">

           <div>
            <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
              <b-container class="bv-example-row">
                <b-row class="text-center">
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
                      <div class="mt-4">
                          <h2>Resumo perfil de: {{user.login}}</h2>
                          <h3>Repositorios privados: {{user.owned_private_repos}}</h3>
                          <h3>Repositorios publicos: {{user.public_repos}}</h3>
                          <h3>Seguidores: {{user.followers}}</h3>
                          <h3>segue: {{user.following}}</h3>
                      </div>
                  </b-col>

                </b-row>
              </b-container>
            

              <hr class="my-4">
            </b-jumbotron>
          </div>

          </b-tab>
          <b-tab title="Repositorios" @click="redirectRepo()">
            <nuxt-child></nuxt-child>
          </b-tab>
          <b-tab title="Favoritos" @click="redirectStarred()">
            <nuxt-child></nuxt-child>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>

      
  </div>

</template>

<script>
import {mapState} from 'vuex';

  export default {
    middleware: ['load-user-and-repos'],
    async fetch({params, store}) {
      // await store.dispatch('users/getUserByName', params.name);
      // await store.dispatch('users/getRepos', params.name);
    },
    computed: {
      ...mapState('users', ['user', 'repos']) 
    },
    methods:{
      redirectRepo(){
        this.$router.push('/user/luigivivian/user-repo')
      },
      redirectStarred(){
        this.$router.push('/user/luigivivian/user-starred')
      },
      resume(){
        this.$router.push('/user/luigivivian')
      }
    }
  
  }
</script>

<style lang="scss" scoped>
</style>