import TooltipWrapper from './TooltipWrapper';
import TooltipTrigger from './TooltipTrigger';
import TooltipContent from './TooltipContent';

const Tooltip = Object.assign(TooltipWrapper, {
    Trigger: TooltipTrigger,
    Content: TooltipContent,
});

export default Tooltip;
