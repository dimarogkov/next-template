import { Metadata } from 'next';
import { PATHS } from '@/src/variables/paths';
import { EnumAvatar, EnumBtn, EnumDropdownAlign, EnumDropdownPosition, EnumText, EnumTitle } from '@/src/types/enums';
import { BackLink, Breadcrumbs, DropdownContent, ModalContent } from '@/src/components/elements';
import {
    Avatar,
    AvatarGroup,
    Badge,
    Btn,
    BtnLink,
    Dropdown,
    Line,
    Modal,
    SimpleLink,
    Text,
    Title,
} from '@/src/components/ui';
import { User } from 'lucide-react';

export const metadata: Metadata = {
    title: 'UI Page',
};

const UIPage = () => {
    return (
        <>
            <section className='relative w-full'>
                <div className='flex flex-col gap-6 w-full'>
                    <BackLink />
                    <Breadcrumbs />
                    <Title>React UI</Title>
                </div>
            </section>

            <Line />

            <section className='relative w-full md:w-[50%] mb-10 last:mb-0'>
                <div className='flex flex-col gap-2 w-full mb-5 last:mb-0'>
                    <Title>Title H1</Title>
                    <Title titleType={EnumTitle.h2}>Title H2</Title>
                    <Title titleType={EnumTitle.h3}>Title H3</Title>

                    <Text textType={EnumText.large}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus obcaecati aliquid
                        accusamus hic dicta blanditiis porro eos voluptate iusto ipsum atque, tenetur ullam enim ipsa.
                        Modi magnam incidunt minima? accusamus hic dicta blanditiis porro{' '}
                        <SimpleLink href={PATHS.UI}>voluptate iusto</SimpleLink> eos ipsum atque, tenetur ullam enim
                        ipsa. Modi magnam incidunt minima?
                    </Text>

                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus obcaecati aliquid
                        accusamus hic dicta blanditiis porro eos voluptate iusto ipsum atque, tenetur ullam enim ipsa.
                        Modi magnam incidunt minima? accusamus hic dicta blanditiis porro{' '}
                        <SimpleLink href={PATHS.UI}>voluptate iusto</SimpleLink> eos ipsum atque, tenetur ullam enim
                        ipsa. Modi magnam incidunt minima?
                    </Text>
                </div>
            </section>

            <section className='relative w-full mb-10 last:mb-0'>
                <div className='flex flex-wrap w-full gap-4 mb-4 last:mb-0'>
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

                <div className='flex flex-wrap w-full gap-4 mb-4 last:mb-0'>
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
                <div className='flex flex-wrap w-full gap-4 mb-4 last:mb-0'>
                    <Dropdown>
                        <Dropdown.Trigger>
                            <Btn>Dropdown Default</Btn>
                        </Dropdown.Trigger>
                        <Dropdown.Content className='md:w-[400px]' skipPropsToChildren>
                            <ul className='flex flex-col gap-2 w-full mb-4 last:mb-0'>
                                <li>
                                    <Text>
                                        Lorem, ipsum dolor sit amet consectetur. Lorem, ipsum dolor sit amet
                                        consectetur, asd dima and some people.
                                    </Text>
                                </li>
                                <li>
                                    <Text>Item 2</Text>
                                </li>
                                <li>
                                    <Text>Item 3</Text>
                                </li>
                                <li>
                                    <Text>Item 4</Text>
                                </li>
                            </ul>
                        </Dropdown.Content>
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Trigger>
                            <Btn>Dropdown Close Btn</Btn>
                        </Dropdown.Trigger>
                        <Dropdown.Content align={EnumDropdownAlign.start} position={EnumDropdownPosition.bottom}>
                            <DropdownContent />
                        </Dropdown.Content>
                    </Dropdown>
                </div>
            </section>

            <section className='relative w-full mb-10 last:mb-0'>
                <div className='flex flex-wrap w-full gap-4 mb-4 last:mb-0'>
                    <Modal>
                        <Modal.Trigger>
                            <Btn>Modal Default</Btn>
                        </Modal.Trigger>
                        <Modal.Content skipPropsToChildren>
                            <div className='w-full'>
                                <Title titleType={EnumTitle.h2}>Default Modal</Title>
                                <Line />

                                <div className='flex flex-col gap-2 w-full'>
                                    <Text>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eum dolor nulla
                                        delectus sint optio cum ducimus vitae placeat veritatis vero deleniti,
                                        voluptatibus fugit. Laudantium error cum earum rem hic!
                                    </Text>

                                    <Text>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eum dolor nulla
                                        delectus sint optio cum ducimus vitae placeat veritatis vero deleniti,
                                        voluptatibus fugit. Laudantium error cum earum rem hic!
                                    </Text>
                                </div>
                            </div>
                        </Modal.Content>
                    </Modal>

                    <Modal>
                        <Modal.Trigger>
                            <Btn>Modal Close Btn</Btn>
                        </Modal.Trigger>
                        <Modal.Content>
                            <ModalContent />
                        </Modal.Content>
                    </Modal>
                </div>
            </section>

            <section className='relative w-full mb-10 last:mb-0'>
                <div className='flex w-full gap-4 mb-4 last:mb-0'>
                    <Avatar>
                        <Avatar.Img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' />
                    </Avatar>

                    <Avatar isOnline>
                        <Avatar.Img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' />
                    </Avatar>

                    <Avatar isOffline>
                        <Avatar.Img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' />
                    </Avatar>

                    <Avatar isOnline>
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

                    <Avatar type={EnumAvatar.square} isOnline>
                        <Avatar.Img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' />
                    </Avatar>

                    <Avatar type={EnumAvatar.square} isOffline>
                        <Avatar.Img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' />
                    </Avatar>

                    <Avatar type={EnumAvatar.square} isOnline>
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
        </>
    );
};

export default UIPage;
