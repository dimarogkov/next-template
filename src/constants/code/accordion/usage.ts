export const ACCORDION_USAGE_CODE = `import { Accordion } from '@components/atoms';

<Accordion iconType='arrow | plus'>
  <Accordion.Item>
    <Accordion.Title>Accordion Title 1</Accordion.Title>
    <Accordion.Content>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item>...</Accordion.Item>
  <Accordion.Item>...</Accordion.Item>
</Accordion>`;

export const ACCORDION_ACTIVE_USAGE_CODE = `<Accordion defaultActiveIndex={0}>
  <Accordion.Item>...</Accordion.Item>
  <Accordion.Item>...</Accordion.Item>
  <Accordion.Item>...</Accordion.Item>
</Accordion>`;
