import { Metadata } from 'next';
import { NPM_CLASSNAMES_CODE, PROGRESS_CODE, PROGRESS_USAGE_CODE } from '@/src/variables/code';
import { IDocumentationData, IDocumentationCodeSection } from '@/src/types/interfaces/DocumentationData';
import { DocumentationClient } from '@/src/components/blocks';
import { ProgressPreview } from '@/src/components/elements/preview';
import { Text } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Progress',
};

const ProgressPage = () => {
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
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/ui/Progress.tsx',
            description: (
                <Text>
                    Include a custom <span className='badge-item'>Progress</span> component for consistent and
                    maintainable usage throughout the project.
                </Text>
            ),
            withAccordion: false,
            codeArr: [PROGRESS_CODE],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [PROGRESS_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Progress',
        description:
            'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
        preview: <ProgressPreview />,
        codeSections,
    };

    return <DocumentationClient data={data} />;
};

export default ProgressPage;
