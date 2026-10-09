'use client';
import { Fragment } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSectionsRefs } from '@hooks';
import { IDocumentationCodeArr, IDocumentationData } from '@interfaces/Documentation';
import {
    ComponentsCode,
    ComponentsCodeWithAccordion,
    ComponentsFooter,
    ComponentsHead,
    ComponentsLinks,
    ComponentsNavigation,
    ComponentsPreview,
    ComponentsWrapper
} from '@components/organisms/Components';
import { StatusBadge, Text, Title } from '@components/atoms';
import { getLinks } from '@utils';
import { ArrowUpRight } from 'lucide-react';
import cn from 'classnames';

type Props = {
    data: IDocumentationData;
};

export const DocumentationDetailClient = ({ data }: Props) => {
    const pathname = usePathname();
    const { sectionsRef, registerRef } = useSectionsRefs();
    const { title, description, links, preview, codeSections } = data;
    const { links: pagesLinks } = getLinks();

    const sectionsArr = codeSections.map(({ id, title }) => ({ id, text: title }));
    const codeLink = codeSections.find(({ id }) => id === 'code')?.link;
    const status = pagesLinks.find(({ href }) => href === pathname)?.status;

    return (
        <ComponentsWrapper
            navigation={
                <ComponentsNavigation sectionsRef={sectionsRef} sectionsArr={sectionsArr} codeLink={codeLink} />
            }
        >
            <div className="md:border-border w-full md:border-r md:border-l">
                <div className="py-4 sm:py-5 md:p-5">
                    <ComponentsHead>
                        <div className="mb-1 flex items-center gap-3 last:mb-0 md:mb-2">
                            <Title size="h2">{title}</Title>
                            {status && <StatusBadge variant={status} />}
                        </div>

                        <Text size="large">{description}</Text>
                    </ComponentsHead>

                    <ComponentsLinks links={links} />
                </div>

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
                                    size="h4"
                                    className={cn({
                                        'flex items-center gap-2': link,
                                        'mb-1 last:mb-0 md:mb-2': description
                                    })}
                                >
                                    {link ? <span>{title}</span> : title}

                                    {link && (
                                        <Link
                                            href={link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-border text-text hover:text-title flex size-7.5 items-center justify-center rounded-md transition-colors duration-300"
                                        >
                                            <ArrowUpRight className="size-5" />
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
                                    size="h4"
                                    className={cn({
                                        'flex items-center gap-2': link,
                                        'mb-1 last:mb-0 md:mb-2': description
                                    })}
                                >
                                    {link ? <span>{title}</span> : title}

                                    {link && (
                                        <Link
                                            href={link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-border text-text hover:text-title flex size-7.5 items-center justify-center rounded-md transition-colors duration-300"
                                        >
                                            <ArrowUpRight className="size-5" />
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
