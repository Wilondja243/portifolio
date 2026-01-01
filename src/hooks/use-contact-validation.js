import { useState } from 'react';


export default function useLoginValidation() {
    const [errors, setErrors] = useState({});

    const handleSubmit = ({ username, subject, description }) => {
        const newErrors = {};

        if (!username || !subject || !description) {
            newErrors.all = "Tous les champs sont réquis";
        }
        if(username && username.length <= 5){
            newErrors.username = "Le titre est trop court."
        }

        setErrors(newErrors);
        return Object.keys(errors).length === 0;
    };

    return {
        errors,
        handleSubmit,
    };
}
