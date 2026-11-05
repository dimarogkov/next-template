import { Metadata } from 'next';
import { IDocumentationData, IDocumentationCodeSection, IDocumentationPreview } from '@interfaces/Documentation';
import { DocumentationDetailClient } from '@components/organisms';
import { Text } from '@components/atoms';
import { BTN_CODE, BTN_DEMO_CODE, BTN_USAGE_CODE, BTN_HREF_USAGE_CODE, NPM_CLASSNAMES_CODE } from '@code';
import { BtnDemo } from './BtnDemo';

export const metadata: Metadata = {
    title: 'Btn'
};

const BtnPage = () => {
    const preview: IDocumentationPreview = {
        demo: <BtnDemo />,
        code: BTN_DEMO_CODE
    };

    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'installation',
            title: 'Installation',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [NPM_CLASSNAMES_CODE]
        },
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/atoms/Btn',
            description: (
                <Text>
                    Include a custom <span className="badge-item">Btn</span> component for consistent and maintainable
                    usage throughout the project.
                </Text>
            ),
            withAccordion: false,
            codeArr: [BTN_CODE]
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: (
                <Text>
                    Import the <span className="badge-item">Btn</span> component to build your UI.
                </Text>
            ),
            withAccordion: false,
            codeArr: [BTN_USAGE_CODE]
        },
        {
            id: 'link',
            title: 'Link',
            link: '',
            description: (
                <Text>
                    Pass an <span className="badge-item">href</span> prop to render a router link styled as a button,
                    instead of a plain button element.
                </Text>
            ),
            withAccordion: false,
            codeArr: [BTN_HREF_USAGE_CODE]
        }
    ];

    const data: IDocumentationData = {
        title: 'Button',
        description: 'Displays a button or a component that looks like a button.',
        links: [],
        preview,
        codeSections
    };

    return <DocumentationDetailClient data={data} />;
};

export default BtnPage;
