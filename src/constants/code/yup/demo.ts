export const YUP_DEMO_CODE = `'use client';
import { InferType } from 'yup';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
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
        <Input
          {...register('username')}
          autoComplete="username"
          placeholder="Username"
          aria-invalid={!!errors.username}
          aria-describedby={errors.username ? 'username-error' : undefined}
        />

        {errors.username && <ErrorMessage id="username-error">{errors.username.message}</ErrorMessage>}
      </Label>

      <Label className="flex flex-col gap-2">
        <Input
          {...register('age')}
          type="number"
          placeholder="Age"
          aria-invalid={!!errors.age}
          aria-describedby={errors.age ? 'age-error' : undefined}
        />

        {errors.age && <ErrorMessage id="age-error">{errors.age.message}</ErrorMessage>}
      </Label>

      <Label className="flex flex-col gap-2">
        <Input
          {...register('email')}
          type="email"
          autoComplete="email"
          placeholder="Email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />

        {errors.email && <ErrorMessage id="email-error">{errors.email.message}</ErrorMessage>}
      </Label>

      <Label className="flex flex-col gap-2">
        <Input
          {...register('phone')}
          type="tel"
          autoComplete="tel"
          placeholder="Phone"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
        />

        {errors.phone && <ErrorMessage id="phone-error">{errors.phone.message}</ErrorMessage>}
      </Label>

      <Label className="flex flex-col gap-2">
        <Select {...register('select')} value={watch('select')}>
          <Select.Trigger
            placeholder="Select Option"
            aria-invalid={!!errors.select}
            aria-describedby={errors.select ? 'select-error' : undefined}
          />
          <Select.Options>
            <Select.Option value="option_1">Option 1</Select.Option>
            <Select.Option value="option_2">Option 2</Select.Option>
            <Select.Option value="option_3">Option 3</Select.Option>
          </Select.Options>
        </Select>

        {errors.select && <ErrorMessage id="select-error">{errors.select.message}</ErrorMessage>}
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
          aria-invalid={!!errors.password}
          aria-describedby={errors.password ? 'password-error' : undefined}
        />

        {errors.password && <ErrorMessage id="password-error">{errors.password.message}</ErrorMessage>}
      </Label>

      <Label className="flex flex-col gap-2">
        <InputPassword
          {...register('confirmPassword')}
          autoComplete="new-password"
          placeholder="Confirm Password"
          aria-invalid={!!errors.confirmPassword}
          aria-describedby={errors.confirmPassword ? 'confirmPassword-error' : undefined}
        />

        {errors.confirmPassword && (
          <ErrorMessage id="confirmPassword-error">{errors.confirmPassword.message}</ErrorMessage>
        )}
      </Label>

      <Label className="flex!">
        <Textarea
          {...register('message')}
          placeholder="Type your message here."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />

        {errors.message && <ErrorMessage id="message-error">{errors.message.message}</ErrorMessage>}
      </Label>

      <div className="flex w-full flex-col gap-2">
        <div className="flex w-full gap-4">
          <Radio
            {...register('radioType')}
            value="type_one"
            label="Type One"
            checked={watch('radioType') === 'type_one'}
            aria-invalid={!!errors.radioType}
            aria-describedby={errors.radioType ? 'radioType-error' : undefined}
            className="w-full"
          />

          <Radio
            {...register('radioType')}
            value="type_two"
            label="Type Two"
            checked={watch('radioType') === 'type_two'}
            aria-invalid={!!errors.radioType}
            aria-describedby={errors.radioType ? 'radioType-error' : undefined}
            className="w-full"
          />
        </div>

        {errors.radioType && <ErrorMessage id="radioType-error">{errors.radioType.message}</ErrorMessage>}
      </div>

      <div className="flex flex-col gap-2">
        <Checkbox
          {...register('rememberMe')}
          label="Remember me"
          checked={watch('rememberMe')}
          aria-invalid={!!errors.rememberMe}
          aria-describedby={errors.rememberMe ? 'rememberMe-error' : undefined}
        />

        {errors.rememberMe && <ErrorMessage id="rememberMe-error">{errors.rememberMe.message}</ErrorMessage>}
      </div>

      <div className="flex w-full flex-wrap gap-2">
        <Btn type="submit" variant="secondary">
          <span>Send</span>
          <SendHorizontal className="size-5" />
        </Btn>

        <Btn type="button" variant="outline" disabled={!isDirty} onClick={() => reset()}>
          <RotateCcw className="size-5" />
          <span>Reset</span>
        </Btn>
      </div>
    </form>
  );
};`;
