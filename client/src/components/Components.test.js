import React from 'react';
import App from '../App';
import { render, fireEvent } from '@testing-library/react'; // << install this
import '@testing-library/react/cleanup-after-each';

describe('components', () => {
    describe('score display', () => {
        it('renders display scores ', () => {

            const { getByText } = render(<App />)
            getByText(/strikes: 0/i)
            getByText(/fouls: 0/i)
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
            const { getByText, getAllByText } = render(<App />)
            /////STRIKE BUTTON????
            //find strike button
            const strike = getByText(/^strike$/i)
            
            //click button
            
            fireEvent.click(strike)
            

            //strike behavior
            getAllByText(/1/i)
            
            /////BALL BUTTON /////////

            //find ball button
            const ball = getByText(/^ball$/i)
            
            //click button
            fireEvent.click(ball)

            //ball behavior
            getAllByText(/1/i)

            /////FOUL BUTTON////////
            //find foul button
            const foul = getByText(/^foul$/i)
            
            //click button
            fireEvent.click(foul)

            //foul behavior
            getAllByText(/1/i)

            /////hit BUTTON////////
            //find hit button
            const hit = getByText(/^hit$/i)
            
            //click button
            fireEvent.click(hit)

            //hit behavior
            getAllByText(/1/i)

        })
    })
})
