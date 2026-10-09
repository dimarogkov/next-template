import { IPath } from '@interfaces/Path';
import { PATHS } from '@constants';
import { convertUrlToString } from './convertUrlToString';

export const getLinks = () => {
    const { COMPONENTS, DATA_FETCHING, FORM_VALIDATION, STORE } = PATHS.PAGES;

    const generateLinks = (paths: IPath[]) => {
        return paths.map(({ path, status }) => ({
            name: convertUrlToString(path),
            href: `${PATHS.DOCUMENTATION}${path}`,
            status
        }));
    };

    const componentsLinks = generateLinks(Object.values(COMPONENTS));
    const dataFetchingLinks = generateLinks(Object.values(DATA_FETCHING));
    const formValidationLinks = generateLinks(Object.values(FORM_VALIDATION));
    const storeLinks = generateLinks(Object.values(STORE));

    const links = [...componentsLinks, ...dataFetchingLinks, ...formValidationLinks, ...storeLinks];

    return { componentsLinks, dataFetchingLinks, formValidationLinks, storeLinks, links };
};
