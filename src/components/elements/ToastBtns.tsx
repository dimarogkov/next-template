'use client';
import toast from 'react-hot-toast';
import { EnumToast } from '@/src/types/enums';
import { Btn, Toast } from '../ui';

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
                Toast Info
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
                Toast Success
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
                Toast Warning
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
                Toast Error
            </Btn>
        </>
    );
};

export default ToastBtns;
