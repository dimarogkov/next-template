export const YUP_DEMO_CODE = `'use client';
import { InferType } from 'yup';
import { useForm } from 'react-hook-form';
import { formOptions, validationSchema } from '@form-validation/yup';
import {
  Btn,
  Checkbox,
  ErrorMessage,
  Input,
  InputPassword,
  Label,
  Radio,
  Select,
  Textarea,
  Toast
} from '@components/atoms';
import { RotateCcw, SendHorizontal } from 'lucide-react';
import toast from 'react-hot-toast';

type FormData = InferType<typeof validationSchema>;

export const YupDemo = () => {
  const {
    register,
    watch,
    trigger,
    getValues,
    handleSubmit,
    reset,
    formState: { errors, isDirty }
  } = useForm(formOptions);

  const onSubmit = (data: FormData) => {
    return toast.custom((t) => (
      <Toast toast={t} type="success" data={{ title: 'Form submitted', text: \`Submitted: \${data.username}\` }} />
    ));
  };

  return (
    <form className="relative flex w-full flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      <Label className="flex flex-col gap-2">
        <Input {...register('username')} autoComplete="username" placeholder="Username" />
        {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}
      </Label>

      <Label className="flex flex-col gap-2">
        <Input {...register('age')} type="number" placeholder="Age" />
        {errors.age && <ErrorMessage>{errors.age.message}</ErrorMessage>}
      </Label>

      <Label className="flex flex-col gap-2">
        <Input {...register('email')} type="email" autoComplete="email" placeholder="Email" />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </Label>

      <Label className="flex flex-col gap-2">
        <Input {...register('phone')} type="tel" autoComplete="tel" placeholder="Phone" />
        {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
      </Label>

      <Label className="flex flex-col gap-2">
        <Select {...register('select')} value={watch('select')}>
          <Select.Trigger placeholder="Select Option" />
          <Select.Options>
            <Select.Option value="option_1">Option 1</Select.Option>
            <Select.Option value="option_2">Option 2</Select.Option>
            <Select.Option value="option_3">Option 3</Select.Option>
          </Select.Options>
        </Select>

        {errors.select && <ErrorMessage>{errors.select.message}</ErrorMessage>}
      </Label>

      <Label className="flex flex-col gap-2">
        <InputPassword
          {...register('password', {
            onChange: () => {
              if (getValues('confirmPassword')) {
                trigger('confirmPassword');
              }
            }
          })}
          autoComplete="new-password"
          placeholder="Password"
        />
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
      </Label>

      <Label className="flex flex-col gap-2">
        <InputPassword
          {...register('confirmPassword')}
          autoComplete="new-password"
          placeholder="Confirm Password"
        />
        {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>}
      </Label>

      <Label>
        <Textarea placeholder="Type your message here." />
      </Label>

      <div className="flex w-full flex-col gap-2">
        <div className="flex w-full gap-4">
          <Label className="w-full">
            <Radio
              {...register('radioType')}
              value="type_one"
              label="Type One"
              checked={watch('radioType') === 'type_one'}
            />
          </Label>

          <Label className="w-full">
            <Radio
              {...register('radioType')}
              value="type_two"
              label="Type Two"
              checked={watch('radioType') === 'type_two'}
            />
          </Label>
        </div>

        {errors.radioType && <ErrorMessage>{errors.radioType.message}</ErrorMessage>}
      </div>

      <Label className="flex flex-col gap-2">
        <Checkbox {...register('rememberMe')} label="Remember me" checked={watch('rememberMe')} />
        {errors.rememberMe && <ErrorMessage>{errors.rememberMe.message}</ErrorMessage>}
      </Label>

      <div className="flex w-full flex-wrap gap-2">
        <Btn type="submit">
          <span>Send</span>
          <SendHorizontal className="size-5" />
        </Btn>

        <Btn type="button" variant="ghost" disabled={!isDirty} onClick={() => reset()}>
          <RotateCcw className="size-5" />
          <span>Reset</span>
        </Btn>
      </div>
    </form>
  );
};`;
