import { useState } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, } from 'react-icons/fi';
import { Container, Form } from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { MovieTag } from '../../components/MovieTag';
import { Button } from '../../components/Button';


export function Create() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  
  const [movieTags, setMovieTags] = useState([]);
  const [newMovieTag, setNewMovieTag] = useState("");

  const navigate = useNavigate();
  
  function handleBack() {
    navigate(-1);
  }

  function handleAddMovieTag() {
    if (newMovieTag && !movieTags.includes(newMovieTag)) {
      setMovieTags(prevState => [...prevState, newMovieTag]);
      setNewMovieTag("");
    }
  }

  function handleRemoveMovieTag(deleted) {
    setMovieTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  function HandleRemoveMarkers() {
    setMovieTags([]);
    setNewMovieTag("");
  }

  async function handleNewMovieNote() {
    if (!title) {
      return alert("Digite o título da nota.");
    }
    if (!rating) {
      return alert("Digite a nota do filme.")
    }
    if (newMovieTag) {
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.")
    }
    if (movieTags.length === 0) {
      return alert("Adicione pelo menos uma tag antes de salvar o filme.")
    }
    await api.post("/movieNotes", {
      title,
      rating,
      description,
      movieTags
    });

    alert("Nota criada com sucesso!");
    navigate(-1);
  }
  
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <button type="button" onClick={handleBack}> 
            <FiArrowLeft/> 
            Voltar
          </button>
          <h1>Novo filme</h1>
          <div className="col">
            <Input
              placeholder="Título"
              type="text"
              onChange={e => setTitle(e.target.value)}
            />
            <Input
              placeholder="Sua nota (de 0 a 5)"
              type="number"
              onChange={e => setRating(e.target.value)}
            />
          </div>
          <Textarea 
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)} 
          />
          <h2>Marcadores</h2>
          <div className="Markers">
            {
              movieTags.map((tag, index) =>(
                <MovieTag 
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveMovieTag(tag)}
                />
              ))
            }
            <MovieTag 
              isNew 
              placeholder="Novo marcador"
              onChange={e => setNewMovieTag(e.target.value)}
              value={newMovieTag}
              onClick={handleAddMovieTag}
            />
          </div>
          <div className="buttons">
            <Button 
              className="Delete" 
              title="Limpar marcadores" 
              onClick={HandleRemoveMarkers}
            />
            <Button 
              title="Adicionar filme" 
              onClick={handleNewMovieNote}
            />
          </div>
        </Form>
      </main>
    </Container>
  )
}