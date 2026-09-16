'use client';
import Link from 'next/link';
import { useSectionsRefs } from '@hooks';
import { IDocumentationBodyItem } from '@interfaces/Documentation';
import {
    ComponentsFooter,
    ComponentsHead,
    ComponentsNavigation,
    ComponentsWrapper
} from '@components/organisms/Components';
import { IntroductionContent } from '@components/molecules';
import { Separator, Text, Title } from '@components/atoms';

type Props = {
    data: IDocumentationBodyItem[];
};

export const DocumentationClient = ({ data }: Props) => {
    const { sectionsRef, registerRef } = useSectionsRefs();

    const sectionsArr = data.map(({ title }) => ({ id: title.toLowerCase(), text: title }));

    return (
        <ComponentsWrapper navigation={<ComponentsNavigation sectionsRef={sectionsRef} sectionsArr={sectionsArr} />}>
            <div className="w-full xl:px-7.5">
                <ComponentsHead>
                    <IntroductionContent />
                </ComponentsHead>

                {data.map(({ title, text, links }) => (
                    <div
                        key={title}
                        id={title.toLowerCase()}
                        ref={registerRef(title.toLowerCase())}
                        className="w-full scroll-mt-29 py-6 md:py-12"
                    >
                        <Title size="h3" className="mb-1 last:mb-0 md:mb-2">
                            {title}
                        </Title>

                        <Text size="large">{text}</Text>

                        <Separator className="my-5" />

                        <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                            {links.map(({ name, href, isNew }) => (
                                <Link
                                    key={name}
                                    href={href}
                                    className="text-text flex items-center gap-2.5 text-lg font-medium hover:underline"
                                >
                                    <span>{name}</span>
                                    {isNew && <span className="bg-blue flex size-2 rounded-full" />}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}

                <ComponentsFooter />
            </div>
        </ComponentsWrapper>
    );
};
