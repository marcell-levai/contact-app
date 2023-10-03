'use server'

import { createContact, removeContact, updateContact } from "@/lib/contacts"
import { revalidatePath } from "next/cache";

export async function createContactAction(name: string, email: string, phone:string) {
    await createContact(name, email, phone);
    revalidatePath('/');
}

export async function editContactAction(id: string, name: string, email: string, phone:string) {
    await updateContact(id, name, email, phone);
    revalidatePath('/');
}

export async function removeContactAction(id: string) {
    await removeContact(id);
    revalidatePath('/');
}