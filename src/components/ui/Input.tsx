import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...rest }: IProps) => {
    return (
        <input
            className="border-2 border-gray-300 shadow-lg rounded-md focus:border-indigo-500 focus:outline-none p-2 text-md"
            {...rest}
        />
    );
};

export default Input;
