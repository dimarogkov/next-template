import TooltipWrapper from './TooltipWrapper';
import TooltipTrigger from './TooltipTrigger';
import TooltipContent from './TooltipContent';

export const Tooltip = Object.assign(TooltipWrapper, {
    Trigger: TooltipTrigger,
    Content: TooltipContent,
});
