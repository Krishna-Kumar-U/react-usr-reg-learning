// useFormValidation.ts
import { object, string } from 'yup';

const schema = object().shape({
    username: string().required().min(3).max(25),
    email: string().email().required(),
    password: string().required().min(8).max(25),
});

interface RegisterFormData {
    username: FormDataEntryValue | null;
    email: FormDataEntryValue | null;
    password: FormDataEntryValue | null;

}
export function RegisterFormValidation(data: RegisterFormData) {
    return schema.validate(data);
}