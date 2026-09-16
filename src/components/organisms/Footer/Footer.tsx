import Link from 'next/link';
import { OWNER_LINK } from './data';
import { Text } from '@components/atoms';

export const Footer = () => {
    return (
        <footer className="w-full py-4 text-center md:py-5">
            <Text>
                Made with ❤️ by&nbsp;
                <Link href={OWNER_LINK} target="_blank" className="font-medium hover:underline">
                    Dmytro Rozhkov
                </Link>
            </Text>
        </footer>
    );
};
