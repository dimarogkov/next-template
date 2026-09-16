'use client';
import { Btn, Title } from '@components/atoms';

type Props = {
    error?: Error;
    reset?: () => void;
};

const Error = ({ error, reset = () => {} }: Props) => {
    return (
        <section className="relative flex h-[calc(100svh-164px)] w-full items-center pb-16 md:h-[calc(100svh-188px)] lg:h-[calc(100svh-204px)] lg:pb-20">
            <div className="page-container">
                <div className="w-full text-center">
                    <Title size="h2" className="mb-5 last:mb-0">
                        {error?.message}
                    </Title>

                    <Btn onClick={() => reset()} className="m-auto">
                        Retry
                    </Btn>
                </div>
            </div>
        </section>
    );
};

export default Error;
