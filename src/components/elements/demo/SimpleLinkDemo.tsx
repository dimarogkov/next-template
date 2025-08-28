'use client';
import { usePathname } from 'next/navigation';
import { SimpleLink, Text } from '@/src/components/ui';

const SimpleLinkDemo = () => {
    const pathname = usePathname();

    return (
        <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repellendus maxime esse aut quidem itaque
            ipsum beatae corporis, nobis <SimpleLink href={pathname}>natus</SimpleLink> ex molestiae quam temporibus
            placeat ad mollitia. Itaque, debitis perferendis!
        </Text>
    );
};

export default SimpleLinkDemo;
