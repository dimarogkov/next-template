export const TABS_USAGE_CODE = `import { Tabs } from '@components/atoms';

<Tabs>
  <Tabs.TabList>
    <Tabs.Tab>Tab 1</Tabs.Tab>
    <Tabs.Tab>...</Tabs.Tab>
    <Tabs.Tab>...</Tabs.Tab>
  </Tabs.TabList>
  <Tabs.Panels>
    <Tabs.Panel>Panel 1</Tabs.Panel>
    <Tabs.Panel>...</Tabs.Panel>
    <Tabs.Panel>...</Tabs.Panel>
  </Tabs.Panels>
</Tabs>`;

export const TABS_ACTIVE_USAGE_CODE = `<Tabs defaultActiveIndex={1}>
  <Tabs.TabList>
    <Tabs.Tab>Tab 1</Tabs.Tab>
    <Tabs.Tab>...</Tabs.Tab>
    <Tabs.Tab>...</Tabs.Tab>
  </Tabs.TabList>
  <Tabs.Panels>
    <Tabs.Panel>Panel 1</Tabs.Panel>
    <Tabs.Panel>...</Tabs.Panel>
    <Tabs.Panel>...</Tabs.Panel>
  </Tabs.Panels>
</Tabs>`;

export const TABS_ANIMATION_USAGE_CODE = `<Tabs hasAnimation>
  <Tabs.TabList>
    <Tabs.Tab>Tab 1</Tabs.Tab>
    <Tabs.Tab>...</Tabs.Tab>
    <Tabs.Tab>...</Tabs.Tab>
  </Tabs.TabList>
  <Tabs.Panels>
    <Tabs.Panel>Panel 1</Tabs.Panel>
    <Tabs.Panel>...</Tabs.Panel>
    <Tabs.Panel>...</Tabs.Panel>
  </Tabs.Panels>
</Tabs>`;

export const TABS_CONTROLLED_USAGE_CODE = `import { useState } from 'react';
import { Tabs } from '@components/atoms';

export const TabsControlled = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Tabs activeIndex={activeIndex} onActiveIndexChange={setActiveIndex}>
      <Tabs.TabList>
        <Tabs.Tab>Tab 1</Tabs.Tab>
        <Tabs.Tab>...</Tabs.Tab>
        <Tabs.Tab>...</Tabs.Tab>
      </Tabs.TabList>
      <Tabs.Panels>
        <Tabs.Panel>Panel 1</Tabs.Panel>
        <Tabs.Panel>...</Tabs.Panel>
        <Tabs.Panel>...</Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  );
};`;

export const TABS_DISABLED_USAGE_CODE = `<Tabs>
  <Tabs.TabList>
    <Tabs.Tab>Tab 1</Tabs.Tab>
    <Tabs.Tab disabled>...</Tabs.Tab>
    <Tabs.Tab>...</Tabs.Tab>
  </Tabs.TabList>
  <Tabs.Panels>
    <Tabs.Panel>Panel 1</Tabs.Panel>
    <Tabs.Panel>...</Tabs.Panel>
    <Tabs.Panel>...</Tabs.Panel>
  </Tabs.Panels>
</Tabs>`;
