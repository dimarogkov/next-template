import { InputPassword, Label } from '@components/atoms';

export default function InputPasswordDemo() {
    return (
        <Label>
            <InputPassword name='password' placeholder='Password' />
        </Label>
    );
}
