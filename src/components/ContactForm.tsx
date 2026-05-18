'use client';

import { useState, type FormEvent } from 'react';
import type { ContactResponse } from '@/app/api/contact/route';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const INITIAL_STATE: FormState = { name: '', email: '', message: '' };

const fieldClass =
  'w-full bg-transparent border-b border-zinc-300 px-0 py-3 text-sm tracking-wide ' +
  'text-black placeholder:text-zinc-400 focus:outline-none focus:border-black ' +
  'transition-colors disabled:opacity-50';

const labelClass = 'block text-[10px] uppercase tracking-[0.25em] text-zinc-500 mb-2';

export function ContactForm() {
  const [values, setValues] = useState<FormState>(INITIAL_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateField = (field: keyof FormState) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsSuccess(false);
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as ContactResponse;

      if (!response.ok || !data.ok) {
        throw new Error(data.error ?? 'Something went wrong');
      }

      setIsSuccess(true);
      setValues(INITIAL_STATE);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-8" noValidate>
      <div>
        <label htmlFor="name" className={labelClass}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={values.name}
          onChange={updateField('name')}
          disabled={isSubmitting}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={values.email}
          onChange={updateField('email')}
          disabled={isSubmitting}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={values.message}
          onChange={updateField('message')}
          disabled={isSubmitting}
          className={`${fieldClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="text-[10px] uppercase tracking-[0.3em] border border-black px-8 py-3 hover:bg-black hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending…' : 'Send'}
      </button>

      <div className="min-h-5" aria-live="polite">
        {isSuccess && (
          <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-700">
            Message sent. Thank you.
          </p>
        )}
        {error && (
          <p className="text-[10px] uppercase tracking-[0.25em] text-red-600">{error}</p>
        )}
      </div>
    </form>
  );
}
