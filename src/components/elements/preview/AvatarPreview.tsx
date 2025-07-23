'use client';
import { usePathname } from 'next/navigation';
import { Avatar, AvatarGroup } from '@/src/components/ui';

const AvatarPreview = () => {
    const pathname = usePathname();
    const imgSrc = 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp';

    return (
        <div className='relative flex flex-col gap-4'>
            <div className='flex w-full gap-2.5'>
                <Avatar>
                    <Avatar.Img src={imgSrc} />
                </Avatar>

                <Avatar isOnline>
                    <Avatar.Img src={imgSrc} />
                </Avatar>

                <Avatar isOnline>
                    <Avatar.Link href={pathname}>
                        <Avatar.Img src={imgSrc} hasHover />
                    </Avatar.Link>
                </Avatar>
            </div>

            <div className='flex w-full gap-2.5'>
                <Avatar type='square'>
                    <Avatar.Img src={imgSrc} />
                </Avatar>

                <Avatar type='square' isOnline>
                    <Avatar.Img src={imgSrc} />
                </Avatar>

                <Avatar type='square' isOnline>
                    <Avatar.Link href={pathname}>
                        <Avatar.Img src={imgSrc} hasHover />
                    </Avatar.Link>
                </Avatar>
            </div>

            <div className='flex w-full gap-2.5'>
                <AvatarGroup visibleCount={3}>
                    <Avatar>
                        <Avatar.Link href={pathname}>
                            <Avatar.Img src={imgSrc} hasHover />
                        </Avatar.Link>
                    </Avatar>

                    <Avatar>
                        <Avatar.Link href={pathname}>
                            <Avatar.Img src={imgSrc} hasHover />
                        </Avatar.Link>
                    </Avatar>

                    <Avatar>
                        <Avatar.Link href={pathname}>
                            <Avatar.Img src={imgSrc} hasHover />
                        </Avatar.Link>
                    </Avatar>

                    <Avatar>
                        <Avatar.Link href={pathname}>
                            <Avatar.Img src={imgSrc} hasHover />
                        </Avatar.Link>
                    </Avatar>

                    <Avatar>
                        <Avatar.Link href={pathname}>
                            <Avatar.Img src={imgSrc} hasHover />
                        </Avatar.Link>
                    </Avatar>
                </AvatarGroup>
            </div>
        </div>
    );
};

export default AvatarPreview;
