import { useEffect, useRef, useState } from 'react'
import { onChangeArgs, Product } from '../interfaces/interfaces';


interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
}


export const useProduct = ({ onChange, product, value = 0 }: useProductArgs) => {

    const [ counter, setCounter ] = useState( value );

    //BANDERA PARA SABER SI ESTA SIENDO CONTROLADO O NO
    const isControlled = useRef( !!onChange ) // SIGNOS !! es para transformar a booleano

    const increaseBy = ( value: number ) => {

        if( isControlled.current ) {
            return onChange!({ count: value, product });//si se usa counter en count, se envia el valor viejo y no se quiere eso
        }
        
        const newValue = Math.max( counter + value, 0 )
        setCounter( newValue );

        onChange && onChange({ count: newValue, product }); //forma elegante de validar que exista el onChange
    }

    useEffect(() => {
        setCounter( value );
    }, [ value ])

    return {
        counter,
        increaseBy
    }

}