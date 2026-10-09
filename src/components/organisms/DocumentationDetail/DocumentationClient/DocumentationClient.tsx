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
import { PulseDot, Text, Title } from '@components/atoms';
import { slugify } from '@utils';

type Props = {
    data: IDocumentationBodyItem[];
};

export const DocumentationClient = ({ data }: Props) => {
    const { sectionsRef, registerRef } = useSectionsRefs();

    const sectionsArr = data.map(({ title }) => ({ id: slugify(title), text: title }));

    return (
        <ComponentsWrapper navigation={<ComponentsNavigation sectionsRef={sectionsRef} sectionsArr={sectionsArr} />}>
            <div className="md:border-border w-full md:border-r md:border-l">
                <div className="border-border py-4 sm:py-5 md:border-b md:p-5">
                    <ComponentsHead>
                        <IntroductionContent />
                    </ComponentsHead>
                </div>

                {data.map(({ title, text, links }) => (
                    <div
                        key={title}
                        id={slugify(title)}
                        ref={registerRef(slugify(title))}
                        className="md:border-border w-full scroll-mt-29 py-4 sm:py-5 md:border-b md:p-5"
                    >
                        <div className="mb-4 flex flex-col gap-1 last:mb-0 md:mb-5 md:gap-2">
                            <Title size="h3">{title}</Title>
                            <Text size="large">{text}</Text>
                        </div>

                        <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
                            {links.map(({ name, href, status }) => (
                                <Link
                                    key={name}
                                    href={href}
                                    className="text-text border-border hover:bg-grey hover:text-title flex h-14 items-center justify-between rounded-md border px-3.5 text-lg font-medium transition-all duration-200 will-change-transform hover:translate-1 xl:h-16 xl:px-4"
                                >
                                    <span>{name}</span>
                                    {status && <PulseDot variant={status} className="size-2" />}
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
