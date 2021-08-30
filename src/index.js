import React from 'react'
import * as ReactDOM from 'react-dom'
import { store } from './store/store'
import { Provider } from 'react-redux'
import App from './components/App'
import './css/Common.scss'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
  
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
  
