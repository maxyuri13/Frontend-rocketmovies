import { FiArrowLeft, } from 'react-icons/fi';
import { Link } from "react-router-dom";
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
          <Link to="/"> 
            <FiArrowLeft/> 
            Voltar
          </Link>
          <h1>New movie</h1>
          <div className="col">
            <Input
              placeholder="Título"
              type="text"
            />
            <Input
              placeholder="Sua nota (de 0 a 5)"
              type="number"
            />
          </div>
          <Textarea placeholder="Observações" />
          <h2>Marcadores</h2>
          <div className="Markers">
            <MovieTag value="React"/>
            <MovieTag isNew placeholder="Novo marcador" />
          </div>
          <div className="buttons">
            <Button className="Delete" title="Excluir filme" />
            <Button title="Salvar alterações" />
          </div>
        </Form>
      </main>
    </Container>
  )
}