import { useState } from 'react';
import { post } from '../Utils/http';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../Store/AuthSlice';
import { SubmitHandler } from 'react-hook-form';
import { InferType, object, string } from 'yup';

export const schema = object().shape({
    email: string().email().required(),
    password: string().required()
});

export type FormValues = InferType<typeof schema>

type RawLoginData = {
    token: any;
    username: string;
    email: string;
}

export function loginFormSubmit() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [serverErrors, setServerErrors] = useState<{ message: string } | undefined>(undefined);

    const handleSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            const response = await post(`${import.meta.env.VITE_API_URL}/login`, data) as RawLoginData;
                if (response.token) {
                    dispatch(login({ token: response.token, userDetails: {username: response.username, email: response.email} }));
                    navigate('/');
                }
        } catch (error: any) {
            setServerErrors({ message: error.message });
        }

    };

    return { handleSubmit, serverErrors  };
}