import React from 'react';
import App from '../App';
import { render, fireEvent } from '@testing-library/react'; // << install this
import '@testing-library/react/cleanup-after-each';

describe('components', () => {
    describe('score display', () => {
        it('renders display scores ', () => {

            const { getByText } = render(<App />)
            getByText(/strikes: 0/i)
            getByText(/balls: 0/i)
            getByText(/hits: 0/i)
        })
    })

    describe('app buttons content', () => {
        it('should display buttons', () => {
            const { getByText } = render(<App />)
            getByText(/^strike$/i)
            getByText(/^ball$/i)
            getByText(/^foul$/i)
            getByText(/^hit$/i)
        })

    })

    describe('app buttons behavior', () => {
        it('should render button behavior', () => {
            const { getByText, getAllByText, queryByText } = render(<App />)
            /////STRIKE BUTTON????
            //find strike button
            const strike = getByText(/^strike$/i)
            
            //click button
            
            fireEvent.click(strike)
            

            //strike behavior
            expect(getByText(/1/i)).toBeTruthy
            
            fireEvent.click(strike)
            expect(getByText(/2/i)).toBeTruthy

            fireEvent.click(strike)
            expect(getByText(/strikes: 0/i)).toBeTruthy
            
            
            // // /////BALL BUTTON /////////

            //find ball button
            const ball = getByText(/^ball$/i)
            
            //click button
            fireEvent.click(ball)

            //ball behavior
            expect(getByText(/1/i)).toBeTruthy
            

            fireEvent.click(ball)
            expect(getByText(/2/i)).toBeTruthy

            fireEvent.click(ball)
            expect(getByText(/3/i)).toBeTruthy

            fireEvent.click(ball)
            expect(getByText(/balls: 0/i)).toBeTruthy

            // /////FOUL BUTTON////////
            //find foul button
            const foul = getByText(/^foul$/i)
            
            //click button
            fireEvent.click(foul)

            //foul behavior
            getAllByText(/1/i)

            fireEvent.click(foul)
            getAllByText(/2/i)

          

            // /////HIT BUTTON////////
            // //find hit button
            // const hit = getByText(/^hit$/i)
            
            // //click button
            // fireEvent.click(hit)

            // //hit behavior
            // getAllByText(/1/i)

        })

    
    })
})
