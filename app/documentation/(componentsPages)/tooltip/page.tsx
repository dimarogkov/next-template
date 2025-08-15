import { Metadata } from 'next';
import {
    TOOLTIP_CODE,
    TOOLTIP_WRAPPER_CODE,
    TOOLTIP_TRIGGER_CODE,
    TOOLTIP_CONTENT_CODE,
    TOOLTIP_USAGE_CODE,
    NPM_CLASSNAMES_CODE,
    NPM_LUCIDE_CODE,
    NPM_FRAMER_MOTION_CODE,
} from '@/src/variables/code';
import { IDocumentationData, IDocumentationCodeSection } from '@/src/types/interfaces/DocumentationData';
import { DocumentationDetailClient } from '@/src/components/blocks';
import { TooltipPreview } from '@/src/components/elements/preview';
import { Text } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Tooltip',
};

const TooltipPage = () => {
    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'installation',
            title: 'Installation',
            link: '',
            description: null,
            withAccordion: true,
            codeArr: [
                { label: 'Classnames', code: NPM_CLASSNAMES_CODE },
                { label: 'Lucide', code: NPM_LUCIDE_CODE },
                { label: 'Framer Motion', code: NPM_FRAMER_MOTION_CODE },
            ],
        },
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/ui/Tooltip',
            description: (
                <Text>
                    Include a custom <span className='badge-item'>Tooltip</span> component for consistent and
                    maintainable usage throughout the project.
                </Text>
            ),
            withAccordion: true,
            codeArr: [
                { label: 'index.ts', code: TOOLTIP_CODE },
                { label: 'TooltipWrapper.tsx', code: TOOLTIP_WRAPPER_CODE },
                { label: 'TooltipTrigger.tsx', code: TOOLTIP_TRIGGER_CODE },
                { label: 'TooltipContent.tsx', code: TOOLTIP_CONTENT_CODE },
            ],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [TOOLTIP_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Tooltip',
        description:
            'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
        preview: <TooltipPreview />,
        codeSections,
    };

    return <DocumentationDetailClient data={data} />;
};

export default TooltipPage;
