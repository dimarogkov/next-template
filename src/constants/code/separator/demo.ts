export const SEPARATOR_DEMO_CODE = `import { Separator, Text, Title } from '@components/atoms';

export const SeparatorDemo = () => {
  return (
    <div className="relative w-full">
      <Title size="h3" className="mb-2.5 last:mb-0">
        Weekend Trip
      </Title>

      <Text>
        We are heading north for a few days to unplug from work and spend some real time outdoors before the
        weather turns colder. The cabin has no signal, which is honestly half the reason we picked it, and the
        lake nearby is supposed to be good for fishing this time of year.
      </Text>

      <Separator className="my-4" />

      <Text>See you Monday.</Text>
    </div>
  );
};`;
