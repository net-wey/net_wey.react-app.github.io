import { createElement } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import RussiaPage from './pages/RussiaPage.jsx';
import ChinaPage from './pages/ChinaPage.jsx';

function App() {
  return createElement(
    'div',
    { className: 'app' },
    createElement(
      'nav',
      { className: 'nav' },
      createElement(Link, { className: 'nav-link', to: '/russia' }, 'Russia'),
      createElement(Link, { className: 'nav-link', to: '/china' }, 'China')
    ),
    createElement(
      'main',
      { className: 'content' },
      createElement(
        Routes,
        null,
        createElement(Route, {
          path: '/',
          element: createElement(Navigate, { to: '/russia', replace: true }),
        }),
        createElement(Route, {
          path: '/russia',
          element: createElement(RussiaPage),
        }),
        createElement(Route, {
          path: '/china',
          element: createElement(ChinaPage),
        })
      )
    )
  );
}

export default App;
