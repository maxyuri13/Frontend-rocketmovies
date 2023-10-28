import { FiPlus } from 'react-icons/fi';
import { Container, Content, AddMovie } from './styles';
import { Header } from '../../components/Header';
import { Movie } from '../../components/Movie';

export function Home() {
  return (
    <Container>
      <Header />
      <main>
      <Content>
      <div className="header">
          <h1>Meus filmes</h1>
          <AddMovie to="/create">
            <FiPlus/>
              Adicionar filme
          </AddMovie>
        </div>
        <div className="scrollable">
          <Movie data={{title: 'Interstellar', rating: 4, description: 'Crop plagues have caused human civilization to regress into an agrarian society in an unknown future date. Cooper, a former NASA pilot, has a farm with his family. Murphy, Cooper ten-year-old daughter, believes that her room is haunted by a ghost who is trying to', tags: [
              {id: '1', name: 'Science fiction'},
              {id: '2', name: 'Drama'},
              {id: '3', name: 'Family'}
            ]
            }}
          />
          <Movie data={{title: 'Interstellar', rating: 5, description: 'Crop plagues have caused human civilization to regress into an agrarian society in an unknown future date. Cooper, a former NASA pilot, has a farm with his family. Murphy, Cooper ten-year-old daughter, believes that her room is haunted by a ghost who is trying to', tags: [
              {id: '1', name: 'Science fiction'},
              {id: '2', name: 'Drama'},
              {id: '3', name: 'Family'}
            ]
            }}
          />
          <Movie data={{title: 'Interstellar', rating: 1, description: 'Crop plagues have caused human civilization to regress into an agrarian society in an unknown future date. Cooper, a former NASA pilot, has a farm with his family. Murphy, Cooper ten-year-old daughter, believes that her room is haunted by a ghost who is trying to', tags: [
              {id: '1', name: 'Science fiction'},
              {id: '2', name: 'Drama'},
              {id: '3', name: 'Family'}
            ]
            }}
          />
        </div>
      </Content>
      </main>
    </Container>
  )
}