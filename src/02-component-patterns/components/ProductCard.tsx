import { createContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css'

//COMPARTIR INFORMACION ENTRE PADRE E HIJOS
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext; //Provider ES UN HIGH ORDER COMPONENT


export const ProductCard = ({ children, product }: ProductCardProps ) => {

    const { counter, increaseBy } = useProduct();

    return (
        <Provider value={{/* INFO QUE NECESITAN LOS HIJOS */
            counter,
            increaseBy,
            product
        }}>
            <div className={ styles.productCard }>
                { children }
            </div>
        </Provider>
    )
}
