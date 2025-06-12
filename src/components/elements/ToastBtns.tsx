'use client';
import toast from 'react-hot-toast';
import { EnumToast } from '@/src/types/enums';
import { Btn, Toast } from '../ui';
import { CircleAlert, CircleCheck, CircleX, Info } from 'lucide-react';

const ToastBtns = () => {
    return (
        <>
            <Btn
                onClick={() =>
                    toast.custom((t) => (
                        <Toast
                            toast={t}
                            data={{
                                title: 'This is a Info notification.',
                                text: 'This toast message notifies you of something.',
                            }}
                        />
                    ))
                }
            >
                <Info className='size-5' />
                <span>Toast Info</span>
            </Btn>

            <Btn
                onClick={() =>
                    toast.custom((t) => (
                        <Toast
                            toast={t}
                            type={EnumToast.success}
                            data={{
                                title: 'This is a Success notification.',
                                text: 'This toast message notifies you of all your great successes.',
                            }}
                        />
                    ))
                }
            >
                <CircleCheck className='size-5' />
                <span>Toast Success</span>
            </Btn>

            <Btn
                onClick={() =>
                    toast.custom((t) => (
                        <Toast
                            toast={t}
                            type={EnumToast.warning}
                            data={{
                                title: 'This is a Warning notification.',
                                text: 'This toast message notifies you of a Warning.',
                            }}
                        />
                    ))
                }
            >
                <CircleAlert className='size-5' />
                <span>Toast Warning</span>
            </Btn>

            <Btn
                onClick={() =>
                    toast.custom((t) => (
                        <Toast
                            toast={t}
                            type={EnumToast.error}
                            data={{
                                title: 'This is a Error notification.',
                                text: 'This toast message notifies you of an Error. It is probably not your fault.',
                            }}
                        />
                    ))
                }
            >
                <CircleX className='size-5' />
                <span>Toast Error</span>
            </Btn>
        </>
    );
};

export default ToastBtns;
