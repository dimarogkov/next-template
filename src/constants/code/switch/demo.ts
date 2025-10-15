export const SWITCH_DEMO_CODE = `import { Switch } from '@components/atoms';

export default function SwitchDemo() {
    return (
        <div className='relative flex flex-col gap-2.5 w-full'>
            <Switch />
            <Switch isActive />
            <Switch disabled />
        </div>
    );
}`;
