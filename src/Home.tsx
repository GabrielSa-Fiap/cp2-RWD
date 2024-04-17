import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-600">
            <h1 className="text-3xl font-bold mb-4" style={{ color: '#5DADE2' }}>Checkpoint 2 - Responsive Web Development - 2º Semestre</h1>
            <p className="text-lg text-center mb-8" style={{ color: '#5DADE2' }}>Aplicação desenvolvida utilizando React, TypeScript, TailwindCSS.</p>
            <p className="text-lg text-center mb-8" style={{ color: '#5DADE2' }}>Foi utilizada a API pública JSONPlaceholder.</p>
        </div>
    );
};

export default Home;

