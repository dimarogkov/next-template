import { InputPassword, Label } from '@/src/components/ui';

const InputPasswordPreview = () => {
    return (
        <Label>
            <InputPassword name='password' placeholder='Password' />
        </Label>
    );
};

export default InputPasswordPreview;
