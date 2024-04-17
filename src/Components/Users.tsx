import React, { useEffect, useState } from 'react';

// Componente Posts
const Users: React.FC = () => {

  // Const para armazenar os usuarios
  const [users, setUsers] = useState<any[]>([]);

  // Efeito para carregar os usuarios da API quando monta o componente
  useEffect(() => {

    // Funcao para a API JSONPlaceholder para obter os usuários
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  // Retorno do componente
  return (
    // Div que contém o conteúdo da página de usuários
    <div className="flex flex-col items-center justify-center h-screen bg-gray-400">
      <div className="max-w-4xl w-full p-4">
        {/* Título da página */}
        <h1 className="text-3xl font-bold text-center fixex mb-4">• Users •</h1>
        {/* Tabela para mostar os usuários */}
        <table className="w-full bg-gray-100  rounded-lg overflow-hidden">
          {/* Cabeçalho da tabela */}
          <thead className='bg-blue-950' style={{ color: '#5DADE2' }}>
            <tr>
              <th className='py-3 px-5'>Name</th>
              <th className='py-3 px-5'>Email</th>
              <th className='py-3 px-5'>Address</th>
            </tr>
          </thead>
           {/* Corpo da tabela */}
          <tbody className='text-blue-900'>
             {/* Mapeamento dos usuários para renderizar */}
            {users.map((user, index) => (
              <React.Fragment key={user.id}>
                {/* Linha de separação entre os usuários */}
                <tr>
                  <td colSpan={3} className="border-b border-gray-300"></td>
                </tr>
                {/* Linha representando um usuário */}
                <tr key={index}>
                  {/* Coluna para o nome do usuário */}
                  <td className='py-3 px-5'>{user.name}</td>
                  {/* Coluna para o email do usuário */}
                  <td className='py-3 px-5  bg-gray-300 '>{user.email}</td>
                   {/* Coluna para o endereço do usuário */}
                  <td className='py-3 px-5'>{`${user.address.street}, ${user.address.city}`}</td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
