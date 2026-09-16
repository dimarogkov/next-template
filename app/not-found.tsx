import { Metadata } from 'next';
import { PATHS } from '@constants';
import { Btn, Text, Title } from '@components/atoms';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
    title: '404'
};

const NotFoundPage = () => {
    return (
        <section className="relative flex h-[calc(100svh-120px)] w-full items-center pb-16 md:h-[calc(100svh-144px)] lg:h-[calc(100svh-160px)] lg:pb-20">
            <div className="page-container">
                <div className="w-full text-center">
                    <Title size="h2" className="mb-1 last:mb-0">
                        Ooops! Page Not Found
                    </Title>

                    <Text className="mb-5 last:mb-0">
                        This page doesn’t exist or was removed! We suggest you go back to home.
                    </Text>

                    <Btn isLink className="m-auto">
                        <Btn.Link href={PATHS.HOME}>
                            <span>Go Home</span>
                            <ArrowUpRight className="size-5" />
                        </Btn.Link>
                    </Btn>
                </div>
            </div>
        </section>
    );
};

export default NotFoundPage;
