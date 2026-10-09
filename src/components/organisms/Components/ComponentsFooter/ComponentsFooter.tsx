'use client';
import Link from 'next/link';
import { useMain, usePrevNextComponentPath } from '@hooks';
import { Text } from '@components/atoms';
import { Footer } from '../../Footer/Footer';
import { AlignJustify, ChevronLeft, ChevronRight } from 'lucide-react';
import cn from 'classnames';

export const ComponentsFooter = () => {
    const { isSidebarOpen, setIsSidebarOpen } = useMain();
    const links = usePrevNextComponentPath();

    return (
        <>
            <div className="border-border bg-bg fixed bottom-0 left-0 z-10 flex w-full justify-between border-t px-5 py-4 sm:p-5 md:relative md:border-none">
                <button
                    type="button"
                    aria-expanded={isSidebarOpen}
                    onClick={() => setIsSidebarOpen(true)}
                    className="bg-border hover:text-title flex h-8 w-fit items-center justify-center gap-1.5 rounded-md px-3 transition-colors duration-300 md:hidden"
                >
                    <Text className="w-fit!">Menu</Text>
                    <AlignJustify className="size-5" />
                </button>

                <div className="flex w-fit gap-2 md:w-full md:justify-between md:gap-2.5">
                    {links.map(({ href, name }, index) => (
                        <Link
                            key={href}
                            href={href}
                            aria-label={`${index === 0 ? 'Previous' : 'Next'}: ${name}`}
                            className={cn(
                                'bg-grey hover:bg-border group flex size-8 items-center justify-center rounded-md transition-all duration-300 will-change-transform active:scale-[0.98] md:h-auto md:w-60 md:gap-3 md:p-3',
                                index === 1 ? 'md:justify-end md:text-right' : 'md:justify-start'
                            )}
                        >
                            {index === 0 && (
                                <ChevronLeft className="size-5 transition-transform duration-200 will-change-transform group-hover:-translate-x-0.5 md:size-6" />
                            )}

                            <div className="hidden flex-col md:flex">
                                <Text size="large" className="text-title line-clamp-1 font-medium">
                                    {name}
                                </Text>

                                <Text>{index === 0 ? 'Previous' : 'Next'} page</Text>
                            </div>

                            {index === 1 && (
                                <ChevronRight className="size-5 transition-transform duration-200 will-change-transform group-hover:translate-x-0.5 md:size-6" />
                            )}
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
};
