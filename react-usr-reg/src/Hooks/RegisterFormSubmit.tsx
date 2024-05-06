import { post } from '../Utils/http';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import { InferType, object, string } from 'yup';
import { useState } from 'react';

export const schema = object().shape({
    username: string().required().min(3).max(25),
    email: string().email("Please enter a valid email").required(),
    password: string().required().min(8).max(25),
});

export type FormValues = InferType<typeof schema>

type RawRegisterData = {
    message: string
}

export function registerFormSubmit() {

    const navigate = useNavigate();
    const [serverErrors, setServerErrors] = useState<{ message: string } | undefined>(undefined);
    const handleSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            await post(`${import.meta.env.VITE_API_URL}/register`, data) as RawRegisterData;
            navigate('/login');
        } catch (error: any) {
            setServerErrors({ message: error.message });
        }
    };
    return { handleSubmit, serverErrors };
}