import { ErrorMessage, useField } from 'formik';

interface Props {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x: string]: any;
}


export const MyTextInput = ({ label, ...props }: Props) => {

    const [field] = useField(props) //Para crear campos customizados podemos usar el hook useField para extraer todas las propiedades necesarias
    // Se puede sacar el meta para trabajar con cosas como el touched, el error etc 

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            <ErrorMessage name={props.name} component="span" />
        </>
    )
}
