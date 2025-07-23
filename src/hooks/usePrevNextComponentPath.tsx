import { usePathname } from 'next/navigation';
import { PATHS } from '@/src/variables';
import { getLinks } from '@/src/helpers';

const usePrevNextComponentPath = () => {
    const pathname = usePathname();
    const { MAIN } = PATHS.PAGES;
    const { componentsLinks, dataFetchingLinks, formValidationLinks, storeLinks } = getLinks();

    const mainLink = { href: MAIN.DOCUMENTATION, name: 'Documentation' };

    const linksArr = [
        ...Object.values(componentsLinks),
        ...Object.values(dataFetchingLinks),
        ...Object.values(formValidationLinks),
        ...Object.values(storeLinks),
    ];

    const pathIndex = linksArr.findIndex(({ href }) => href === pathname);
    const prevPath = linksArr[pathIndex - 1] || mainLink;
    const nextPath = linksArr[pathIndex + 1] || mainLink;

    return { prevPath, nextPath };
};

export default usePrevNextComponentPath;
