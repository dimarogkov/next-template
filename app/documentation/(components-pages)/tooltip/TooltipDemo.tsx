import { Btn, Tooltip } from '@components/atoms';

export default function TooltipDemo() {
    return (
        <div className='relative flex items-center justify-center w-full h-32'>
            <Tooltip>
                <Tooltip.Trigger>
                    <Btn variant='outline' className='pointer-events-none'>
                        Hover
                    </Btn>
                </Tooltip.Trigger>
                <Tooltip.Content>
                    <p>Tooltip example text</p>
                </Tooltip.Content>
            </Tooltip>
        </div>
    );
}
