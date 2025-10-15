import AccordionWrapper from './AccordionWrapper';
import AccordionItem from './AccordionItem';
import AccordionTitle from './AccordionTitle';
import AccordionContent from './AccordionContent';

export const Accordion = Object.assign(AccordionWrapper, {
    Item: AccordionItem,
    Title: AccordionTitle,
    Content: AccordionContent,
});
