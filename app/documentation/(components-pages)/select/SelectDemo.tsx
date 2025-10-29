'use client';
import { Label, Select } from '@components/atoms';

const FRAMEWORKS = [
    { value: 'react', label: 'React.js' },
    { value: 'vue', label: 'Vue.js' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
];

export default function SelectDemo() {
    return (
        <div className='relative flex flex-col gap-2.5'>
            <Label>
                <Select>
                    <Select.Trigger placeholder='Default select' />
                    <Select.Options>
                        <Select.Group>
                            <Select.Label>Frameworks</Select.Label>

                            {FRAMEWORKS.map(({ value, label }) => (
                                <Select.Option key={value} value={value}>
                                    {label}
                                </Select.Option>
                            ))}
                        </Select.Group>
                    </Select.Options>
                </Select>
            </Label>

            <Label>
                <Select multiple>
                    <Select.Trigger placeholder='Multiple select' />
                    <Select.Options>
                        <Select.Group>
                            <Select.Label>Frameworks</Select.Label>

                            {FRAMEWORKS.map(({ value, label }) => (
                                <Select.Option key={value} value={value}>
                                    {label}
                                </Select.Option>
                            ))}
                        </Select.Group>
                    </Select.Options>
                </Select>
            </Label>
        </div>
    );
}
