import { getContacts } from "@/lib/contacts";
import { ContactElement } from "@/components/ContactElement"

export default async function Home() {
  const { contacts } = await getContacts();

  return (
    <section className="flex justify-center align-middle mt-[36px]">
      <div>
        {contacts?.map(contact =>(
          <ContactElement key={contact.id} contact={contact}/>
        ))}
      </div>
    </section>
  )
}
