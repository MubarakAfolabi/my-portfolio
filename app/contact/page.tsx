import ChatWrap from "@/component/contact/ChatWrap";
import ContactForm from "@/component/contact/ContactForm";

export default function ContactPage() {
  return (
    <main className="flex flex-col gap-14 px-6 mt-30">
      <ChatWrap />
      <ContactForm />
    </main>
  );
}
