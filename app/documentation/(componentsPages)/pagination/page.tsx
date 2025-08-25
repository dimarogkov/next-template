import { Metadata } from 'next';
import {
    PAGINATION_CODE,
    PAGINATION_WRAPPER_CODE,
    PAGINATION_PREVIOUS_CODE,
    PAGINATION_ITEM_CODE,
    PAGINATION_NEXT_CODE,
    PAGINATION_ELLIPSIS_CODE,
    PAGINATION_HOOK_CODE,
    PAGINATION_HELPER_CODE,
    PAGINATION_USAGE_CODE,
    PAGINATION_DATA_USAGE_CODE,
    NPM_LUCIDE_CODE,
    NPM_CLASSNAMES_CODE,
} from '@/src/variables/code';
import { IDocumentationData, IDocumentationCodeSection } from '@/src/types/interfaces/DocumentationData';
import { DocumentationDetailClient } from '@/src/components/blocks';
import { PaginationPreview } from '@/src/components/elements/preview';
import { Text } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Pagination',
};

const PaginationPage = () => {
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
            ],
        },
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/ui/Pagination',
            description: (
                <Text>
                    Include a custom <span className='badge-item'>Pagination</span> component for consistent and
                    maintainable usage throughout the project.
                </Text>
            ),
            withAccordion: true,
            codeArr: [
                { label: 'index.ts', code: PAGINATION_CODE },
                { label: 'ModalWrapper.tsx', code: PAGINATION_WRAPPER_CODE },
                { label: 'ModalTrigger.tsx', code: PAGINATION_PREVIOUS_CODE },
                { label: 'ModalContent.tsx', code: PAGINATION_ITEM_CODE },
                { label: 'ModalLayer.tsx', code: PAGINATION_NEXT_CODE },
                { label: 'ModalClose.tsx', code: PAGINATION_ELLIPSIS_CODE },
            ],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [PAGINATION_USAGE_CODE],
        },
        {
            id: 'data',
            title: 'Data',
            link: '',
            description: (
                <Text>
                    Here&apos;s an example of controlling the pagination state and using the state to chunk the data.
                </Text>
            ),
            withAccordion: true,
            codeArr: [
                { label: 'PaginationPreview.tsx', code: PAGINATION_DATA_USAGE_CODE },
                { label: 'usePagination.tsx', code: PAGINATION_HOOK_CODE },
                { label: 'getPaginationRange.ts', code: PAGINATION_HELPER_CODE },
            ],
        },
    ];

    const data: IDocumentationData = {
        title: 'Pagination',
        description: 'Pagination with page navigation, next and previous links.',
        preview: <PaginationPreview />,
        codeSections,
    };

    return <DocumentationDetailClient data={data} />;
};

export default PaginationPage;
