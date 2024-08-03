import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const phoneRegex = /(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4,5}$)/;

const validationSchema = yup
    .object({
        username: yup.string().trim().required('Missing name'),
        age: yup
            .number()
            .required('Missing age')
            .positive('Age must be an positive number')
            .integer('Age must be an integer')
            .min(18, 'Your age must be minimum 18'),
        email: yup.string().trim().required('Missing email').email('Invalid email format'),
        phone: yup
            .string()
            .trim()
            .required('Missing phone')
            .matches(phoneRegex, 'Phone number must be in correct format - +380 XX XXX XX XX'),
        select: yup.string().required().oneOf(['option_1', 'option_2', 'option_3'], 'Select any option'),
        password: yup.string().trim().required('Missing password').min(4, 'Your password must be minimum 4'),
        confirmPassword: yup
            .string()
            .trim()
            .required('Missing confirm password')
            .oneOf([yup.ref('password')], 'Passwords must match'),
        radioType: yup.string().required('Radio Type is required'),
        rememberMe: yup.bool().required().oneOf([true], 'Remember me is required'),
    })
    .required();

export const formOptions = {
    resolver: yupResolver(validationSchema),
    defaultValues: {
        username: '',
        age: 18,
        email: '',
        phone: '',
        select: 'default',
        password: '',
        confirmPassword: '',
        radioType: '',
        rememberMe: false,
    },
};
