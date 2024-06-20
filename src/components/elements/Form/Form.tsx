'use client';
import { useForm } from 'react-hook-form';
import { formOptions } from '@/src/helpers/formOptions';
import { FormNames } from '@/src/types/enums/FormNames';
import { Btn, BtnLink, ErrorMessage, Input, Label, Title } from '../../ui';

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(formOptions);

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <div className='w-full mb-[40px] last:mb-0'>
            <BtnLink href='/' className='mb-[20px] last:mb-0'>
                Back
            </BtnLink>

            <Title className='mb-[20px] last:mb-0'>React Hook Form</Title>

            <form className='w-full max-w-[600px]' onSubmit={handleSubmit(onSubmit)}>
                <Label className='w-full mb-[20px] last:mb-0'>
                    <Input
                        placeholder='Username'
                        register={register}
                        registerName={FormNames.username}
                        className='mb-[8px] last:mb-0'
                    />

                    {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}
                </Label>

                <Label className='w-full mb-[20px] last:mb-0'>
                    <Input
                        type='number'
                        placeholder='Age'
                        register={register}
                        registerName={FormNames.age}
                        className='mb-[8px] last:mb-0'
                    />

                    {errors.age && <ErrorMessage>{errors.age.message}</ErrorMessage>}
                </Label>

                <Label className='w-full mb-[20px] last:mb-0'>
                    <Input
                        type='email'
                        placeholder='Email'
                        register={register}
                        registerName={FormNames.email}
                        className='mb-[8px] last:mb-0'
                    />

                    {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                </Label>

                <Label className='w-full mb-[20px] last:mb-0'>
                    <Input
                        placeholder='Phone'
                        register={register}
                        registerName={FormNames.phone}
                        className='mb-[8px] last:mb-0'
                    />

                    {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
                </Label>

                <Label className='w-full mb-[20px] last:mb-0'>
                    <Input
                        type='password'
                        placeholder='Password'
                        register={register}
                        registerName={FormNames.password}
                        className='mb-[8px] last:mb-0'
                    />

                    {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                </Label>

                <Label className='w-full mb-[20px] last:mb-0'>
                    <Input
                        type='password'
                        placeholder='Confirm Password'
                        register={register}
                        registerName={FormNames.confirmPassword}
                        className='mb-[8px] last:mb-0'
                    />

                    {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>}
                </Label>

                <Btn type='submit'>Send</Btn>
            </form>
        </div>
    );
};

export default Form;
