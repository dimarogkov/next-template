export const REDUX_TOOLKIT_DEMO_CODE = `'use client';
import { useAppDispatch, useAppSelector } from '@store/redux-toolkit';
import { addCount, removeCount, resetCount } from '@store/redux-toolkit/countSlice';
import { Btn, Text, Title } from '@components/atoms';
import { RotateCcw } from 'lucide-react';

export const ReduxToolkitDemo = () => {
  const count = useAppSelector((state) => state.count.count);
  const dispatch = useAppDispatch();

  return (
    <div className="relative flex w-full flex-col gap-2.5">
      <Title size="h3">Count</Title>

      <Text size="large" className="text-title font-medium">
        {count}
      </Text>

      <div className="flex w-full flex-col gap-2.5 sm:flex-row">
        <Btn variant="secondary" onClick={() => dispatch(removeCount(5))}>
          - 5
        </Btn>

        <Btn variant="secondary" onClick={() => dispatch(addCount(5))}>
          + 5
        </Btn>

        <Btn variant="outline" disabled={count === 0} onClick={() => dispatch(resetCount())}>
          <RotateCcw className="size-5" />
          <span>Reset</span>
        </Btn>
      </div>
    </div>
  );
};`;
