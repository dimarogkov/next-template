import { Label, Select } from '@components/atoms';

export default function SelectDemo() {
    return (
        <Label>
            <Select>
                <Select.Trigger placeholder='Select a fruit' />
                <Select.Options>
                    <Select.Option value='apple'>Apple</Select.Option>
                    <Select.Option value='banana'>Banana</Select.Option>
                    <Select.Option value='blueberry'>Blueberry</Select.Option>
                    <Select.Option value='pineapple'>Pineapple</Select.Option>
                </Select.Options>
            </Select>
        </Label>
    );
}
