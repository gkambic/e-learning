import React from 'react';
import PropuestasSection from '@/components/PropuestasSection';
import '../styles/propuestas.css';


const ProfesionalesPage: React.FC = () => {
    const cardsData = [
        {
            imageUrl: 'https://nutricioninfantojuvenil.com.ar/wp-content/uploads/2024/04/Imagen-de-WhatsApp-2024-04-02-a-las-12.08.48_2aa315e7.jpg',
            title: 'Consultorías individuales sobre atención en consultorio de nutrición pediátrica',
            description: 'En estos encuentros trabajamos sobre:',
            listItems: [
            'La confianza en nosotros mismos/as para iniciar a trabajar con infancias y familias.',
            'Como ponerle valor a lo que hacemos.',
            'Que significa la empatía cuando trabajamos con familias.',
            'Lo importante de la escucha activa.',
            'Las etapas de la infancia y posibles estrategias acordes.',
            'Como intervenir ante ciertas dificultades alimentarias.',
            'Trabajo inter y transdiciplinario en pediatría.',
            'Analizamos Casos clínicos.',
            'Y varias cosas más.',
            ],
            buttonText: 'Contactar',
            buttonLink: 'https://wa.me/5491155805506',
            isReversed: false, // Imagen a la izquierda
        },
        ];
  return (
    <main>
      <PropuestasSection cardsData={cardsData}/>
    </main>
  );
};

export default ProfesionalesPage;
