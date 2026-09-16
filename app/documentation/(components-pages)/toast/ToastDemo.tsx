'use client';
import toast from 'react-hot-toast';
import { Btn, Toast } from '@components/atoms';
import { CircleAlert, CircleCheck, CircleX, Info } from 'lucide-react';

export const ToastDemo = () => {
    return (
        <div className="relative flex w-full flex-wrap gap-2.5">
            <Btn
                variant="outline"
                onClick={() =>
                    toast.custom((t) => (
                        <Toast
                            toast={t}
                            data={{
                                title: 'This is a Default notification.',
                                text: 'This toast message notifies you of something.'
                            }}
                        />
                    ))
                }
            >
                <Info className="size-5" />
                <span>Default Toast</span>
            </Btn>

            <Btn
                variant="outline"
                className="border-green"
                onClick={() =>
                    toast.custom((t) => (
                        <Toast
                            toast={t}
                            type="success"
                            data={{
                                title: 'This is a Success notification.',
                                text: 'This toast message notifies you of all your great successes.'
                            }}
                        />
                    ))
                }
            >
                <CircleCheck className="text-green size-5" />
                <span className="text-green">Success Toast</span>
            </Btn>

            <Btn
                variant="outline"
                className="border-yellow"
                onClick={() =>
                    toast.custom((t) => (
                        <Toast
                            toast={t}
                            type="warning"
                            data={{
                                title: 'This is a Warning notification.',
                                text: 'This toast message notifies you of a Warning.'
                            }}
                        />
                    ))
                }
            >
                <CircleAlert className="text-yellow size-5" />
                <span className="text-yellow">Warning Toast</span>
            </Btn>

            <Btn
                variant="outline"
                className="border-red"
                onClick={() =>
                    toast.custom((t) => (
                        <Toast
                            toast={t}
                            type="error"
                            data={{
                                title: 'This is a Error notification.',
                                text: 'This toast message notifies you of an Error. It is probably not your fault.'
                            }}
                        />
                    ))
                }
            >
                <CircleX className="text-red size-5" />
                <span className="text-red">Error Toast</span>
            </Btn>
        </div>
    );
};
