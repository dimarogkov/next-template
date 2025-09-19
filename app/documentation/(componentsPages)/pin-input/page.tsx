import { Metadata } from 'next';
import { PIN_INPUT_CODE, PIN_INPUT_DEMO_CODE, PIN_INPUT_USAGE_CODE } from '@/src/variables/code';
import {
    IDocumentationData,
    IDocumentationCodeSection,
    IDocumentationPreview,
} from '@/src/types/interfaces/Documentation';
import { DocumentationDetailClient } from '@/src/components/blocks';
import { PinInputDemo } from '@/src/components/elements/demo';
import { Text } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Pin Input',
};

const PinInputPage = () => {
    const preview: IDocumentationPreview = {
        demo: <PinInputDemo />,
        code: PIN_INPUT_DEMO_CODE,
    };

    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/ui/PinInput.tsx',
            description: (
                <Text>
                    Include a custom <span className='badge-item'>PinInput</span> component for consistent and
                    maintainable usage throughout the project.
                </Text>
            ),
            withAccordion: false,
            codeArr: [PIN_INPUT_CODE],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [PIN_INPUT_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Pin Input',
        description: 'Used to capture a pin code or otp from the user.',
        preview,
        codeSections,
    };

    return <DocumentationDetailClient data={data} />;
};

export default PinInputPage;
