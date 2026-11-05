import { Metadata } from 'next';
import { IDocumentationData, IDocumentationCodeSection, IDocumentationPreview } from '@interfaces/Documentation';
import { DocumentationDetailClient } from '@components/organisms';
import { Text } from '@components/atoms';
import { SEPARATOR_CODE, SEPARATOR_DEMO_CODE, SEPARATOR_USAGE_CODE, SEPARATOR_ORIENTATION_USAGE_CODE } from '@code';
import { SeparatorDemo } from './SeparatorDemo';

export const metadata: Metadata = {
    title: 'Separator'
};

const SeparatorPage = () => {
    const preview: IDocumentationPreview = {
        demo: <SeparatorDemo />,
        code: SEPARATOR_DEMO_CODE
    };

    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/atoms/Separator',
            description: (
                <Text>
                    Include a custom <span className="badge-item">Separator</span> component for consistent and
                    maintainable usage throughout the project.
                </Text>
            ),
            withAccordion: false,
            codeArr: [SEPARATOR_CODE]
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: (
                <Text>
                    Import the <span className="badge-item">Separator</span> component to build your UI.
                </Text>
            ),
            withAccordion: false,
            codeArr: [SEPARATOR_USAGE_CODE]
        },
        {
            id: 'orientation',
            title: 'Orientation',
            link: '',
            description: (
                <Text>
                    To change the orientation, add the <span className="badge-item">orientation</span> prop to the&nbsp;
                    <span className="badge-item">Separator</span> component.
                </Text>
            ),
            withAccordion: false,
            codeArr: [SEPARATOR_ORIENTATION_USAGE_CODE]
        }
    ];

    const data: IDocumentationData = {
        title: 'Separator',
        description: 'Visually or semantically separates content.',
        links: [],
        preview,
        codeSections
    };

    return <DocumentationDetailClient data={data} />;
};

export default SeparatorPage;
