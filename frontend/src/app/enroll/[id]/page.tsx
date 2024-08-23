"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EnrollmentPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [preferenceId, setPreferenceId] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Crear preferencia de pago
    const response = await fetch('/api/payment/create_preference', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'Course Enrollment',
        description: 'Enrollment for course',
        price: 100, // Ajusta el precio según el curso
        quantity: 1,
        courseId: id,
      }),
    });

    const { id: prefId } = await response.json();
    setPreferenceId(prefId);
  };

  const handlePayment = () => {
    if (preferenceId) {
      window.location.href = `https://www.mercadopago.com.ar/checkout/v1/redirect?preference_id=${preferenceId}`;
    }
  };

  return (
    <main style={{ padding: '2em' }}>
      <h1>Enroll in Course</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: 'auto' }}>
        <div style={{ marginBottom: '1em' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5em' }}>Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: '100%', padding: '0.8em', fontSize: '1em' }}
          />
        </div>
        <div style={{ marginBottom: '1em' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5em' }}>Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '0.8em', fontSize: '1em' }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: '0.8em 1.6em',
            fontSize: '1em',
            color: 'white',
            backgroundColor: '#0070f3',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Enroll
        </button>
      </form>
      {preferenceId && (
        <div style={{ marginTop: '2em' }}>
          <button
            onClick={handlePayment}
            style={{
              padding: '0.8em 1.6em',
              fontSize: '1em',
              color: 'white',
              backgroundColor: '#00a650',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Pay with MercadoPago
          </button>
        </div>
      )}
    </main>
  );
}
