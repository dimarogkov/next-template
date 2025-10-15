export const TABS_DEMO_CODE = `'use client';
import { useState } from 'react';
import { Checkbox, Label, Tabs } from '@components/atoms';

export default function TabsDemo() {
    const [hasAnimation, setHasAnimation] = useState(false);

    return (
        <>
            <Label className='mb-5 last:mb-0'>
                <Checkbox
                    label='Add Animation'
                    checked={hasAnimation}
                    onChange={() => setHasAnimation(!hasAnimation)}
                />
            </Label>

            <Tabs hasAnimation={hasAnimation}>
                <Tabs.TabList>
                    <Tabs.Tab>Tab 1</Tabs.Tab>
                    <Tabs.Tab>Tab 2</Tabs.Tab>
                    <Tabs.Tab>Tab 3</Tabs.Tab>
                </Tabs.TabList>
                <Tabs.Panels>
                    <Tabs.Panel>
                        Panel 1. Lorem, ipsum dolor sit amet consectetur. Lorem, ipsum dolor sit amet consectetur, asd
                        dima and some people.
                    </Tabs.Panel>
                    <Tabs.Panel>
                        Panel 2. Lorem, ipsum dolor sit amet consectetur. Lorem, ipsum dolor sit amet consectetur, asd
                        dima and some people.
                    </Tabs.Panel>
                    <Tabs.Panel>
                        Panel 3. Lorem, ipsum dolor sit amet consectetur. Lorem, ipsum dolor sit amet consectetur.
                        Lorem, ipsum dolor sit amet consectetur. Lorem, ipsum dolor sit amet consectetur, asd dima and
                        some people.
                    </Tabs.Panel>
                </Tabs.Panels>
            </Tabs>
        </>
    );
}`;
