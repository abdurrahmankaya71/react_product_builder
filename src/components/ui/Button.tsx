import { ReactNode, ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    width?: "w-full" | "w-fit";
}

const Button = ({ children, className, width = "w-full", ...rest }: IProps) => {
    return (
        <button
            className={`${className} ${width} flex-1 rounded-md text-white p-1 `}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
