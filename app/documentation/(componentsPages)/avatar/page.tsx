import { Metadata } from 'next';
import {
    AVATAR_CODE,
    AVATAR_WRAPPER_CODE,
    AVATAR_LINK_CODE,
    AVATAR_IMG_CODE,
    AVATAR_GROUP_CODE,
    AVATAR_DEMO_CODE,
    AVATAR_USAGE_CODE,
    AVATAR_LINK_USAGE_CODE,
    AVATAR_GROUP_USAGE_CODE,
    NPM_CLASSNAMES_CODE,
    NPM_FRAMER_MOTION_CODE,
} from '@/src/variables/code';
import {
    IDocumentationData,
    IDocumentationCodeSection,
    IDocumentationPreview,
} from '@/src/types/interfaces/Documentation';
import { DocumentationDetailClient } from '@/src/components/blocks';
import { AvatarDemo } from '@/src/components/elements/demo';
import { Text } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Avatar',
};

const AvatarPage = () => {
    const preview: IDocumentationPreview = {
        demo: <AvatarDemo />,
        code: AVATAR_DEMO_CODE,
    };

    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'installation',
            title: 'Installation',
            link: '',
            description: null,
            withAccordion: true,
            codeArr: [
                { label: 'Classnames', code: NPM_CLASSNAMES_CODE },
                { label: 'Framer Motion', code: NPM_FRAMER_MOTION_CODE },
            ],
        },
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/next-template/tree/master/src/components/ui/Avatar',
            description: (
                <Text>
                    Include a custom <span className='badge-item'>Avatar</span> component for consistent and
                    maintainable usage throughout the project.
                </Text>
            ),
            withAccordion: true,
            codeArr: [
                { label: 'index.ts', code: AVATAR_CODE },
                { label: 'AvatarWrapper.tsx', code: AVATAR_WRAPPER_CODE },
                { label: 'AvatarLink.tsx', code: AVATAR_LINK_CODE },
                { label: 'AvatarImg.tsx', code: AVATAR_IMG_CODE },
                { label: 'AvatarGroup.tsx', code: AVATAR_GROUP_CODE },
            ],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [AVATAR_USAGE_CODE],
        },
        {
            id: 'link',
            title: 'Link',
            link: '',
            description: (
                <Text>
                    To make the avatar clickable, wrap it with the&nbsp;
                    <span className='badge-item'>Avatar.Link</span> child component and provide an&nbsp;
                    <span className='badge-item'>href</span> prop.
                </Text>
            ),
            withAccordion: false,
            codeArr: [AVATAR_LINK_USAGE_CODE],
        },
        {
            id: 'group',
            title: 'Group',
            link: '',
            description: (
                <Text>
                    To group multiple avatars together, wrap them with the&nbsp;
                    <span className='badge-item'>AvatarGroup</span> component. You can also use the&nbsp;
                    <span className='badge-item'>visibleCount</span> prop to limit the number of avatars displayed.
                </Text>
            ),
            withAccordion: false,
            codeArr: [AVATAR_GROUP_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Avatar',
        description: 'An image element with a fallback for representing the user.',
        preview,
        codeSections,
    };

    return <DocumentationDetailClient data={data} />;
};

export default AvatarPage;
