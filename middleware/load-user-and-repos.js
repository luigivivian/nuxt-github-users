
export default async function({store, params, from}){
    // middleware para carregamento de dados
       const isInitialPageLoad = !from;
       if(isInitialPageLoad){ // esquema pre loading, cacheado 
        await store.dispatch('users/getUserByName', params.name);
       }
}