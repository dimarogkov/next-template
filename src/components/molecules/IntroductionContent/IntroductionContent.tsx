import { Text, Title } from '@components/atoms';

export const IntroductionContent = () => {
    return (
        <>
            <Title size="h2" className="mb-1 last:mb-0 md:mb-2">
                Introduction
            </Title>

            <div className="flex w-full flex-col gap-4">
                <Text size="large">
                    Next Template is a personal component library and playground built with React 19 and TypeScript.
                    Every primitive gets a live preview with byte-accurate source, right next to the code.
                </Text>

                <Text size="large">
                    Most templates ship one opinion per problem. This one ships two — compare&nbsp;
                    <span className="text-title font-medium">Yup</span> against&nbsp;
                    <span className="text-title font-medium">Zod</span> for form validation,&nbsp;
                    <span className="text-title font-medium">TanStack Query</span> against&nbsp;
                    <span className="text-title font-medium">RTK Query</span> for data fetching, or&nbsp;
                    <span className="text-title font-medium">Redux Toolkit</span> against&nbsp;
                    <span className="text-title font-medium">Zustand</span> for state management — side by side, in the
                    same UI.
                </Text>

                <Text size="large">
                    It’s built on a <span className="text-title font-medium">Tailwind CSS</span> design system,&nbsp;
                    <span className="text-title font-medium">Next.js App Router</span> for navigation, built-in&nbsp;
                    <span className="text-title font-medium">Axios</span> integration, and smooth animations powered
                    by&nbsp;
                    <span className="text-title font-medium">Framer Motion</span>.
                </Text>

                <div>
                    <Text size="large">Core Principles:</Text>

                    <ul className="mt-2 list-disc space-y-1.5 pl-5">
                        <li>
                            <Text size="large">
                                <span className="text-title font-medium">Two Ways, Not One</span> – Core patterns ship
                                as real, working comparisons, not just documentation.
                            </Text>
                        </li>
                        <li>
                            <Text size="large">
                                <span className="text-title font-medium">Byte-Accurate Docs</span> – Every code example
                                is pulled straight from the real component source.
                            </Text>
                        </li>
                        <li>
                            <Text size="large">
                                <span className="text-title font-medium">Compound, Not Monolithic</span> – Components
                                compose from predictable subcomponents instead of one prop-heavy component.
                            </Text>
                        </li>
                        <li>
                            <Text size="large">
                                <span className="text-title font-medium">Built to Be Read</span> – Every atom is small
                                enough to open, understand, and edit in one sitting.
                            </Text>
                        </li>
                    </ul>
                </div>

                <Text size="large">Clone it, open a component, and start editing — that’s the whole workflow.</Text>
            </div>
        </>
    );
};
