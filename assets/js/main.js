// main.js
const routes = {
    '/': 'home.html',
    '/about': 'about.html',
    '/buyer': 'buyer.html',
    '/seller': 'seller.html',
    '/contact': 'contact.html',
    '/testimonials': 'testimonials.html'
  };
  
  const rootDiv = document.getElementById('app');
  
  const loadContent = async (path) => {
    const response = await fetch(path);
    const content = await response.text();
    rootDiv.innerHTML = content;
  };
  
  const router = () => {
    const hashPath = window.location.hash.substr(1);
    const path = routes[hashPath] || routes['/'];
    loadContent(path);
  };
  
  window.addEventListener('hashchange', router);
  window.addEventListener('load', router);
  