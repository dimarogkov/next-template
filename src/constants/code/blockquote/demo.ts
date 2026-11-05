export const BLOCKQUOTE_DEMO_CODE = `import { Avatar, Blockquote, Text } from '@components/atoms';

const IMG_SRC = 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp';

export const BlockquoteDemo = () => {
  return (
    <div className="relative flex flex-col gap-7 md:gap-10">
      <Blockquote>
        <Blockquote.Content>
          <Text size="large" className="text-title">
            Great design is invisible. It just works, and you barely notice it is there until it is gone.
            The best interfaces fade into the background and let people focus on what they actually came to
            do.
          </Text>
        </Blockquote.Content>
      </Blockquote>

      <Blockquote>
        <Blockquote.Content>
          <Text size="large" className="text-title">
            The best products come from teams who care about every small detail, not just the big ones. It
            is the little things, a smooth transition, a clear error message, that build trust over time.
          </Text>
        </Blockquote.Content>
        <Blockquote.Author>
          <Text>Alex Carter</Text>
        </Blockquote.Author>
      </Blockquote>

      <Blockquote className="gap-4!">
        <Blockquote.Content>
          <Text size="large" className="text-title">
            This platform saved us weeks of development time. It just works out of the box, and our team
            shipped the new dashboard almost a month ahead of schedule. Support was fast whenever we got
            stuck, and the documentation covered almost every edge case we ran into.
          </Text>
        </Blockquote.Content>
        <Blockquote.Author className="flex items-center gap-3">
          <Avatar className="size-10">
            <Avatar.Img src={IMG_SRC} alt="Emily Jones" />
          </Avatar>

          <Text className="w-fit!">Emily Jones</Text>
        </Blockquote.Author>
      </Blockquote>
    </div>
  );
};`;
