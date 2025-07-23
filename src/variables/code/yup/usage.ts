export const YUP_USAGE_CODE = `import { InferType } from 'yup';
import { useForm } from 'react-hook-form';
import { formOptions, validationSchema } from '../../../form-validation/yup';
import { Btn, Checkbox, ErrorMessage, Input, InputPassword, Label, Radio, Select, Textarea } from '../../ui';
import { RotateCcw, SendHorizontal } from 'lucide-react';

type FormData = InferType<typeof validationSchema>;

export const YupPreview = () => {
    const {
        register,
        watch,
        handleSubmit,
        reset,
        formState: { errors, isSubmitted },
    } = useForm(formOptions);

    const onSubmit = (data: FormData) => console.log(data);

    return (
        <form className='relative flex flex-col gap-5 w-full' onSubmit={handleSubmit(onSubmit)}>
            <Label className='flex flex-col gap-2'>
                <Input {...register('username')} placeholder='Username' />
                {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}
            </Label>

            <Label className='flex flex-col gap-2'>
                <Input {...register('age')} type='number' placeholder='Age' />
                {errors.age && <ErrorMessage>{errors.age.message}</ErrorMessage>}
            </Label>

            <Label className='flex flex-col gap-2'>
                <Input {...register('email')} placeholder='Email' />
                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </Label>

            <Label className='flex flex-col gap-2'>
                <Input {...register('phone')} placeholder='Phone' />
                {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
            </Label>

            <Label className='flex flex-col gap-2'>
                <Select {...register('select')}>
                    <Select.Trigger placeholder='Select Option' />
                    <Select.Options>
                        <Select.Option value='option_1'>Option 1</Select.Option>
                        <Select.Option value='option_2'>Option 2</Select.Option>
                        <Select.Option value='option_3'>Option 3</Select.Option>
                    </Select.Options>
                </Select>

                {errors.select && <ErrorMessage>{errors.select.message}</ErrorMessage>}
            </Label>

            <Label className='flex flex-col gap-2'>
                <InputPassword {...register('password')} placeholder='Password' />
                {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
            </Label>

            <Label className='flex flex-col gap-2'>
                <InputPassword {...register('confirmPassword')} placeholder='Confirm Password' />
                {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>}
            </Label>

            <Label>
                <Textarea placeholder='Type your message here.' />
            </Label>

            <div className='flex flex-col gap-2 w-full'>
                <div className='flex gap-4 w-full'>
                    <Label className='w-full'>
                        <Radio
                            {...register('radioType')}
                            value='type_one'
                            label='Type One'
                            checked={watch('radioType') === 'type_one'}
                        />
                    </Label>

                    <Label className='w-full'>
                        <Radio
                            {...register('radioType')}
                            value='type_two'
                            label='Type Two'
                            checked={watch('radioType') === 'type_two'}
                        />
                    </Label>
                </div>

                {errors.radioType && <ErrorMessage>{errors.radioType.message}</ErrorMessage>}
            </div>

            <Label className='flex flex-col gap-2'>
                <Checkbox {...register('rememberMe')} label='Remember me' checked={watch('rememberMe')} />
                {errors.rememberMe && <ErrorMessage>{errors.rememberMe.message}</ErrorMessage>}
            </Label>

            <div className='flex flex-wrap gap-2 w-full'>
                <Btn type='submit'>
                    <span>Send</span>
                    <SendHorizontal className='size-5' />
                </Btn>

                <Btn type='button' variant='ghost' disabled={!isSubmitted} onClick={() => reset()}>
                    <RotateCcw className='size-5' />
                    <span>Reset</span>
                </Btn>
            </div>
        </form>
    );
};`;
