import { Metadata } from 'next';
import { BADGE_CODE, BADGE_USAGE_CODE } from '@/src/variables/code';
import { IDocumentationData, IDocumentationCodeSection } from '@/src/types/interfaces/DocumentationData';
import { DocumentationClient } from '@/src/components/blocks';
import { BadgePreview } from '@/src/components/elements/preview';
import { Text } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Badge',
};

const BadgePage = () => {
    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/ui/Badge.tsx',
            description: (
                <Text>
                    Include a custom <span className='badge-item'>Badge</span> component for consistent and maintainable
                    usage throughout the project.
                </Text>
            ),
            withAccordion: false,
            codeArr: [BADGE_CODE],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [BADGE_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Badge',
        description: 'Displays a badge or a component that looks like a badge.',
        preview: <BadgePreview />,
        codeSections,
    };

    return <DocumentationClient data={data} />;
};

export default BadgePage;
