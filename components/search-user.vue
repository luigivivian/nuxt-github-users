<!-- Please remove this file from your project -->
<template>
  <div
    class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"
  >
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
     
      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-20">
        <h2 class="text-2xl leading-7 font-semibold">
          Pesquise por um nome
        </h2>

        <div class="row mt-2">
          <b-col cols="10">
            <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
          </b-col>
          <b-col cols="2">
            <b-button variant="primary" @click="search()">Pesquisar</b-button>
          </b-col>
        </div>
      </div>
    
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchUser',
    data() {
      return {
        text: ''
      }
    },
  methods:{
    search(){
        return this.$router.push('/user/'+this.text)
    }
  }
}
</script>
