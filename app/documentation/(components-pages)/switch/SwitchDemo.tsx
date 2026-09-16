import { Switch } from '@components/atoms';

export const SwitchDemo = () => {
    return (
        <div className="relative flex w-full flex-col gap-2.5">
            <Switch />
            <Switch isActive />
            <Switch disabled />
        </div>
    );
};
