import { StoreRedux } from './StoreRedux';
import { StoreZustand } from './StoreZustand';

const Store = () => {
    return (
        <div className='w-full'>
            <StoreRedux className='mb-10 last:mb-0' />
            <StoreZustand />
        </div>
    );
};

export default Store;
