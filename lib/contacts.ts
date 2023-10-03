import prisma from './prisma'

export async function getContacts() {
    try {
        const contacts = await prisma.contact.findMany();
        return { contacts };
    } catch (error) {
        return { error };
    }
}

export async function createContact( name: string, email: string, phoneNumber:string) {
    try {
        const picture = "/images/default.png";
        const contact = await prisma.contact.create({data: {name, email, phoneNumber, picture}})
        return { contact }
    } catch (error) {
        return { error }
    }
}

export async function updateContact( id: string, name: string, email: string, phoneNumber:string) {
    try {
        const updateUser = await prisma.contact.update({
            where: {
                id: id,
            },
            data: {
                name: name,
                email: email,
                phoneNumber: phoneNumber
            },
        })
        return updateUser;
    } catch (error) {
        return { error }
    }
}

export async function removeContact( id: string) {
    try {
        const deleteUser = await prisma.contact.delete({
            where: {
              id: id,
            },
        })
        return deleteUser;
    } catch (error) {
        return { error }
    }
}