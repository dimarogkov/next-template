import { FC } from 'react';
import { IDocumentationPreview } from '@/src/types/interfaces/Documentation';
import ComponentsCodeDetail from './ComponentsCodeDetail';
import { Tabs } from '@/src/components/ui';

type Props = {
    preview: IDocumentationPreview;
};

const ComponentsPreview: FC<Props> = ({ preview }) => {
    const { demo, code } = preview;

    return (
        <div className='relative w-full py-4 md:py-5'>
            <Tabs>
                <Tabs.TabList>
                    <Tabs.Tab>Preview</Tabs.Tab>
                    <Tabs.Tab>Code</Tabs.Tab>
                </Tabs.TabList>
                <Tabs.Panels>
                    <Tabs.Panel className='!p-4'>{demo}</Tabs.Panel>

                    <Tabs.Panel className='!p-0'>
                        <ComponentsCodeDetail code={code} type='code' />
                    </Tabs.Panel>
                </Tabs.Panels>
            </Tabs>
        </div>
    );
};

export default ComponentsPreview;
