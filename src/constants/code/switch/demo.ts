export const SWITCH_DEMO_CODE = `import { Switch } from '@components/atoms';

export const SwitchDemo = () => {
  return (
    <div className="relative flex w-full flex-col gap-2.5">
      <Switch label="Enable notifications" />
      <Switch label="Auto-renew subscription" isActive />
      <Switch label="Unavailable option" disabled />
    </div>
  );
};`;
