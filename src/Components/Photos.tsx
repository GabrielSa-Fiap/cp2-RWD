import React, { useEffect, useState } from 'react';

const Photos: React.FC = () => {
  const [photos, setPhotos] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => setPhotos(data.slice(0, 12))) 
      .catch(error => console.error('Error fetching photos:', error));
  }, []);

  return (
    <div className="text-center bg-gray-400">
      <h1 className="text-3xl font-bold mb-4">• Photos •</h1>
      <div className="grid grid-cols-3 gap-4">
        {photos.map(photo => (
          <div key={photo.id} className="relative">
            <img
              src={photo.url}
              alt={photo.title}
              className="w-full h-auto"
            />
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
