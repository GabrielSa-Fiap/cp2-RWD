import React, { useState, useEffect } from 'react';
 
interface Post {
    id: number;
    title: string;
    body: string;
}
 
const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
          if (!response.ok) {
            throw new Error('Erro ao buscar posts');
          }
        const data = await response.json();
          setPosts(data);
          } catch (error) {
            console.error('Erro ao buscar posts:', error);
            }
        };
 
        fetchPosts();
    }, []);
 
    return (
      <div className='bg-gray-400'> 
        <h1 className='postscenter'> • Lista de Posts • </h1><br/>
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <strong><h2 className='titulosposts'>•{post.title}</h2></strong>
              <p>{post.body}</p>
              <br/>
              </li>
))}
            </ul>
        </div>
    );
};
 
export default Posts;
 