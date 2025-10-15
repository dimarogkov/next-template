export const ZOD_CODE = `import { formOptions } from './formOptions';
import { validationSchema } from './schema';

export { formOptions, validationSchema };`;

export const ZOD_SCHEMA_CODE = `import * as z from 'zod';

const phoneRegex = /(?=.*\\+[0-9]{3}\\s?[0-9]{2}\\s?[0-9]{3}\\s?[0-9]{4,5}$)/;

export const validationSchema = z
	.object({
		username: z.string().trim().nonempty('Missing name'),
		age: z
			.number({
				required_error: 'Missing age',
				invalid_type_error: 'Age must be a number',
			})
			.min(18, 'Your age must be minimum 18'),
		email: z.string().trim().nonempty('Missing email').email('Invalid email format'),
		phone: z
			.string()
			.trim()
			.nonempty('Missing phone')
			.regex(phoneRegex, 'Phone number must be in correct format - +380 XX XXX XX XX'),
		select: z.string().trim().nonempty('Select any option'),
		password: z.string().trim().nonempty('Missing password').min(4, 'Your password must be minimum 4'),
		confirmPassword: z.string().trim().nonempty('Missing confirm password'),
		radioType: z.string().nonempty('Radio Type is required'),
		rememberMe: z.literal(true as boolean, {
			errorMap: () => ({ message: 'Remember me is required' }),
		}),
	})
	.refine((data) => data.password === data.confirmPassword, {
		path: ['confirmPassword'],
		message: 'Passwords must match',
	});`;

export const ZOP_OPTIONS_CODE = `import { zodResolver } from '@hookform/resolvers/zod';
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
};`;
