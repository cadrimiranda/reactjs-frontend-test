import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Routes from './routes/Routes';
import './index.css';

import useCookies from './hooks/useCookies';

const App = () => {
  const cookies = useCookies();

  window.addEventListener('removeCookie', function (e) {
    cookies.remove('auth');
  });

  window.addEventListener('keydown', function (e: KeyboardEvent) {
    if (e.key === 'F2') {
      if (cookies.get('auth')) {
        const event = new Event('addPlayer');
        window.dispatchEvent(event);
      }
    } else if (e.key === 'F4') {
      const event = new Event('removeCookie');
      window.dispatchEvent(event);
    }
  });

  return (
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
