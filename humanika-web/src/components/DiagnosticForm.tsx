'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const schema = z.object({
  nombre: z.string().min(2, 'Ingresa tu nombre completo'),
  puesto: z.string().min(2, 'Ingresa tu puesto o rol'),
  empresa: z.string().min(2, 'Ingresa el nombre de tu empresa'),
  colaboradores: z.string().min(1, 'Selecciona el tamaño de tu equipo'),
  email: z.string().email('Ingresa un correo electrónico válido'),
  telefono: z.string().min(8, 'Ingresa un número de teléfono válido'),
  desafio: z.string().max(250, 'Máximo 250 caracteres').optional(),
  _honeypot: z.string().max(0).optional(),
});

type FormData = z.infer<typeof schema>;

export default function DiagnosticForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const desafioValue = watch('desafio') ?? '';

  const onSubmit = async (data: FormData) => {
    if (data._honeypot) return;
    setIsSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/diagnostico', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      router.push('/gracias');
    } catch {
      setError('Ocurrió un error al enviar tu solicitud. Por favor inténtalo de nuevo o contáctanos por WhatsApp.');
      setIsSubmitting(false);
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 text-sm border rounded-md bg-white text-[#191616] placeholder-[#5A6478] focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
      hasError ? 'border-red-400 focus:ring-red-400' : 'border-gray-200 focus:ring-[#1173E4]'
    }`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
      {/* Honeypot */}
      <input type="text" {...register('_honeypot')} className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#191616] mb-1.5">
            Nombre completo <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Ej. María García López"
            {...register('nombre')}
            className={inputClass(!!errors.nombre)}
          />
          {errors.nombre && <p className="mt-1 text-xs text-red-500">{errors.nombre.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-[#191616] mb-1.5">
            Puesto / Rol <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Ej. Gerente de Recursos Humanos"
            {...register('puesto')}
            className={inputClass(!!errors.puesto)}
          />
          {errors.puesto && <p className="mt-1 text-xs text-red-500">{errors.puesto.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#191616] mb-1.5">
            Empresa <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Nombre de tu empresa"
            {...register('empresa')}
            className={inputClass(!!errors.empresa)}
          />
          {errors.empresa && <p className="mt-1 text-xs text-red-500">{errors.empresa.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-[#191616] mb-1.5">
            Número de colaboradores <span className="text-red-500">*</span>
          </label>
          <select
            {...register('colaboradores')}
            className={`${inputClass(!!errors.colaboradores)} cursor-pointer`}
            defaultValue=""
          >
            <option value="" disabled>Selecciona una opción</option>
            <option value="menos-50">Menos de 50</option>
            <option value="50-200">50 – 200</option>
            <option value="200-500">200 – 500</option>
            <option value="mas-500">Más de 500</option>
          </select>
          {errors.colaboradores && <p className="mt-1 text-xs text-red-500">{errors.colaboradores.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#191616] mb-1.5">
            Correo electrónico <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="tu@empresa.com"
            {...register('email')}
            className={inputClass(!!errors.email)}
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-[#191616] mb-1.5">
            Teléfono / WhatsApp <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            placeholder="+52 81 0000 0000"
            {...register('telefono')}
            className={inputClass(!!errors.telefono)}
          />
          {errors.telefono && <p className="mt-1 text-xs text-red-500">{errors.telefono.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#191616] mb-1.5">
          Principal desafío{' '}
          <span className="text-[#5A6478] font-normal">(opcional)</span>
        </label>
        <textarea
          rows={3}
          placeholder="Describe brevemente la situación o reto que enfrentas en tu organización…"
          {...register('desafio')}
          maxLength={250}
          className={`${inputClass(!!errors.desafio)} resize-none`}
        />
        <div className="flex justify-between mt-1">
          {errors.desafio ? (
            <p className="text-xs text-red-500">{errors.desafio.message}</p>
          ) : <span />}
          <span className="text-xs text-[#5A6478]">{desafioValue.length}/250</span>
        </div>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-md text-sm text-red-700">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-[#00C2A0] text-white font-semibold text-sm rounded-md hover:bg-[#00a88a] transition-colors disabled:opacity-70 disabled:cursor-not-allowed mt-2"
      >
        {isSubmitting ? 'Enviando solicitud…' : 'Solicitar diagnóstico gratuito →'}
      </button>

      <p className="text-xs text-[#5A6478] text-center leading-relaxed">
        Tus datos están protegidos. No recibirás spam. Un especialista te contactará en menos de 24 horas hábiles.{' '}
        <Link href="/privacidad" className="underline hover:text-primary">
          Aviso de Privacidad
        </Link>
      </p>
    </form>
  );
}
