"use client";

import { useRef, Fragment, useState } from "react";
import { createContactAction, editContactAction } from "../_actions";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { FormProps } from "@/types";
import Button from "./Button";
import TextField from "./TextField";

export const ContactForm = ({ title, isOpen, contact, closeModal }: FormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  if(title == "Edit"){

  }

  async function action(data: FormData) {
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");

    if (name && email && phone) {
      if(title == "Add"){
        await createContactAction(name as string, email as string, phone as string);
      }else if(title == "Edit"){
        await editContactAction(contact.id as string, name as string, email as string, phone as string);
      }
      formRef.current?.reset();
      closeModal();
    }
  }

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedImage = event.target.files[0];
      setSelectedFile(selectedImage);
      const body = new FormData();
      body.append("image", selectedImage);
    }
  };

  const handleAddClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-40" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-out duration-300"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-[364px] h-[540px] pt-6 bg-neutral-900 rounded-lg flex-col justify-start items-center gap-6 inline-flex">
                <form ref={formRef} action={action}>
                  <div className="h-[404px] w-[316px] flex-col justify-start items-start gap-6 flex">
                    <div className="text-white text-2xl font-medium font-[Glysa] leading-10">
                      {title} contact
                    </div>
                    <div className="justify-start items-center gap-4 inline-flex">
                      <div className="w-[88px] h-[88px] relative">
                        <Image
                          className="w-[88px] h-[88px] left-0 top-0 absolute rounded-full border border-neutral-800"
                          src={contact?.picture || '/images/default.png'}
                          width={200}
                          height={200}
                          alt="Contact image"
                        />
                        {selectedFile && (
                          <Image
                            className="w-[88px] h-[88px] left-0 top-0 absolute rounded-full border border-neutral-800"
                            src={URL.createObjectURL(selectedFile)}
                            width={1000}
                            height={1000}
                            alt="Contact image"
                          />
                        )}
                      </div>
                      <div className="justify-start items-start gap-2 flex">
                        <input
                          type="file"
                          name="picture"
                          accept="image/*"
                          ref={fileInputRef}
                          onChange={handleImageChange}
                          hidden
                        />

                        {selectedFile || contact?.picture ? (
                          <div className="w-[212px] h-10 justify-start items-start gap-2 inline-flex">
                            <Button
                            title="Change picture"
                            containerStyles="w-[164px] h-10 pl-3 pr-4 py-2 bg-zinc-800 rounded-lg justify-start items-center gap-2 inline-flex"
                            fontStyles="text-white text-sm font-normal font-['Lexend Deca']"
                            icon = "/icons/change.svg"
                            handleClick={handleAddClick}
                            />

                            <Button
                              title=" "
                              containerStyles="w-10 h-10 p-2 bg-zinc-800 rounded-lg justify-start items-center gap-2 inline-flex"
                              fontStyles="text-white text-sm font-normal font-['Lexend Deca']"
                              icon = "/icons/delete.svg"
                              handleClick={handleAddClick}
                            />
                          </div>
                        ):(
                          <Button
                          title="Add picture"
                          containerStyles="w-[139px] h-10 pl-3 pr-4 py-2 bg-zinc-800 rounded-lg justify-start items-center gap-2 inline-flex"
                          fontStyles="text-white text-sm font-normal font-['Lexend Deca']"
                          icon = "/icons/add.svg"
                          handleClick={handleAddClick}
                          />
                        )}
                      </div>
                     
                    </div>
                    <TextField
                      title="Name"
                      name="name"
                      placeholder="Jamie Wright"
                      type="text"
                      value={contact?.name}
                    />
                    <TextField
                      title="Phone number"
                      name="phone"
                      placeholder="+01 234 5678"
                      type="tel"
                      value={contact?.phoneNumber}
                    />
                    <TextField
                      title="Email address"
                      name="email"
                      placeholder="jamie.wright@mail.com"
                      type="email"
                      value={contact?.email}
                    />
                  </div>
                  <div className="w-[316px] self-stretch pt-12 justify-end items-start gap-2 inline-flex">
                    <Button
                      title="Cancel"
                      containerStyles="px-4 py-2 rounded-lg justify-start items-center flex hover:bg-stone-900"
                      fontStyles="text-white text-sm font-normal font-['Lexend Deca']"
                      handleClick={closeModal}
                    />
                    <Button
                      title="Done"
                      containerStyles="w-[68px] px-4 py-2 bg-neutral-800 rounded-lg justify-start items-center gap-2 flex"
                      fontStyles="text-white text-sm font-normal font-['Lexend Deca']"
                      btnType="submit"
                    />
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
