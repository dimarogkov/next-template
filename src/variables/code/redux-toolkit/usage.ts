export const REDUX_TOOLKIT_PROVIDER_USAGE_CODE = `import { Provider } from 'react-redux';
import { store } from '../../store/redux-toolkit';

<Provider store={store}>
	<App />
</Provider>`;

export const REDUX_TOOLKIT_USAGE_CODE = `import { useAppDispatch, useAppSelector } from '../../../store/redux-toolkit';
import { addCount, removeCount, resetCount } from '../../../store/redux-toolkit/countSlice';
import { Btn, Text, Title } from '../../ui';

export const ReduxToolkitPreview = () => {
    const count = useAppSelector((state) => state.count.count);
    const dispatch = useAppDispatch();

    return (
        <div className='relative w-full'>
            <Title>Count</Title>
            <Text>{count}</Text>

            <div className='flex flex-col sm:flex-row w-full gap-2.5'>
                <Btn onClick={() => dispatch(removeCount(5))}>- 5</Btn>
                <Btn onClick={() => dispatch(addCount(5))}>+ 5</Btn>
                <Btn onClick={() => dispatch(resetCount())}>Reset</Btn>
            </div>
        </div>
    );
};`;
