
export default async function({store, params}){
    // middleware para carregamento de dados
    await store.dispatch('users/getUserByName', params.name);
    await store.dispatch('users/getRepos', params.name);
    await store.dispatch('users/getStarredRepos', params.name);
}