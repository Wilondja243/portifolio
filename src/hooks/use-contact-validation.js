import { useState } from 'react';


export default function useLoginValidation() {
    const [errors, setErrors] = useState({});

    const handleSubmit = ({ username, subject, description }) => {
        const newErrors = {};

        if (!username || !subject || !description) {
            newErrors.all = "Tous les champs sont réquis";
        }
        if(subject && subject.length <= 5){
            newErrors.username = "Le sujet doit être clair."
        }

        setErrors(newErrors);
        return Object.keys(errors).length === 0;
    };

    return {
        errors,
        handleSubmit,
    };
}
