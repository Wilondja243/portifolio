import { useState } from 'react';


export default function useLoginValidation() {
    const [errors, setErrors] = useState({});

    const handleSubmit = ({ identifier, password }) => {

        if (!identifier) {
            errors.identifier = 'nom ou email réquis.';
        }

        if (!password) {
            errors.password = 'mot de passe requis.';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    return {
        errors,
        handleSubmit,
    };
}
