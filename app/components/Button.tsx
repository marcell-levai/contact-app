import { ButtonProps } from "@/types";
import Image from "next/image";

export default function Button({ btnType, containerStyles, fontStyles, title, icon, handleClick }: ButtonProps) {
    return (
        <button 
            className={containerStyles}
            type={btnType || "button"}
            onClick={handleClick}
        >
            {icon && (
                <Image
                    priority
                    src={icon}
                    alt="Button icon"
                    width={24}
                    height={24}
                />
            )}
            <div className={fontStyles}>
              {title}
            </div>
        </button>
    );
}