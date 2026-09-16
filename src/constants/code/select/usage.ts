export const SELECT_USAGE_CODE = `import { Select } from '@components/atoms';

<Select>
  <Select.Trigger placeholder='Select item' />
  <Select.Options>
    <Select.Option value='value_1'>...</Select.Option>
    <Select.Option value='value_2'>...</Select.Option>
    <Select.Option value='value_3'>...</Select.Option>
  </Select.Options>
</Select>`;

export const SELECT_CONTROLLED_USAGE_CODE = `import { useState } from 'react';
import { Select } from '@components/atoms';

export const SelectDemo = () => {
  const [value, setValue] = useState('');

  return (
    <Select value={value} onChange={({ target }) => setValue(target.value)}>
      <Select.Trigger placeholder='Select item' />
      <Select.Options>
        <Select.Option value='value_1'>...</Select.Option>
        <Select.Option value='value_2'>...</Select.Option>
        <Select.Option value='value_3'>...</Select.Option>
      </Select.Options>
    </Select>
  );
};`;

export const SELECT_ICON_USAGE_CODE = `import { ChevronDown } from 'lucide-react';

<Select>
  <Select.Trigger placeholder='Select item' icon={ChevronDown} />
  <Select.Options>
    <Select.Option value='value_1'>...</Select.Option>
    <Select.Option value='value_2'>...</Select.Option>
    <Select.Option value='value_3'>...</Select.Option>
  </Select.Options>
</Select>`;

export const SELECT_MULTIPLE_USAGE_CODE = `<Select multiple>
  <Select.Trigger placeholder='Select item' />
  <Select.Options>
    <Select.Option value='value_1'>...</Select.Option>
    <Select.Option value='value_2'>...</Select.Option>
    <Select.Option value='value_3'>...</Select.Option>
  </Select.Options>
</Select>`;
