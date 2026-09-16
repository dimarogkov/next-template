import { Metadata } from 'next';
import { TITLE_CODE, TITLE_DEMO_CODE, TITLE_USAGE_CODE } from '@code';
import { IDocumentationData, IDocumentationCodeSection, IDocumentationPreview } from '@interfaces/Documentation';
import { DocumentationDetailClient } from '@components/organisms';
import { Text } from '@components/atoms';
import { TitleDemo } from './TitleDemo';

export const metadata: Metadata = {
    title: 'Title'
};

const TitlePage = () => {
    const preview: IDocumentationPreview = {
        demo: <TitleDemo />,
        code: TITLE_DEMO_CODE
    };

    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/atoms/Title',
            description: (
                <Text>
                    Include a custom <span className="badge-item">Title</span> component for consistent and maintainable
                    usage throughout the project.
                </Text>
            ),
            withAccordion: false,
            codeArr: [TITLE_CODE]
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: (
                <Text>
                    Import the <span className="badge-item">Title</span> component to build your UI.
                </Text>
            ),
            withAccordion: false,
            codeArr: [TITLE_USAGE_CODE]
        }
    ];

    const data: IDocumentationData = {
        title: 'Title',
        description: 'Styles for headings.',
        links: [],
        preview,
        codeSections
    };

    return <DocumentationDetailClient data={data} />;
};

export default TitlePage;
