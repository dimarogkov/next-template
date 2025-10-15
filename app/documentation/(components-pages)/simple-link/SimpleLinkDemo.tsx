'use client';
import { usePathname } from 'next/navigation';
import { SimpleLink, Text } from '@components/atoms';

export default function SimpleLinkDemo() {
    const pathname = usePathname();

    return (
        <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repellendus maxime esse aut quidem itaque
            ipsum beatae corporis, nobis <SimpleLink href={pathname}>natus</SimpleLink> ex molestiae quam temporibus
            placeat ad mollitia. Itaque, debitis perferendis!
        </Text>
    );
}
