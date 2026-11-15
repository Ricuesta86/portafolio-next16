'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle, Send } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Ingresa un email válido'),
  subject: z.string().min(3, 'El asunto debe tener al menos 3 caracteres'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

type FormSchema = z.infer<typeof contactSchema>;

const inputBase =
  'w-full border-0 border-b border-rule bg-transparent px-0 py-3 text-body text-ink placeholder:text-muted focus:border-accent focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const successRef = useRef<HTMLParagraphElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormSchema>({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (submitted) {
      successRef.current?.focus();
    }
  }, [submitted]);

  const onSubmit = useCallback(async () => {
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSubmitted(true);
    reset();
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => setSubmitted(false), 5000);
  }, [reset]);

  const submitForm = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      void handleSubmit(onSubmit)(event);
    },
    [handleSubmit, onSubmit],
  );

  if (submitted) {
    return (
      <div
        role="status"
        className="border-t border-rule py-6"
      >
        <p
          ref={successRef}
          tabIndex={-1}
          className="flex items-center gap-2 font-display text-h3 text-ink"
        >
          <CheckCircle
            className="h-5 w-5 shrink-0 text-accent-strong"
            aria-hidden="true"
          />
          Mensaje registrado.
        </p>
        <p className="mt-3 max-w-md text-small text-muted">
          Gracias por escribir. Esta demo no envía datos a un servidor; si
          necesitas contacto directo, escribe a{' '}
          <a
            href="mailto:hola@ricuesta.dev"
            className="underline decoration-rule underline-offset-4 hover:text-accent-strong"
          >
            hola@ricuesta.dev
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 inline-flex min-h-11 items-center border-b-2 border-accent text-small font-medium text-ink"
        >
          Escribir otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submitForm} className="space-y-7" noValidate>
      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1 block font-mono text-label uppercase tracking-[0.14em] text-muted"
          >
            Nombre
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Tu nombre"
            className={inputBase}
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
            {...register('name')}
          />
          {errors.name && (
            <p
              id="name-error"
              role="alert"
              className="mt-2 text-small text-red-700 dark:text-red-400"
            >
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1 block font-mono text-label uppercase tracking-[0.14em] text-muted"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="tu@email.com"
            className={inputBase}
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
            {...register('email')}
          />
          {errors.email && (
            <p
              id="email-error"
              role="alert"
              className="mt-2 text-small text-red-700 dark:text-red-400"
            >
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="mb-1 block font-mono text-label uppercase tracking-[0.14em] text-muted"
        >
          Asunto
        </label>
        <input
          id="subject"
          type="text"
          placeholder="¿En qué puedo ayudarte?"
          className={inputBase}
          aria-invalid={errors.subject ? 'true' : 'false'}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
          {...register('subject')}
        />
        {errors.subject && (
          <p
            id="subject-error"
            role="alert"
            className="mt-2 text-small text-red-700 dark:text-red-400"
          >
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1 block font-mono text-label uppercase tracking-[0.14em] text-muted"
        >
          Mensaje
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Cuéntame sobre el proyecto, el equipo y la decisión pendiente."
          className={`${inputBase} resize-y`}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
          {...register('message')}
        />
        {errors.message && (
          <p
            id="message-error"
            role="alert"
            className="mt-2 text-small text-red-700 dark:text-red-400"
          >
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-[44px] items-center justify-center gap-2 bg-accent px-5 py-3 text-sm font-medium text-accent-contrast transition-colors duration-[var(--duration-fast)] hover:bg-accent-strong disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          'Enviando…'
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" />
            Enviar mensaje
          </>
        )}
      </button>

      <p className="text-small text-muted">
        Este formulario es una demostración. No se envían datos a un servidor.
      </p>
    </form>
  );
};

export default ContactForm;
