import React, { useState, useEffect } from 'react';

// Interface para montar a estrutura de um post
interface Post {
    id: number;
    title: string;
    body: string;
}

// Componente Posts
const Posts: React.FC = () => {
  // Const para armazenar os posts
  const [posts, setPosts] = useState<Post[]>([]);

  // Efeito para carregar os posts da API quando monta o componente
  useEffect(() => {
    // Função para buscar os posts
    const fetchPosts = async () => {
      try {
        // Buscando a API JSONPlaceholder para obter os posts
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        // Verifica se a resposta da busca é feita
        if (!response.ok) {
          throw new Error('Erro ao buscar posts');
        }
        // Converte a resposta para JSON
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        // Cuida dos erros de requisição
        console.error('Erro ao buscar posts:', error);
      }
    };
    // Chama a função para buscar os posts 
    fetchPosts();
  }, []);
    
  // Retorno do componente
  return (
    <div className='bg-gray-400'> 
      {/* Título da página */}
      <h1 className='postscenter'> • Lista de Posts • </h1><br/>
      {/* Lista de posts */}
      <ul>
        {/* Mapeamento dos posts para renderizar */}
        {posts.map((post, index) => (
          // Cada post é envolvido por uma div com bordas em cima e em baixo
          <div key={index} className="border-t border-b border-gray-600">
            <li>
              {/* Título do post */}
              <strong><h2 className='titulosposts'>•{post.title}</h2></strong>
              {/* Corpo do post */}
              <p>{post.body}</p>
              <br/>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};
 
export default Posts;
