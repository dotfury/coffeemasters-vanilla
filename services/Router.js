const Router = {
  init: () => {
    document.querySelectorAll('a.navlink').forEach((a) => {
      a.addEventListener('click', (event) => {
        event.preventDefault();
        const url = event.target.href;
        Router.go(url);
      });
    });
    // check the initial URL
    Router.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    console.log('go to ' + route);

    if (addToHistory) {
      history.pushState({ route }, null, route);
    }

    let pageElement = null;
    switch(route) {
      case `${location.origin}/`:
      case '/':
        pageElement = document.createElement('h1');
        pageElement.textContent = 'Menu';
        break;
      case `${location.origin}/order`:
      case '/order':
        pageElement = document.createElement('h1');
        pageElement.textContent = 'Your Order';
        break;
    }

    document.querySelector('main').appendChild(pageElement);
  }
};

export default Router;
