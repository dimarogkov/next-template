import cn from 'classnames';

type Props = {
    children: React.ReactNode;
    type?: 'button' | 'reset' | 'submit';
    className?: string;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Btn: React.FC<Props> = ({ children, type = 'button', className = '', disabled = false, onClick = () => {} }) => {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={cn(
                `flex items-center justify-center w-full sm:w-fit sm:min-w-[120px] lg:min-w-[140px] h-[40px] lg:h-[44px] font-media px-[16px] rounded-[4px] text-[#fff] bg-black transition-opacity duration-300 hover:opacity-80 ${className}`,
                {
                    'pointer-events-none bg-slate-300': disabled,
                }
            )}
        >
            {children}
        </button>
    );
};

export default Btn;
