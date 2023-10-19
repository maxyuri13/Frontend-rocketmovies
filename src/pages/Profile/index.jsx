import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Container, Form, Avatar } from "./styles";

export function Profile() {
  return (
    <Container>
      <header>
        <a>
          <FiArrowLeft/> 
          Back
        </a>
      </header>
      <Form>
        <Avatar>
          <img 
            src="https://github.com/maxyuri13.png" 
            alt="User photo"
          />
          <label htmlFor="avatar">
            <FiCamera/>

            <input 
              id="avatar"
              type="file" 
            />
          </label>
            
        </Avatar>
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
          placeholder="Current password"
          type="password"
          icon={FiLock}
        />

        <Input
          placeholder="New password"
          type="password"
          icon={FiLock}
        />
        <Button title="Save"/>
      </Form>

    </Container>
  )
}