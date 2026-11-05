'use client';
import { useShallow } from 'zustand/react/shallow';
import { useCount } from '@store/zustand';
import { Btn, Text, Title } from '@components/atoms';
import { RotateCcw } from 'lucide-react';

export const ZustandDemo = () => {
    const { count, addCount, removeCount, resetCount } = useCount(
        useShallow((state) => ({
            count: state.count,
            addCount: state.addCount,
            removeCount: state.removeCount,
            resetCount: state.resetCount
        }))
    );

    return (
        <div className="relative flex w-full flex-col gap-2.5">
            <Title size="h3">Count</Title>

            <Text size="large" className="text-title font-medium">
                {count}
            </Text>

            <div className="flex w-full flex-col gap-2.5 sm:flex-row">
                <Btn variant="secondary" onClick={() => removeCount(5)}>
                    - 5
                </Btn>

                <Btn variant="secondary" onClick={() => addCount(5)}>
                    + 5
                </Btn>

                <Btn variant="outline" disabled={count === 0} onClick={() => resetCount()}>
                    <RotateCcw className="size-5" />
                    <span>Reset</span>
                </Btn>
            </div>
        </div>
    );
};
