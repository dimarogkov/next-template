import { Metadata } from 'next';
import { EnumTitle } from '@/src/types/enums/Title';

import { BackLink, Breadcrumbs, ThemeController } from '@/src/components/elements';
import { Badge, Line, Text, Title } from '@/src/components/ui';

export const metadata: Metadata = {
    title: 'Theme Page',
};

const ThemePage = () => {
    return (
        <section className='relative w-full mb-10 last:mb-0'>
            <div className='w-full'>
                <BackLink className='mb-6 last:mb-0' />

                <Breadcrumbs className='mb-6 last:mb-0' />

                <Badge className='mb-5 last:mb-0'>
                    <Badge.Item>Next Themes</Badge.Item>
                </Badge>

                <Title>React Theme</Title>
            </div>

            <Line />

            <div className='w-full'>
                <ThemeController className='mb-5 last:mb-0' />

                <div className='w-full rounded p-4 border-2 border-black dark:border-gray bg-white dark:bg-black'>
                    <Title titleType={EnumTitle.h3} className='text-black dark:text-gray'>
                        Some Subtitle
                    </Title>

                    <Text className='text-black dark:text-gray'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In nihil cupiditate magnam mollitia,
                        consectetur assumenda non? Delectus, fugiat tempore reiciendis, quam quibusdam labore rerum
                        distinctio cum vel quo nihil possimus!
                    </Text>
                </div>
            </div>
        </section>
    );
};

export default ThemePage;
