'use client';
import Link from 'next/link';
import { useSectionsRefs } from '@hooks';
import { IDocumentationBodyItem } from '@interfaces/Documentation';
import { ComponentsFooter, ComponentsHead, ComponentsNavigation, ComponentsWrapper } from '@components/organisms';
import { IntroductionContent } from '@components/molecules';
import { Separator, Text, Title } from '@components/atoms';

type Props = {
    data: IDocumentationBodyItem[];
};

export default function DocumentationClient({ data }: Props) {
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
                        className='w-full py-6 md:py-12 scroll-mt-[116px]'
                    >
                        <Title size='h3' className='mb-1 md:mb-2 last:mb-0'>
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
}
