export const TABS_DEMO_CODE = `'use client';
import { useState } from 'react';
import { Checkbox, Tabs } from '@components/atoms';

export const TabsDemo = () => {
  const [hasAnimation, setHasAnimation] = useState(false);

  return (
    <>
      <Checkbox
        label="Add Animation"
        checked={hasAnimation}
        onChange={() => setHasAnimation(!hasAnimation)}
        className="mb-5 last:mb-0"
      />

      <Tabs hasAnimation={hasAnimation}>
        <Tabs.TabList>
          <Tabs.Tab>Overview</Tabs.Tab>
          <Tabs.Tab>Features</Tabs.Tab>
          <Tabs.Tab disabled>Details</Tabs.Tab>
        </Tabs.TabList>
        <Tabs.Panels>
          <Tabs.Panel>
            This jacket is built for cold mornings and long days outside, with a warm inner lining and a
            water resistant outer shell that holds up against light rain and wind. It packs down small
            enough to fit in a daypack when the weather clears up.
          </Tabs.Panel>
          <Tabs.Panel>
            A zippered chest pocket, adjustable cuffs, and a drawstring hem keep the fit snug no matter how
            you move. The hood folds away into the collar when you do not need it, and the two side pockets
            are deep enough for gloves.
          </Tabs.Panel>
          <Tabs.Panel>
            Available in three colors and sizes small through extra large. Machine washable on a cold,
            gentle cycle, and best left to air dry instead of using a tumble dryer.
          </Tabs.Panel>
        </Tabs.Panels>
      </Tabs>
    </>
  );
};`;
