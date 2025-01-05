'use client';
import { useForm } from 'react-hook-form';
import { formOptions } from '@/src/helpers';
import { EnumFormNames, EnumBtn } from '@/src/types/enums';
import { Btn, Checkbox, ErrorMessage, Input, InputPassword, Label, Radio, Select } from '../ui';

const Form = () => {
    const {
        register,
        watch,
        handleSubmit,
        reset,
        formState: { errors, isSubmitted },
    } = useForm(formOptions);

    const onSubmit = (data: any) => console.log(data);

    return (
        <form className='flex flex-col gap-5 w-full max-w-xl' onSubmit={handleSubmit(onSubmit)}>
            <Label className='flex flex-col gap-2'>
                <Select {...register(EnumFormNames.select)}>
                    <Select.Option value='default' hidden>
                        Select Option
                    </Select.Option>
                    <Select.Option value='option_1'>Option 1</Select.Option>
                    <Select.Option value='option_2'>Option 2</Select.Option>
                    <Select.Option value='option_3'>Option 3</Select.Option>
                </Select>

                {errors.select && <ErrorMessage>{errors.select.message}</ErrorMessage>}
            </Label>

            <Label className='flex flex-col gap-2'>
                <Input placeholder='Username' {...register(EnumFormNames.username)} />
                {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}
            </Label>

            <Label className='flex flex-col gap-2'>
                <Input type='number' placeholder='Age' {...register(EnumFormNames.age)} />
                {errors.age && <ErrorMessage>{errors.age.message}</ErrorMessage>}
            </Label>

            <Label className='flex flex-col gap-2'>
                <Input type='email' placeholder='Email' {...register(EnumFormNames.email)} />
                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </Label>

            <Label className='flex flex-col gap-2'>
                <Input placeholder='Phone' {...register(EnumFormNames.phone)} />
                {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
            </Label>

            <Label className='flex flex-col gap-2'>
                <InputPassword placeholder='Password' autoComplete='Password' {...register(EnumFormNames.password)} />
                {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
            </Label>

            <Label className='flex flex-col gap-2'>
                <InputPassword
                    placeholder='Confirm Password'
                    autoComplete='Confirm Password'
                    {...register(EnumFormNames.confirmPassword)}
                />

                {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>}
            </Label>

            <div className='flex flex-col gap-2 w-full'>
                <div className='flex gap-4 w-full'>
                    <Label className='w-full'>
                        <Radio
                            isChecked={watch('radioType')}
                            value='type_one'
                            label='Type One'
                            {...register(EnumFormNames.radioType)}
                        />
                    </Label>

                    <Label className='w-full'>
                        <Radio
                            isChecked={watch('radioType')}
                            value='type_two'
                            label='Type Two'
                            {...register(EnumFormNames.radioType)}
                        />
                    </Label>
                </div>

                {errors.radioType && <ErrorMessage>{errors.radioType.message}</ErrorMessage>}
            </div>

            <Label className='flex flex-col gap-2'>
                <Checkbox isChecked={watch('rememberMe')} label='Remember me' {...register(EnumFormNames.rememberMe)} />
                {errors.rememberMe && <ErrorMessage>{errors.rememberMe.message}</ErrorMessage>}
            </Label>

            <div className='flex flex-wrap gap-2 w-full'>
                <Btn type='submit'>Send</Btn>

                <Btn type='button' btnType={EnumBtn.disabled} disabled={!isSubmitted} onClick={() => reset()}>
                    Reset
                </Btn>
            </div>
        </form>
    );
};

export default Form;
