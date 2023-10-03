'use client'

import { Contact } from "@prisma/client";
import Image from "next/image";
import Button from "./Button";
import { useState } from "react";
import { SelectBox } from "./SelectBox";

type ContactItemProps = {
    contact: Contact
}

export const ContactElement = ({contact} : ContactItemProps) =>{
    const [active, setActive] = useState(false);

    return(
        <div className="w-[720px] h-16 grid grid-cols-2 justify-center"
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
        >
            <div className="items-center gap-4 inline-flex py-3" >
                <Image
                className="w-10 h-10 rounded-full items-center border border-zinc-800"
                src={contact.picture}
                width={200}
                height={200}
                alt="Contact image"
                />
                <div className="flex-col justify-start items-start inline-flex">
                    <div className="text-white text-base font-normal font-['Lexend Deca'] leading-normal tracking-tight">{contact.name}</div>
                    <div className="text-white text-opacity-60 text-xs font-normal font-['Lexend Deca'] leading-none tracking-tight">{contact.phoneNumber}</div>
                </div>
            </div>
            
            {active && (
                <div className="gap-2 inline-flex ml-auto">
                    <div className="w-10 p-2 rounded-lg items-center flex">
                        <Button
                            title=""
                            containerStyles="h-10 w-10 rounded-lg items-center inline-flex gap-2"
                            fontStyles="text-white text-sm font-normal font-['Lexend Deca']"
                            icon = "/icons/mute.svg"
                        />
                    </div>
                    <div className="w-10 p-2 rounded-lg items-center gap-2 flex">
                        <Button
                            title=""
                            containerStyles="rounded-lg gap-2 justify-start items-center gap-2 inline-flex"
                            fontStyles="text-white text-sm font-normal font-['Lexend Deca']"
                            icon = "/icons/call.svg"
                        />
                    </div>    
                    <div className="w-10 p-2 rounded-lg items-center gap-2 flex">
                        <SelectBox
                            contact = {contact} 
                        />
                    </div>       
                </div>
            )}             
        </div>
    );
}