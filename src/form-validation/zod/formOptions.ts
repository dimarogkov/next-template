import { zodResolver } from '@hookform/resolvers/zod';
import { validationSchema } from './schema';

export const formOptions = {
    resolver: zodResolver(validationSchema),
    defaultValues: {
        username: '',
        age: 18,
        email: '',
        phone: '',
        select: '',
        password: '',
        confirmPassword: '',
        radioType: '',
        rememberMe: false,
    },
};
