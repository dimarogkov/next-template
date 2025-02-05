import { Metadata } from 'next';
import { PATHS } from '@/src/variables/paths';
import {
    EnumAccordionIcon,
    EnumAvatar,
    EnumBtn,
    EnumDropdownAlign,
    EnumDropdownPosition,
    EnumLoaderType,
    EnumText,
    EnumTitle,
    EnumToast,
} from '@/src/types/enums';
import { BackLink, Breadcrumbs, DropdownContent, ModalContent } from '@/src/components/elements';
import {
    Accordion,
    Avatar,
    AvatarGroup,
    Badge,
    Btn,
    BtnLink,
    CreateToast,
    Dropdown,
    Line,
    Loader,
    Modal,
    SimpleLink,
    Tabs,
    Text,
    Title,
    ToggleBtn,
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
                    <Title>UI Elements</Title>
                </div>
            </section>

            <Line />

            <section className='relative w-full md:w-[50%] mb-10 last:mb-0'>
                <div className='flex flex-col gap-2 w-full'>
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

            <section className='relative flex flex-col gap-4 w-full mb-10 last:mb-0'>
                <div className='flex flex-wrap w-full gap-2.5'>
                    <BtnLink href={PATHS.UI}>Link Default</BtnLink>

                    <BtnLink href={PATHS.UI} btnType={EnumBtn.outline}>
                        Link Outline
                    </BtnLink>

                    <BtnLink href={PATHS.UI}>
                        <User className='size-5' />
                        <span>Link Icon</span>
                    </BtnLink>

                    <BtnLink href={PATHS.UI}>
                        <span>Link Icon</span>
                        <User className='size-5' />
                    </BtnLink>
                </div>

                <div className='flex flex-wrap w-full gap-2.5'>
                    <Btn>Button Default</Btn>
                    <Btn btnType={EnumBtn.outline}>Button Outline</Btn>
                    <Btn btnType={EnumBtn.disabled}>Button Disabled</Btn>
                    <Btn disabled>Button Disabled</Btn>

                    <Btn>
                        <User className='size-5' />
                        <span>Button Icon</span>
                    </Btn>

                    <Btn>
                        <span>Button Icon</span>
                        <User className='size-5' />
                    </Btn>
                </div>

                <div className='flex flex-wrap w-full gap-2.5'>
                    <Btn>
                        <Loader />
                        Loading...
                    </Btn>

                    <Btn btnType={EnumBtn.outline}>
                        <Loader loaderType={EnumLoaderType.blue} />
                        Loading...
                    </Btn>

                    <Btn btnType={EnumBtn.disabled}>
                        <Loader />
                        Loading...
                    </Btn>

                    <Btn disabled>
                        <Loader />
                        Loading...
                    </Btn>
                </div>

                <div className='w-full'>
                    <Badge>
                        <Badge.Item>
                            <User className='size-5' />
                            <span>Badge Icon</span>
                        </Badge.Item>
                        <Badge.Item>
                            <span>Badge Icon</span>
                            <User className='size-5' />
                        </Badge.Item>
                        <Badge.Item>Badge Default</Badge.Item>
                    </Badge>
                </div>

                <div className='flex flex-wrap w-full gap-2.5'>
                    <ToggleBtn />
                    <ToggleBtn isActive />
                </div>
            </section>

            <section className='relative w-full md:w-[50%] mb-10 last:mb-0'>
                <Tabs>
                    <Tabs.TabList>
                        <Tabs.Tab>Tab 1</Tabs.Tab>
                        <Tabs.Tab>Tab 2</Tabs.Tab>
                        <Tabs.Tab>Tab 3</Tabs.Tab>
                    </Tabs.TabList>
                    <Tabs.Panels>
                        <Tabs.Panel>
                            Lorem, ipsum dolor sit amet consectetur. Lorem, ipsum dolor sit amet consectetur, asd dima
                            and some people. Panel 1.
                        </Tabs.Panel>
                        <Tabs.Panel>
                            Lorem, ipsum dolor sit amet consectetur. Lorem, ipsum dolor sit amet consectetur. Panel 2.
                        </Tabs.Panel>
                        <Tabs.Panel>
                            Lorem, ipsum dolor sit amet consectetur. Lorem, ipsum dolor sit amet consectetur. Lorem,
                            ipsum dolor sit amet consectetur. Lorem, ipsum dolor sit amet consectetur, asd dima and some
                            people. Panel 3.
                        </Tabs.Panel>
                    </Tabs.Panels>
                </Tabs>
            </section>

            <section className='relative flex flex-col gap-10 w-full md:w-[50%] mb-10 last:mb-0'>
                <Accordion>
                    <Accordion.Item>
                        <Accordion.Title>Accordion Title 1</Accordion.Title>
                        <Accordion.Content>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque officia eveniet.
                            Vitae veritatis eligendi non officiis nesciunt praesentium sapiente, earum, similique odio
                            accusamus, quos quis. Aspernatur beatae ipsa praesentium.
                        </Accordion.Content>
                    </Accordion.Item>
                    <Accordion.Item>
                        <Accordion.Title>Accordion Title 2</Accordion.Title>
                        <Accordion.Content>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque officia eveniet.
                            Vitae veritatis eligendi non officiis nesciunt praesentium sapiente, earum, similique odio
                            accusamus, quos quis. Aspernatur beatae ipsa praesentium. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Aperiam atque officia eveniet. Vitae veritatis eligendi non
                            officiis nesciunt praesentium sapiente, earum, similique odio accusamus, quos quis.
                            Aspernatur beatae ipsa praesentium.
                        </Accordion.Content>
                    </Accordion.Item>
                    <Accordion.Item>
                        <Accordion.Title>Accordion Title 3</Accordion.Title>
                        <Accordion.Content>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque officia eveniet.
                            Vitae veritatis eligendi non officiis nesciunt praesentium sapiente.
                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion>

                <Accordion iconType={EnumAccordionIcon.plus}>
                    <Accordion.Item isOpen>
                        <Accordion.Title>Accordion Title 1</Accordion.Title>
                        <Accordion.Content>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque officia eveniet.
                            Vitae veritatis eligendi non officiis nesciunt praesentium sapiente, earum, similique odio
                            accusamus, quos quis. Aspernatur beatae ipsa praesentium.
                        </Accordion.Content>
                    </Accordion.Item>
                    <Accordion.Item>
                        <Accordion.Title>Accordion Title 2</Accordion.Title>
                        <Accordion.Content>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque officia eveniet.
                            Vitae veritatis eligendi non officiis nesciunt praesentium sapiente, earum, similique odio
                            accusamus, quos quis. Aspernatur beatae ipsa praesentium. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Aperiam atque officia eveniet. Vitae veritatis eligendi non
                            officiis nesciunt praesentium sapiente, earum, similique odio accusamus, quos quis.
                            Aspernatur beatae ipsa praesentium.
                        </Accordion.Content>
                    </Accordion.Item>
                    <Accordion.Item>
                        <Accordion.Title>Accordion Title 3</Accordion.Title>
                        <Accordion.Content>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque officia eveniet.
                            Vitae veritatis eligendi non officiis nesciunt praesentium sapiente.
                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion>
            </section>

            <section className='relative w-full mb-2.5 last:mb-0'>
                <div className='flex flex-wrap w-full gap-2.5'>
                    <Dropdown className='w-full sm:w-auto'>
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

                    <Dropdown className='w-full sm:w-auto'>
                        <Dropdown.Trigger>
                            <Btn>Dropdown Close Btn</Btn>
                        </Dropdown.Trigger>
                        <Dropdown.Content align={EnumDropdownAlign.start} position={EnumDropdownPosition.bottom}>
                            <DropdownContent />
                        </Dropdown.Content>
                    </Dropdown>
                </div>
            </section>

            <section className='relative w-full mb-2.5 last:mb-0'>
                <div className='flex flex-wrap w-full gap-2.5'>
                    <CreateToast
                        title='This is a Info notification.'
                        text='This toast message notifies you of something.'
                        className='w-full sm:w-auto'
                    >
                        <Btn>Toast Info</Btn>
                    </CreateToast>

                    <CreateToast
                        type={EnumToast.success}
                        title='This is a Success notification.'
                        text='This toast message notifies you of all your great successes.'
                        className='w-full sm:w-auto'
                    >
                        <Btn>Toast Success</Btn>
                    </CreateToast>

                    <CreateToast
                        type={EnumToast.warning}
                        title='This is a Warning notification.'
                        text='This toast message notifies you of a Warning.'
                        className='w-full sm:w-auto'
                    >
                        <Btn>Toast Warning</Btn>
                    </CreateToast>

                    <CreateToast
                        type={EnumToast.error}
                        title='This is a Error notification'
                        text='This toast message notifies you of an Error. It is probably not your fault.'
                        className='w-full sm:w-auto'
                    >
                        <Btn>Toast Error</Btn>
                    </CreateToast>
                </div>
            </section>

            <section className='relative w-full mb-10 last:mb-0'>
                <div className='flex flex-wrap w-full gap-2.5'>
                    <Modal className='w-full sm:w-auto'>
                        <Modal.Trigger>
                            <Btn>Modal Default</Btn>
                        </Modal.Trigger>
                        <Modal.Content skipPropsToChildren>
                            <div className='w-full'>
                                <Title titleType={EnumTitle.h2}>Default Modal</Title>
                                <Line className='my-4 sm:my-5' />

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

                    <Modal className='w-full sm:w-auto'>
                        <Modal.Trigger>
                            <Btn>Modal Close Btn</Btn>
                        </Modal.Trigger>
                        <Modal.Content>
                            <ModalContent />
                        </Modal.Content>
                    </Modal>
                </div>
            </section>

            <section className='relative flex flex-col gap-4 w-full mb-10 last:mb-0'>
                <div className='flex w-full gap-2.5'>
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

                <div className='flex w-full gap-2.5'>
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

                <div className='flex w-full gap-2.5'>
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
