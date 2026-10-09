import { IHeaderSwitchItem } from '@interfaces/HeaderSwitchItem';

export const HEADER_SWITCH_ITEMS: IHeaderSwitchItem[] = [
    {
        name: 'React Template',
        link: 'https://react-template-mocha.vercel.app/',
        icon: 'devicon-react-original',
        isActive: false
    },
    {
        name: 'Next.js Template',
        link: 'https://next-template-blue.vercel.app/',
        icon: 'devicon-nextjs-plain',
        isActive: true
    }
];
