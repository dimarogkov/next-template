import { Metadata } from 'next';
import {
    MODAL_CODE,
    MODAL_WRAPPER_CODE,
    MODAL_TRIGGER_CODE,
    MODAL_CONTENT_CODE,
    MODAL_LAYER_CODE,
    MODAL_CLOSE_CODE,
    MODAL_DEMO_CODE,
    MODAL_USAGE_CODE,
    MODAL_DISABLE_CLOSE_BTN_USAGE_CODE,
    NPM_FRAMER_MOTION_CODE,
    NPM_LUCIDE_CODE,
} from '@code';
import { IDocumentationData, IDocumentationCodeSection, IDocumentationPreview } from '@interfaces/Documentation';
import { DocumentationDetailClient } from '@components/organisms';
import { Text } from '@components/atoms';
import ModalDemo from './ModalDemo';

export const metadata: Metadata = {
    title: 'Modal',
};

export default function ModalPage() {
    const preview: IDocumentationPreview = {
        demo: <ModalDemo />,
        code: MODAL_DEMO_CODE,
    };

    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'installation',
            title: 'Installation',
            link: '',
            description: null,
            withAccordion: true,
            codeArr: [
                { label: 'Lucide', code: NPM_LUCIDE_CODE },
                { label: 'Framer Motion', code: NPM_FRAMER_MOTION_CODE },
            ],
        },
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/atoms/Modal',
            description: (
                <Text>
                    Include a custom <span className='badge-item'>Modal</span> component for consistent and maintainable
                    usage throughout the project.
                </Text>
            ),
            withAccordion: true,
            codeArr: [
                { label: 'index.ts', code: MODAL_CODE },
                { label: 'ModalWrapper.tsx', code: MODAL_WRAPPER_CODE },
                { label: 'ModalTrigger.tsx', code: MODAL_TRIGGER_CODE },
                { label: 'ModalContent.tsx', code: MODAL_CONTENT_CODE },
                { label: 'ModalLayer.tsx', code: MODAL_LAYER_CODE },
                { label: 'ModalClose.tsx', code: MODAL_CLOSE_CODE },
            ],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [MODAL_USAGE_CODE],
        },
        {
            id: 'disableCloseBtn',
            title: 'Disable Close',
            link: '',
            description: (
                <Text>
                    Disable the modal&apos;s close button by adding the&nbsp;
                    <span className='badge-item'>disableCloseBtn</span> prop to&nbsp;
                    <span className='badge-item'>Modal.Content</span>.
                </Text>
            ),
            withAccordion: false,
            codeArr: [MODAL_DISABLE_CLOSE_BTN_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Modal',
        description:
            'A window overlaid on either the primary window or another modal window, rendering the content underneath inert.',
        preview,
        codeSections,
    };

    return <DocumentationDetailClient data={data} />;
}
