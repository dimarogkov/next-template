import { Metadata } from 'next';
import { SIMPLE_LINK_CODE, SIMPLE_LINK_USAGE_CODE } from '@/src/variables/code';
import { IDocumentationData, IDocumentationCodeSection } from '@/src/types/interfaces/DocumentationData';
import { DocumentationClient } from '@/src/components/blocks';
import { SimpleLinkPreview } from '@/src/components/elements/preview';
import { Text } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Simple Link',
};

const SimpleLinkPage = () => {
    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/ui/SimpleLink.tsx',
            description: (
                <Text>
                    Include a custom <span className='badge-item'>SimpleLink</span> component for consistent and
                    maintainable usage throughout the project.
                </Text>
            ),
            withAccordion: false,
            codeArr: [SIMPLE_LINK_CODE],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [SIMPLE_LINK_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Simple Link',
        description:
            'A simple text link styled for use inside components or previews. Useful for inline documentation, examples, or interactive UI snippets.',
        preview: <SimpleLinkPreview />,
        codeSections,
    };

    return <DocumentationClient data={data} />;
};

export default SimpleLinkPage;
