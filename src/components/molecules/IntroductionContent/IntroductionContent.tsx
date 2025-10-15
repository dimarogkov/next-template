import { Text, Title } from '@components/atoms';

export default function IntroductionContent() {
    return (
        <>
            <Title size='h2' className='mb-1 md:mb-2 last:mb-0'>
                Introduction
            </Title>

            <div className='flex flex-col gap-4 w-full'>
                <Text size='large'>
                    Next Template is a modern, production-ready starter kit for building web applications with Next.js
                    and TypeScript.
                </Text>

                <Text size='large'>
                    It combines a proven tech stack, best practices, and ready-to-use components so you can focus on
                    your product logic instead of spending hours on setup.
                </Text>

                <Text size='large'>
                    Unlike traditional boilerplates, this template comes with a clean project structure, a&nbsp;
                    <span className='text-white'>Tailwind CSS</span> design system, state management via&nbsp;
                    <span className='text-white'>Redux Toolkit/Zustand</span>, built-in&nbsp;
                    <span className='text-white'>Axios</span> integration,&nbsp;
                    <span className='text-white'>React Router</span> for navigation, and smooth animations powered
                    by&nbsp;
                    <span className='text-white'>Framer Motion</span>.
                </Text>

                <div>
                    <Text size='large'>Core Principles:</Text>

                    <ul className='list-disc pl-5 mt-2 space-y-1.5'>
                        <li>
                            <Text size='large'>
                                <span className='text-white'>Open Code</span> – Every component is fully editable to
                                match your needs.
                            </Text>
                        </li>
                        <li>
                            <Text size='large'>
                                <span className='text-white'>Composable</span> – Designed to be predictable and easy to
                                combine.
                            </Text>
                        </li>
                        <li>
                            <Text size='large'>
                                <span className='text-white'>Fast Setup</span> – Preconfigured with API handling,
                                routing, and styling.
                            </Text>
                        </li>
                        <li>
                            <Text size='large'>
                                <span className='text-white'>Beautiful Defaults</span> – Thoughtfully chosen styles that
                                look great out of the box.
                            </Text>
                        </li>
                        <li>
                            <Text size='large'>
                                <span className='text-white'>Performance-Driven</span> – Optimized structure with modern
                                tooling.
                            </Text>
                        </li>
                    </ul>
                </div>

                <Text size='large'>
                    Stop wasting time configuring your stack —&nbsp;
                    <span className='text-white'>clone</span>,&nbsp;
                    <span className='text-white'>run</span>, and&nbsp;
                    <span className='text-white'>start building</span>.
                </Text>
            </div>
        </>
    );
}
