import { Metadata } from 'next';
import { BADGE_CODE, BADGE_DEMO_CODE, BADGE_USAGE_CODE, BADGE_ICON_USAGE_CODE } from '@code';
import { IDocumentationData, IDocumentationCodeSection, IDocumentationPreview } from '@interfaces/Documentation';
import { DocumentationDetailClient } from '@components/organisms';
import { Text } from '@components/atoms';
import BadgeDemo from './BadgeDemo';

export const metadata: Metadata = {
    title: 'Badge',
};

export default function BadgePage() {
    const preview: IDocumentationPreview = {
        demo: <BadgeDemo />,
        code: BADGE_DEMO_CODE,
    };

    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/atoms/Badge',
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
        {
            id: 'icon',
            title: 'Icon',
            link: '',
            description: (
                <Text>
                    Display an icon inside a <span className='badge-item'>Badge</span> component to highlight statuses
                    or actions in a compact form.
                </Text>
            ),
            withAccordion: false,
            codeArr: [BADGE_ICON_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Badge',
        description: 'Displays a badge or a component that looks like a badge.',
        links: [],
        preview,
        codeSections,
    };

    return <DocumentationDetailClient data={data} />;
}
