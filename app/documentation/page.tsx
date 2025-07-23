import Link from 'next/link';
import { Metadata } from 'next';
import { getLinks } from '@/src/helpers';
import { Separator, Text, Title } from '@/src/components/ui';

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

    return (
        <>
            <section className='relative w-full'>
                <div className='container'>
                    <div className='flex flex-col gap-12 md:gap-20 w-full'>
                        {documentationItemsArr.map(({ title, text, links }) => (
                            <div key={title} className='w-full'>
                                <Title size='h2' className='mb-2 last:mb-0'>
                                    {title}
                                </Title>

                                <Text size='large'>{text}</Text>

                                <Separator className='my-5' />

                                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full'>
                                    {links.map(({ name, href }) => (
                                        <Link
                                            key={name}
                                            href={href}
                                            className='font-medium text-lg text-text hover:underline'
                                        >
                                            {name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default DocumentationPage;
