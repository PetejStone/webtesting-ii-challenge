import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render} from '@testing-library/react'; // << install this
import '@testing-library/react/cleanup-after-each';


describe('<App />' , () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  
  
  });

  it('renders without errors', () => {
    const query = render(<App />)
  })
 
})
