import React from 'react';
import '../app/styles/propuestas.css';

export interface PropuestasCardProps {
  imageUrl: string;
  title: string;
  description: string;
  listItems: string[];
  buttonText: string;
  buttonLink: string;
  isReversed: boolean;
}

const PropuestasCard: React.FC<PropuestasCardProps> = ({
  imageUrl,
  title,
  description,
  listItems,
  buttonText,
  buttonLink,
  isReversed,
}) => {
  return (

    <div
    className={`flex flex-col md:flex-row propuestas-card" ${
      isReversed ? 'md:flex-row-reverse' : ''
    } items-center mb-8`}
  >
    {/* Imagen */}
    <div className="propuestas-card-image">
      <img src={imageUrl} alt={title} />
    </div>

    {/* Contenido */}
    <div className="propuestas-card-content">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <p className="mb-4">{description}</p>
      <ul className="list-disc ml-6 mb-4">
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <a
        href={buttonLink}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {buttonText}
      </a>
    </div>
  </div>
  );
};

export default PropuestasCard;
