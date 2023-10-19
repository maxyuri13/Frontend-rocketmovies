import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Container, Form, Background } from './styles';

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Application to keep track of everything you watch.</p>
        
        <h2>Create your account</h2>

        <Input
          placeholder="Name"
          type="text"
          icon={FiUser}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />
        <Input
          placeholder="Password"
          type="password"
          icon={FiLock}
        />
        <Button title="Register"/>
        <a to="/">
          <FiArrowLeft />
          Back to login
        </a>
      </Form>
      <Background/>
    </Container>
  );
}