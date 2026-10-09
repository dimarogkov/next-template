'use client';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Loader, Toast } from '@components/atoms';
import { getHighlightCode } from '@utils';
import { Check, Copy } from 'lucide-react';
import cn from 'classnames';

type Props = {
    code: string;
    type: string;
    className?: string;
};

export const ComponentsCodeDetail = ({ code, type, className = '' }: Props) => {
    const [highlightCode, setHighlightCode] = useState('');
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        getHighlightCode(code).then(setHighlightCode);
    }, [code]);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);

        toast.custom((t) => (
            <Toast
                toast={t}
                data={{
                    title: 'Copied to clipboard',
                    text: 'The code snippet has been copied to your clipboard.'
                }}
            />
        ));

        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={cn('relative w-full overflow-hidden', className)}>
            {highlightCode ? (
                <>
                    <button
                        type="button"
                        disabled={copied}
                        aria-label={copied ? 'Copied' : 'Copy code'}
                        onClick={handleCopy}
                        className={cn(
                            'hover:bg-border absolute top-2 right-2 flex size-7.5 cursor-pointer items-center justify-center rounded-md transition-colors duration-300',
                            { 'pointer-events-none opacity-90': copied }
                        )}
                    >
                        {copied ? <Check className="size-4.5" /> : <Copy className="size-4.5" />}
                    </button>

                    <div className="text-base" dangerouslySetInnerHTML={{ __html: highlightCode }} />
                </>
            ) : (
                <div
                    className={cn('flex w-full items-center justify-center', {
                        'h-13': type === 'installation',
                        'h-24': type === 'code'
                    })}
                >
                    <Loader />
                </div>
            )}
        </div>
    );
};
