import { MouseEventHandler } from "react";

export interface ButtonProps {
    btnType?: "button" | "submit";
    containerStyles?: string;
    fontStyles?: string;
    title?: string;
    icon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface FormProps {
    title: string
    isOpen: boolean;
    contact?: any
    closeModal: () => void;
}

export interface TextFieldProps {
    title: string
    name: string;
    placeholder: string;
    type: "text" | "tel" | "email"
    value?: string
}