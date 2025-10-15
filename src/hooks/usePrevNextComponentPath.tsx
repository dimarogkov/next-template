import { usePathname } from 'next/navigation';
import { PATHS } from '@constants';
import { getLinks } from '@utils';

export default function usePrevNextComponentPath() {
    const pathname = usePathname();
    const { links } = getLinks();

    const introductionLink = { href: PATHS.DOCUMENTATION, name: 'Introduction' };
    const linksArr = [introductionLink, ...Object.values(links)];

    const pathIndex = linksArr.findIndex(({ href }) => href === pathname);
    const prevPath = linksArr[pathIndex - 1] || linksArr[linksArr.length - 1];
    const nextPath = linksArr[pathIndex + 1] || linksArr[0];

    return [prevPath, nextPath];
}
