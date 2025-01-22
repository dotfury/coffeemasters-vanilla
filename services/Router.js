const Router = {
  init: () => {
    document.querySelectorAll('a.navlink').forEach((a) => {
      a.addEventListener('click', (event) => {
        event.preventDefault();
        const url = event.target.href;
        Router.go(url);
      });
    });

    // url changes
    window.addEventListener('popstate', (event) => {
      Router.go(event.state.route, false);
    });

    // check the initial URL
    Router.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    console.log('go to ' + route);
    const main = document.querySelector('main');
    if (addToHistory) {
      history.pushState({ route }, null, route);
    }

    let pageElement = null;
    switch(route) {
      case `${location.origin}/`:
      case '/':
        pageElement = document.createElement('menu-page');
        break;
      case `${location.origin}/order`:
      case '/order':
        pageElement = document.createElement('order-page');
        break;
      default:
        if (route.startsWith('/product-')) {
          pageElement = document.createElement('details-page');

          const paramId = route.substring(route.lastIndexOf('-') + 1);
          pageElement.dataset.id = paramId;
        }
    }

    if (pageElement) {
      if (main.children[0]) {
        main.children[0].remove();
      }

      main.appendChild(pageElement);
      window.scrollX = 0;
      window.scrollY = 0;
    }
  }
};

export default Router;
