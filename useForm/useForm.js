import { useState } from "react";

export const UseForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm)

    const { username, email, password } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })

    }

    const onResetForm = () => {
        setFormState(initialForm);
    }
    return {
        ...formState, //desestructuro formState para ahorrarme la desestructuracion en el componente que se implementa
        formState,
        onInputChange,
        onResetForm,

    };
}
