
export default async function({store, from, params}){
    // middleware para carregamento de dados
    const isInitialState = !from;
    if(isInitialState){
        await store.dispatch('users/getUserByName', params.name);
        await store.dispatch('users/getRepos', params.name);
        await store.dispatch('users/getStarredRepos', params.name);

    }
}