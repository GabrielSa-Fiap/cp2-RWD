import React, { useEffect, useState } from 'react';

// Declaração do componente Photos como uma função componente do React
const Photos: React.FC = () => {

   // Const para armazenar as fotos
  const [photos, setPhotos] = useState<any[]>([]);

  // Efeito para carregar as fotos da API quando monta o componente
  useEffect(() => {
    // Buscando a API JSONPlaceholder para obter as fotos
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())// Converte a "response" para JSON
      .then(data => setPhotos(data.slice(0, 12))) //  limita a 12 fotos por conta do layout
      .catch(error => console.error('Error fetching photos:', error)); // Cuida dos erros de requisição
  }, []);

  return (
    // Div que tem o conteúdo da página de fotos
    <div className="text-center bg-gray-400">
      {/* Título da página */}
      <h1 className="text-3xl font-bold mb-4">• Photos •</h1>
      {/* Grid para mostrar as fotos */}
      <div className="grid grid-cols-3 gap-4">
        {/* Mapeamento das fotos para renderizar */}
        {photos.map(photo => (
          <div key={photo.id} className="relative">
            <img
              src={photo.url}
              alt={photo.title}
              className="w-full h-auto"
            />
            {/* Título da foto em cima da imagem */}
            <p className="absolute top-0  text-white font-bold bg-black bg-opacity-50 p-2 text-center">
              {photo.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
