import { useAuth } from '../../hooks/auth';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns'
import { api } from '../../services/api';
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg';
import { FiArrowLeft } from 'react-icons/fi';
import { LiaClock } from "react-icons/lia";
import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'
import { Rating } from '../../components/Rating'
import { Button } from '../../components/Button';
import { Container, Profile, Content } from './styles';


export function Preview() {
  const [data, setData] = useState(null);
  const { user } = useAuth();
  const params = useParams();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a nota?");

    if(confirm) {
      await api.delete(`/movieNotes/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchMovieNote(){
      const response = await api.get(`/movieNotes/${params.id}`);
      setData(response.data)
    }
    fetchMovieNote();
  }, []);
  
  return (
    <Container>
      <Header />
      {
        data &&
        <main>
          <Content>
            <a onClick={handleBack}>
              <FiArrowLeft/> 
              Voltar
            </a>
            <div className="titleH1">
              <h1>{data.title}</h1>
              <Rating value={data.rating}/>
            </div>
            <Profile>
              <div>
              <img
                src={avatarUrl}
                alt={`${user.name} profile`}
              />
                <span>Por {user.name}</span>
                <LiaClock />
                <span>
                  {format(new Date(data.created_ad), 'dd/MM/yyyy')} 
                  &nbsp;às&nbsp; 
                  {format(new Date(data.created_ad), 'HH:mm')} 
                </span>
              </div>
            </Profile>
            {
              data.movieTags &&
              <div class="tags">
                {
                  data.movieTags.map(tag => <Tag key={tag.id} title={tag.name} />)
                }
              </div>
            }
              <p>
                {data.description}
              </p>
              <Button 
                title="Excluir Filme"
                className="button" 
                onClick={handleRemove}
              />  
          </Content>
        </main>
      }  
    </Container>
  );
}