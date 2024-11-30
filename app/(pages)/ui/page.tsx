import { PATHS } from '@/src/variables/paths';
import { EnumAvatar, EnumBtn, EnumText, EnumTitle } from '@/src/types/enums';
import { BackLink, Breadcrumbs } from '@/src/components/elements';
import { Avatar, AvatarGroup, Badge, Btn, BtnLink, Line, Text, Title } from '@/src/components/ui';
import { User } from 'lucide-react';

const UIPage = () => {
    return (
        <>
            <section className='relative w-full'>
                <div className='w-full'>
                    <BackLink className='mb-6 last:mb-0' />
                    <Breadcrumbs className='mb-6 last:mb-0' />
                    <Title>React UI</Title>
                </div>
            </section>

            <Line />

            <section className='relative w-full md:w-[50%] mb-10 last:mb-0'>
                <div className='w-full mb-5 last:mb-0'>
                    <Title className='mb-2 last:mb-0'>Title H1</Title>

                    <Title titleType={EnumTitle.h2} className='mb-2 last:mb-0'>
                        Title H2
                    </Title>

                    <Title titleType={EnumTitle.h3} className='mb-2 last:mb-0'>
                        Title H3
                    </Title>

                    <Text textType={EnumText.large} className='mb-2 last:mb-0'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus obcaecati aliquid
                        accusamus hic dicta blanditiis porro eos voluptate iusto ipsum atque, tenetur ullam enim ipsa.
                        Modi magnam incidunt minima?
                    </Text>

                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus obcaecati aliquid
                        accusamus hic dicta blanditiis porro eos voluptate iusto ipsum atque, tenetur ullam enim ipsa.
                        Modi magnam incidunt minima?
                    </Text>
                </div>
            </section>

            <section className='relative w-full mb-10 last:mb-0'>
                <div className='flex w-full gap-4 mb-4 last:mb-0'>
                    <BtnLink href={PATHS.UI}>Link Default</BtnLink>

                    <BtnLink href={PATHS.UI} btnType={EnumBtn.outline}>
                        Link Outline
                    </BtnLink>

                    <BtnLink href={PATHS.UI}>
                        <User className='w-5 h-5' />
                        <span>Link Icon</span>
                    </BtnLink>

                    <BtnLink href={PATHS.UI}>
                        <span>Link Icon</span>
                        <User className='w-5 h-5' />
                    </BtnLink>
                </div>

                <div className='flex w-full gap-4 mb-4 last:mb-0'>
                    <Btn>Button Default</Btn>
                    <Btn btnType={EnumBtn.outline}>Button Outline</Btn>
                    <Btn btnType={EnumBtn.disabled}>Button Disabled</Btn>
                    <Btn disabled>Button Disabled</Btn>

                    <Btn>
                        <User className='w-5 h-5' />
                        <span>Button Icon</span>
                    </Btn>

                    <Btn>
                        <span>Button Icon</span>
                        <User className='w-5 h-5' />
                    </Btn>
                </div>

                <div className='w-full'>
                    <Badge>
                        <Badge.Item>
                            <User className='w-5 h-5' />
                            <span>Badge Icon</span>
                        </Badge.Item>
                        <Badge.Item>
                            <span>Badge Icon</span>
                            <User className='w-5 h-5' />
                        </Badge.Item>
                        <Badge.Item>Badge Default</Badge.Item>
                    </Badge>
                </div>
            </section>

            <section className='relative w-full mb-10 last:mb-0'>
                <div className='flex w-full gap-4 mb-4 last:mb-0'>
                    <Avatar>
                        <Avatar.Img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' />
                    </Avatar>

                    <Avatar isOnline={true}>
                        <Avatar.Img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' />
                    </Avatar>

                    <Avatar isOnline={false}>
                        <Avatar.Img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' />
                    </Avatar>

                    <Avatar isOnline={true}>
                        <Avatar.Link href={PATHS.UI}>
                            <Avatar.Img
                                src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                                className='transition-all duration-500 will-change-transform hover:scale-110'
                            />
                        </Avatar.Link>
                    </Avatar>
                </div>

                <div className='flex w-full gap-4 mb-4 last:mb-0'>
                    <Avatar type={EnumAvatar.square}>
                        <Avatar.Img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' />
                    </Avatar>

                    <Avatar type={EnumAvatar.square} isOnline={true}>
                        <Avatar.Img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' />
                    </Avatar>

                    <Avatar type={EnumAvatar.square} isOnline={false}>
                        <Avatar.Img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' />
                    </Avatar>

                    <Avatar type={EnumAvatar.square} isOnline={true}>
                        <Avatar.Link href={PATHS.UI}>
                            <Avatar.Img
                                src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                                className='transition-all duration-500 will-change-transform hover:scale-110'
                            />
                        </Avatar.Link>
                    </Avatar>
                </div>
                <div className='flex w-full gap-4 mb-4 last:mb-0'>
                    <AvatarGroup visibleCount={4}>
                        <Avatar>
                            <Avatar.Link href={PATHS.UI}>
                                <Avatar.Img
                                    src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                                    className='transition-all duration-500 will-change-transform hover:scale-110'
                                />
                            </Avatar.Link>
                        </Avatar>

                        <Avatar>
                            <Avatar.Link href={PATHS.UI}>
                                <Avatar.Img
                                    src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                                    className='transition-all duration-500 will-change-transform hover:scale-110'
                                />
                            </Avatar.Link>
                        </Avatar>

                        <Avatar>
                            <Avatar.Link href={PATHS.UI}>
                                <Avatar.Img
                                    src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                                    className='transition-all duration-500 will-change-transform hover:scale-110'
                                />
                            </Avatar.Link>
                        </Avatar>

                        <Avatar>
                            <Avatar.Link href={PATHS.UI}>
                                <Avatar.Img
                                    src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                                    className='transition-all duration-500 will-change-transform hover:scale-110'
                                />
                            </Avatar.Link>
                        </Avatar>

                        <Avatar>
                            <Avatar.Link href={PATHS.UI}>
                                <Avatar.Img
                                    src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                                    className='transition-all duration-500 will-change-transform hover:scale-110'
                                />
                            </Avatar.Link>
                        </Avatar>
                    </AvatarGroup>
                </div>
            </section>

            <section className='relative w-full mb-10 last:mb-0'>
                <div className='flex w-full gap-4 mb-4 last:mb-0'>
                    <Avatar size={80}>
                        <Avatar.Img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' />
                    </Avatar>

                    <Avatar size={80} isOnline={true}>
                        <Avatar.Img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' />
                    </Avatar>

                    <Avatar size={80} isOnline={false}>
                        <Avatar.Img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' />
                    </Avatar>

                    <Avatar size={80} isOnline={true}>
                        <Avatar.Link href={PATHS.UI}>
                            <Avatar.Img
                                src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                                className='transition-all duration-500 will-change-transform hover:scale-110'
                            />
                        </Avatar.Link>
                    </Avatar>
                </div>

                <div className='flex w-full gap-4 mb-4 last:mb-0'>
                    <Avatar type={EnumAvatar.square} size={80}>
                        <Avatar.Img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' />
                    </Avatar>

                    <Avatar type={EnumAvatar.square} size={80} isOnline={true}>
                        <Avatar.Img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' />
                    </Avatar>

                    <Avatar type={EnumAvatar.square} size={80} isOnline={false}>
                        <Avatar.Img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' />
                    </Avatar>

                    <Avatar type={EnumAvatar.square} size={80} isOnline={true}>
                        <Avatar.Link href={PATHS.UI}>
                            <Avatar.Img
                                src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                                className='transition-all duration-500 will-change-transform hover:scale-110'
                            />
                        </Avatar.Link>
                    </Avatar>
                </div>

                <div className='flex w-full gap-4 mb-4 last:mb-0'>
                    <AvatarGroup visibleCount={4}>
                        <Avatar size={80}>
                            <Avatar.Link href={PATHS.UI}>
                                <Avatar.Img
                                    src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                                    className='transition-all duration-500 will-change-transform hover:scale-110'
                                />
                            </Avatar.Link>
                        </Avatar>

                        <Avatar size={80}>
                            <Avatar.Link href={PATHS.UI}>
                                <Avatar.Img
                                    src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                                    className='transition-all duration-500 will-change-transform hover:scale-110'
                                />
                            </Avatar.Link>
                        </Avatar>

                        <Avatar size={80}>
                            <Avatar.Link href={PATHS.UI}>
                                <Avatar.Img
                                    src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                                    className='transition-all duration-500 will-change-transform hover:scale-110'
                                />
                            </Avatar.Link>
                        </Avatar>

                        <Avatar size={80}>
                            <Avatar.Link href={PATHS.UI}>
                                <Avatar.Img
                                    src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                                    className='transition-all duration-500 will-change-transform hover:scale-110'
                                />
                            </Avatar.Link>
                        </Avatar>

                        <Avatar size={80}>
                            <Avatar.Link href={PATHS.UI}>
                                <Avatar.Img
                                    src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                                    className='transition-all duration-500 will-change-transform hover:scale-110'
                                />
                            </Avatar.Link>
                        </Avatar>
                    </AvatarGroup>
                </div>
            </section>
        </>
    );
};

export default UIPage;
