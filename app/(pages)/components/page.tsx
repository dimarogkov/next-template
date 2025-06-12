import { Metadata } from 'next';
import { PATHS } from '@/src/variables';
import {
    EnumAccordionIcon,
    EnumAvatar,
    EnumBtn,
    EnumLoaderType,
    EnumProgress,
    EnumText,
    EnumTitle,
} from '@/src/types/enums';
import { ToastBtns } from '@/src/components/elements';
import {
    Accordion,
    Avatar,
    AvatarGroup,
    Badge,
    Btn,
    BtnLink,
    Dropdown,
    Line,
    Loader,
    Modal,
    Progress,
    SimpleLink,
    SwitchBtn,
    Tabs,
    Text,
    Title,
} from '@/src/components/ui';
import { User } from 'lucide-react';

export const metadata: Metadata = {
    title: 'UI Page',
};

const ComponentsPage = () => {
    return (
        <>
            <section className='relative w-full mb-10 last:mb-0'>
                <div className='container'>
                    <div className='flex flex-col gap-2 w-full'>
                        <Title>Title H1</Title>
                        <Title titleType={EnumTitle.h2}>Title H2</Title>
                        <Title titleType={EnumTitle.h3}>Title H3</Title>
                        <Title titleType={EnumTitle.h4}>Title H4</Title>
                        <Title titleType={EnumTitle.h5}>Title H5</Title>

                        <Text textType={EnumText.large}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus obcaecati
                            aliquid accusamus hic dicta blanditiis porro{' '}
                            <SimpleLink href={PATHS.PAGES.COMPONENTS}>voluptate iusto</SimpleLink> eos ipsum atque,
                            tenetur ullam enim ipsa. Modi magnam incidunt minima?
                        </Text>

                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus obcaecati
                            aliquid accusamus hic dicta blanditiis porro{' '}
                            <SimpleLink href={PATHS.PAGES.COMPONENTS}>voluptate iusto</SimpleLink> eos ipsum atque,
                            tenetur ullam enim ipsa. Modi magnam incidunt minima?
                        </Text>
                    </div>
                </div>
            </section>

            <section className='relative w-full mb-10 last:mb-0'>
                <div className='container flex flex-col gap-4'>
                    <div className='flex flex-wrap w-full gap-2.5'>
                        <BtnLink href={PATHS.PAGES.COMPONENTS}>Link Default</BtnLink>

                        <BtnLink href={PATHS.PAGES.COMPONENTS} btnType={EnumBtn.outline}>
                            Link Outline
                        </BtnLink>

                        <BtnLink href={PATHS.PAGES.COMPONENTS} btnType={EnumBtn.ghost}>
                            Link Ghost
                        </BtnLink>

                        <BtnLink href={PATHS.PAGES.COMPONENTS}>
                            <User className='size-5' />
                            <span>Link Icon</span>
                        </BtnLink>
                    </div>

                    <div className='flex flex-wrap w-full gap-2.5'>
                        <Btn>Button Default</Btn>
                        <Btn btnType={EnumBtn.outline}>Button Outline</Btn>
                        <Btn btnType={EnumBtn.ghost}>Button Ghost</Btn>
                        <Btn disabled>Button Disabled</Btn>

                        <Btn>
                            <User className='size-5' />
                            <span>Button Icon</span>
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

                        <Btn disabled>
                            <Loader />
                            Loading...
                        </Btn>
                    </div>

                    <div className='w-full'>
                        <Badge>
                            <Badge.Item>Badge Default</Badge.Item>

                            <Badge.Item>
                                <User className='size-5' />
                                <span>Badge Icon</span>
                            </Badge.Item>
                        </Badge>
                    </div>

                    <div className='flex flex-wrap w-full gap-2.5'>
                        <SwitchBtn />
                        <SwitchBtn isActive />
                    </div>
                </div>
            </section>

            <section className='relative w-full mb-10 last:mb-0'>
                <div className='container'>
                    <div className='flex flex-col gap-6 w-full'>
                        <div className='flex flex-col gap-2.5 w-full'>
                            <Text textType={EnumText.large}>Progress</Text>

                            <Progress value={25} />
                            <Progress value={50} />
                            <Progress value={75} />
                            <Progress value={100} />
                        </div>

                        <div className='flex flex-col gap-2.5 w-full'>
                            <Text textType={EnumText.large}>Circle Progress</Text>

                            <div className='flex flex-wrap gap-5 sm:gap-10 w-full'>
                                <Progress type={EnumProgress.circle} value={25} />
                                <Progress type={EnumProgress.circle} value={50} />
                                <Progress type={EnumProgress.circle} value={75} />
                                <Progress type={EnumProgress.circle} value={100} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='relative w-full mb-10 last:mb-0'>
                <div className='container'>
                    <div className='w-full'>
                        <Tabs>
                            <Tabs.TabList>
                                <Tabs.Tab>Tab 1</Tabs.Tab>
                                <Tabs.Tab>Tab 2</Tabs.Tab>
                                <Tabs.Tab>Tab 3</Tabs.Tab>
                            </Tabs.TabList>
                            <Tabs.Panels>
                                <Tabs.Panel>
                                    Lorem, ipsum dolor sit amet consectetur. Lorem, ipsum dolor sit amet consectetur,
                                    asd dima and some people. Panel 1.
                                </Tabs.Panel>
                                <Tabs.Panel>
                                    Lorem, ipsum dolor sit amet consectetur. Lorem, ipsum dolor sit amet consectetur.
                                    Panel 2.
                                </Tabs.Panel>
                                <Tabs.Panel>
                                    Lorem, ipsum dolor sit amet consectetur. Lorem, ipsum dolor sit amet consectetur.
                                    Lorem, ipsum dolor sit amet consectetur. Lorem, ipsum dolor sit amet consectetur,
                                    asd dima and some people. Panel 3.
                                </Tabs.Panel>
                            </Tabs.Panels>
                        </Tabs>
                    </div>
                </div>
            </section>

            <section className='relative w-full mb-10 last:mb-0'>
                <div className='container'>
                    <div className='flex flex-col gap-10 w-full'>
                        <Accordion>
                            <Accordion.Item>
                                <Accordion.Title>Accordion Title 1</Accordion.Title>
                                <Accordion.Content>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque officia
                                    eveniet. Vitae veritatis eligendi non officiis nesciunt praesentium sapiente, earum,
                                    similique odio accusamus, quos quis. Aspernatur beatae ipsa praesentium.
                                </Accordion.Content>
                            </Accordion.Item>
                            <Accordion.Item>
                                <Accordion.Title>Accordion Title 2</Accordion.Title>
                                <Accordion.Content>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque officia
                                    eveniet. Vitae veritatis eligendi non officiis nesciunt praesentium sapiente, earum,
                                    similique odio accusamus, quos quis. Aspernatur beatae ipsa praesentium. Lorem ipsum
                                    dolor sit amet consectetur adipisicing elit. Aperiam atque officia eveniet. Vitae
                                    veritatis eligendi non officiis nesciunt praesentium sapiente, earum, similique odio
                                    accusamus, quos quis. Aspernatur beatae ipsa praesentium.
                                </Accordion.Content>
                            </Accordion.Item>
                            <Accordion.Item>
                                <Accordion.Title>Accordion Title 3</Accordion.Title>
                                <Accordion.Content>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque officia
                                    eveniet. Vitae veritatis eligendi non officiis nesciunt praesentium sapiente.
                                </Accordion.Content>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion iconType={EnumAccordionIcon.plus}>
                            <Accordion.Item isOpen>
                                <Accordion.Title>Accordion Title 1</Accordion.Title>
                                <Accordion.Content>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque officia
                                    eveniet. Vitae veritatis eligendi non officiis nesciunt praesentium sapiente, earum,
                                    similique odio accusamus, quos quis. Aspernatur beatae ipsa praesentium.
                                </Accordion.Content>
                            </Accordion.Item>
                            <Accordion.Item>
                                <Accordion.Title>Accordion Title 2</Accordion.Title>
                                <Accordion.Content>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque officia
                                    eveniet. Vitae veritatis eligendi non officiis nesciunt praesentium sapiente, earum,
                                    similique odio accusamus, quos quis. Aspernatur beatae ipsa praesentium. Lorem ipsum
                                    dolor sit amet consectetur adipisicing elit. Aperiam atque officia eveniet. Vitae
                                    veritatis eligendi non officiis nesciunt praesentium sapiente, earum, similique odio
                                    accusamus, quos quis. Aspernatur beatae ipsa praesentium.
                                </Accordion.Content>
                            </Accordion.Item>
                            <Accordion.Item>
                                <Accordion.Title>Accordion Title 3</Accordion.Title>
                                <Accordion.Content>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque officia
                                    eveniet. Vitae veritatis eligendi non officiis nesciunt praesentium sapiente.
                                </Accordion.Content>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </section>

            <section className='relative w-full mb-2.5 last:mb-0'>
                <div className='container'>
                    <div className='flex flex-wrap w-full gap-2.5'>
                        <Dropdown className='w-full sm:w-fit'>
                            <Dropdown.Trigger>
                                <Btn>Dropdown Trigger</Btn>
                            </Dropdown.Trigger>
                            <Dropdown.Content className='md:w-[400px]'>
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

                        <Modal className='w-full sm:w-auto'>
                            <Modal.Trigger>
                                <Btn>Modal Trigger</Btn>
                            </Modal.Trigger>
                            <Modal.Content>
                                <div className='w-full'>
                                    <Title titleType={EnumTitle.h3} className='p-2.5 md:p-4'>
                                        Modal Title
                                    </Title>

                                    <Line className='!m-0' />

                                    <div className='flex flex-col gap-2 w-full p-2.5 md:p-4'>
                                        <Text>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eum dolor
                                            nulla delectus sint optio cum ducimus vitae placeat veritatis vero deleniti,
                                            voluptatibus fugit. Laudantium error cum earum rem hic!
                                        </Text>

                                        <Text>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eum dolor
                                            nulla delectus sint optio cum ducimus vitae placeat veritatis vero deleniti,
                                            voluptatibus fugit. Laudantium error cum earum rem hic!
                                        </Text>
                                    </div>
                                </div>
                            </Modal.Content>
                        </Modal>
                    </div>
                </div>
            </section>

            <section className='relative w-full mb-2.5 last:mb-0'>
                <div className='container'>
                    <div className='flex flex-wrap w-full gap-2.5'>
                        <ToastBtns />
                    </div>
                </div>
            </section>

            <section className='relative w-full mb-10 last:mb-0'>
                <div className='container flex flex-col gap-4'>
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
                            <Avatar.Link href={PATHS.PAGES.COMPONENTS}>
                                <Avatar.Img
                                    src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                                    hasHover
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
                            <Avatar.Link href={PATHS.PAGES.COMPONENTS}>
                                <Avatar.Img
                                    src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                                    hasHover
                                />
                            </Avatar.Link>
                        </Avatar>
                    </div>

                    <div className='flex w-full gap-2.5'>
                        <AvatarGroup visibleCount={3}>
                            <Avatar>
                                <Avatar.Link href={PATHS.PAGES.COMPONENTS}>
                                    <Avatar.Img
                                        src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                                        hasHover
                                    />
                                </Avatar.Link>
                            </Avatar>

                            <Avatar>
                                <Avatar.Link href={PATHS.PAGES.COMPONENTS}>
                                    <Avatar.Img
                                        src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                                        hasHover
                                    />
                                </Avatar.Link>
                            </Avatar>

                            <Avatar>
                                <Avatar.Link href={PATHS.PAGES.COMPONENTS}>
                                    <Avatar.Img
                                        src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                                        hasHover
                                    />
                                </Avatar.Link>
                            </Avatar>

                            <Avatar>
                                <Avatar.Link href={PATHS.PAGES.COMPONENTS}>
                                    <Avatar.Img
                                        src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                                        hasHover
                                    />
                                </Avatar.Link>
                            </Avatar>

                            <Avatar>
                                <Avatar.Link href={PATHS.PAGES.COMPONENTS}>
                                    <Avatar.Img
                                        src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                                        hasHover
                                    />
                                </Avatar.Link>
                            </Avatar>
                        </AvatarGroup>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ComponentsPage;
