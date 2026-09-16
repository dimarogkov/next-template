import { Btn, Tooltip } from '@components/atoms';

export const TooltipDemo = () => {
    return (
        <div className="relative flex h-32 w-full items-center justify-center">
            <Tooltip>
                <Tooltip.Trigger>
                    <Btn variant="outline" className="pointer-events-none">
                        Hover
                    </Btn>
                </Tooltip.Trigger>
                <Tooltip.Content>
                    <p>Tooltip example text</p>
                </Tooltip.Content>
            </Tooltip>
        </div>
    );
};
