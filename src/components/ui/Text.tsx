type Props = {
    children: React.ReactNode;
    className?: string;
};

const Text: React.FC<Props> = ({ children, className = '' }) => {
    return <p className={`w-full ${className}`}>{children}</p>;
};

export default Text;
