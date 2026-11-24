import ChatWrap from "@/component/contact/ChatWrap";
import ContactForm from "@/component/contact/ContactForm";

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-300 flex flex-col lg:flex-row lg:items-center gap-14 px-6 mt-30">
      <ChatWrap />
      <ContactForm />
    </main>
  );
}
