// React package that deals with DOM interactions
import ReactDOM from 'react-dom';

// React package for constructing components (and all non-DOM related actions)
import React from 'react';

// Import React component from PetShopWindow
import StandUp from './components/StandUp';

// Render that component to the DOM!
ReactDOM.render(<StandUp />, document.getElementById('app'));
