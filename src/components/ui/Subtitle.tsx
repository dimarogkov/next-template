type Props = {
    children: React.ReactNode;
    className?: string;
};

const Subtitle: React.FC<Props> = ({ children, className = '' }) => {
    return (
        <h3 className={`w-full text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-bold ${className}`}>
            {children}
        </h3>
    );
};

export default Subtitle;
