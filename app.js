import Store from './services/Store.js';
import { loadData } from './services/Menu.js';
import Router from './services/Router.js';

// Link my web components
import { MenuPage } from './components/MenuPage.js';
import { DetailsPage } from './components/DetailsPage.js';
import { OrderPage } from './components/OrderPage.js';
import ProductItem from './components/ProductItem.js';
import CartItem from './components/CartItem.js';

window.app = {
  store: Store,
  router: Router
};

customElements.define("order-page", OrderPage);
customElements.define("cart-item", CartItem);
customElements.define('menu-page', MenuPage);
customElements.define("details-page", DetailsPage);
customElements.define("product-item", ProductItem);

window.addEventListener('DOMContentLoaded', async () => {
  loadData();
  app.router.init();
});

window.addEventListener('appcartchange', () => {
  const badge = document.getElementById('badge');
  const qty = app.store.cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  badge.textContent = qty;
  badge.hidden = qty == 0;
});