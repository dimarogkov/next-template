import Link from 'next/link';

type Props = {
    children: React.ReactNode;
    href: string;
    className?: string;
};

const BtnLink: React.FC<Props> = ({ children, href, className = '' }) => {
    return (
        <Link
            href={href}
            className={`flex items-center justify-center w-full sm:w-fit sm:min-w-[120px] lg:min-w-[140px] h-[40px] lg:h-[44px] font-media px-[16px] rounded-[4px] text-[#fff] bg-black transition-opacity duration-300 hover:opacity-80 ${className}`}
        >
            {children}
        </Link>
    );
};

export default BtnLink;
