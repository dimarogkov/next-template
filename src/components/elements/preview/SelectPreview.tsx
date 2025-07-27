import { Select } from '@/src/components/ui';

const SelectPreview = () => {
    return (
        <Select>
            <Select.Trigger placeholder='Select a fruit' />
            <Select.Options>
                <Select.Option value='apple'>Apple</Select.Option>
                <Select.Option value='banana'>Banana</Select.Option>
                <Select.Option value='blueberry'>Blueberry</Select.Option>
                <Select.Option value='pineapple'>Pineapple</Select.Option>
            </Select.Options>
        </Select>
    );
};

export default SelectPreview;
