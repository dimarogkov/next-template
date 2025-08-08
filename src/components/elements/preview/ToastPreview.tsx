'use client';
import toast from 'react-hot-toast';
import { Btn, Toast } from '@/src/components/ui';
import { CircleAlert, CircleCheck, CircleX, Info } from 'lucide-react';

const ToastPreview = () => {
    return (
        <div className='relative flex flex-wrap w-full gap-2.5'>
            <Btn
                variant='outline'
                onClick={() =>
                    toast.custom((t) => (
                        <Toast
                            toast={t}
                            data={{
                                title: 'This is a Default notification.',
                                text: 'This toast message notifies you of something.',
                            }}
                        />
                    ))
                }
            >
                <Info className='size-5' />
                <span>Default Toast</span>
            </Btn>

            <Btn
                variant='outline'
                onClick={() =>
                    toast.custom((t) => (
                        <Toast
                            toast={t}
                            type='success'
                            data={{
                                title: 'This is a Success notification.',
                                text: 'This toast message notifies you of all your great successes.',
                            }}
                        />
                    ))
                }
            >
                <CircleCheck className='size-5' />
                <span>Success Toast</span>
            </Btn>

            <Btn
                variant='outline'
                onClick={() =>
                    toast.custom((t) => (
                        <Toast
                            toast={t}
                            type='warning'
                            data={{
                                title: 'This is a Warning notification.',
                                text: 'This toast message notifies you of a Warning.',
                            }}
                        />
                    ))
                }
            >
                <CircleAlert className='size-5' />
                <span>Warning Toast</span>
            </Btn>

            <Btn
                variant='outline'
                onClick={() =>
                    toast.custom((t) => (
                        <Toast
                            toast={t}
                            type='error'
                            data={{
                                title: 'This is a Error notification.',
                                text: 'This toast message notifies you of an Error. It is probably not your fault.',
                            }}
                        />
                    ))
                }
            >
                <CircleX className='size-5' />
                <span>Error Toast</span>
            </Btn>
        </div>
    );
};

export default ToastPreview;
