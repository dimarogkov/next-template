import { Metadata } from 'next';
import { DocumentationClient } from '@components/organisms';
import { DATA } from './data';

export const metadata: Metadata = {
    title: 'Documentation',
};

export default function DocumentationPage() {
    return <DocumentationClient data={DATA} />;
}
