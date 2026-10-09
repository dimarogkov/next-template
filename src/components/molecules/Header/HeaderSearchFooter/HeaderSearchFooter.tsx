import { Kbd, Text } from '@components/atoms';
import { ArrowDown, ArrowUp, CornerDownLeft } from 'lucide-react';

export const HeaderSearchFooter = () => {
    return (
        <div
            aria-hidden="true"
            className="border-border hidden h-12 w-full shrink-0 items-center justify-between border-t px-2 sm:flex"
        >
            <div className="flex items-center gap-1.5">
                <Text size="small" className="w-fit!">
                    Navigate
                </Text>

                <Kbd>
                    <ArrowDown className="size-3.5" />
                </Kbd>

                <Kbd>
                    <ArrowUp className="size-3.5" />
                </Kbd>

                <Text size="small" className="w-fit!">
                    or
                </Text>

                <Kbd className="px-1.5">Tab</Kbd>
            </div>

            <div className="flex items-center gap-1.5">
                <Text size="small" className="w-fit!">
                    Select
                </Text>

                <Kbd>
                    <CornerDownLeft className="size-3.5" />
                </Kbd>
            </div>
        </div>
    );
};
