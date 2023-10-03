'use client'

import React, { useState } from "react";
import Button from "./Button";
import { removeContactAction } from "../_actions";
import { Contact } from "@prisma/client";
import { ContactForm } from "./ContactForm";

type ContactItemProps = {
    contact: Contact
}

export const SelectBox = ({contact} : ContactItemProps) => {
    const [open, setOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
 
    async function handleRemoveClick() {
        await removeContactAction(contact.id);
    };

    return (
        <div className="relative z-10">
            <div onClick={() => setOpen((prev) => !prev)} className="cursor-pointer h-6">
                <Button
                    title=""
                    containerStyles="rounded-lg justify-start inline-flex"
                    fontStyles="text-white text-sm font-normal font-['Lexend Deca']"
                    icon = "/icons/more.svg"
                />
            </div>
            <div
            className={`w-[219px] h-[132px] bg-neutral-800 rounded-lg flex-col justify-start items-start inline-flex ${
                open ? "h-auto" : "opacity-0 h-0"
            } duration-200 absolute top-10 right-0`}
            >
                 <Button
                    title="Edit"
                    containerStyles="w-[219px] h-11 px-2.5 rounded-t-lg py-3 bg-neutral-800 justify-start items-center gap-3 inline-flex"
                    fontStyles="text-white text-sm font-normal font-['Lexend Deca'] leading-tight tracking-tight"
                    icon = "/icons/settings.svg"
                    handleClick={() => setIsEditOpen(true)}
                />
                <Button
                    title="Favourite"
                    containerStyles="w-[219px] h-11 px-2.5 py-3 bg-neutral-800 justify-start items-center gap-3 inline-flex"
                    fontStyles="text-white text-sm font-normal font-['Lexend Deca'] leading-tight tracking-tight"
                    icon = "/icons/favourite.svg"
                />
                <Button
                    title="Remove"
                    containerStyles="w-[219px] h-11 rounded-b-lg px-2.5 py-3 bg-neutral-800 justify-start items-center gap-3 inline-flex"
                    fontStyles="text-white text-sm font-normal font-['Lexend Deca'] leading-tight tracking-tight"
                    icon = "/icons/delete.svg"
                    handleClick={handleRemoveClick}
                />
            </div>
            <ContactForm
                title="Edit"
                isOpen={isEditOpen}
                closeModal={() => setIsEditOpen(false)}
                contact={contact}
            />
        </div>
    );
 };