import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from '@testing-library/react'; // << install this
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

 
  it('renders "this is the display" ', () => {
    const {getByText} = render(<App />)
    getByText(/this is the display/i)
  })

  describe('app buttons', () => {
    const {getByText} = render(<App />)
    getByText(/strike/i)
    getByText(/hit/i)
    getByText(/foul/i)
    getByText(/ball/i)

  })
  
})
