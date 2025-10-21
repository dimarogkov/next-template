import { IDocumentationPreview } from '@interfaces/Documentation';
import { ComponentsCodeDetail } from '@components/organisms';
import { Tabs } from '@components/atoms';

type Props = {
    preview: IDocumentationPreview;
};

export default function ComponentsPreview({ preview }: Props) {
    const { demo, code } = preview;

    return (
        <div className='relative w-full py-4 md:py-5'>
            <Tabs>
                <Tabs.TabList>
                    <Tabs.Tab>Preview</Tabs.Tab>
                    <Tabs.Tab>Code</Tabs.Tab>
                </Tabs.TabList>

                <Tabs.Panels>
                    <Tabs.Panel className='!p-2.5 sm:!p-4'>{demo}</Tabs.Panel>

                    <Tabs.Panel className='!p-0'>
                        <ComponentsCodeDetail code={code} type='code' />
                    </Tabs.Panel>
                </Tabs.Panels>
            </Tabs>
        </div>
    );
}
