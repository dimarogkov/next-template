'use client';
import { FC } from 'react';
import Link from 'next/link';
import { useSectionsRefs } from '@/src/hooks';
import { IDocumentationBodyItem } from '@/src/types/interfaces/DocumentationData';
import { ComponentsFooter, ComponentsHead, ComponentsNavigation, ComponentsWrapper } from '@/src/components/blocks';
import { IntroductionContent } from '@/src/components/elements';
import { Separator, Text, Title } from '@/src/components/ui';

type Props = {
    data: IDocumentationBodyItem[];
};

const DocumentationClient: FC<Props> = ({ data }) => {
    const { sectionsRef, registerRef } = useSectionsRefs();

    const sectionsArr = data.map(({ title }) => ({ id: title.toLowerCase(), text: title }));

    return (
        <ComponentsWrapper navigation={<ComponentsNavigation sectionsRef={sectionsRef} sectionsArr={sectionsArr} />}>
            <div className='w-full xl:px-[30px]'>
                <ComponentsHead>
                    <IntroductionContent />
                </ComponentsHead>

                {data.map(({ title, text, links }) => (
                    <div
                        key={title}
                        id={title.toLowerCase()}
                        ref={registerRef(title.toLowerCase())}
                        className='w-full py-6 md:py-12'
                    >
                        <Title size='h3' className='mb-1 md:mb-1.5 last:mb-0'>
                            {title}
                        </Title>

                        <Text size='large'>{text}</Text>

                        <Separator className='my-5' />

                        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full'>
                            {links.map(({ name, href }) => (
                                <Link key={name} href={href} className='font-medium text-lg text-text hover:underline'>
                                    {name}
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

export default DocumentationClient;
