'use client';
import { usePathname } from 'next/navigation';
import { Avatar, AvatarGroup } from '@components/atoms';

const IMG_SRC = 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp';

export const AvatarDemo = () => {
    const pathname = usePathname();

    return (
        <div className="relative flex w-full flex-col gap-4">
            <div className="flex w-full gap-2.5">
                <Avatar>
                    <Avatar.Img src="/broken-avatar.jpg" alt="Jane Doe" fallback="JD" />
                </Avatar>

                <Avatar>
                    <Avatar.Img src={IMG_SRC} alt="Jane Doe" />
                </Avatar>

                <Avatar isOnline>
                    <Avatar.Img src={IMG_SRC} alt="Jane Doe" />
                </Avatar>

                <Avatar hasRing>
                    <Avatar.Img src={IMG_SRC} alt="Jane Doe" />
                </Avatar>

                <Avatar>
                    <Avatar.Link href={pathname}>
                        <Avatar.Img src={IMG_SRC} alt="Jane Doe" />
                    </Avatar.Link>
                </Avatar>
            </div>

            <div className="flex w-full gap-2.5">
                <Avatar type="square">
                    <Avatar.Img src="/broken-avatar.jpg" alt="Jane Doe" fallback="JD" />
                </Avatar>

                <Avatar type="square">
                    <Avatar.Img src={IMG_SRC} alt="Jane Doe" />
                </Avatar>

                <Avatar type="square" isOnline>
                    <Avatar.Img src={IMG_SRC} alt="Jane Doe" />
                </Avatar>

                <Avatar type="square" hasRing>
                    <Avatar.Img src={IMG_SRC} alt="Jane Doe" />
                </Avatar>

                <Avatar type="square">
                    <Avatar.Link href={pathname}>
                        <Avatar.Img src={IMG_SRC} alt="Jane Doe" />
                    </Avatar.Link>
                </Avatar>
            </div>

            <div className="flex w-full gap-2.5">
                <AvatarGroup visibleCount={3}>
                    <Avatar>
                        <Avatar.Img src={IMG_SRC} alt="Jane Doe" />
                    </Avatar>

                    <Avatar>
                        <Avatar.Img src={IMG_SRC} alt="Jane Doe" />
                    </Avatar>

                    <Avatar>
                        <Avatar.Img src={IMG_SRC} alt="Jane Doe" />
                    </Avatar>

                    <Avatar>
                        <Avatar.Img src={IMG_SRC} alt="Jane Doe" />
                    </Avatar>

                    <Avatar>
                        <Avatar.Img src={IMG_SRC} alt="Jane Doe" />
                    </Avatar>
                </AvatarGroup>
            </div>
        </div>
    );
};
