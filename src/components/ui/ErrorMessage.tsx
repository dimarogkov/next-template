type Props = {
    children: React.ReactNode;
    className?: string;
};

const ErrorMessage: React.FC<Props> = ({ children, className = '' }) => {
    return <p className={`w-full font-medium text-[14px] text-rose-600 ${className}`}>{children}</p>;
};

export default ErrorMessage;
