'use client';
import { useForm } from 'react-hook-form';
import { formOptions } from '@/src/helpers';
import { EnumFormNames, EnumBtn } from '@/src/types/enums';
import { Btn, Checkbox, ErrorMessage, Input, Label, Radio, Select, Text } from '../ui';
import InputPassword from '../ui/InputPassword';

const Form = () => {
    const {
        register,
        watch,
        handleSubmit,
        reset,
        formState: { errors, isSubmitted },
    } = useForm(formOptions);

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <form className='w-full max-w-xl' onSubmit={handleSubmit(onSubmit)}>
            <Label className='w-full mb-5 last:mb-0'>
                <Select {...register(EnumFormNames.select)} className='mb-2 last:mb-0'>
                    <Select.Option value='default' hidden>
                        Select Option
                    </Select.Option>
                    <Select.Option value='option_1'>Option 1</Select.Option>
                    <Select.Option value='option_2'>Option 2</Select.Option>
                    <Select.Option value='option_3'>Option 3</Select.Option>
                </Select>

                {errors.select && <ErrorMessage>{errors.select.message}</ErrorMessage>}
            </Label>

            <Label className='w-full mb-5 last:mb-0'>
                <Input placeholder='Username' {...register(EnumFormNames.username)} className='mb-2 last:mb-0' />
                {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}
            </Label>

            <Label className='w-full mb-5 last:mb-0'>
                <Input type='number' placeholder='Age' {...register(EnumFormNames.age)} className='mb-2 last:mb-0' />
                {errors.age && <ErrorMessage>{errors.age.message}</ErrorMessage>}
            </Label>

            <Label className='w-full mb-5 last:mb-0'>
                <Input type='email' placeholder='Email' {...register(EnumFormNames.email)} className='mb-2 last:mb-0' />
                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </Label>

            <Label className='w-full mb-5 last:mb-0'>
                <Input placeholder='Phone' {...register(EnumFormNames.phone)} className='mb-2 last:mb-0' />
                {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
            </Label>

            <Label className='w-full mb-5 last:mb-0'>
                <InputPassword
                    placeholder='Password'
                    autoComplete='Password'
                    {...register(EnumFormNames.password)}
                    className='mb-2 last:mb-0'
                />

                {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
            </Label>

            <Label className='w-full mb-5 last:mb-0'>
                <InputPassword
                    placeholder='Confirm Password'
                    autoComplete='Confirm Password'
                    {...register(EnumFormNames.confirmPassword)}
                    className='mb-2 last:mb-0'
                />

                {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>}
            </Label>

            <div className='w-full mb-5 last:mb-0'>
                <div className='flex gap-4 w-full mb-2 last:mb-0'>
                    <Label className='w-full'>
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <Radio
                                isChecked={watch('radioType')}
                                value='type_one'
                                {...register(EnumFormNames.radioType)}
                            />
                            <Text>Type One</Text>
                        </div>
                    </Label>

                    <Label className='w-full'>
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <Radio
                                isChecked={watch('radioType')}
                                value='type_two'
                                {...register(EnumFormNames.radioType)}
                            />
                            <Text>Type Two</Text>
                        </div>
                    </Label>
                </div>

                {errors.radioType && <ErrorMessage>{errors.radioType.message}</ErrorMessage>}
            </div>

            <Label className='w-full mb-5 last:mb-0'>
                <div className='flex items-center gap-2 cursor-pointer mb-2 last:mb-0'>
                    <Checkbox isChecked={watch('rememberMe')} {...register(EnumFormNames.rememberMe)} />
                    <Text>Remember me</Text>
                </div>

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
