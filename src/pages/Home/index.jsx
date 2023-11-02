import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { FiPlus } from 'react-icons/fi';
import { Container, Content, AddMovie } from './styles';
import { Header } from '../../components/Header';
import { Movie } from '../../components/Movie';

export function Home() {
  const [movieNotes, setMovieNotes] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  function handlePreview(id) {
    navigate(`/Preview/${id}`);
  }


  useEffect(() => {
    async function fetchMovieNotes() {
      const response = await api.get(`/movieNotes?title=${search}`);
      setMovieNotes(response.data);
    }
    fetchMovieNotes();
  }, [search]);
  
  return (
    <Container>
      <Header 
        value={search}
        setSearch={setSearch}
      />
      <main>
      <Content>
      <div className="header">
        {
          search ? (
            <h1>Resultados da pesquisa</h1>
          ) : (
                <>
                  <h1>Meus filmes</h1>
                  <AddMovie to="/create">
                    <FiPlus/>
                    Adicionar filme
                  </AddMovie>
                </>
              )
        }
        </div>
        <div className="scrollable">
          {
            movieNotes.map((note) => (
              <Movie 
                key={String(note.id)}
                data={note}
                onClick={() => handlePreview(note.id)}
              />
            ))  
          }
        </div>
      </Content>
      </main>
    </Container>
  )
}