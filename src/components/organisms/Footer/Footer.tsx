import Link from 'next/link';
import { Text } from '@components/atoms';
import { OWNER_LINK } from './data';

export const Footer = () => {
    return (
        <footer className="w-full py-4 text-center sm:py-5">
            <Text>
                Made with ❤️ by&nbsp;
                <Link
                    href={OWNER_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:underline"
                >
                    Dmytro Rozhkov
                </Link>
            </Text>
        </footer>
    );
};
