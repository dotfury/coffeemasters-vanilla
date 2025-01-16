import Store from './services/Store.js';
import { loadData } from './services/Menu.js';
import Router from './services/Router.js';

window.app = {
  store: Store,
  router: Router
};

window.addEventListener('DOMContentLoaded', async () => {
  loadData();
  app.router.init();
});