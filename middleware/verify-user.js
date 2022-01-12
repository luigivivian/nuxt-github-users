export default function ({ store, redirect }) {
    // Imiddleware de autenticação
    if (!store.state.authenticated) {
        return false;
    }
  }