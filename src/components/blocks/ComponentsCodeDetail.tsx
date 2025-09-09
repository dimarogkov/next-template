'use client';
import { FC, useEffect, useState } from 'react';
import { getHighlightCode } from '@/src/helpers';
import { Loader } from '@/src/components/ui';
import { ClipboardCheck, Clipboard } from 'lucide-react';
import cn from 'classnames';

type Props = {
    code: string;
    type: string;
    className?: string;
};

const ComponentsCodeDetail: FC<Props> = ({ code, type, className = '' }) => {
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
        <div className={`relative w-full overflow-hidden ${className}`}>
            {highlightCode ? (
                <>
                    <button
                        type='button'
                        onClick={handleCopy}
                        className='absolute top-2 right-2 flex items-center justify-center size-8 rounded-md transition-colors duration-300 hover:bg-border'
                    >
                        {copied ? (
                            <ClipboardCheck className='size-5 text-text' />
                        ) : (
                            <Clipboard className='size-5 text-text' />
                        )}
                    </button>

                    <div className='text-base' dangerouslySetInnerHTML={{ __html: highlightCode }} />
                </>
            ) : (
                <div
                    className={cn('flex items-center justify-center w-full', {
                        'h-[52px]': type === 'installation',
                        'h-24': type === 'code',
                    })}
                >
                    <Loader />
                </div>
            )}
        </div>
    );
};

export default ComponentsCodeDetail;
