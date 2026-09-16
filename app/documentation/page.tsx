import { Metadata } from 'next';
import { DocumentationClient } from '@components/organisms';
import { DATA } from './data';

export const metadata: Metadata = {
    title: 'Documentation'
};

const DocumentationPage = () => {
    return <DocumentationClient data={DATA} />;
};

export default DocumentationPage;
