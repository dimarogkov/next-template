'use client';
import { FC, Fragment } from 'react';
import Link from 'next/link';
import { useSectionsRefs } from '@/src/hooks';
import { IDocumentationCodeArr, IDocumentationData } from '@/src/types/interfaces/Documentation';
import {
    ComponentsCode,
    ComponentsCodeWithAccordion,
    ComponentsFooter,
    ComponentsHead,
    ComponentsNavigation,
    ComponentsPreview,
    ComponentsWrapper,
} from '@/src/components/blocks';
import { Text, Title } from '@/src/components/ui';
import { ArrowUpRight } from 'lucide-react';
import cn from 'classnames';

type Props = {
    data: IDocumentationData;
};

const DocumentationDetailClient: FC<Props> = ({ data }) => {
    const { sectionsRef, registerRef } = useSectionsRefs();
    const { title, description, preview, codeSections } = data;

    const sectionsArr = codeSections.map(({ id, title }) => ({ id, text: title }));

    return (
        <ComponentsWrapper navigation={<ComponentsNavigation sectionsRef={sectionsRef} sectionsArr={sectionsArr} />}>
            <div className='w-full xl:px-[30px]'>
                <ComponentsHead>
                    <Title size='h2' className='mb-1 md:mb-2 last:mb-0'>
                        {title}
                    </Title>

                    <Text size='large'>{description}</Text>
                </ComponentsHead>

                <ComponentsPreview preview={preview} />

                {codeSections.map(({ id, title, link, description, withAccordion, codeArr }) => (
                    <Fragment key={id}>
                        {withAccordion ? (
                            <ComponentsCodeWithAccordion
                                id={id}
                                ref={registerRef(id)}
                                {...(id === 'installation' && { type: id })}
                                codeArr={codeArr as IDocumentationCodeArr[]}
                            >
                                <Title
                                    size='h4'
                                    className={cn({
                                        'flex items-center gap-1': link,
                                        'mb-1 md:mb-1.5 last:mb-0': description,
                                    })}
                                >
                                    {link ? <span>{title}</span> : title}

                                    {link && (
                                        <Link
                                            href={link}
                                            target='_blank'
                                            className='transition-colors duration-300 hover:text-text'
                                        >
                                            <ArrowUpRight />
                                        </Link>
                                    )}
                                </Title>

                                {description}
                            </ComponentsCodeWithAccordion>
                        ) : (
                            <ComponentsCode
                                id={id}
                                ref={registerRef(id)}
                                {...(id === 'installation' && { type: id })}
                                codeArr={codeArr as string[]}
                            >
                                <Title
                                    size='h4'
                                    className={cn({
                                        'flex items-center gap-1': link,
                                        'mb-1 md:mb-1.5 last:mb-0': description,
                                    })}
                                >
                                    {link ? <span>{title}</span> : title}

                                    {link && (
                                        <Link
                                            href={link}
                                            target='_blank'
                                            className='transition-colors duration-300 hover:text-text'
                                        >
                                            <ArrowUpRight />
                                        </Link>
                                    )}
                                </Title>

                                {description}
                            </ComponentsCode>
                        )}
                    </Fragment>
                ))}

                <ComponentsFooter />
            </div>
        </ComponentsWrapper>
    );
};

export default DocumentationDetailClient;
