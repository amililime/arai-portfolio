import { ContactForm } from '@/components/ContactForm';

export const metadata = {
  title: 'Contact | Araí Moleri',
};

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-white px-6 md:px-12 pt-32 pb-24">
      <div className="max-w-xl mx-auto space-y-12">
        <header className="space-y-3">
          <h1 className="text-xs uppercase tracking-[0.3em] text-black">Contact</h1>
          <p className="text-sm leading-relaxed text-zinc-600">
            For commissions, collaborations or any inquiry, please use the form below.
          </p>
        </header>
        <ContactForm />
      </div>
    </section>
  );
}
