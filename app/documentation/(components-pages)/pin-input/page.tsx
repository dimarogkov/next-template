import { Metadata } from 'next';
import { PIN_INPUT_CODE, PIN_INPUT_DEMO_CODE, PIN_INPUT_USAGE_CODE } from '@code';
import { IDocumentationData, IDocumentationCodeSection, IDocumentationPreview } from '@interfaces/Documentation';
import { DocumentationDetailClient } from '@components/organisms';
import { Text } from '@components/atoms';
import PinInputDemo from './PinInputDemo';

export const metadata: Metadata = {
    title: 'Pin Input',
};

export default function PinInputPage() {
    const preview: IDocumentationPreview = {
        demo: <PinInputDemo />,
        code: PIN_INPUT_DEMO_CODE,
    };

    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/atoms/PinInput',
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
        links: [],
        preview,
        codeSections,
    };

    return <DocumentationDetailClient data={data} />;
}
