import { Accordion } from '@components/atoms';

export const AccordionDemo = () => {
    return (
        <Accordion>
            <Accordion.Item>
                <Accordion.Title>How long does shipping take?</Accordion.Title>
                <Accordion.Content>
                    Most orders arrive within three to five business days. You will get a tracking link by email as soon
                    as your package leaves the warehouse.
                </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item>
                <Accordion.Title>Can I return an item?</Accordion.Title>
                <Accordion.Content>
                    Yes, unused items can be returned within thirty days of delivery for a full refund. Just keep the
                    original packaging and tags attached.
                </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item>
                <Accordion.Title>Do you ship internationally?</Accordion.Title>
                <Accordion.Content>
                    We currently ship to most countries in Europe and North America. Shipping costs and delivery times
                    vary depending on your location.
                </Accordion.Content>
            </Accordion.Item>
        </Accordion>
    );
};
