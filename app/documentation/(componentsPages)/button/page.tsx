import { Metadata } from 'next';
import {
    BTN_LINK_CODE,
    BTN_CODE,
    BTN_USAGE_CODE,
    NPM_CLASSNAMES_CODE,
    BTN_LINK_USAGE_CODE,
    BTN_WRAPPER_CODE,
} from '@/src/variables/code';
import { IDocumentationData, IDocumentationCodeSection } from '@/src/types/interfaces/DocumentationData';
import { DocumentationClient } from '@/src/components/blocks';
import { BtnPreview } from '@/src/components/elements/preview';
import { Text } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Btn',
};

const BtnPage = () => {
    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'installation',
            title: 'Installation',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [NPM_CLASSNAMES_CODE],
        },
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/ui/Btn',
            description: (
                <Text>
                    Include a custom <span className='badge-item'>Btn</span> component for consistent and maintainable
                    usage throughout the project.
                </Text>
            ),
            withAccordion: true,
            codeArr: [
                { label: 'index.ts', code: BTN_CODE },
                { label: 'BtnWrapper.tsx', code: BTN_WRAPPER_CODE },
                { label: 'BtnLink.tsx', code: BTN_LINK_CODE },
            ],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [BTN_USAGE_CODE],
        },
        {
            id: 'link',
            title: 'Link',
            link: '',
            description: (
                <Text>
                    You can use the <span className='badge-item'>isLink</span> prop and&nbsp;
                    <span className='badge-item'>Btn.Link</span> child component to make another component look like a
                    button. Here&apos;s an example of a link that looks like a button.
                </Text>
            ),
            withAccordion: false,
            codeArr: [BTN_LINK_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Button',
        description: 'Displays a button or a component that looks like a button.',
        preview: <BtnPreview />,
        codeSections,
    };

    return <DocumentationClient data={data} />;
};

export default BtnPage;
