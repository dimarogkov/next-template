import { PATHS } from '@/src/variables';
import { convertUrlToString } from './convertUrlToString';

export const getLinks = () => {
    const { MAIN, COMPONENTS, DATA_FETCHING, FORM_VALIDATION, STORE } = PATHS.PAGES;

    const generateLinks = (paths: string[]) => {
        return paths.map((path) => ({
            name: convertUrlToString(path),
            href: `${MAIN.DOCUMENTATION}${path}`,
        }));
    };

    const componentsLinks = generateLinks(Object.values(COMPONENTS));
    const dataFetchingLinks = generateLinks(Object.values(DATA_FETCHING));
    const formValidationLinks = generateLinks(Object.values(FORM_VALIDATION));
    const storeLinks = generateLinks(Object.values(STORE));

    return { componentsLinks, dataFetchingLinks, formValidationLinks, storeLinks };
};
