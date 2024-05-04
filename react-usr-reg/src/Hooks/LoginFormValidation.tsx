// useFormValidation.ts
import { object, string } from 'yup';

const schema = object().shape({
    email: string().email().required(),
    password: string().required()
});

interface LoginFormData {
    email: FormDataEntryValue | null;
    password: FormDataEntryValue | null;

}
export function LoginFormValidation(data: LoginFormData) {
    return schema.validate(data);
}