import React from 'react'
import * as ReactDOM from 'react-dom';
import App from './components/App'
import './css/Common.scss'

const container = document.getElementById('app');

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render: Render an element to the root.
root.render(<App tab="home" />);

// During an update, there's no need to pass the container again.
root.render(<App tab="profile" />);