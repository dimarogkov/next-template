'use client';
import { useEffect, useState } from 'react';
import { getHighlightCode } from '@utils';
import { Loader } from '@components/atoms';
import { ClipboardCheck, Clipboard } from 'lucide-react';
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
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={cn('relative w-full overflow-hidden', className)}>
            {highlightCode ? (
                <>
                    <button
                        type="button"
                        onClick={handleCopy}
                        className="hover:bg-border absolute top-2 right-2 flex size-8 items-center justify-center rounded-md transition-colors duration-300"
                    >
                        {copied ? (
                            <ClipboardCheck className="text-text size-5" />
                        ) : (
                            <Clipboard className="text-text size-5" />
                        )}
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
