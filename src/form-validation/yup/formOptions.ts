import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from './schema';

export const formOptions = {
    resolver: yupResolver(validationSchema),
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
