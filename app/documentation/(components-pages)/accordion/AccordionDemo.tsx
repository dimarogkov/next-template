import { Accordion } from '@components/atoms';

export default function AccordionDemo() {
    return (
        <Accordion>
            <Accordion.Item>
                <Accordion.Title>Accordion Title 1</Accordion.Title>
                <Accordion.Content>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque officia eveniet.
                </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item>
                <Accordion.Title>Accordion Title 2</Accordion.Title>
                <Accordion.Content>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque officia eveniet.
                </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item>
                <Accordion.Title>Accordion Title 3</Accordion.Title>
                <Accordion.Content>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque officia eveniet.
                </Accordion.Content>
            </Accordion.Item>
        </Accordion>
    );
}
