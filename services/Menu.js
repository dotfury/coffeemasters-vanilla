import API from "./API.js";

export async function loadData() {
  app.store.menu = await API.fetchMenu();
}

export async function getProductById(id) {
  // wait for menu if direct link to product
  if (app.store.menu == null) {
    await loadData();
  }

  for (let c of app.store.menu) {
    for (let p of c.products) {
      if (p.id == id) {
        return p;
      }
    }
  }

  return null;
}