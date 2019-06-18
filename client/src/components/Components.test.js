import React from 'react';
import App from '../App';
import { render, fireEvent } from '@testing-library/react'; // << install this
import '@testing-library/react/cleanup-after-each';


describe('components', () => {
    describe('score display', () => {
        it('renders display scores ', () => {
           
            const {getByText} = render(<App />)
            getByText(/strikes: 0/i)
            getByText(/fouls: 0/i)
            getByText(/balls: 0/i)
            getByText(/hits: 0/i)
          })
    })
    
    
    
      describe('app buttons content', () => {
        const {getByText} = render(<App />)
         getByText(/strike/i)
         getByText(/hit/i)
         getByText(/foul/i)
         getByText(/ball/i)
    
      })

      describe('app buttons behavior', () => {
        const {getByText} = render(<App />)
        //find button
        const strike = getByText(/strike/i)
         //click button
        fireEvent.click(strike)
    
      })
})
