import { FiArrowLeft, } from 'react-icons/fi';
import { Container, Form } from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { MovieTag } from '../../components/MovieTag'
import { Button } from '../../components/Button'

export function Create() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <a>
            <FiArrowLeft/> 
            Back
          </a>
          <h1>New movie</h1>
          <div className="col">
            <Input
              placeholder="Title"
              type="text"
            />
            <Input
              placeholder="Your rating (from 0 to 5)"
              type="number"
            />
          </div>
          <Textarea placeholder="Observations" />
          <h2>Markers</h2>
          <div className="Markers">
            <MovieTag value="React"/>
            <MovieTag isNew placeholder="New tag" />
          </div>
          <div className="buttons">
            <Button className="Delete" title="Delete movie" />
            <Button title="New marker" />
          </div>
        </Form>
      </main>
    </Container>
  )
}