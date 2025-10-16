import { Metadata } from 'next';
import {
    NPM_FRAMER_MOTION_CODE,
    REORDER_DEMO_CODE,
    REORDER_USAGE_CODE,
    REORDER_TYPE_USAGE_CODE,
    REORDER_AXIS_USAGE_CODE,
} from '@code';
import { IDocumentationData, IDocumentationCodeSection, IDocumentationPreview } from '@interfaces/Documentation';
import { DocumentationDetailClient } from '@components/organisms';
import { Text } from '@components/atoms';
import ReorderDemo from './ReorderDemo';

export const metadata: Metadata = {
    title: 'Reorder',
};

export default function ReorderPage() {
    const preview: IDocumentationPreview = {
        demo: <ReorderDemo />,
        code: REORDER_DEMO_CODE,
    };

    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'installation',
            title: 'Installation',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [NPM_FRAMER_MOTION_CODE],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: 'https://motion.dev/docs/react-reorder',
            description: null,
            withAccordion: false,
            codeArr: [REORDER_USAGE_CODE],
        },
        {
            id: 'type',
            title: 'Type of List',
            link: '',
            description: (
                <Text>
                    The underlying element for <span className='badge-item'>Reorder.Group</span> to render as.
                </Text>
            ),
            withAccordion: false,
            codeArr: [REORDER_TYPE_USAGE_CODE],
        },
        {
            id: 'axis',
            title: 'Axis',
            link: '',
            description: (
                <Text>
                    By default, all <span className='badge-item'>Reorder.Item</span> components move along the Y axis.
                    To change it to the X axis, set the <span className='badge-item'>axis</span> prop on&nbsp;
                    <span className='badge-item'>Reorder.Group</span> to X and the&nbsp;
                    <span className='badge-item'>drag</span> prop to each child&nbsp;
                    <span className='badge-item'>Reorder.Item</span>.
                </Text>
            ),
            withAccordion: false,
            codeArr: [REORDER_AXIS_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Reorder',
        description:
            'The Reorder components can be used to create drag-to-reorder lists, like reorderable tabs or todo items.',
        preview,
        codeSections,
    };

    return <DocumentationDetailClient data={data} />;
}
