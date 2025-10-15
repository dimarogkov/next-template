export const INPUT_DEMO_CODE = `import { Input, Label } from '@components/atoms';

export default function InputDemo() {
    return (
        <Label>
            <Input name='name' placeholder='Username' />
        </Label>
    );
}`;

export const INPUT_PASSWORD_DEMO_CODE = `import { InputPassword, Label } from '@components/atoms';

export default function InputPasswordDemo() {
    return (
        <Label>
            <InputPassword name='password' placeholder='Password' />
        </Label>
    );
}`;
