import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './favoritos.css';
import { toast } from 'react-toastify';

function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem('@primeflix');
    setFilmes(JSON.parse(minhaLista) || []);
  }, []); // Adiciona uma lista de dependências vazia para que o efeito seja executado apenas uma vez

  function excluirFilme(id){
    let filtroFilmes = filmes.filter((item) => {
        return(item.id !== id)
    })

    setFilmes(filtroFilmes)
    localStorage.setItem('@primeflix', JSON.stringify(filtroFilmes))
    toast.success('Filme removido com sucesso')
  }

  return (
    <div className='meus-filmes'>
      <h1>Tela de Favoritos</h1>

      {filmes.length === 0 && <span>Você não tem nenhum filme salvo.</span>}  
      <ul>
        {filmes.map((item) => (
          <li key={item.id}>
            <span>{item.title}</span>
            <div>
            <Link tp={`/filme/${item.id}`}>Ver detalhes</Link>
            <button onClick={() => excluirFilme(item.id)}>Excluir da lista</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favoritos;
