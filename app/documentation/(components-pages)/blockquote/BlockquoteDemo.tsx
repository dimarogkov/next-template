import { Avatar, Blockquote, Text } from '@components/atoms';

const IMG_SRC = 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp';

export default function BlockquoteDemo() {
    return (
        <div className='relative flex flex-col gap-7 md:gap-10'>
            <Blockquote>
                <Blockquote.Content>
                    <Text size='large' className='text-title'>
                        If anyone thinks he is something when he is nothing, he deceives himself. Each one should test
                        his own actions. Then he can take pride in himself, without comparing himself to anyone else.
                    </Text>
                </Blockquote.Content>
            </Blockquote>

            <Blockquote>
                <Blockquote.Content>
                    <Text size='large' className='text-title'>
                        If anyone thinks he is something when he is nothing, he deceives himself. Each one should test
                        his own actions. Then he can take pride in himself, without comparing himself to anyone else.
                    </Text>
                </Blockquote.Content>
                <Blockquote.Author>
                    <Text>— Steve Jobs</Text>
                </Blockquote.Author>
            </Blockquote>

            <Blockquote className='!gap-4'>
                <Blockquote.Content>
                    <Text size='large' className='text-title'>
                        If anyone thinks he is something when he is nothing, he deceives himself. Each one should test
                        his own actions. Then he can take pride in himself, without comparing himself to anyone else.
                    </Text>
                </Blockquote.Content>
                <Blockquote.Author className='flex items-center gap-3'>
                    <Avatar className='size-10'>
                        <Avatar.Img src={IMG_SRC} />
                    </Avatar>
                    <Text className='!w-fit'>Emily Jones</Text>
                </Blockquote.Author>
            </Blockquote>
        </div>
    );
}
