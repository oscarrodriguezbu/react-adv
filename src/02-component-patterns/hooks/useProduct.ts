import { useState } from 'react'



export const useProduct = () => {

    const [ counter, setCounter ] = useState(0)

    const increaseBy = ( value: number ) => {
        setCounter( prev => Math.max( prev + value, 0 ) ) // si se llama -1 entonces counter solo llega hasta cero
    }

    return {
        counter,
        increaseBy
    }

}