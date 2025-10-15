import { PATHS } from '@constants';
import { getLinks } from '@utils';

const { componentsLinks, dataFetchingLinks, formValidationLinks, storeLinks } = getLinks();

export const DATA = [
    {
        title: 'Get Started',
        links: [
            {
                name: 'Introduction',
                href: PATHS.DOCUMENTATION,
            },
        ],
    },
    {
        title: 'Components',
        links: componentsLinks,
    },
    {
        title: 'Data Fetching',
        links: dataFetchingLinks,
    },
    {
        title: 'Form Validation',
        links: formValidationLinks,
    },
    {
        title: 'Store',
        links: storeLinks,
    },
];
