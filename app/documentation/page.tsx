import { Metadata } from 'next';
import { getLinks } from '@/src/helpers';
import { DocumentationClient } from '@/src/components/blocks';

export const metadata: Metadata = {
    title: 'Documentation',
};

const DocumentationPage = () => {
    const { componentsLinks, dataFetchingLinks, formValidationLinks, storeLinks } = getLinks();

    const documentationItemsArr = [
        {
            title: 'Components',
            text: 'Here you can find all the components available in the template. We are working on adding more components.',
            links: componentsLinks,
        },
        {
            title: 'Data Fetching',
            text: 'Here you can find libraries that help you fetch, cache, and manage asynchronous data in your application.',
            links: dataFetchingLinks,
        },
        {
            title: 'Form Validation',
            text: 'Here you can learn about different form validation methods using popular libraries like Yup and Zod. We are constantly working on adding more examples and improving developer experience.',
            links: formValidationLinks,
        },
        {
            title: 'Store',
            text: 'Here you can explore all the state management solutions included in this template. We are continuously working on adding more integrations and improving existing ones.',
            links: storeLinks,
        },
    ];

    return <DocumentationClient data={documentationItemsArr} />;
};

export default DocumentationPage;
