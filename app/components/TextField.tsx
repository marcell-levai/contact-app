import { TextFieldProps } from "@/types";


export default function TextField({ name, title, placeholder, type, value}: TextFieldProps) {
    return (
        <div className="w-[316px] h-[60px] flex-col justify-start items-start gap-1 inline-flex">
            <div className="w-[316px] text-white text-opacity-60 text-xs font-normal font-['Lexend Deca'] leading-none tracking-tight text-left">{title}</div>
            <input 
                className="self-stretch h-10 px-3 py-2 bg-stone-900 rounded-lg border border-zinc-800 justify-start items-center gap-2 inline-flex text-white text-sm font-normal outline-none placeholder-white placeholder-opacity-30 font-['Lexend Deca']
                 hover:border-neutral-700 focus:border-neutral-700 focus:bg-zinc-800"
                placeholder={placeholder}
                type={type}
                name={name}
                defaultValue={value}
                required
            />
        </div>
    );
}