import AccordionContent from './AccordionContent';
import AccordionItem from './AccordionItem';
import AccordionTitle from './AccordionTitle';
import AccordionWrapper from './AccordionWrapper';

const Accordion = Object.assign(AccordionWrapper, {
    Item: AccordionItem,
    Title: AccordionTitle,
    Content: AccordionContent,
});

export default Accordion;
