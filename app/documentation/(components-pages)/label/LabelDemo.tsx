import { Input, Label } from '@components/atoms';

export default function LabelDemo() {
    return (
        <Label>
            <Input name='name' placeholder='Username' />
        </Label>
    );
}
