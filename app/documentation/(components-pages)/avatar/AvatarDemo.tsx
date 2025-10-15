'use client';
import { usePathname } from 'next/navigation';
import { Avatar, AvatarGroup } from '@components/atoms';

const IMG_SRC = 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp';

export default function AvatarDemo() {
    const pathname = usePathname();

    return (
        <div className='relative flex flex-col gap-4 w-full'>
            <div className='flex w-full gap-2.5'>
                <Avatar>
                    <Avatar.Img src={IMG_SRC} />
                </Avatar>

                <Avatar isOnline>
                    <Avatar.Img src={IMG_SRC} />
                </Avatar>

                <Avatar>
                    <Avatar.Link href={pathname}>
                        <Avatar.Img src={IMG_SRC} hasHover />
                    </Avatar.Link>
                </Avatar>
            </div>

            <div className='flex w-full gap-2.5'>
                <Avatar type='square'>
                    <Avatar.Img src={IMG_SRC} />
                </Avatar>

                <Avatar type='square' isOnline>
                    <Avatar.Img src={IMG_SRC} />
                </Avatar>

                <Avatar type='square'>
                    <Avatar.Link href={pathname}>
                        <Avatar.Img src={IMG_SRC} hasHover />
                    </Avatar.Link>
                </Avatar>
            </div>

            <div className='flex w-full gap-2.5'>
                <AvatarGroup visibleCount={3}>
                    <Avatar>
                        <Avatar.Link href={pathname}>
                            <Avatar.Img src={IMG_SRC} hasHover />
                        </Avatar.Link>
                    </Avatar>

                    <Avatar>
                        <Avatar.Link href={pathname}>
                            <Avatar.Img src={IMG_SRC} hasHover />
                        </Avatar.Link>
                    </Avatar>

                    <Avatar>
                        <Avatar.Link href={pathname}>
                            <Avatar.Img src={IMG_SRC} hasHover />
                        </Avatar.Link>
                    </Avatar>

                    <Avatar>
                        <Avatar.Link href={pathname}>
                            <Avatar.Img src={IMG_SRC} hasHover />
                        </Avatar.Link>
                    </Avatar>

                    <Avatar>
                        <Avatar.Link href={pathname}>
                            <Avatar.Img src={IMG_SRC} hasHover />
                        </Avatar.Link>
                    </Avatar>
                </AvatarGroup>
            </div>
        </div>
    );
}
