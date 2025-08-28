import { Switch } from '@/src/components/ui';

const SwitchDemo = () => {
    return (
        <div className='relative flex flex-col gap-2.5 w-full'>
            <Switch />
            <Switch isActive />
            <Switch disabled />
        </div>
    );
};

export default SwitchDemo;
